<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { LoginPage } from './pages/login/login.page';
import { TrainerPage } from './pages/trainer/trainer.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'trainer',
    component: TrainerPage,
  },
  {
    path: 'catalogue',
    component: CataloguePage,
    children: [
      {
        path: ':pokemonName',
        component: CardItemComponent,
      },
    ],
  },
];
=======
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        pathMatch:"full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "trainer",
        component: TrainerPage,
        canActivate: [AuthGuard]
    },
    {
        path: "catalogue",
        component: CataloguePage,
        canActivate: [AuthGuard]
    }
]
>>>>>>> 84fb31db8455d9e6a51d300e813dcd5f64f3594e

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}
