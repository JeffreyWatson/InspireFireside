import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class TodosService {
  async delete(name, id) {
    const todo = await dbContext.Todos.findById(id)
    if (!todo) {
      throw new BadRequest('Not a todo')
    }
    if (todo.user.toString() != name) {
      throw new Forbidden('This is not yours to delete')
    }
    await todo.delete()
  }
  async getAll(name) {
    const todos = await dbContext.Todos.find({ user: name })
    return todos
  }


  async create(body) {
    const todo = await dbContext.Todos.create(body)
    return todo
  }

  async edit(body) {
    const todo = await dbContext.Todos.findById(body.id)
    if (!todo) {
      throw new BadRequest("This is not a todo")
    }
    todo.completed = body.completed !== null ? body.completed : todo.completed
    todo.description = body.description || todo.description
    todo.save()
    return todo
  }
}

export const todosService = new TodosService()