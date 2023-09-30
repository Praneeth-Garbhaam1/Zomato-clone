import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/dialog-box/auth.service';
import { PlaceholderDirective } from '../shared/placeholder.directive';
import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-mobilepage',
  templateUrl: './mobilepage.component.html',
  styleUrls: ['./mobilepage.component.scss']
})
export class MobilepageComponent {
  isAuthenticated = false;
  private userSub:Subscription
  @ViewChild(PlaceholderDirective) dialogHost: PlaceholderDirective

  constructor(private authService:AuthService, private componentFactoryResolver: ComponentFactoryResolver){}
  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
        this.isAuthenticated = !!user;
    })
  }
  onSignUpDialog() {
    const signUpVisible = true
    this.showDialogBox(signUpVisible,'sign up');
  }

  onLoginDialog() {
    const loginVisible = true;
    this.showDialogBox(loginVisible, 'login');
  }

  onLogOut() {
    this.isAuthenticated = !this.isAuthenticated
    this.authService.logout();
  }

  private showDialogBox(visible: any, modalType: string) {
    // const alertcmp = new AlertComponent();
    const dialogcmp = this.componentFactoryResolver.resolveComponentFactory(DialogBoxComponent);
    const hostViewContainerRef = this.dialogHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(dialogcmp);
    if(modalType == 'sign up'){
      componentRef.instance.signUpVisible = visible;
    }else{
      componentRef.instance.loginVisible = visible;
    }
  }
}
