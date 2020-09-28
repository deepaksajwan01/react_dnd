import React from "react";
import { useState, createContext } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./utils/items";

export default function Target(props) {
  const [nuggets, setNuggets] = useState([]) 
  const [isOver, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor)=> {
      let nugget = {
        _id: item._id ,
        status: item.status,
        category: item.category,
        title: item.title ,
        details: item.details 
      }
      getNugget(nugget)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const getNugget = (nugget) =>{
    setNuggets([...nuggets, nugget ])
    console.log(nuggets)
  }

  return (
    <div
      ref={drop}
      className="dnd-target"
      style={{ background: isOver ? "palegreen" : "green" }}
    >
      {
    
         nuggets.map((item, i)=>(
         <div>{item.details}</div>
         ))
  
      }
    </div>
  );
}
