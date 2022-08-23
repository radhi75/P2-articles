const express = require("express");
const connectDB = require("./config/connectDB");
const articleRoutes = require("./routes/article");
const app = express();
const port = 5000;
app.use(express.json());
connectDB();
app.use("/api/test", articleRoutes);
app.listen(port, console.log(`app is runnig on port ${5000}`));
