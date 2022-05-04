import { City } from "../city/types";

export interface CountryState {
  country: Country | {};
  errorMessage: string;
  loading: boolean;
}

export interface Country {
  country: string;
  cities: City[];
}
