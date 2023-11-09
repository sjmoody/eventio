import { resolver } from "@blitzjs/rpc";
import db from "~/db";
import { TodoInput } from "../schemas";

export default resolver.pipe(
  resolver.zod(TodoInput),
  resolver.authorize(),
  async (params, { session: { userId } }) => {
    const { todoTitle } = params;

    const todo = db.todo.create({
      data: {
        title: todoTitle,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return todo;
  }
);
