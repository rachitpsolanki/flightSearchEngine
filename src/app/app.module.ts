import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SearchBodyComponent } from './search-body/search-body.component';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { FilterComponent } from './filter/filter.component';

import { SearchService } from './search.service';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SearchBodyComponent,
    SearchSidebarComponent,
    SearchItemComponent,
    FilterComponent,
    InputAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
