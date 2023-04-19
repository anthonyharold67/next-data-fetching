async function getTodos() {
  const response = await fetch(
    "https://634ac3fc5df952851418480f.mockapi.io/api/todos"
  );
  const data = await response.json();
  return data;
}

async function getSingleTodo(id) {
  const response = await fetch(
    `https://634ac3fc5df952851418480f.mockapi.io/api/todos/${id}`
  );
  const data = await response.json();
  return data;
}

export default async function Dinamik({params: {id}}) {
  console.log("inside the page")
  const todo = await getSingleTodo(id);

  return <main>Todo : {todo.todo}</main>;
}

export async function generateStaticParams() {
  const todos = await getTodos();
  return todos.map((todo) => ({ id: `${todo.id}`}));// paramsın birden fazla olma ihtimali olduğu için obje olarka bekliyor.id yi stringe cevirmemiz lazım params olduğu için string bekliyor.
}
// backend hazırsa ve değişmeyecekse todo ve blog gibi örneğin o zaman generateStaticParams fonksiyonu kullanılabilir performans açısından oldukça faydalıdır. Normalde dinamik sayfalar serversiderendering olur ama bunun yerine biz diyoruz ki oluşturmanı istediğim sayfalar belli sen al bunları oluştur. Ve böylelikle servera istek atmadan sayfalarımızı bize hazır bir şekilde sunuyor. fonksiyon syntaxi sabit. eğer generateStaticParams ı yoruma alırsak sayfayı oluştururken servera istek atıyor.
// yarn build aldığımzıda console.logun gelmediğini görüyoruz.

