import React from "react";
import "./css/components.css";

const Header = ({ title, showForm, onClick }) => {
  return (
    <>
      <h1>{title}</h1>
      <button
        onClick={onClick}
        style={{ backgroundColor: showForm ? "red" : "green" }}
        className="btn"
      >
        {showForm ? "hide" : "show"}
      </button>
    </>
  );
};

export default Header;