
export const getData = async () => {
  const res =  await fetch("https://jsonplaceholder.typicode.com/posts/1")
  // const res =  await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  //   cache: "no-store",//yani diyoruz ki cacheleme backende istek at oradan getir.defaultu force-cache
  // })
  //  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //    next: {revalidate: 10}, //yani diyoruz ki cachele ama 10 saniye sonra refresh yaparsam tekrar istek at 
  //  });
  return res.json()
}


export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <main>
      Data fetching
    </main>
  )
}
