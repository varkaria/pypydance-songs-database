import { songRouter } from "@/server/api/modules/songs";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  songs: songRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
