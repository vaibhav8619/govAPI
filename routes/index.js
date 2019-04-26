// Import Controllers
const govCtrl = require("../controllers/govController");

// Define Routes
const routes = [
  {
    method: "GET",
    url: "/api/pin",
    handler: govCtrl.getPin
  }
];

module.exports = routes;
