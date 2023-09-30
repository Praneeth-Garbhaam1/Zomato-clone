import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  items: MegaMenuItem[] | undefined;
  language: MegaMenuItem[] | undefined;
  selectedCity: City | undefined;
  constructor() {
    
  }
  ngOnInit() {
    this.language = [
      {
        label: 'English',
        icon: 'pi pi-fw pi-globe',
        items: [
          [
            {
              items: [{ 
                label: 'English'
              }],
            },
            {
              items: [{ 
                label: 'Türkçe'
              }],
            },
            {
              items: [{ 
                label: 'हिंदी'
              }],
            },
            {
              items: [{ 
                label: 'Português (BR)'
              }],
            },
            {
              items: [{ 
                label: 'Indonesian'
              }],
            },
            {
              items: [{ 
                label: 'Português (PT)'
              }],
            },
            {
              items: [{ 
                label: 'Español'
              }],
            },
            {
              items: [{ 
                label: 'Čeština'
              }],
            },
            {
              items: [{ 
                label: 'Slovenčina'
              }],
            },
            {
              items: [{ 
                label: 'Polish'
              }],
            },
            {
              items: [{ 
                label: 'Italian'
              }],
            },
            {
              items: [{ 
                label: 'Vietnamese'
              }],
            }
          ]
        ]
      }
    ]
    this.items = [
      {
        label: 'India',
        items: [
          [
            {
              items: [{
                label: 'India',
                url:'/mobile'
              }]
            },
            {
              items: [{
                label: 'Australia',
              }]
            },
            {
              items: [{
                label: 'Brazil',
              }]
            },
            {
              items: [{
                label: 'Canada',
              }]
            },
            {
              items: [{
                label: 'Chile',
              }]
            },
            {
              items: [{
                label: 'Czech Republic',
              }]
            }
          ],
          [
            {
              items: [{
                label: 'Indonesia',
              }]
            },
            {
              items: [{
                label: 'Ireland',
              }]
            },
            {
              items: [{
                label: 'Italy',
              }]
            },
            {
              items: [{
                label: 'Lebanon',
              }]
            },
            {
              items: [{ label: 'Malaysia', }]
            },
            {
              items: [{
                label: 'New Zealand',
              }]
            }
          ],
          [
            {
              items: [{
                label: 'Philippines',
              }]
            },
            {
              items: [{ label: 'Poland', }]
            },
            {
              items: [{ label: 'Portugal', }]
            },
            {
              items: [{ label: 'Qatar', }]
            },
            {
              items: [{ label: 'Singapore', }]
            },
            {
              items: [{ label: 'South Africa', }]
            }
          ],
          [
            {
              items: [{ label: 'Slovakia', }]
            },
            {
              items: [{ label: 'Sri Lanka', }]
            },
            {
              items: [{ label: 'Turkey', }]
            },
            {
              items: [{ label: 'UAE', }]
            },
            {
              items: [{ label: 'United Kingdom', }]
            },
            {
              items: [{ label: 'USA', }]
            }
          ]
        ]
      },
    ];
  }
}