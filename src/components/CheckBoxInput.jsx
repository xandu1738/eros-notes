import React from "react";

const CheckBoxInput = ({ id, label, value }) => {
  return (
    <div className="reminder m-1 flex items-center">
      <label
        htmlFor="checkbox"
        className="ml-2 block text-gray-700 font-medium"
      >
        {label}
      </label>
      <input
        id={id}
        type="checkbox"
        value={value}
        className="form-checkbox h-5 w-5 text-gray-600"
      />
    </div>
  );
};

export default CheckBoxInput;
