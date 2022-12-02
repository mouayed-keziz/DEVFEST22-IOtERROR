import { Router } from "express";
import expressAsyncHandler from "express-async-handler";


import User from "../DB-models/UserModel";


const UserRouter = Router();

UserRouter.post("/register", expressAsyncHandler(async (req, res) => {
    const username = req.body.username;
    const user = new User({ username: username });
    user.save().then(() => {
        res.send("User saved to db")
    }).catch((err) => {
        res.send(err);
    }
    );
}));

UserRouter.post("/login", expressAsyncHandler(async (req, res) => {
    const username = req.body.username
    const user = await User.findOne({ username: username });
    if (user) {
        res.send("User found");
    } else {
        res.send("User not found");
    }
})
);

export default UserRouter;