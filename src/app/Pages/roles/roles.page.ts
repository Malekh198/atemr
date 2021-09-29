import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Roles } from 'src/app/Roles';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {
  roles: Roles[] =[];
  showAddRole: boolean;
  subscription: Subscription;
  constructor(private uiService: UiService, private roleService: RolesService,private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRole = value));
  }
  ngOnInit() {}
  toggleAddRole() {
    this.uiService.toggleAddRole();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  addRole(role: Roles){
    this.roleService.addRole(role).subscribe((role) => this.roles.push(role))
  }
}
