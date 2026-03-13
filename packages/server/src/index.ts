import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:3000',
}))

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

export default app
