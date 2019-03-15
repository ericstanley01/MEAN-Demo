import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public userIsAuthenticated = false;
  public username = null;
  private authListenerSub: Subscription;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authListenerSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        if (!this.userIsAuthenticated) {
          this.username = null;
        } else {
          this.username = this.authService.getUserName();
        }
      });
    console.log(this.username);
  }

  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
