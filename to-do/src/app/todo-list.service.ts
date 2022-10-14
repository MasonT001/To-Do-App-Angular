import { Injectable } from "@angular/core";
import { ItemComponent } from "./item/item.component";
import { ToDoListStorageService } from "./todo-list-storage.service";

@Injectable() 

export class TodoListService {

    constructor(private storage:ToDoListStorageService) { }

      getTodoList(){
        return this.storage.get()
      }

      addItem(item) {
        return this.storage.post(item)
      }

      removeItem(item) {
        return this.storage.destroy(item)
      }

}