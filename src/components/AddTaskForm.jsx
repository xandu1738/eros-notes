import React, { useState } from "react";
import CheckBoxInput from "./CheckBoxInput";
import FormInput from "./FormInput";
import "../App.css";

const AddTaskForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add some text");
      return;
    }
    onAdd({ text, date, reminder });
    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Task"
          id="task"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Task"
        />
        <FormInput
          label="Date"
          id="date"
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          placeholder="Date"
        />
        <CheckBoxInput
          id="checkbox"
          label="Reminder"
          value={reminder}
          onChange={(e) => {
            setReminder(e.target.value);
          }}
        />
        <input type="submit" value="Save" className="btn btn-block" />
      </form>
    </>
  );
};

export default AddTaskForm;
