import { todosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";


export class TodosController extends BaseController {
  constructor() {
    super('api/:name/todos')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }
  async create(req, res, next) {
    try {
      req.body.user = req.params.name
      const todo = await todosService.create(req.body)
      return res.send(todo)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      const todos = await todosService.getAll(req.params.name)
      return res.send(todos)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const todo = await todosService.edit(req.body)
      return res.send(todo)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await todosService.delete(req.params.name, req.params.id)
      return res.send('Todo Deleted')
    } catch (error) {
      next(error)
    }
  }
}