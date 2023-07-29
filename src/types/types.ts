export type FilterOptionProps = {
  name: string;
  code: string;
  clean?: boolean;
  image?: string;
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};

export type FilterOptionState = {
  [key: string]: boolean;
};
export type FilterProps = {
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};
export type CardCountryProps = {
  code: string;
  name: string;
  continent: { name: string };
};

export type InputProps = {
  onFilters: (params: string, clean: boolean, cleanAll: boolean) => void;
};

export type SideLinkProps = {
  to: string;
  name: string;
};

export enum ContinentName {
  asia = "AS",
  america = "NA SA",
  africa = "AF",
  europe = "EU",
  oceania = "OC",
  antarctica = "AN",
}

export type Country = {
  code: string;
  name: string;
  continent: { name: string; code?: string };
};

export type AccumulatorType = {
  [key: number]: Country[];
};

export type DataCountriesResponse = {
  countries: Country[];
};

export type GraphQLResponseCountries = {
  called?: boolean;
  data: DataCountriesResponse;
};
