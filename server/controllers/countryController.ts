import { Request, Response } from "express";
import axios from "axios";
import iso from "iso-3166-1";
import dotenv from "dotenv";
dotenv.config();

type City = {
  geonameId: number;
  toponymName: string;
  population: number;
};

export const getCountry = async (req: Request, res: Response) => {
  if (!req.params.countryParam)
    return res.status(400).send({ status: "Missing parameter in the url" });

  try {
    const countryParam = req.params.countryParam.toUpperCase();
    const { alpha2 } = iso.whereCountry(countryParam);
    const countryURL = process.env.COUNTRY_URL + alpha2;
    const { data } = await axios.get(countryURL);

    if (!data && data.geonames.lenght === 0) return res.status(400);
    const cities = data.geonames.map((city: City) => {
      return {
        id: city.geonameId,
        city: city.toponymName,
        population: city.population,
      };
    });

    const resultObj = {
      country: countryParam,
      cities: cities,
    };

    return res.status(200).send(resultObj);
  } catch (error) {
    return res.status(400).send({ status: "Unexpected error" });
  }
};
