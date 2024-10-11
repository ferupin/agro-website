const NodeCache = require('node-cache');
const rateLimit = require('express-rate-limit');

const cache = new NodeCache({ stdTTL: 86400 }); // Cache for 24 hours

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

module.exports = async (req, res) => {
  // Apply rate limiting
  await new Promise((resolve) => apiLimiter(req, res, resolve));

  const { placeId } = req.query;
  const cacheKey = `reviews_${placeId}`;

  // Check cache first
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  // If not in cache, fetch from Google API
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    // Process and cache the data
    const processedData = processReviews(data);
    cache.set(cacheKey, processedData);

    res.status(200).json(processedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

function processReviews(data) {
  if (data.result && data.result.reviews) {
    return data.result.reviews
      .filter(review => review.rating === 5)
      .sort((a, b) => b.text.length - a.text.length)
      .slice(0, 5);
  }
  return [];
}