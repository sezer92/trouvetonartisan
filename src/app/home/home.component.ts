import { Component, OnInit } from '@angular/core';
import { ArtisanService, Artisan } from '../artisan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topArtisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((data: Artisan[]) => {
      this.topArtisans = data.filter(artisan => artisan.top);
      console.log('Artisans du mois :', this.topArtisans);
    });
  }

  getStars(note: string): number[] {
    const stars = parseInt(note, 10);
    return Array(stars).fill(0);
  }
}
