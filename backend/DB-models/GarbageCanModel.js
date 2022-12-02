import mongoose from "mongoose";
const garbageCanSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        location: { type: String, required: true, unique: false },

    },
    {
        timestamps: true,
    }
);
const GarbageCan = mongoose.model("garbagecan", garbageCanSchema);

export default GarbageCan;