export interface User {
  id?: number;
  Username: string;
  FirstName: string;
  LastName: string;
  RolesCount: number;
  Roles: [
    {
      id: number;
      roleName: string;
    }
  ];
}
