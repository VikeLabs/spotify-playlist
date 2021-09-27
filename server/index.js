const express = require("express");
app = express();

require("dotenv").config();

app.use("/api/", require("./routes/hello"));

// listen to port provided by our host if not avaliable listen to localhost 3001
const PORT = process.env.PORT || 3001;

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
