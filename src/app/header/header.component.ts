import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router,

    private searchService: SearchService
  ) {}

  searchArtisan(): void {
    const searchTerm = (document.querySelector('input[type="search"]') as HTMLInputElement).value;
    if (searchTerm) {
      this.searchService.searchArtisans(searchTerm);
      this.router.navigate(['/search-results']);
    }
  }
}
