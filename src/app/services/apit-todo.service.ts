import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Tache } from '../models/tache';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ApitTodoService {

  private urlApi : string = "http://localhost:8080/ws/mytodos/";
  private urlDeleteItem : string = "http://localhost:8080/ws/mytodos/deletitem";
  private urlDeleteTodo : string = "http://localhost:8080/ws/mytodos/deletodo";
  private urlAddItem : string = "http://localhost:8080/ws/mytodos/additem"

  constructor(private http: HttpClient) { }

  getTodo() : Observable<any>{

    return this.http.get(this.urlApi);

  }

addItemToTodo(idOfTodo:string, tache:Tache ):Observable<any>{
  let httpOptionsCreate = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post(this.urlAddItem+"/"+idOfTodo, tache, httpOptionsCreate);
}

addNewTodo(todo:Todo):Observable<any>{
  let httpOptionsCreate = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post(this.urlApi, todo, httpOptionsCreate);
}

updateTodo(todo:Todo){
  let httpOptionsCreate = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.put<Todo>(this.urlApi,todo,httpOptionsCreate);
}


  deleteItemById(id:string):Observable<any>{
    return this.http.delete(this.urlDeleteItem+"/"+id);
  }

  deleteTodoById(id:string):Observable<any>{
    return this.http.delete(this.urlDeleteTodo+"/"+id);
  }

}
