import { errorFormatter } from "@/utils/blitz-utils";
import { rpcHandler } from "@blitzjs/rpc";
import { api } from "src/blitz-server";

export default api(
  rpcHandler({
    formatError: errorFormatter,
  })
);
