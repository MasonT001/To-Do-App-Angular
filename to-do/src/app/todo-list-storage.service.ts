import { Injectable } from "@angular/core";

const storageName = 'aah_todo_list'

const defaultItems = [
    {title: 'install NodeJS'},
    {title: 'install Angular ClI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'}
]

@Injectable()


export class ToDoListStorageService {

    private todoList;


    constructor() {
        this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultItems

     }

     get() {
        return [...this.todoList]
     }

     post(item) {
        this.todoList.push(item)
        return this.update()
     }

     put(item, changes) {
        Object.assign(this.todoList[this.findIndexItem(item)], changes)
        return this.update()
     }

     destroy(item) {
        this.todoList.splice(this.findIndexItem(item), 1)
        return this.update()
     }

     private update() {
        localStorage.setItem(storageName, JSON.stringify(this.todoList))
        
        return this.get()
     }

     private findIndexItem(item){
        return this.todoList.indexOf(item)
     }
}