import React from "react";

function NewTaskForm({categories}) {
  const eachCategory = categories.map((category) => <option>{category}</option> ))
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {eachCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
