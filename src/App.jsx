import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }


  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem}/>
      {todoItems.length===0 && <Welcomemsg />}
      <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}></Todoitems>
    </center>
  );
}

export default App;


