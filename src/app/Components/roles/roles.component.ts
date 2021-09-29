import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { UserService } from 'src/app/services/user.service';
import { Roles } from '../../Roles';
import { User } from '../../User';

@Component({
  selector: 'app-role',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: Roles[] = [];
  users: User[] = [];
  UserList: { users: string }[] = [];
  constructor(
    private roleService: RolesService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.roleService.getRoles().subscribe((roles) => (this.roles = roles));
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  deleteRole(role: Roles) {
    this.roleService
      .deleteRole(role)
      .subscribe(
        () => (this.roles = this.roles.filter((t) => t.id !== role.id))
      );
  }

  unassignUser(role: Roles) {
    this.roleService
      .unassignUser(role)
      .subscribe(
        () =>
          (this.roles = this.roles.filter(
            (t) => t.ListOfUsers !== role.ListOfUsers
          ))
      );
  }

  addRole(role: Roles) {
    this.roleService.addRole(role).subscribe((role) => this.roles.push(role));
  }
}
