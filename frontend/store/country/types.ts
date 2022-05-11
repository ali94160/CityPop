import { City } from "../city/types";

export interface CountryState {
  country: Country | null;
  loading: boolean;
}

export interface Country {
  country: string;
  cities: City[];
}
