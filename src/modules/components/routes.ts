
import {Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {PostComponent} from "./post/post.component";
import {ErrorComponent} from "./error/error.component";
import {CreateTodoComponent} from "./create-todo/create-todo.component";


export const appRoutes: Routes = [
    {
        path: '', redirectTo: '/welcome', pathMatch: 'full'
    },
    {
        path: 'welcome', component: WelcomeComponent
    },
    {
        path: 'post', component: PostComponent
    },
    {
        path: 'createPost', component: CreateTodoComponent
    },
    {
        path: '**', component: ErrorComponent
    }
];