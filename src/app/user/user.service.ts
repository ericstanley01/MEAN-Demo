import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './user-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiURL + '/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private signupStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getAuthStatusListener() {
    return this.signupStatusListener.asObservable();
  }

  createUser(name: string, email: string, password: string) {
    const userData: UserData = {
      name,
      email,
      password
    };
    this.http.post(BACKEND_URL + 'signup', userData)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        this.signupStatusListener.next(false);
      });
  }

}
