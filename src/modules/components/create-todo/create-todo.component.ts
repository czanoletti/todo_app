
import { Component } from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";

@Component({
    selector: 'createTodo',
    templateUrl: 'create-todo.component.html'
})

export class CreateTodoComponent {

    private title: string;
    private author: string;
    private content: string;

    constructor(private todoService: TodoService, private router: Router){

    }

    onSubmit(values: any){
        this.todoService.createTodo(values)
            .subscribe(res => {this.router.navigate(['post'])})
    }



}