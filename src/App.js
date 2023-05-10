import "./App.css";
import AddTaskForm from "./components/AddTaskForm";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Daily workouts",
      day: "February 13th at 11:00 AM",
      reminder: false,
    },
    {
      id: 2,
      text: "Studying",
      day: "February 13th at 11:20 AM",
      reminder: true,
    },
    {
      id: 3,
      text: "Playing games",
      day: "February 13th at 11:00 PM",
      reminder: false,
    },
    {
      id: 4,
      text: "Daily workouts",
      day: "February 13th at 11:00 AM",
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    // console.log("should I?");
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks(...tasks, newTask);
  };

  return (
    <div className="container">
      <div className="app">
        <div className="">
          <>
            <h1>E R O S</h1>
            <button
              onClick={() => {
                setShowForm(!showForm);
              }}
              style={{ backgroundColor: showForm ? "red" : "green" }}
              className="btn"
            >
              {showForm ? "hide" : "show"}
            </button>
          </>
          {showForm && <AddTaskForm onAdd={onAdd} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            "Task List is empty"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
