import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TodoSchema } from '../models/Todo.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);
  Todos = mongoose.model('Todo', TodoSchema)
}

export const dbContext = new DbContext()
