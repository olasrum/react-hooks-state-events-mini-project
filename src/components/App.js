import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All")

  function handleTaskAdd(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const displayTasks = tasks.filter((task) => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory} />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={CATEGORIES.filter((cat) => cat !=="All")} onTaskFormSubmit={handleTaskAdd}/>
        <TaskList tasks={displayTasks} onDeleteTask={handleDeleteTask}/>
      </div> 
    </div>
  );
}

export default App;
