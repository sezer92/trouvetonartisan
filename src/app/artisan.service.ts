import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: string;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private dataUrl = 'assets/datas.json';


  constructor(private http: HttpClient) { }

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.dataUrl);
  }
}
