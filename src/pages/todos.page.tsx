import React, { Suspense } from "react"
import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"
import { useQuery } from "@blitzjs/rpc"
import getTodos from "src/features/todos/queries/getTodos"
import { List, Loader, Text } from "@mantine/core"

const Todos = () => {
  const [todos] = useQuery(getTodos, {})

  return (
    <List>
      {todos.map((todo) => (
        <List.Item key={todo.title}>
          <Text>{todo.title}</Text>
        </List.Item>
      ))}
    </List>
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
