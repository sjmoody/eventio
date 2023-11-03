import { resolver } from "@blitzjs/rpc"
import { Role } from "types"
import { authenticateUser } from "src/utils/auth-utils"
import { z } from "zod"
import { email } from "../schemas"

export const Input = z.object({
  email,
  password: z.string(),
})

export default resolver.pipe(resolver.zod(Input), async ({ email, password }, ctx) => {
  // This throws an error if credentials are invalid
  const user = await authenticateUser(email, password)
  await ctx.session.$create({ userId: user.id, role: user.role as Role })
  return user
})
