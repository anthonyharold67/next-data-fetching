//router.refresh()
//Harici verileri değiştirdikten sonra, mevcut rotayı kök düzeninden aşağıya doğru yenilemek için router.refresh()'i kullanabilirsiniz. router.refresh() sunucuya yeni bir istekte bulunur, veri isteklerini yeniden getirir ve Sunucu Bileşenlerini yeniden işler.

import Todo from "@/components/todo";

async function getTodos() {
  const response = await fetch(
    "https://634ac3fc5df952851418480f.mockapi.io/api/todos",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
} 
export default async function Mutate() {
  const todos = await getTodos();
console.log(todos);

  return (
    <main>
      Data Mutate
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
          ))  
        }
      </ul>
    </main>
  );
}
