"use client";

import { addTodo } from "@/lib/action";
import { useRef } from "react";

export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addTodo(formData);
        formRef.current!.reset();
      }}
      className="flex flex-col p-2 space-y-2"
    >
      <input type="number" name="id" />
      <input type="text" name="text" />
      <button type="submit" className="border-gray-500 border-2">
        保存
      </button>
    </form>
  );
}
