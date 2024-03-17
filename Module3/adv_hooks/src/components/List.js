import { useState, useTransition } from "react";

export default function List() {
  let [input, setInput] = useState("");
  let [list, setList] = useState([]);

  const LIST_SIZE = 1500;

  let [isPending, startTransition] = useTransition();

  let handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      let newList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {list.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
