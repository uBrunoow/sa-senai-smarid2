import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(multipart)

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'smartid',
})

app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })