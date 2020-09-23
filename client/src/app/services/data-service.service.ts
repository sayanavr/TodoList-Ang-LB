import { Injectable } from '@angular/core';
import {LoopBackConfig} from '../shared/sdk/index';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  todo:Todo;
  todos:Todo[];
  constructor(private http: HttpClient){
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000/api/todos');
    LoopBackConfig.setApiVersion('api');
  }
  getPing(){
    return this.http.get<string>(LoopBackConfig.getPath());
  }
  addTodo(todo: Todo){
    return this.http.post(LoopBackConfig.getPath(),todo);
  }
  listTodo(){
    return this.http.get(LoopBackConfig.getPath());
  }
  deleteTodo(id:number){
    return this.http.delete(LoopBackConfig.getPath()+'/'+id);
  }
  editTodo(id:number,todo:Todo){
    return this.http.patch(LoopBackConfig.getPath()+'/'+id,todo);
  }
  
}
