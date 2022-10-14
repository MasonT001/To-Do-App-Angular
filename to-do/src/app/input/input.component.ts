import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
   template: `
     <input class="app-input"[value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElement placeholder="Add New Task...">
     <button class="btn"(click)="changeTitle(inputElement.value)">&plus;</button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  
  title: string = '';

  constructor() { }

  ngOnInit() { }

  changeTitle(newTitle: string): void{
    this.submit.emit(newTitle);
  }

}
