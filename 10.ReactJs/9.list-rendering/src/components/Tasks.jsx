import React from "react";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React tutorial", completed: true },
    { id: 2, name: "Go grocery shopping", completed: false },
    { id: 3, name: "Prepre dinner", completed: false },
    { id: 4, name: "Read a book", completed: false },
  ]);
  return (
    <>
      <div className="task-main">
        <div className="task-title">
          <h1>Task List</h1>
        </div>
        <div className="task-description">
          {tasks.map((tasks) => {
            return (
              <li key={tasks.id}>
                {tasks.name} - {tasks.completed ? "Completed" : "Pending"}
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tasks;
