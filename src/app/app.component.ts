import { OnInit, Component } from '@angular/core';
import { OmdbService } from './omdb/omdb.service'
import { DecadesModel } from './movie/decades.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Movies';
  movies: [];
  loading: boolean;

  decades: DecadesModel;
  
  
  constructor(
    private omdbService: OmdbService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.decades = new DecadesModel(true, true, true, true);

    let searchTerm = "Batman";
    this.omdbService.getMoviesByName(searchTerm).subscribe(movies => {
      this.movies = movies['Search']; // do this in omdbservice to get MovieModels here
      console.log(movies['Search'])
      this.loading = false;
    })
  }

  changeEvent($event) {
    this.decades[$event[0]] = $event[1]
  }
}