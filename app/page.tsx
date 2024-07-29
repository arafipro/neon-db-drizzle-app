import TodoTable from "@/components/todo-table";
import { addTodo, getData } from "@/lib/action";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <form action={addTodo} className="flex flex-col p-2 space-y-2">
        <input type="number" name="id" />
        <input type="text" name="text" />
        <button type="submit" className="border-gray-500 border-2">
          保存
        </button>
      </form>
      <TodoTable data={data} />
    </>
  );
}
