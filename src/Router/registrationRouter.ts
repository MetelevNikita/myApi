import { Router } from "express";

// middleware

import { cookieJWTauth } from "../middleware/cookieJWTauth";

// module

import { getRegistrationUser, postRegistrationUser } from "../Controller/registrationController";


const registrationRouter = Router();



registrationRouter.post("/registration", postRegistrationUser)

registrationRouter.get("/registration", cookieJWTauth, getRegistrationUser)


export default registrationRouter;