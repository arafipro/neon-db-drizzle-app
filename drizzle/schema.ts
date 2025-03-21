import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todo_table", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").notNull().default(false),
});
