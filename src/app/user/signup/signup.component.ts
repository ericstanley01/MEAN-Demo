import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private signupStatusSub: Subscription;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.signupStatusSub = this.userService
      .getAuthStatusListener()
      .subscribe(signupStatus => {
        this.isLoading = false;
      });
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.userService.createUser(form.value.name,
      form.value.email,
      form.value.password);
  }

  ngOnDestroy() {
    this.signupStatusSub.unsubscribe();
  }

}
