const express = require("express");
app = express();

require("dotenv").config();

app.use("/api/", require("./routes/hello"));

// if PORT does not avaliable use port 3001 (react will take port 3000)
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("listen to port 3001");
});
