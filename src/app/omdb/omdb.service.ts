import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MovieModel } from '../movie/movie.model'

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private API_KEY = '863c14fa';
  private BASE_URL = 'http://www.omdbapi.com'

  constructor(private http: HttpClient) {
  }

  getMoviesByName(name: string): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`${this.BASE_URL}?apikey=${this.API_KEY}&s=${name}`);
   }

  getMovieDetailsById(id: string): Observable<MovieModel> {
    return this.http.get<any>(`${this.BASE_URL}?apikey=${this.API_KEY}&i=${id}`)
    .pipe(
      map(result => 
      new MovieModel(
            result.Title,
            result.Year,
            result.Rated,
            result.Released,
            result.Runtime,
            result.Plot,
            result.Poster,
            result.imdbID,
          )
      )
    );
    
  }
}