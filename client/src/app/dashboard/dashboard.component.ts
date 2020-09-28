import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo';
import {TodoApi} from '../shared/sdk/index';
import {LoopBackConfig} from '../shared/sdk/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: Todo[];
  constructor(private todoApi:TodoApi) { }

  ngOnInit(): void {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
    this.listTodo();
  }
  listTodo(){
    // this.dataService.listTodo().subscribe((data: Todo[])=>{
    //   this.todos=data;
    // });
    this.todoApi.find().subscribe((data: Todo[])=>{
      this.todos=data;
    });
    
  }
}
