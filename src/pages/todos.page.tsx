import React, { Suspense, useState } from "react"
import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import { useMutation, useQuery } from "@blitzjs/rpc"
import getTodos from "src/features/todos/queries/getTodos"
import { Button, Input, List, Loader, Text } from "@mantine/core"
import addTodo from "src/features/todos/mutations/addTodo"
import { notifications } from "@mantine/notifications"
import { Vertical } from "mantine-layout-components"

const Todos = () => {
  const [todos] = useQuery(getTodos, {})

  const [todoTitle, setTodoTitle] = useState("")

  const [$addTodo] = useMutation(addTodo, {
    onSuccess: (todo) => {
      notifications.show({
        title: "Mutation successful",
        message: `Created todo: ${todo.title}`,
      })
    },
  })

  return (
    <Vertical>
      <Input
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.currentTarget.value)}
        placeholder="enter todo title"
      />
      <Button
        onClick={async () => {
          await $addTodo({
            todoTitle: todoTitle,
          })
        }}
      >
        Create a todo
      </Button>
      <List>
        {todos.map((todo) => (
          <List.Item key={todo.title}>
            <Text>{todo.title}</Text>
          </List.Item>
        ))}
      </List>
    </Vertical>
  )
}

export const TodosPage: BlitzPage = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Todos />
      </Suspense>
    </Layout>
  )
}

export default TodosPage
