import { Todo } from "./todo";

export class Tache {
   public idTache: number;
    public tache : string;
    //private todo: Todo;

    constructor(idTache: number, tache:string){
        this.idTache = idTache;
        this.tache = tache;
       
    }

}
