import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Artisan } from '../artisan.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  results: Artisan[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.currentSearchResults$.subscribe((results: Artisan[]) => {
      this.results = results;
    });
  }

  getStars(note: string): number[] {
    const stars = parseInt(note, 10);
    return Array(stars).fill(0);
  }
}
