import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../services/data-service.service';
import {Todo} from '../models/Todo';
import {BaseLoopBackApi} from '../shared/sdk/services/core/base.service';
import {TodoApi} from '../shared/sdk/services/custom/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  test:string;
  todo:Todo={
    id:0,
    text:"",
    date:new Date()
  };
  todos:Todo[];
  enableEdit=false;
  oldTodoEdit:Todo;
  constructor(private dataService:DataServiceService, private todoApi:TodoApi) { }

  ngOnInit(): void {
    // this.dataService.getPing().subscribe((data)=>{
    //   this.test=data;
    // })
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
  addTodo(){
    // this.dataService.addTodo(this.todo).subscribe((data: Todo)=>{
    //   this.todos.push(data);
    // })
    this.todoApi.create(this.todo).subscribe((data:Todo)=>{
      this.todos.push(data);
    })
  }
  deleteTodo(todo: Todo){
    // this.dataService.deleteTodo(todo.id).subscribe((count: number)=>{
    //   var index = this.todos.indexOf(todo);
    //   this.todos.splice(index, 1);
    // })
    this.todoApi.deleteById(todo.id).subscribe((count: number)=>{
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      })
  }
  enableEditFn(todo: Todo){
    this.enableEdit=true;
    this.oldTodoEdit=todo;
    this.todo.id=todo.id;
    this.todo.text=todo.text;
  }

  editTodo(){
    
      // this.dataService.editTodo(this.oldTodoEdit.id,this.todo).subscribe((data: Todo)=>{
      //   var index = this.todos.indexOf(this.oldTodoEdit);
      //   this.todos.splice(index, 1);
      //   this.todos.push(data);
      // })
      this.todoApi.patchAttributes(this.oldTodoEdit.id,this.todo).subscribe((data: Todo)=>{
        var index = this.todos.indexOf(this.oldTodoEdit);
        this.todos.splice(index, 1);
        this.todos.push(data);
      })
    
  }
  onSubmit(){
      if(this.enableEdit===false){
        this.addTodo();
      }
      else{
        this.editTodo();
        this.enableEdit=false;
      }
  }
  

  
}
