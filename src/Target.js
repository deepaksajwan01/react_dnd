import React from "react"
import { useState, createContext } from "react"
import { useDrop } from "react-dnd"
import { ItemTypes } from "./utils/items"

export default function Target(props) {
  const [nuggets, setNuggets] = useState([])
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item, monitor) => {
      console.log("drop now !!!!!!!!!!!")

      let nugget = {
        _id: item._id,
        status: item.status,
        category: item.category,
        title: item.title,
        details: item.details,
      }
      getNugget(nugget)
    },
  })

  const getNugget = (nugget) => {
    setNuggets([...nuggets, nugget])
    console.log(nuggets)
  }

  return (
    <div
      ref={drop}
      className='dnd-target'
      style={{ opacity: isOver ? "0.5" : "1" }}
    >
      {nuggets.map((item, i) => (
        <div key={item._id}>{item.details}</div>
      ))}
    </div>
  )
}
