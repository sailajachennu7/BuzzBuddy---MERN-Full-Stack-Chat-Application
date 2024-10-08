const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./Data/data");  
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errormiddleware");


const app = express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept json Data

app.get("/", (req, res) => {
    res.send("API IS running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);  
app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`server started on PORT ${PORT}`.yellow.bold));