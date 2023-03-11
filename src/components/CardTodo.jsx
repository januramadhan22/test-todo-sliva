import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function CardTodo({ title, status, onDelete, onComplete, onEdit }) {
  return (
    <>
      <div
        className={`p-5 border border-transparent w-10/12 md:max-w-[480px] rounded-md shadow-md flex items-center justify-between bg-white hover:border-gray-100 hover:scale-105 transition-all ease-in `}
      >
        <div className="flex items-center gap-3">
          <h3
            className={
              status === false
                ? "text-lg font-semibold capitalize"
                : "text-lg font-semibold capitalize line-through text-gray-400"
            }
          >
            {title}
          </h3>
          {status && (
            <p className="text-xs px-2 py-1 bg-green-600 text-white font-semibold rounded-lg ">
              Done
            </p>
          )}
        </div>
        <div className="space-x-2">
          <button
            onClick={onDelete}
            className="text-base p-2 bg-white rounded-xl border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all ease-in"
          >
            <FaRegTrashAlt />
          </button>
          <button
            onClick={onEdit}
            className="text-base p-2 bg-white rounded-xl border border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all ease-in"
          >
            <HiOutlinePencilSquare />
          </button>
          <button
            onClick={onComplete}
            className={`text-base p-2 bg-white rounded-xl border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-all ease-in ${
              status === true && "text-red-600 border-red-600 hover:bg-red-600"
            }`}
          >
            {status === false ? <MdDone /> : <IoMdClose />}
          </button>
        </div>
      </div>
    </>
  );
}

export default CardTodo;
