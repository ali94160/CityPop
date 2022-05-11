export interface CityState {
  city: City | null;
  loading: boolean;
}

export interface City {
  id: number;
  city: string;
  population: number;
}
