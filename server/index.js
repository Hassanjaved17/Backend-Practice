import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello from the backend!",
    timestamp: new Date(),
  };
  res.json(data);
}
);