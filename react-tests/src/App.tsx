import * as React from "react";

export interface Item {
  id: number;
  text: string;
}

export const App = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [text, setText] = React.useState<string>("");

  const handleChange = (e: any) => setText(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem: Item = {
      id: Math.floor(Math.random() * 10_000_000),
      text,
    };

    setText("");
    setItems(items.concat(newItem));
  };

  return (
    <div>
      <h1>TODOS</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input id="new-todo" value={text} onChange={handleChange} required />
        <button>Add todo</button>
      </form>
    </div>
  );
};
