import "./Task.style.css";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TaskComponent = ({ note, index, checkHandler, deleteHandler }) => {
  const { task, date, year, month, completed } = note;




  return (
    <div className="SingleTask">
      {completed ? (
        <h2 style={{ textDecoration: "line-through" }}>{task}</h2>
      ) : (
        <h2>{task}</h2>
      )}
       <div style={{display:"flex", width:"10%", justifyContent:"space-between"} }>
      <i className="fa fa-solid fa-check" onClick={()=>checkHandler(index)}></i>
      <i>       </i>
      <i className="far fa-trash-alt ms-auto" onClick={()=>deleteHandler(index)}></i>
       </div>
    </div>
  );
};

export default TaskComponent;

