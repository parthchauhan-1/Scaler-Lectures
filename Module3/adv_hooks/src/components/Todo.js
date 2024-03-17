import { useReducer } from "react";
import uuid from "react-uuid";
import { TiTick, TiTrash } from "react-icons/ti";

const initialState = {
  list: [],
  title: "",
  by: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "handleTextInput":
      return { ...state, title: action.payload };
    case "handleDateChange":
      return { ...state, by: action.payload };
    case "addTask":
      return {
        ...state,
        list: [...state.list, action.payload],
        title: "",
        by: "",
      };
    case "handleMarkDone":
      return {
        ...state,
        list: state.list.map((listItem) =>
          listItem.id === action.payload
            ? { ...listItem, isDone: !listItem.isDone }
            : listItem
        ),
      };

    case "handleRemove":
      const isConfirm = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (isConfirm)
        return {
          ...state,
          list: state.list.filter((item) => item.id !== action.payload),
        };
      break;
    default:
      throw new Error("Unknown Action");
  }
}

const Todo = () => {
  const [{ list, title, by }, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || by === "") {
      window.alert("Please fill all details");
      return;
    }
    const newTask = { title: title, by: by, id: uuid(), isDone: false };
    dispatch({ type: "addTask", payload: newTask });
  }
  function handleTextInput(e) {
    dispatch({ type: "handleTextInput", payload: e.target.value });
  }

  function handleDateChange(e) {
    dispatch({ type: "handleDateChange", payload: e.target.value });
  }
  function handleMarkDone(id) {
    dispatch({ type: "handleMarkDone", payload: id });
  }

  function handleRemove(id) {
    dispatch({ type: "handleRemove", payload: id });
  }

  return (
    <>
      <div>
        <h1>My TodoList</h1>
        <form onSubmit={handleSubmit}>
          I want to do{" "}
          <input type="text" value={title} onChange={handleTextInput} /> by{" "}
          <input type="date" value={by} onChange={handleDateChange} />
          <button className="wishBtn">Add a Task</button>
        </form>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.isDone ? "line-through" : "" }}
              >
                <strong>{item.title}</strong> is due by {item.by}
              </span>
              <span>
                <TiTick size={24} onClick={() => handleMarkDone(item.id)} />
              </span>
              <span>
                <TiTrash size={24} onClick={() => handleRemove(item.id)} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
