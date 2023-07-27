// import createLogger from '@/logger'
import { userDi } from '../../user.di'

// const logger = createLogger({ namespace: 'user:fetchUsers' })

export async function fetchUsersUseCase() {
  const userDao = userDi.resolve('userDao')
  return await userDao.findAll()
}
