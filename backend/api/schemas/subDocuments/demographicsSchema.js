import mongoose from 'mongoose';

export const demographicsSchema = new mongoose.Schema({
    demographics: {
        type: [String],
        required: true,
    },
})