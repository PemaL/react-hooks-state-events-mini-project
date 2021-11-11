import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [tasks, setTasks] = useState(TASKS)

const [selectedCategory,setSelectedCategory] = useState("All")



function handleDelete(selectedTask){
    const newTaskList = tasks.filter((task) => task.text!== selectedTask.text)
    setTasks(newTaskList)
}

const filterTasks = tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList tasks={filterTasks} deleteTask={handleDelete}/>
    </div>
  );
}

export default App;
