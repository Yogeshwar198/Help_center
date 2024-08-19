import express from 'express';
import { Card } from "../models/cardsModel.js";


const router = express.Router();

// Create a new card
router.post("/", async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.description) {
            return res.status(400).send({
                message: 'Send all the required fields:title, description'
            })
        }
        const newCart = {
            title: req.body.title,
            description: req.body.description,
        };

        const card = await Card.create(newCart);

        return res.status(201).send(card);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// List of all cards
router.get("/", async (req, res) => {
    try {
        const cards = await Card.find({});

        return res.status(200).json(cards);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Details of a specific card
router.get("/:title", async (req, res) => {
    try {
        const { title } = req.params;
        const card = await Card.findOne({ title });
        return res.status(200).json(card);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


export default router;