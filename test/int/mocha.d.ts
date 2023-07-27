import type { Fastify } from 'fastify'

declare module 'mocha' {
  export interface Context {
    app: Fastify
  }
}
