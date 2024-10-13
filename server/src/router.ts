import { z } from 'zod'
import { router, publicProcedure } from './trpc'

export const appRouter = router({
  healthcheck: publicProcedure.query(() => ({ status: 'ok' })),
  hello: publicProcedure.input(z.object({ name: z.string().optional() })).query(({ input }) => {
    return `Hello, ${input.name ?? 'World'}!`
  }),
})

export type AppRouter = typeof appRouter
