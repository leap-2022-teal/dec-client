interface PropType {
  onChange: (e: any) => void;
  value: string;
}
export function AddressSelector({ onChange, value }: PropType) {
  return (
    <div className="md:w-full w-[95%] mt-4 ">
      <select name="address" id="address" className="w-full border rounded-lg border-black py-4 px-2" onChange={(e) => onChange(e.target.value)}>
        <option value="УБ-Баянзүрх">УБ-Баянзүрх</option>
        <option value="УБ-Налайх">УБ-Налайх</option>
        <option value="УБ-Сонгинохайрхан">УБ-Сонгинохайрхан</option>
        <option value="УБ-Сүхбаатар">УБ-Сүхбаатар</option>
        <option value="УБ-Хан-Уул">УБ-Хан-Уул</option> <option value="УБ-Чингэлтэй">УБ-Чингэлтэй</option>
        <option value="УБ-Багануур">УБ-Багануур</option>
        <option value="УБ-Багахангай">УБ-Багахангай</option>
        <option value="УБ-Баянгол">УБ-Баянгол</option> <option value="Дархан">Дархан</option>
        <option value="Эрдэнэт">Эрдэнэт</option>
      </select>
    </div>
  );
}
