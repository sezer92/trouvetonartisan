import { Component, OnInit } from '@angular/core';
import { ArtisanService, Artisan } from '../artisan.service';

@Component({
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss']
})
export class ArtisanListComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisans = data;
    });
  }

  getStars(note: string): number[] {
    const stars = parseInt(note, 10);
    return Array(stars).fill(0);
  }



}
