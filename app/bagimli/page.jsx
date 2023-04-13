import Test from "@/components/test";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
};
export const getData2 = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
  return res.json();
};


export default async function Bagimli() {
//   const data = await getData();
//   const data2 = await getData2(data.id);
// Bu şekilde bir senaryo olduğunda nextjs diyor ki ikinci fonksiyonu bir component oluştur orada çağır.
//   console.log(data2);
const data = await getData();

  return (
    <main>
      Data fetching
      <p>{data.title}</p>
      <Test id={data.id}/>
    </main>
  );
}

// nextjs şunu iddia ediyor. Ben diyor burada iki isteği de bekliyorum ondan sonra html i hydrate ediyorum. bunun yerine bu şekilde compoennte böl ben ilk isteği atayım sonra html i hydrate edeyim ondan sonra sen ikinci isteği at ki o sayfanın interaktivitsini en hızlı şekilde kazandırayım diyor. performans açısından önemli. mantıklı da çünkü server tarafına aynı anda birden fazla istek atarsak kullanıcı syfayı geç görür.