import { mongoose } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const cardsSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, { timestamps: true, })

export const Card = mongoose.model("cards", cardsSchema); 
