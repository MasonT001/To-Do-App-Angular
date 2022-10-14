import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // todoList = [
  //   {title: 'install NodeJs'},
  //   {title: 'Angular CLI'},
  //   {title: 'create new app'},
  //   {title: 'serve app'},
  //   {title: 'develop app'},
  //   {title: 'deploy app'}
  // ]

  // addItem(title: string): void {
  //   this.todoList.push({ title })
  // }
}
