import React, {useState} from 'react';
import ToDoList from './ToDoList';

const App = () =>{
  const [inputList, setInputList]= useState("");
  const [items,setItems]= useState([])
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }
  const addItems = (event) =>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    })

  }
  const deleteItems= (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arElement, index)=>{
          return index!==id;
      });
    })
  }
  return (
    <div className='main'>
      <div className='inner'>
        <br/><h1>To Do List</h1><br/>
        <input type='text' name='input_task' placeholder='Add a task' onChange={itemEvent}/>
        <button onClick={addItems}> + </button>          
        <br/>
        <ol>
          {/*<li>{inputList}</li>*/}
          {items.map( (itemval, index)=>{
            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
