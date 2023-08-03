
import { useState } from "react";
import Single from "./Components/Select";


import './main.css';

 
const elements = [
  {id : 1 , value : "First"},
  {id : 2 , value: "Second"},
  {id : 3 , value: "Third"},
  {id : 4 , value: "Four"},
  {id : 5 , value: "Five"},
]


export default function App(){
  
  const [StateId,setStateId] = useState<number[]>([]);

  const select = (id:number)=>{
    setStateId(pre=>{
      const items = [...pre];

      if(!items.includes(id)){items.push(id);}
      return items;
    });
  }
  const removeItem = (id:number)=>{
    setStateId(pre=>{
      const items = [...pre];
      const i = items.indexOf(id);
      items.splice(i,1);
      return items;
    });
  }

  return (
 <Single value = {elements} select = {select}  ids = {StateId} remove = {removeItem}></Single>
  );
}