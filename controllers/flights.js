const axios = require("axios");

const RAPID_API_HOST = "flight-radar1.p.rapidapi.com";
const API_URL = "https://flight-radar1.p.rapidapi.com/flights/search";

const flightSearch = async (req, res) => {
    const { query, limit } = req.query;

    if (!query || !limit) {
        return res.status(400).json({
          error: 'Missing parameters: query, limit',
        });
      }

      const options = {
        method: 'GET',
        url: API_URL,
        params: {
          query,
          limit,
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
};

const flightByAirline = async (req, res) => {
    const { query, limit } = req.query;
    if (!query || !limit) {
        return res.status(400).json({
          error: 'Missing parameters: query, limit',
        });
      }
      const options = {
        method: 'GET',
        url: API_URL,
        params: {
          query,
          limit,
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST,
        },
      };
      try {
        const response = await axios.request(options);
        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
}

const flightByDetails = async (req, res) => {
    const { query, limit } = req.query;
    if (!query || !limit) {
        return res.status(400).json({
          error: 'Missing parameters: query, limit',
        });
      }
      const options = {
        method: 'GET',
        url: API_URL,
        params: {
          query,
          limit,
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': RAPID_API_HOST,
        },
      };
      try {
        const response = await axios.request(options);
        res.json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
}

module.exports = {
  flightSearch,
  flightByAirline,
  flightByDetails,
};
