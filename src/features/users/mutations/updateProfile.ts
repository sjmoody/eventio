import { resolver } from "@blitzjs/rpc";
import db from "db";
import { UpdateProfileInput } from "../schemas";

export default resolver.pipe(
  resolver.zod(UpdateProfileInput),
  resolver.authorize(),
  async (input, { session: { userId } }) => {
    return db.user.update({
      where: { id: userId },
      data: input,
    });
  }
);
