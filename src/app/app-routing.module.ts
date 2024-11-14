import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtisanListComponent } from './artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './artisan-detail/artisan-detail.component';
import { Page404Component } from './page-404/page-404.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { CookiesComponent } from './cookies/cookies.component';

const routes: Routes = [
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: '', component: HomeComponent },
  { path: 'artisans', component: ArtisanListComponent },
  { path: 'artisans/:id', component: ArtisanDetailComponent },
  { path: 'search-results', component: SearchResultsComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
