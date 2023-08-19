This is a Node.js API that allows you to search for flights using the Flight Radar API. The API provides three different endpoints to search for flights based on various parameters. The API uses the Axios library to make HTTP requests to the Flight Radar API.

Endpoints

Search Flights
Endpoint: GET /search

Search for flights based on a query and a limit.

Parameters:
query (string): The search query.
limit (number): The maximum number of results to retrieve.

GET http://localhost:7000/api/flights?query=FD3210&limit=25
Returns
Details of the plane.

Search Flights by Airline
Endpoint: GET /airline

Search for flights by airline using a query and a limit.

Parameters:
query (string): The airline query.
limit (number): The maximum number of results to retrieve.

http://localhost:7000/api/flightsbyairline?query=AXM&limit=25
eturns
Details of the plane.
{"results":[{"id":"AXM","label":"Armenia El Eden International Airport (AXM / SKAR)","detail":{"lat":4.453333,"lon":-75.7658,"size":20080},"type":"airport","match":"iata"},

Search Flights by Details
Endpoint: GET /details

Search for flights by details using a query and a limit.

Parameters:
query (string): The details query.
limit (number): The maximum number of results to retrieve.

Example Request:
http://localhost:7000/api/flightsdetails?query=2b5ae17f&limit=25

Usage
Install the required dependencies using npm:
npm install



Error Handling
If the required parameters (query or limit) are missing in the request, the API will respond with a 400 status code and an error message indicating the missing parameters.
If an error occurs while making a request to the Flight Radar API, the API will respond with a 500 status code and an error message indicating that an error occurred.

Note
Please make sure to keep your RapidAPI key (RAPID_API_KEY) secure and do not expose it publicly.