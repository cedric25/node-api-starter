import type { UserDao } from './dao/user.dao'

const userDependencies: {
  userDao: UserDao
} = {
  userDao: undefined as unknown as UserDao,
}

type DependencyKey = keyof typeof userDependencies

function register<
  T extends DependencyKey,
  R extends (typeof userDependencies)[T],
>(dependencyKey: T, dependency: R) {
  userDependencies[dependencyKey] = dependency
}

function resolve<T extends DependencyKey>(
  dependencyKey: T
): (typeof userDependencies)[T] {
  return userDependencies[dependencyKey]
}

// /!\ Only exposed to ease checking that all deps have well been initialized
function getAllDependencies() {
  return userDependencies
}

export const userDi = {
  register,
  resolve,
  getAllDependencies,
}
