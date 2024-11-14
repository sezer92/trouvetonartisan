import { Injectable } from '@angular/core';
import { ArtisanService, Artisan } from './artisan.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResultsSource = new BehaviorSubject<Artisan[]>([]);
  currentSearchResults$ = this.searchResultsSource.asObservable();

  constructor(private artisanService: ArtisanService) {}

  searchArtisans(searchTerm: string): void {
    this.artisanService.getArtisans().pipe(
      map((artisans: Artisan[]) => {
        return artisans.filter(artisan =>
          artisan.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.specialty?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artisan.location?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    ).subscribe(results => {
      this.searchResultsSource.next(results);
    });
  }
}
