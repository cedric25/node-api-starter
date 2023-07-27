import type { PrismaClient } from '@prisma/client'

// Module dependency containers
import { initUserModule } from '../../modules/user/user.routes'

export function initModules(db: PrismaClient) {
  // That will:
  // - Init module dependency containers

  initUserModule(db)
}
