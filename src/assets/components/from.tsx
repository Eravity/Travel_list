import React, { useState } from "react";
import { ItemProps } from "../items";

interface FormProps {
  onAddItems: (item: ItemProps) => void;
}

const Form: React.FC<FormProps> = ({ onAddItems }) => {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newItem: ItemProps = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    if (!description) return;
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Add item"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
