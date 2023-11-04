import React, { useState } from "react";
import { BlitzPage } from "@blitzjs/next";
import Layout from "src/core/layouts/Layout";
import { useMutation, useQuery } from "@blitzjs/rpc";
import getTodos from "src/features/todos/queries/getTodos";
import { Button, Checkbox, Input, List, Text } from "@mantine/core";
import addTodo from "src/features/todos/mutations/addTodo";
import { Horizontal, Vertical } from "mantine-layout-components";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import toggleTodo from "@/features/todos/mutations/toggleTodo";
import cleanCompleted from "@/features/todos/mutations/cleanCompleted";
import { ReactFC } from "~/types";
import { PromiseReturnType } from "blitz";
import { useForm, zodResolver } from "@mantine/form";
import { TodoFormType, TodoInput } from "@/features/todos/schemas";

type TodosType = PromiseReturnType<typeof getTodos>;
type TodoType = TodosType[number];

const Todo: ReactFC<{
  todo: TodoType;
}> = ({ todo }) => {
  const [$toggleTodo, { isLoading }] = useMutation(toggleTodo);

  return (
    <Horizontal>
      <Checkbox
        disabled={isLoading}
        checked={todo.done}
        onClick={async () => {
          await $toggleTodo({ id: todo.id });
        }}
      ></Checkbox>
      <Text>{todo.title}</Text>
    </Horizontal>
  );
};

const Todos = () => {
  const user = useCurrentUser();
  const [todos] = useQuery(getTodos, {});

  const [$addTodo, { isLoading }] = useMutation(addTodo, {});
  const [$cleanCompleted] = useMutation(cleanCompleted, {});

  const form = useForm<TodoFormType>({
    validate: zodResolver(TodoInput),
  });

  return (
    <Vertical>
      {user && <Text>Hello {user.name} here are your todos</Text>}
      <form
        onSubmit={form.onSubmit(async (values) => {
          await $addTodo(values);
        })}
      >
        <Input {...form.getInputProps("todoTitle")} placeholder="enter todo title" />
        <Button type="submit" loading={isLoading}>
          Create a todo
        </Button>
      </form>
      <Button
        onClick={async () => {
          $cleanCompleted({});
        }}
      >
        Clean Completed
      </Button>
      <List>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </List>
    </Vertical>
  );
};

export const TodosPage: BlitzPage = () => {
  return (
    <Layout>
      <Todos />
    </Layout>
  );
};

export default TodosPage;
