import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authServices: AuthenticationService){

      if (this.authServices.getUserData()) {
          this.router.navigate(['/dashboard']);
      }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  get f(): any { return this.loginForm.controls; }

  onSubmit(): void {
    const role = this.authServices.authenticateUser(this.f.username.value, this.f.password.value);
    if (role){
      this.authServices.setUserData(role.toLowerCase());
      this.router.navigate(['/dashboard']);
    } else {
      console.log('incorrect username and password....');
      $('#exampleModalCenter').modal('show');
    }
  }
}
