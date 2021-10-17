const { request } = require("express");
var querystring = require("querystring"); // querystring module

// a route handler
const greeting = (req, res) => {
  res.json({
    someText: ["poomon", "hello", "world"],
  });
};

module.exports = {
  greeting: greeting,
};
