import { useState } from "react";

import Logo from "./assets/components/logo";
import Form from "./assets/components/from";
import List from "./assets/components/packingList";
import Stats from "./assets/components/stats";
import { ItemProps } from "./assets/items";

const App: React.FC = (): JSX.Element => {
  const [items, setItems] = useState<ItemProps[]>([]);

  const handleAddItems = (item: ItemProps): void => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List items={items} />
      <Stats />
    </div>
  );
};

export default App;
