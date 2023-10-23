import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type PypySongsRequestResponse } from "@/server/api/modules/songs/types";
import { env } from "@/env.mjs";

export const songRouter = createTRPCRouter({
  search: publicProcedure
    .query(async () => {
      const req = await fetch(env.PYPY_API_URL)
      const data = await req.json() as PypySongsRequestResponse
      return data
    }),
});
