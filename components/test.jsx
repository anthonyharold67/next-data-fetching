import React from 'react'

export const getData2 = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  return res.json();
};

const Test = async ({id}) => {
    const data2 = await getData2(id)
  return (
    <div>Test
        {data2.map(item=> <p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default Test

