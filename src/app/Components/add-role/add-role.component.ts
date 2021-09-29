import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Roles } from '../../Roles';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  @Output() onAddRole: EventEmitter<Roles> = new EventEmitter();
  RoleName: string;
  RoleDescription: string;
  NumberofUsers: number;
  ListOfUsers: {
    id: number;
    userName: string;
  }[];
  showAddRole: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddRole = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.RoleName) {
      alert('Please add a Role');
      return;
    }
    // const newrole = {
    //   RoleName: this.RoleName,
    //   RoleDescription: this.RoleDescription,
    //   NumberofUsers: this.NumberofUsers,
    //   ListOfUsers: { id: this.ListOfUsers.id, name: this.ListOfUsers.userName},
    // };
    // this.onAddRole.emit(newrole);

    this.RoleName = '';
    (this.RoleDescription = ''),
      // this.NumberofUsers = 0,
      // this.ListOfUsers = [];
      console.log('works');
  }
}
