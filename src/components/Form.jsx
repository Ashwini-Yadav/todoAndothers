// import React, { useState } from "react";
// import Items from "./Items";
// const Form = () => {
//   // ! create state
//   let [description, setDescription] = useState("");
//   let [quantity, setQuantity] = useState(1);
//   let [display, setDisplay] = useState([
//     { id: 1, description: {description}, quantity: {quantity}, packed: false },
//   ]);

//   // const intialItems = [
//   //   { id: 1, description: "Passports", quantity: 2, packed: false },
//   //   { id: 2, description: "Socks", quantity: 12, packed: false },
//   // ];

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);

//     if (!description) return;

//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     console.log(newItem);

//     setDescription("");
//     setQuantity(1);
//   };

//   let HandleAdd = (e) => {
//     e.preventDefault();

//     if (description == " ") {
//       alert("Invalid item");
//     } else {
//       setDisplay([...setDisplay, description]);
//     }
//   };

//   return (
//     <>
//       <form className="add-form" onSubmit={handleSubmit}>
//         <h3>what do you need for your 😍 trip???</h3>
//         <select
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//         >
//           {/* <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value={3}>3</option> */}
//           {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//             <option value={num} key={num}>
//               {num}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Item..."
//           value={description}
//           name="description"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button onClick={HandleAdd}>Add</button>
//       </form>

//       <div className="list">
//         <ul>
//           {display.map((item) => {
//             return <Items key={item.id} item={item} />;
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Form;

import React, { useState } from "react";
import Items from "./Items";

const Form = () => {
  // State for form input and list display
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [display, setDisplay] = useState([]); // Initialize as empty array

  // Handle form submission to add new items
  const handleAdd = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      alert("Please enter a valid item");
      return;
    }

    const newItem = { id: Date.now(), description, quantity, packed: false };
    setDisplay([...display, newItem]);

    // Reset input fields
    setDescription("");
    setQuantity(1);
  };

  // Handle removing an item by id
  const handleRemove = (id) => {
    setDisplay(display.filter(item => item.id !== id));
  };

  return (
    <>
      <form className="add-form" onSubmit={handleAdd}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="list">
        <ul>
          {display.map((item) => (
            <Items key={item.id} item={item} onRemove={()=>handleRemove(item.id)} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Form;

