import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface CacheStore {
  byRegion:  RegionCountries,
  byCountry: TermCountries;
  byCapital: TermCountries;
}

export interface TermCountries {
  term:      string;
  countries: Country[];
}

export interface RegionCountries {
  region?:   Region;
  countries: Country[]
}