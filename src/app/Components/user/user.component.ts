import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { UserService } from '../../services/user.service';
import { User } from '../../User';
import { Roles } from '../../Roles';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  roles: Roles[] = [];
  constructor(
    private userService: UserService,
    private roleService: RolesService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
