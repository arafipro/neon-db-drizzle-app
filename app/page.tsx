import { getData } from "@/lib/action";

export default async function Home() {
  // await addTodo(3, "text3");
  // await updateTodo(3, "text33333");
  // await deleteTodo(3);
  const data = await getData();
  return <>{JSON.stringify(data, null, 2)}</>;
}
