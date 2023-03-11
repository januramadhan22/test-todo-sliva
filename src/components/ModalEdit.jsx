import React from "react";

function ModalEdit({ title, modal, setModal, id }) {
  return (
    <div
      key={id}
      className="w-[480px] h-fit bg-white rounded-lg p-8 flex flex-col gap-8 items-center"
    >
      <input
        value={title}
        //   onChange={(e)=>}
        type="text"
        placeholder="Change Title . . ."
        className="focus:outline-none w-full px-3 py-2 border rounded-md focus:border-blue-600 transition-all ease-in"
      />

      <div className="w-full flex items-center justify-center gap-4 ">
        <button
          onClick={() => setModal(!modal)}
          className="w-full px-12 py-2 bg-red-600 rounded-md text-white font-semibold"
        >
          Cancel
        </button>
        <button className="w-full px-12 py-2 bg-green-600 rounded-md text-white font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ModalEdit;
