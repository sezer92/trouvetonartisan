import { Component } from '@angular/core';

@Component({
  selector: 'app-page-404',
  template: `
    <div class="page-404">
      <img src="assets/404.jpeg" alt="Page non trouvée">
      <h1>404</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <a routerLink="/" class="btn btn-primary">Retour à l'accueil</a>
    </div>
  `,
  styleUrls: ['./page-404.component.scss']
})
export class Page404Component {}
