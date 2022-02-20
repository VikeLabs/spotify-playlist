// a route handler
const greeting = (req, res) => {
  res.json({
    someText: ["lsjdvk", "hello", "world!"],
  });
};

module.exports = {
  greeting: greeting,
};
