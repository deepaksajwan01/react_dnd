import React from "react";
import { useState, createContext } from "react";
import TaskCard from "./TaskCard";
import { Card } from "react-bootstrap";


export default function Source() {
  const [taskList, setTaskList] = useState([
    {
      _id: (Math.random() * 100).toFixed(0),
      status: "wip",
      category: "Chores",
      title: "Buy dog food",
      details: "Gotta make my woof woof happy 🐕",
    },
    {
      _id: (Math.random() * 100).toFixed(0),
      status: "wip",
      category: "Shopping",
      title: "Buy Milk",
      details: "Remember, remember the lactose free aisle... 🥛",
    },
    {
      _id: (Math.random() * 100).toFixed(0),
      status: "wip",
      category: "Chores",
      title: "Renew Gym Membership",
      details: "Gotta keep the muscles happy! 💪🏻",
    },
  ]);

  return (
    <div className="border border-info text-center ml-4" style={{padding:20, width:"400px" }}>
      {taskList
        .map((task, i) => (
            <TaskCard
              key={task._id.toString()}
              _id={task._id}
              category={task.category}
              title={task.title}
              status={task.status}
              details={task.details}
            />
        ))}
    </div>
  );
}
