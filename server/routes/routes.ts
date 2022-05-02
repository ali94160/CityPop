import express from "express";
import { getCountry } from "../controllers/countryController";
import { getCity } from "../controllers/cityController";

const router = express.Router();

router.get("/api/country/:countryParam", getCountry);
router.get("/api/city/:cityParam", getCity);

export default router;
