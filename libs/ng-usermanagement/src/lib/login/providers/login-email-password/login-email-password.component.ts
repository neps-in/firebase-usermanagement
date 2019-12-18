import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AuthenticationService } from '../../../services/auth.service';

@Component({
  selector: 'ng-login-email-password',
  templateUrl: './login-email-password.component.html',
  styleUrls: ['./login-email-password.component.css']
})
export class LoginEmailPasswordComponent {

  /**
   * redirect the user to another page
   */
  @Input() redirectOnSucces: string;
  
  /**
   * Emits the user credentials on a succesfull login
   */
  @Output() onSuccess: EventEmitter<auth.UserCredential> = new EventEmitter();
  /**
   * Emits the error on a failed login
   */
  @Output() onFailed: EventEmitter<any> = new EventEmitter();

  public loginForm: FormGroup;

  public loading: boolean = false;

  constructor(
    public authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { 
    this.loginForm = this.formBuilder.group ({
      email: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  public loginUser(email: string, password: string): Promise<auth.UserCredential | void> {
    this.loading = true;
    return this.authService.loginWithEmailAndPassword(email, password)
    .then((credential) => {
      this.loading = false;
      this.snackBar.open('welcome', '', { duration: 2000 });
      this.onSuccess.next(credential);
      if (this.redirectOnSucces != null) {
        this.router.navigate([this.redirectOnSucces])
      }
      return credential;
    })
    .catch((err) => {
      this.loading = false;
      this.snackBar.open(err.message, '', { duration: 2000 });
      this.onFailed.next(err);
    })
  }

}
