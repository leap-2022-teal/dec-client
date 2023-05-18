export interface ColourOption {
  readonly value: number;
  readonly label: number;
}
export const colourOptions: ColourOption[] = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
];

export interface StateOption {
  readonly value: string;
  readonly label: string;
}

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Sizes",
    options: colourOptions,
  },
];
