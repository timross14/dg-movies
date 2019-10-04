import { Component, OnInit, Input } from '@angular/core';
import { OmdbService } from '../omdb/omdb.service'
import { MovieModel } from './movie.model'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: MovieModel;
  loading: boolean;

  @Input()
  imdbID: string;
  
  constructor(
    private omdbService: OmdbService
  ) { }

  ngOnInit() {
    let searchTerm = "Batman";
    this.loading = true;
    

    this.omdbService.getMovieDetailsById(this.imdbID).subscribe(movie => {
      this.movie = movie;  
  
      this.loading = false;
    })

  }

}
