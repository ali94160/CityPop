import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// Funtionen hämtar ut en stad med dess id, name och population.
export const getCity = async (req: Request, res: Response) => {
  !req.params.cityParam && res.status(404);
  const cityURL = process.env.CITY_URL + req.params.cityParam;

  try {
    const { data } = await axios.get(cityURL);
    if (data.totalResultsCount === 0) {
      return res.status(401).send("Nothing was found");
    }
    const city = {
      id: data.geonames[0].geonameId,
      city: data.geonames[0].toponymName,
      population: data.geonames[0].population,
    };
    res.status(200).send(city);
  } catch (error) {
    res.status(400);
  }
};
