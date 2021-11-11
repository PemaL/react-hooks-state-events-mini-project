import React from "react";

function CategoryFilter({categories,selectedCategory,setSelectedCategory}) {

  function handleClickButton(e){
   setSelectedCategory(e.target.value)
  }
  const eachCategory = categories.map((category) => <button onClick={handleClickButton} className={category === selectedCategory? "selected" : null} value={category}>{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {eachCategory}
    </div>
  );
}

export default CategoryFilter;