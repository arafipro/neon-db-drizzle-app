import { todoTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import db from "./db";

export async function getData() {
  const res = await db.select().from(todoTable);
  return res;
}

export async function addTodo(id: number, text: string) {
  await db.insert(todoTable).values({ id, text });
}

export async function updateTodo(id: number, text: string) {
  await db.update(todoTable).set({ text }).where(eq(todoTable.id, id));
}

export async function deleteTodo(id: number) {
  await db.delete(todoTable).where(eq(todoTable.id, id));
}
