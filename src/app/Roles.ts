export interface Roles {
  id?: number;
  RoleName: string;
  RoleDescription: string;
  NumberofUsers: number;
  ListOfUsers: [
    {
      id: number;
      name: string;
    }
  ];
}
