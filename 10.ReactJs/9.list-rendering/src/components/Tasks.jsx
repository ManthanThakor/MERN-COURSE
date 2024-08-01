import React from "react";
import { useState } from "react";
import "./Tasks.css"; // Ensure this is the correct path to your CSS file

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React tutorial", completed: true },
    { id: 2, name: "Go grocery shopping", completed: false },
    { id: 3, name: "Prepare dinner", completed: false },
    { id: 4, name: "Read a book", completed: false },
  ]);

  return (
    <div className="task-main">
      <div className="task-title">
        <h1>Task List</h1>
      </div>
      <ul className="task-description">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : "pending"}
          >
            {task.name} - {task.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
