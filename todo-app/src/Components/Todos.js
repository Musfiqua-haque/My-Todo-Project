import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'

export default function Todos(props) {
  return (
    <div className={style.todos}>
    <section>
     {
        props.todosdata.map((todo)=>
        <Todo todo={todo.todo} 
        key={todo.id} 
        id={todo.id} 
        onRemoveBtn={props.onRemoveBtn}/>)
     }
    </section>
    </div>
  )
}
