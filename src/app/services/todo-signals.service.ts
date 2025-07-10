import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoSignalsService {

  public todosState = signal<Array<Todo>>([]);

  public updateTodos({id, title, description, done}: Todo): void {
    if((title && id && description !== null) || undefined) {
      this.todosState.mutate((todos) => {
        if(todos !== null) {
          todos.push(new Todo(id, title, description, done))
        }
      });
    }
  }

}
