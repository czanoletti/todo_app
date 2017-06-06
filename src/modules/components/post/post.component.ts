
import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    providers: [TodoService]
})

export class PostComponent implements OnInit{


    private todos: any;

    constructor(private todoService: TodoService,
                private router: Router){

    }

    ngOnInit(){
        this.getTodos();
    }

    getTodos(){
        this.todoService.getTodos()
            .subscribe(todos => {
                this.todos = todos;
            });
    }

    deleteTodo(event: any, id: any){
        event.preventDefault();
        console.log(id, event);
        this.todoService.removeTodo(id)
            .subscribe(()=>{
            window.location.reload();
        })
    }

    checkTodo(id: any, arg: any){
        this.todoService.updateTodo(id, arg)
            .subscribe(res => {console.log(arg); window.location.reload()})
    }

}