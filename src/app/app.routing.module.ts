import { StartScreenComponent } from './start-screen/ui/start-screen/start-screen.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router"

const routes: Routes = [
    {
        component: StartScreenComponent,
        path: 'home'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}