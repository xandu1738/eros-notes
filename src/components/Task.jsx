import React from "react";
import { FaTimes } from "react-icons/fa";
import "./css/components.css";
const Task = ({ id, task, date, reminder, onDelete, onToggle }) => {
  return (
    <>
      <div
        className={`task ${
          reminder ? "reminder" : ""
        } m-1 bg-white rounded-md shadow-md overflow-hidden`}
        onDoubleClick={() => onToggle(id)}
      >
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            {task}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(id)}
            />
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Task;
