import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../Roles';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private apiUrlRoles = 'http://localhost:5000/roles';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.apiUrlRoles);
  }

  deleteRole(role: Roles): Observable<Roles[]> {
    const url = `${this.apiUrlRoles}/${role.id}`;
    return this.http.delete<Roles[]>(url);
  }

  unassignUser(role: Roles): Observable<Roles[]> {
    const url = `${this.apiUrlRoles}/${role.ListOfUsers}`;
    return this.http.delete<Roles[]>(url);
  }

  addRole(role: Roles): Observable<Roles> {
    return this.http.post<Roles>(this.apiUrlRoles, role, httpOptions);
  }
}
