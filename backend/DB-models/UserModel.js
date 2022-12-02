import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: false, unique: true, default: "admin" },
        points: { type: Number, required: false, default: 0 },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("user", userSchema);

export default User;