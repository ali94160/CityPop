export interface CityState {
  city: City | {};
  errorMessage: string;
  loading: boolean;
}

export interface City {
  id: number;
  city: string;
  population: number;
}
