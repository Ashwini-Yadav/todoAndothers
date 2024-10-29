import React from "react";

const Items = ({ item , onRemove}) => {
  return (
    <li>
      <span style={item.packed ? {TextDecoration: "line-through"} : {}}>
        { item.quantity}{item.description}
      </span>
      <button style={{fontStyle:"bold", color:"white"}} onClick={onRemove}>X</button>
    </li>
  )
};

export default Items;
