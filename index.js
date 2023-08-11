const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route")

const app = express();

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter)



app.get("/", (req, res) => {
    res.send("Server is running");
  });
app.use((req, res, next) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
