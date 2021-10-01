// a route handler
const greeting = (req, res) => {
  res.json({
    someText: ["poomon", "hello", "world"],
  });
};

module.exports = {
  greeting: greeting,
};
