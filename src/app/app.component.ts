import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { CountryServiceService } from './country-service.service';


interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
interface City {
  name: string;
  code: string;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  cities: City[] | undefined;
  selectedCity: City | undefined;
  visible: boolean = false;
  value: string | undefined;
  countries: any[] | undefined;
  items: any[] | undefined;
  groupedCities: SelectItemGroup[] | undefined;
  selectedCountryAdvanced: any[] | undefined;
  filteredCountries: any[] | undefined; 

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  showDialog() {
      this.visible = true;
  }

  constructor(private countryService: CountryServiceService){}

  ngOnInit(){
      this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ];


      this.countryService.getCountries().then((countries) => {
          this.countries = countries;
      });

      this.groupedCities = [
          {
              label: 'Germany',
              value: 'de',
              items: [
                  { label: 'Berlin', value: 'Berlin' },
                  { label: 'Frankfurt', value: 'Frankfurt' },
                  { label: 'Hamburg', value: 'Hamburg' },
                  { label: 'Munich', value: 'Munich' }
              ]
          },
          {
              label: 'USA',
              value: 'us',
              items: [
                  { label: 'Chicago', value: 'Chicago' },
                  { label: 'Los Angeles', value: 'Los Angeles' },
                  { label: 'New York', value: 'New York' },
                  { label: 'San Francisco', value: 'San Francisco' }
              ]
          },
          {
              label: 'Japan',
              value: 'jp',
              items: [
                  { label: 'Kyoto', value: 'Kyoto' },
                  { label: 'Osaka', value: 'Osaka' },
                  { label: 'Tokyo', value: 'Tokyo' },
                  { label: 'Yokohama', value: 'Yokohama' }
              ]
          }
      ];

      this.items = [];
      for (let i = 0; i < 10000; i++) {
          this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
      }
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
