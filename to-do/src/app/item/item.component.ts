import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
  <div class="app-item">
  <input type="checkbox" (click)="completeItem()" class="todo-checkbox"/>
  <span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
    {{todoItem.title}}
    </span>

    <button class="btn btn-red" (click)="removeItem()">Remove</button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any; 
  @Output() remove:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(){
    this.remove.emit(this.todoItem)
  }

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete
  }

}
