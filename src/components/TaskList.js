import React from "react";
import Task from "./Task"

function TaskList({tasks,deleteTask}) {
  const displayTask = tasks.map((task) => <Task name={task.text} category={task.category} task={task} deleteTask={deleteTask}/>)
  
  return (
    <div className="tasks">
      {displayTask}
    </div>
  );
}

export default TaskList;
