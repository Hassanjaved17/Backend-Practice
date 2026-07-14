import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello from the backend!",
    timestamp: new Date(),
  };
  res.json(data);
}
);