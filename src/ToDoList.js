import React from 'react';

const ToDoList = (props) =>{
    
    return (<div className='todo_style'>
    <span className='del_task' onClick={()=>{props.onSelect(props.id)}}> x </span>
    <span className='list_style'><li> {props.text} </li></span>
    </div>);
}

export default ToDoList;