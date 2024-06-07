import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [childDarkMode, setChildDarkMode] = useState(false);
  
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setChildDarkMode((childDarkMode) => !childDarkMode);
  }
console.log(childDarkMode);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
      onDarkModeClick= {onDarkModeClick}
      mode= {childDarkMode}
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
