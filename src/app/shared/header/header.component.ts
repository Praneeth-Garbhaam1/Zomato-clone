import { Component, EventEmitter, Output } from '@angular/core';
import { EventService } from 'src/app/event.service';

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

  constructor(private eventService: EventService){}

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

}
