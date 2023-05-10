import React from "react";
import "./css/components.css";

const FormInput = ({ label, id, type, value, placeholder, onChange }) => {
  return (
    <div>
      <div className="form-control flex flex-col m-auto">
        <label htmlFor="email" className="mb-1 font-medium">
          {label}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default FormInput;
