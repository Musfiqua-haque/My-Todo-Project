import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid'

export default function Home() {

  const[todos,setTodo]=useState([])

 const handleAddTodo=(todo)=>{
    setTodo((prevTodo)=>{
      return[...prevTodo,{id:uuidv4(),todo}]
    });

    console.log(todos);
}

const handleRemoveBtn=(id)=>{
  setTodo((prevTodo)=>
  {
    const filteredData = prevTodo.filter((todo)=> todo.id !== id)
    return filteredData;

  });
}

  return (
    <div className={style.contain}>
      <h1 style={{color:"white"}}>To Do App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todosdata={todos} onRemoveBtn={handleRemoveBtn}/>
    </div>
  )
}
