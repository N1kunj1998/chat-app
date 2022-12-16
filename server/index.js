const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes");

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());



mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Succesfull");
}).catch((err) => {
    console.log(err.message);
});

app.use("/api/auth", userRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`server started on port : ${process.env.PORT}`);
});