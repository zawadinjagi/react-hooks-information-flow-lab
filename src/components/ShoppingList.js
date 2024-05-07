import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"; // Import the Filter component

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define a function to handle category changes
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Filter items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* Render the Filter component and pass necessary props */}
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;