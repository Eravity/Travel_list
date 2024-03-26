import { ItemProps } from "../items";

interface Item {
  item: ItemProps;
}

const Item: React.FC<Item> = ({ item }): JSX.Element => {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {} }>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
