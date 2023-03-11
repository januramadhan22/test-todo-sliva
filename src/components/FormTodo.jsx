import React from "react";

function FormTodo({ title, setTitle, onCreate }) {
  return (
    <>
      <div className="p-2 border border-transparent w-10/12 md:max-w-[480px] rounded-md shadow-md flex items-center justify-between bg-gray-50">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add Todo Title"
          className="focus:outline-none w-full bg-transparent py-1 pl-3"
        />
        <button
          onClick={onCreate}
          className="px-3 py-1.5 bg-green-600 rounded-xl text-white font-semibold text-sm active:scale-95 transition-all ease-out"
        >
          Create
        </button>
      </div>
    </>
  );
}

export default FormTodo;
