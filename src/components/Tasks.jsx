import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task.text}
            date={task.day}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
};

export default Tasks;
