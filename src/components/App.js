import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const handleDarkModeClick = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
};

export default App;
