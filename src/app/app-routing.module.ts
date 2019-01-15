import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartgameComponent } from './startgame/startgame.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'marker', component: StartgameComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
