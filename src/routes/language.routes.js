import { Router } from "express";
import { methods as languageControllers } from "./../controllers/language.controllers";

const router = Router();

router.get("/", languageControllers.getLanguages);

export default router;
