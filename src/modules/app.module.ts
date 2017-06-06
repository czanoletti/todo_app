import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {appRoutes} from "./components/routes";
import { AppComponent } from './components/app.component';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ErrorComponent} from "./components/error/error.component";
import {PostComponent} from "./components/post/post.component";
import {TodoService} from "./components/services/todo.service";
import {CreateTodoComponent} from "./components/create-todo/create-todo.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        ErrorComponent,
        PostComponent,
        CreateTodoComponent
    ],
    providers: [
        TodoService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }