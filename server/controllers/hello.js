// a route handler
const greeting = (req, res) => {
  res.json({
    someText: ["test", "hello", "world!"],
  });
};

module.exports = {
  greeting: greeting,
};
