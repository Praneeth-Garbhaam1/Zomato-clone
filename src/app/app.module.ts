import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { MobileComponent } from './shared/mobile/mobile.component';
import { InvestorRelationsComponent } from './investor-relations/investor-relations.component';
import { PartnerWithUsComponent } from './partner-with-us/partner-with-us.component';
import { BannerComponent } from './shared/banner/banner.component';
import { DialogBoxComponent } from './shared/dialog-box/dialog-box.component';
import { ExploreOptionsComponent } from './shared/explore-options/explore-options.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { EnterpriseSolutionsComponent } from './enterprise-solutions/enterprise-solutions.component';
import { LocationComponentComponent } from './location-component/location-component.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    HomepageComponent,
    MobileComponent,
    InvestorRelationsComponent,
    PartnerWithUsComponent,
    BannerComponent,
    DialogBoxComponent,
    ExploreOptionsComponent,
    FooterComponent,
    MobilepageComponent,
    EnterpriseSolutionsComponent,
    LocationComponentComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    InputMaskModule,
    AutoCompleteModule,
    DividerModule,
    AccordionModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
