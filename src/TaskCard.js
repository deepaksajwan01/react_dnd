import React from "react";
import { Card } from 'react-bootstrap';
import { useDrag } from 'react-dnd'
import {ItemTypes} from './utils/items'

 const TaskCard = (props)=> {
   const {_id, title, category, details} = props
   //this hooks returns the props form collect and the ref
  const [{isDragging}, drag] = useDrag({
    item: {
      type:ItemTypes.CARD,
      _id,
      title,
      category,
      details
  
     },
     collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })
  return (
    <div 
    ref ={drag}
    style={{opacity: isDragging ? '0.5' : '1' }}
    >
      <Card border="primary" bg="primary"  style={{ width: "18rem" , background:"forestgreen"}} className="mb-3" >
      <Card.Body>
        <Card.Text>
            {props.title}
        </Card.Text>
        <Card.Text>
            {props.category}
        </Card.Text>
        <Card.Text>
            {props.details}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default TaskCard