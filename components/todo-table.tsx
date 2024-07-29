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
        </tr>
      </thead>
      <tbody>
        {data.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id} </td>
            <td>{todo.text} </td>
            <td>{todo.done.toString()} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
