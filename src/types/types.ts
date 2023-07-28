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
