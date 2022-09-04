import React from 'react'
import style from './todo.module.css'


export default function Todo(props) {
    const {title,desc} = props.todo
  return (
    
    <article className={style.todo}>
      
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>

        <div>
            <button>Remove</button>
        </div>

    </article>

    
  )
};
