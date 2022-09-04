import React from 'react'
import style from './todo.module.css'


export default function Todo(props) {
    const {Title,Desc} = props.todo
  return (
    
    <article className={style.todo}>
      
        <div>
            <h4>{Title}</h4>
            <p>{Desc}</p>
        </div>

        <div>
            <button>Remove</button>
        </div>

    </article>

    
  )
};
