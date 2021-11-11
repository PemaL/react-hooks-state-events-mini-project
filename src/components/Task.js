import React from "react";

function Task({name,category,task,deleteTask}) {


function handleButton(){
deleteTask(task)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={handleButton} >X</button>
    </div>
  );
}

export default Task;
