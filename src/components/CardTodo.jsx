import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDone } from "react-icons/md";

function CardTodo() {
  return (
    <div className="p-5 border w-[480px] rounded-md shadow-md flex items-center justify-between">
      <h3 className="text-lg font-semibold">Todo Title</h3>
      <div className="space-x-3">
        <button>
          <FaRegTrashAlt />
        </button>
        <button>
          <HiOutlinePencilSquare />
        </button>
        <button>
          <MdDone />
        </button>
      </div>
    </div>
  );
}

export default CardTodo;
