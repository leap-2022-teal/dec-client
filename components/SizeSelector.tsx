interface PropType {
  sizes: Stock[];
  defaultValue: number;
  onChange: (e: any) => void;
  id: string;
  quantity: number;
}

interface Stock {
  size: number;
  stock: number;
}

export function SizeSelector({ sizes, defaultValue, onChange, id, quantity }: PropType) {
  return (
    <>
      <select name="Size" id="size" defaultValue={defaultValue} onChange={(e) => onChange({ size: Number(e.target.value), productId: id, quantity: quantity })}>
        {sizes.map((size) => (
          <option key={size.size} value={size.size}>
            {size.size}
          </option>
        ))}
      </select>
    </>
  );
}
