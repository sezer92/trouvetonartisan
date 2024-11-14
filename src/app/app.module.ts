import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Page404Component } from './page-404/page-404.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { ArtisanService } from './artisan.service';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search.service';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArtisanListComponent,
    ArtisanDetailComponent,
    ContactFormComponent,
    Page404Component,
    HomeComponent,
    SearchResultsComponent,
    MentionsLegalesComponent,
    DonneesPersonnellesComponent,
    AccessibiliteComponent,
    ContactFormComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    ArtisanService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
