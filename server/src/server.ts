import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter } from './router'
import { createContext } from './trpc'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
