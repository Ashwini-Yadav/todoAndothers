import "./App.css";
import Voting2 from "./components/Voting2";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats";
import DecreaseCount from "./components/DecreaseCount.jsx";
import VoteSystemBody from "./components/VoteSystemBody";



function App() {

// let [todoItems, setTodoItems] = useState("");
// let [displayItems, setDisplayItems] = useState([]);

// let handleChange = (e) => {
//   setTodoItems(e.target.value);
//   console.log(e.target);
// }

// let handleAddItems = (e) => {
//   e.preventDefault();
//   if(todoItems == " "){
//     alert("Invalid todo item")
//   }else{
//     setDisplayItems([...displayItems,todoItems]);
//   }
  
// };

// // Delete items
// const handleDeleteItem = (ind) => {
//   const updatedItems = displayItems.filter((_, index) => ind !== index);
//   setDisplayItems(updatedItems);
// };

// return (
//   <>
//     <h1>TO-DO-LIST</h1>
//     <form>
//       <input type="text" id="textStyle" name="todoInput" value={todoItems} placeholder="write task here...." onChange={handleChange}/>
//       <button onClick = {handleAddItems}>Saved</button>
//     </form>

//     {/* Listing element */}
//     {
//       displayItems.map((val,ind)=>{
//           return (
//             <Fragment key={ind} >
//               <p>{val}</p>
//               <button onClick={() => handleDeleteItem(ind)}> delete</button>
//             </Fragment>
//           )
//       })
//     }
//   </>
     return (
      <>
        <Logo/>
        <Form/>
        <PackingList/>
        <Stats/>
        <DecreaseCount/>
      {/* <VoteSystemBody/> */}
        <Voting2/>
      </>
     )

}

export default App;
