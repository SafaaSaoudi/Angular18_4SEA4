import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListsuggestionComponent } from './core/listsuggestion/listsuggestion.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { DetailssuggestionComponent } from './core/detailssuggestion/detailssuggestion.component';

@NgModule({
  declarations: [ //liste des composants
    AppComponent, HeaderComponent, FooterComponent, ListsuggestionComponent, HomeComponent, NotfoundComponent, DetailssuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
