import React,{useState} from "react";

const PackingList = () => {
  let [number, setNumber]=useState(0);

  let handleIncreament = () => {
     setNumber(++number);
   }
 
  let handleDecreament = () => {
     setNumber(--number);
   }
 
   return (
     <div style={{textAlign:"center"}}>
        <h1 style={{fontSize:"5rem"}}>Counter</h1>
        <button onClick={handleDecreament} style={{margin:"2rem"}}>-</button>
        <button style={{margin:"2rem"}}>{number}</button>
        <button onClick={handleIncreament} style={{margin:"2rem"}}>+</button>
      </div>
   );
};

export default PackingList;
