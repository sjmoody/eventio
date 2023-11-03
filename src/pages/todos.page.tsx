import React, { Suspense, useState } from "react"
import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import { useMutation, useQuery } from "@blitzjs/rpc"
import getTodos from "src/features/todos/queries/getTodos"
import { Button, Checkbox, Input, List, Loader, Text } from "@mantine/core"
import addTodo from "src/features/todos/mutations/addTodo"
import { Horizontal, Vertical } from "mantine-layout-components"
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser"
import toggleTodo from "@/features/todos/mutations/toggleTodo"
import cleanCompleted from "@/features/todos/mutations/cleanCompleted"

const Todo = ({ todo }) => {
  const [$toggleTodo] = useMutation(toggleTodo)

  return (
    <Horizontal>
      <Checkbox checked={todo.done} onClick={() => $toggleTodo({ id: todo.id })}></Checkbox>
      <Text>{todo.title}</Text>
    </Horizontal>
  )
}

const Todos = () => {
  const [todos] = useQuery(getTodos, {})

  const user = useCurrentUser()

  const [todoTitle, setTodoTitle] = useState("")

  const [$addTodo] = useMutation(addTodo, {})
  const [$cleanCompleted] = useMutation(cleanCompleted, {})

  return (
    <Vertical>
      {user && <Text>Hello {user.name} here are your todos</Text>}
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
      <Button
        onClick={async () => {
          $cleanCompleted({})
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
