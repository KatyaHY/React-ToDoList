import React from "react";
import { setOriginalNode } from "typescript";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = React.useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  //delete function
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
        {//uncomment this and delete below
          /*{items.map(todoItem => (
            <ToDoItem
              text={todoItem}
            />)
          )}*/}
          {items.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              key={index}
              id={index}
              onChecked={deleteItem}
            />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
