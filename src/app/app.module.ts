import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CatHeaderComponent } from './cat-header/cat-header.component';
import { CatFooterComponent } from './cat-footer/cat-footer.component';
import { CatComponent } from './cat/cat.component';
import { SearchComponent } from './search/search.component';
import { SearchboxComponent } from './search/searchbox/searchbox.component';
import { SearchSuggestionComponent } from './search/search-suggestion/search-suggestion.component';


@NgModule({
  declarations: [
    AppComponent,
    CatHeaderComponent,
    CatFooterComponent,
    CatComponent,
    SearchComponent,
    SearchboxComponent,
    SearchSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
