import chai from 'chai'
import dirtyChai from 'dirty-chai'
import type { Context } from 'mocha'
import { buildFastify } from '../../src/app'

chai.use(dirtyChai)

before(async function (this: Context) {
  this.app = buildFastify()
})
