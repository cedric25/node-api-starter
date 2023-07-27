import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
  PORT: z.number().optional(),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).optional(),
  DATABASE_URL: z.string().min(1),
})

export const env = envSchema.parse(process.env)
