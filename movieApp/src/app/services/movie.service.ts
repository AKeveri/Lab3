import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getTopRatedMovies() {}

  getMovieDetails() {}
}
