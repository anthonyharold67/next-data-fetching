"use client"
import { useRouter } from "next/navigation";
//Each item has its own Client Component. This allows the component to use event handlers (like onClick or onSubmit) to trigger a mutation
import React from 'react'

const Todo = ({todo,isDone,id}) => {
    console.log(isDone)
     const router = useRouter();

 async function handleChange() {

   const res = await fetch(`https://634ac3fc5df952851418480f.mockapi.io/api/todos/${id}`, {
     method: "PUT",
     body: JSON.stringify({ "todo": "dasdasdasd", "id": id, "isDone": !isDone }),
   });
   const result = await res.json();
   console.log('res',result);
  
   router.refresh();
 }
  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleChange}
      />
      {todo}
    </li>
  );
}

export default Todo