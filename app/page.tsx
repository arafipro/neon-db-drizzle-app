import TodoForm from "@/components/todo-form";
import TodoTable from "@/components/todo-table";
import { getData } from "@/lib/action";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <TodoForm />
      <TodoTable data={data} />
    </>
  );
}
