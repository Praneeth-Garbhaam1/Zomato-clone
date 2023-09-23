import { Component } from '@angular/core';
import { CountryServiceService } from '../../country-service.service';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  countries: any[] | undefined;
  selectedCountry: any;
  filteredCountries: any[] | undefined;
  city = 'Hyderabad'
  constructor(private countryservice: CountryServiceService){}

  ngOnInit(){
    this.countryservice.getCountries().then((countries) => {
      this.countries = countries;
    });
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
        let country = (this.countries as any[])[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.filteredCountries = filtered;
  }
}
