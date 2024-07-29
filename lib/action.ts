"use server";

import { todoTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import db from "./db";

export async function getData() {
  const res = await db.select().from(todoTable);
  return res;
}

export async function addTodo(formData: FormData) {
  const id = Number(formData.get("id"));
  const text = String(formData.get("text"));
  await db.insert(todoTable).values({ id, text });
  revalidatePath("/");
}

export async function updateTodo(id: number, text: string) {
  await db.update(todoTable).set({ text }).where(eq(todoTable.id, id));
}

export async function deleteTodo(id: number) {
  await db.delete(todoTable).where(eq(todoTable.id, id));
}
