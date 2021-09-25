import express from "express";

import bandController  from "../controller/BandController";




export const bandRouter = express.Router()


bandRouter.post("/addBand", bandController.registerBnad)
bandRouter.get("/getBand/:id",bandController.getBandById)
