import React from 'react'
import style from './todo.module.css'
import { AiFillDelete } from "react-icons/ai";



export default function Todo(props) {
    const {title,desc} = props.todo
    const {id} = props

    const handleBtn=(id)=>{
      props.onRemoveBtn(id);
        }
      


  return (

    <article className={style.todo}>  
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>handleBtn(id)}><AiFillDelete /></button>
        </div>

    </article>

    
  )
};
