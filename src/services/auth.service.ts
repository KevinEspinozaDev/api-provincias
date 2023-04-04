import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  staticUsername: string = 'usern4me';
  staticPassword: string = 'p4ssword';

  token: string = '';

  constructor() { }

  login(username: string, password: string): boolean {

    if (this.validCredentials(username, password)) {
      const token = 'endpoint-token';
      this.setToken(token);
      return true;
    }
    return false;

  }

  validCredentials(username:string, password:string): boolean{
    return username === this.staticUsername && password === this.staticPassword
    ? true
    : false;
  }

  isUserLogged(): boolean{
    return this.getToken() !== null
    ? true
    : false;
  }

  setToken(token:string): void{
    localStorage.setItem('token', token);
  }
  getToken(): string | null{
    return localStorage.getItem('token');
  }

  logout(): void{
    localStorage.clear();
    window.location.reload();
  }
}
