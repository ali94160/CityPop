import express from "express";
import { getCountry } from "../controllers/countryController";
import { getCity } from "../controllers/cityController";

const router = express.Router();

router.get("/rest/country/:countryParam", getCountry);
router.get("/rest/city/:cityParam", getCity);

export default router;
