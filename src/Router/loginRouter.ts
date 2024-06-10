import { Router } from "express";

// components

import { postLogin } from "../Controller/loginController";

//

const loginRouter = Router();

loginRouter.post("/login", postLogin)



//

export default loginRouter;