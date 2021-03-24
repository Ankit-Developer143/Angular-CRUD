const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const courseRouter = require("./routes/courseRoutes");
const cors = require("cors");



// Connect to Database
connectToDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (_, res) => res.send("Express server started"));

app.use("/api", courseRouter);

// Start server
app.listen(3000, () =>
  console.log(`Server running on http://localhost:${3000}`)
);
