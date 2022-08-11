import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApitTodoService } from '../services/apit-todo.service';
import { Todo } from '../models/todo';
import { Tache } from '../models/tache';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
 
  requestTodo : Subscription | undefined;
  todo : Todo = new Todo(0, "", []);
  todos : Todo [] = [];
  hidBtnNewTodo: boolean = false;
  hiddForm : boolean = true;
  constructor(private apiTodo: ApitTodoService) { }

  ngOnInit(): void {
    this.requestTodo = this.apiTodo.getTodo().subscribe({
      next:(result: any)=>{
        for (const iterator of result) {
          let todo = new Todo(iterator.idTodo, iterator.nameTodo, iterator.listeOfTodo);
          this.todos.push(todo);
          console.log(todo);
          
      }
    },
    error:(err)=> {console.error("Error : "+err);}
  });

};

addNewTodo(todo:Todo){
  console.log('la new todo :'+todo);
  this.apiTodo.addNewTodo(todo).subscribe({
    next:(result:Todo)=>{
       
      this.requestTodo = this.apiTodo.getTodo().subscribe({
        next:(result2: any)=>{
          this.todos = [];
          for (const iterator of result2) {
              let todo = new Todo(iterator.idTodo, iterator.nameTodo, iterator.listeOfTodo);
              this.todos.push(todo);
            console.log(iterator);
        };
        
      },
      error:(err)=> {console.error("Error : "+err);}
    });
      
    }
  })
};
onFrmSubmit(f:NgForm) {
    
  f.resetForm();
}

hiddBtnNewTodo(){
  this.hidBtnNewTodo = !this.hidBtnNewTodo;
  this.hiddForm = !this.hiddForm;
}

}
