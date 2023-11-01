import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

const Input = z.object({
  search: z.string().optional(),
})

export default resolver.pipe(resolver.zod(Input), resolver.authorize(), async ({ search }) => {
  console.log("user is search for todos", search)
  const todos = [
    { title: "breakfast", id: 1 },
    { title: "lunch", id: 2 },
    { title: "dinner", id: 3 },
  ]
  return todos
})
