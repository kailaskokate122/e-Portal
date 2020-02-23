import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { Router } from  "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMsg: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewWillEnter() {
    this.errorMsg = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.errorMsg = false;
    if (this.loginForm.value.username.toLowerCase() == "test" && this.loginForm.value.password.toLowerCase() == "password") {
      this.loginForm.reset();
      this.router.navigateByUrl('/home');
    } else {
      this.errorMsg = true;
    }
  }

}
