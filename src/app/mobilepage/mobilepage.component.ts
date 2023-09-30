import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/dialog-box/auth.service';

@Component({
  selector: 'app-mobilepage',
  templateUrl: './mobilepage.component.html',
  styleUrls: ['./mobilepage.component.scss']
})
export class MobilepageComponent {
  isAuthenticated = false;
  private userSub:Subscription

  constructor(private authService:AuthService){}
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
        this.isAuthenticated = !!user;
    })
  }
}
