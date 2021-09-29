import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RolesPage } from './roles.page';

import { RolesPageRoutingModule } from './roles-routing.module';
import { RolesComponent } from 'src/app/Components/roles/roles.component';
import { ButtonComponent } from 'src/app/Components/button/button.component';
import { AddRoleComponent } from 'src/app/Components/add-role/add-role.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RolesPageRoutingModule],
  declarations: [RolesPage, RolesComponent, ButtonComponent, AddRoleComponent],
})
export class RolesPageModule {}
