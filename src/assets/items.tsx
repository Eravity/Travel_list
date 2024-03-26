export interface ItemProps {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const initialItems: ItemProps [] = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default initialItems;
