import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardItemComponent } from './components/card-item/card-item.component';
import { AuthGuard } from './guards/auth.guard';
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
    canActivate: [AuthGuard],
  },
  {
    path: 'catalogue',
    component: CataloguePage,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':pokemonName',
        component: CardItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule {}
