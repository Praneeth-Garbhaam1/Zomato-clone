import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/event.service';
import { AuthService } from '../dialog-box/auth.service';

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
  private userSub: Subscription;
  isDropDownVisible = false;
  isAuthenticated: boolean;
  constructor(private el:ElementRef, private renderer:Renderer2, private authService: AuthService){}

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
}
