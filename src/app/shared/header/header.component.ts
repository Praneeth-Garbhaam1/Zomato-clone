import { Component, ComponentFactoryResolver, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../dialog-box/auth.service';
import { PlaceholderDirective } from '../placeholder.directive';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  value = 'Phone';
  cities: City[] | undefined;
  selectedCity: City | undefined;
  checked: boolean = false;
  parentValue = false;
  isDropDownVisible = false;
  isAuthenticated: boolean;
  private userSub: Subscription;
  private closeSub: Subscription;
  @ViewChild(PlaceholderDirective) dialogHost: PlaceholderDirective

  constructor(private el:ElementRef, private renderer:Renderer2, private authService: AuthService, private componentFactoryResolver: ComponentFactoryResolver){}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  onSignUpDialog() {
    const signUpVisible = true
    this.showDialogBox(signUpVisible,'sign up');
  }

  onLoginDialog() {
    const loginVisible = true;
    this.showDialogBox(loginVisible, 'login');
  }

  showDropdown(dropdownmenu: HTMLElement) {
    console.log(dropdownmenu)
    const element = dropdownmenu;
    this.isDropDownVisible = !this.isDropDownVisible;
    if(this.isDropDownVisible){
      this.renderer.setStyle(element, 'visibility', 'visible');
    }else{
      this.renderer.setStyle(element, 'visibility', 'hidden');
    }
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
