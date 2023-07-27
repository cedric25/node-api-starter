import plugin from 'fastify-plugin'
import { initModules } from './initModules'
import { userRoutes } from '../../modules/user/user.routes'

export default plugin(async instance => {
  instance.register(
    async instance => {
      // 1- Init modules
      initModules(instance.db)

      // 3- Register routes
      instance.register(userRoutes, { prefix: '/users' })
    },
    { prefix: '/api' }
  )
})
