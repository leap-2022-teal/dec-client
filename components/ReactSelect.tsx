import React from "react";

export interface NumberOptions {
  readonly value: number;
  readonly label: number;
}

export const NumberOptions: NumberOptions[] = [
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
interface PropType {
  defaultValue: number;
  onChange: (e: any) => void;
  id: string;
  // quantity: number;
}
export function NumberSelector({ defaultValue, onChange, id }: PropType) {
  return (
    <>
      <select name="Quantity" id="Quantity" defaultValue={defaultValue} className="" onChange={(e) => onChange({ productId: id, quantity: Number(e.target.value) })}>
        {NumberOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
