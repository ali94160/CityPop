import { City } from "../city/types";

export interface CountryState {
  country: Country | {};
  loading: boolean;
}

export interface Country {
  country: string;
  cities: City[];
}
