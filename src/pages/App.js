import { useState } from "react";
import CardTodo from "../components/CardTodo";
import FormTodo from "../components/FormTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [updateData, setUpdateData] = useState("");

  const handleCreate = () => {
    if (newTodo) {
      let num = todos.length + 1;
      let newTask = { id: num, title: newTodo, status: false };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    let newTask = todos.filter((todo) => todo.id !== id);
    setTodos(newTask);
  };

  const handleComplete = (id) => {
    let newTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setTodos(newTask);
  };

  const handleChange = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };

    setUpdateData(newEntry);
  };

  const handleUpdate = () => {
    let filterRecord = [...todos].filter((todo) => todo.id !== updateData.id);
    let updateResult = [...filterRecord, updateData];
    setTodos(updateResult);
    setUpdateData("");
  };

  return (
    <div className="w-full min-h-screen py-20 flex flex-col items-center gap-10 relative">
      <h1 className="text-2xl font-semibold">React Test Todo List</h1>

      {/* Create and Update Todos */}
      {updateData && updateData ? (
        <div className="w-10/12 md:max-w-[480px] bg-white rounded-lg flex gap-2 items-center">
          <input
            value={updateData && updateData.title}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Change Title . . ."
            className="focus:outline-none w-full px-3 py-2 border rounded-md focus:border-blue-600 transition-all ease-in"
          />
          <div className="w-fit flex items-center justify-center gap-2 ">
            <button
              onClick={() => setUpdateData("")}
              className="px-4 py-2 bg-red-600 rounded-md text-white font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-green-600 rounded-md text-white font-semibold"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <FormTodo
          title={newTodo}
          setTitle={setNewTodo}
          onCreate={handleCreate}
        />
      )}

      {/* List Of Todos */}
      <div
        className={`w-full flex flex-col items-center gap-3 transition-all ease`}
      >
        <h1 className="text-2xl font-bold text-gray-300">List of Todos</h1>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <CardTodo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              onDelete={() => handleDelete(todo.id)}
              onComplete={(e) => handleComplete(todo.id)}
              onEdit={() =>
                setUpdateData({
                  id: todo.id,
                  title: todo.title,
                  satus: todo.status ? true : false,
                })
              }
            />
          ))
        ) : (
          <div className="text-xl">Please Create Todo First</div>
        )}
      </div>
    </div>
  );
}

export default App;
