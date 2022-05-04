export interface CityState {
  city: City | {};
  loading: boolean;
}

export interface City {
  id: number;
  city: string;
  population: number;
}
