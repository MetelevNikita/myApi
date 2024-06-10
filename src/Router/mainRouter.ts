import { Router } from "express";

// components

import { getMain } from "../Controller/mainController";

//

const mainRouter = Router();

//


mainRouter.get("/main", getMain)


//

export default  mainRouter;