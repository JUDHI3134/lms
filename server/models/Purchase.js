import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({

    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coorse',
        required: true
    },
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    ststus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    }
}, { timestamps: true })

export const Purchase = mongoose.model("Purchase", purchaseSchema)