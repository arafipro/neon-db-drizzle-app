import { deleteTodo } from "@/lib/action";

export default function TodoTable({
  data,
}: {
  data: { id: number; text: string; done: boolean }[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>text</th>
          <th>done</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id} </td>
            <td>{todo.text} </td>
            <td>{todo.done.toString()} </td>
            <td>
              <form
                action={async () => {
                  "use server";
                  await deleteTodo(todo.id);
                }}
              >
                <button
                  className="text-red-500 border-red-500 border-2 hover:bg-red-500 hover:text-white"
                  type="submit"
                >
                  削除
                </button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
