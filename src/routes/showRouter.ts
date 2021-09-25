import express from "express";
import showController from "../controller/ShowController";


export const showRouter = express.Router();

showRouter.post("/create", showController.createShow);
showRouter.get("/:weekDay", showController.getShowByWeekDay);