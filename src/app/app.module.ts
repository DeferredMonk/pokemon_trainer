import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [ //components
    AppComponent,
    LoginPage,
    TrainerPage, 
    CataloguePage, LoginFormComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
