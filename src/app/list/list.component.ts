import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../models/tache';
import { Todo } from '../models/todo';
import { ApitTodoService } from '../services/apit-todo.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  todo : any;
   tache : Tache = new Tache(0,"" );
  id: string = "";
  isHidden: boolean = false;
  error: boolean = false;
  messageOK : string = "";
  bol : boolean = true;
  addTacheVisible : boolean = false;
  cacherform :boolean = true;
  data : any;
  warningMessage : boolean = false;
  hiddUpdate : boolean = true;
 
  constructor(private api : ApitTodoService) { }

  ngOnInit(): void {
 
  }
  //============ update Todo ===============

  updateTodo(todo:Todo){
    
    this.api.updateTodo(todo).subscribe({
      next:(result:Todo)=>{
        console.log('update : '+result.nameTodo);
        
      },
      error: (error) => {
        console.error(error);
        this.error = true;
      }
    });
  }

  hiddeUpdate(){
    this.hiddUpdate = !this.hiddUpdate;
  }

//===== ajouter une tâche à la liste ==============
  addTache(index: number, tache: Tache){
    console.log("addTache cliked!");
    if(tache.tache ==null || tache.tache == ""){
      this.messageOK = "Le format ne doit pas être vide!";
      this.bol =  !this.bol;
      this.warningMessage = true;
            setTimeout(()=>this.bol = !this.bol, 1000);
    }else{
      this.id = index.toString();
      this.api.addItemToTodo(this.id, tache).subscribe({
        next:(result:Tache)=>{
            this.todo.listeOfTodo.push(result);
            this.messageOK = "Ajouter avec succés";
            this.bol =  !this.bol;
            this.warningMessage = false;
            setTimeout(()=>this.bol = !this.bol, 1000);
        console.log(result);
       
        }
      }); 
    }

  }

  onFrmSubmit(f:NgForm) {
    
    f.resetForm();
  }

  cacherBtnAddTache(){
    this.addTacheVisible = !this.addTacheVisible;
    this.cacherform = !this.cacherform;
  }

  cacherformulaireTache(){
    this.addTacheVisible = !this.addTacheVisible;
    this.cacherform = !this.cacherform;
  }

  //======= supprimer une tâche ===============
  onDeleteItem(index: number){
    if(confirm("Vous êtes sûr de vouloir supprimer cet élément!") == true){
      this.id = index.toString();
      //console.log(this.id);
      this.api.deleteItemById(this.id).subscribe({
        next:(result:any) => {
          console.log(result);
          this.todo = result;
          
        },
        error:(error)=> {
          console.error(error);
          this.error = true;
          
        }
          
      })
    }
  }
//======== supprimer la todo liste complette ===============
  onDeleteTodo(index: number){
    if(confirm("Vous êtes sûr de vouloir supprimer cette liste!") == true){
      this.id = index.toString();
      //console.log(this.id);
      this.api.deleteTodoById(this.id).subscribe({
        next:(result:any) => {
          console.log(result);
          this.todo = result;
          this.isHidden = !this.isHidden;
          window.location.reload();
        },
        error:(error)=> {
          console.error(error);
          this.error = true;
          
        }
      })
    }
  }

}
