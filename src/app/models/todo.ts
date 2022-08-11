export class Todo {
    public idTodo: number;
    public nameTodo: string;
    public listeOfTodo: any[];

    constructor(idTodo: number ,nameTodo: string, listeOfTodo: any[]){
        this.idTodo = idTodo;
        this.nameTodo = nameTodo;
        this.listeOfTodo = listeOfTodo;
    }
}
