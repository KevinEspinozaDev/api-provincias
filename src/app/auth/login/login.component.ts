import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _location: Location,
    private authService: AuthService,
  ){

  }

  ngOnInit(): void {
    // Si el usuario está loggeado, no permite ingresar al login
    if (this.authService.isUserLogged()) {
      this._location.back();
    }
  }

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login(): void {
    if (this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)) {
      // Si las credenciales son correctas, redirige al usuario a la página de inicio
      // ...
      this.router.navigate(['']);
    } else {
      this.loginError = true;
    }
  }

}
