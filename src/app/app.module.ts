import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CardItemComponent } from './components/card-item/card-item.component';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
>>>>>>> 84fb31db8455d9e6a51d300e813dcd5f64f3594e

@NgModule({
  declarations: [
    //components
    AppComponent,
    LoginPage,
<<<<<<< HEAD
    TrainerPage,
    CataloguePage,
    LoginFormComponent,
    CardItemComponent,
=======
    TrainerPage, 
    CataloguePage, LoginFormComponent, NavbarComponent
>>>>>>> 84fb31db8455d9e6a51d300e813dcd5f64f3594e
  ],
  imports: [
    //modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
