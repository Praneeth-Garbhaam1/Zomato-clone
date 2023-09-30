import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { EnterpriseSolutionsComponent } from './enterprise-solutions/enterprise-solutions.component';
import { LocationComponentComponent } from './location-component/location-component.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {
     path: '', redirectTo: '/home-page', pathMatch: 'full' 
  },
  {
    path:'home-page',
    component: HomepageComponent
  },
  {
    path:'partner-with-us',
    component: PartnerWithUsComponent
  },
  {
    path:'mobile',
    component: MobilepageComponent
  },
  {
    path:'investor-relations',
    component:InvestorRelationsComponent
  },
  {
    path:'enterprise-solutions',
    component:EnterpriseSolutionsComponent
  },
  {
    path:'users',
    component: AccountsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
