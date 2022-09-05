import React, { useState } from 'react'
import style from './newtodo.module.css'

const NewTodo = (props) => {

  const [todo,setTodo] = useState({
    title:"",
    desc:""
  });

  const {title,desc} = todo;

  const handleChange=(e)=>{
    const name = e.target.name;
    console.log(name);
    setTodo((oldtodo)=>{
      return {...oldtodo,[name]:e.target.value}
    })
  }

  const handleClick=(e)=>{
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:"",desc:""})
  }

  return (
    
      <form className={style.form} onSubmit={handleClick}>
        <div className={style["form-field"]}>
        <label htmlFor='title'>Title: </label>
        <input type='text' id='title' name='title' value={title} onChange={handleChange}/>
        </div>

        <div className={style["form-field"]}>
        <label htmlFor='desc'>Description:</label>
        <textarea type='text' id='desc' name='desc' value={desc} onChange={handleChange}/>
        </div>
        <button className={style.btn} type='submit'>Add Todo</button>
      </form>
  
    
  )
}

export default NewTodo
