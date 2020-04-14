import { todos } from './data'
import { Todo } from './todo'



export class TodoService {

    todos: Todo[] = todos;

    getTodos(): Todo[] {
        return this.todos;
    }


}