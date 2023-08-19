const express = require("express");
const router = express.Router();

const {flightSearch, flightByAirline, flightByDetails} = require("../controllers/flights");

router.get('/flights', flightSearch)
router.get('/flightsbyairline', flightByAirline);
router.get('/flightsdetails', flightByDetails);

module.exports = router;