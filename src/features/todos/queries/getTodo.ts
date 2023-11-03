import { resolver } from "@blitzjs/rpc"

export default resolver.pipe(async () => {
  return { title: "breakfast" }
})
