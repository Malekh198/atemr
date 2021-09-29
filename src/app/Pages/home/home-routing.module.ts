import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesPage } from '../roles/roles.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: RolesPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
