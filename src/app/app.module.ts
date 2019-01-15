import { StartgameComponent } from './startgame/startgame.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { TeamService } from './services/team.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    WelcomeComponent,
    StartgameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
