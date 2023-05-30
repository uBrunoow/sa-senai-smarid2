import { FastifyInstance } from "fastify";
import axios from 'axios'
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function authRoutes(app: FastifyInstance) { 
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const userSchema = z.object({
      id: z.number(),
      email: z.string(),
      name: z.string(),
      cpf: z.string(),
      telefone: z.string(),
      avatar_url: z.string().url(),
    })

    const userInfo = userSchema.parse(userResponse.data)

    let user = await prisma.user.findUnique({
      where: {
        userId: userInfo.id,
      },
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          userId: userInfo.id,
          email: userInfo.email,
          name: userInfo.name,
          cpf: userInfo.cpf,
          telefone: userInfo.telefone,
          avatarUrl: userInfo.avatar_url,
        },
      })
    }

    const token = app.jwt.sign(
      {
        name: user.nome,
        avatarUrl: user.avatarUrl,
      },
      {
        sub: user.id,
        expiresIn: '30 days',
      },
    )
  
    return {
      token,
    }
  })
}