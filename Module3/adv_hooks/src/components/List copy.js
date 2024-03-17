import { useState } from "react";

function List() {
  const [input, setInput] = useState("");
  const ARRAY_SIZE = 15;
  const [list, setList] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value);
    let newList = [];
    for (let i = 0; i < ARRAY_SIZE.length; i++) {
      newList.push(e.target.value);
    }
    setList((list) => [...list, newList]);
  }
  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
