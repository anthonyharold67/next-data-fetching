export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
};
export const getData2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  return res.json();
};
export const getData3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  return res.json();
};

export default async function Promises() {
  //   const data = await getData();
  //   const data2 = await getData2();
  //   const data3 = await getData3();
  //yukarıdaki gibi istek atarsak tüm awaitler birbirini beklediği için kullanıcıyı bekletiyoruz. bunun yerine Promise.all yapısını kullanabiliriz.
  const data = getData();
  const data2 = getData2();
  const data3 = getData3();
  //bu şekilde promise ları oluşturduk.ve paralel bir şekilde istek atmış olduk
  const [dataRes, data2Res, data3Res] = await Promise.all([data, data2, data3]);
  console.log(dataRes);

  return <main>Data fetching</main>;
}
