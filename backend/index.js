import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";
import cardsRoute from "./routes/cardsRoute.js";
import cors from "cors";

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to my server");
})
app.use("/cards", cardsRoute);


mongoose.connect(process.env.MongoDB_URL)
    .then(() => {
        console.log("Server connected to database");
        app.listen(PORT, () => {
            console.log(`Server is listening to port: ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    })

