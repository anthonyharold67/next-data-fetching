"use client"
import { useRouter } from "next/navigation";
//Each item has its own Client Component. This allows the component to use event handlers (like onClick or onSubmit) to trigger a mutation
import React from 'react'

const Todo = ({todo,isDone,id}) => {
    console.log(isDone)
     const router = useRouter();

 async function handleChange() {
  const data = { todo: todo,id:id, isDone: !isDone };
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
   const res = await fetch(`https://634ac3fc5df952851418480f.mockapi.io/api/todos/${id}`, options );
   const result = await res.json();
   console.log(result);
  
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