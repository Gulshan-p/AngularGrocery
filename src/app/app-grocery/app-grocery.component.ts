import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: [
    './app-grocery.component.css'
  ]
})
export class AppGroceryComponent {
  @Input() task?: string;
  tasks = Array();
  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
  }
}
  

