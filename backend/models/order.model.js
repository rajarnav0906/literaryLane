import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "books"
    },
    status: {
        type: String,
        enum: ['order placed', 'out for delivery', 'delivered', 'canceled'],
        default: 'order placed'
    },
}, {timestamps: true})

export default mongoose.model("order", orderSchema);