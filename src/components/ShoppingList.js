import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const itemsToDisplay = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const itemsList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{itemsList}</ul>
    </div>
  );
};

export default ShoppingList;
