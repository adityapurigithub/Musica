import React from "react";

const FormField = ({ type, name, labelName, handleChange }) => {
  return (
    <div className="flex flex-col gap-2 my-3">
      <label className="text-sm font-medium text-gray-300">{labelName}</label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        className="p-2 bg-gray-400 focus:ring border-0 outline-0 text-black text-base rounded-lg"
      />
    </div>
  );
};

export default FormField;
