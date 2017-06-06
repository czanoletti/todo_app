
import {Injectable} from '@angular/core';
import {Http} from "@angular/http"
import 'rxjs/add/operator/map';

@Injectable()

export class TodoService {

    private url: string = 'https://nameless-beach-38692.herokuapp.com';

    constructor(private http: Http){

    }

    getTodos(){
        return this.http
            .get(`${this.url}/api/todos`)
            .map((todos)=>{
               return todos.json();
            })
    }

    removeTodo(id: any){
        return this.http
            .delete(`${this.url}/api/todo/${id}`)
            .map(response => response)
    }

    createTodo(formObject: any){
        return this.http
            .post(`${this.url}/api/todos`, formObject)
            .map(res => res);
    }

    updateTodo(id: any, arg: any){
        return this.http
            .put(`${this.url}/api/todo/${id}`, arg)
            .map(res => res)
    }

}