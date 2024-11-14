import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService, Artisan } from '../artisan.service';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss']
})
export class ArtisanDetailComponent implements OnInit {
  artisan: Artisan | null = null;

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.artisanService.getArtisans().subscribe((artisans: Artisan[]) => {
        this.artisan = artisans.find(a => a.id === id) || null;
      });
    }
  }

  getStars(note: string): number[] {
    const stars = parseInt(note, 10);
    return Array(stars).fill(0);
  }



  sendEmail(formData: any) {
    // Implémentation pour envoyer un e-mail (cela nécessitera un backend ou une solution tierce).
    console.log('Email envoyé:', formData);
  }
}
