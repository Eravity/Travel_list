import React from "react";
import Item from "./item";
import { ItemProps } from "../items";

interface ListProps {
  items: ItemProps[];
}

const List: React.FC<ListProps> = ({ items }): JSX.Element => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
