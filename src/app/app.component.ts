import { OnInit, Component } from '@angular/core';
import { OmdbService } from './omdb/omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Movies';
  movies: [];
  loading: boolean;
  eighties: boolean;
  nineties: boolean;
  twoThousands: boolean;
  twentyTens: boolean;
  decades: {};
  
  
  constructor(
    private omdbService: OmdbService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.eighties = true;
    this.nineties = true;
    this.twoThousands = true;
    this.twentyTens = true;

    let searchTerm = "Batman";
    this.omdbService.getMoviesByName(searchTerm).subscribe(movies => {
      this.movies = movies['Search'];
      this.loading = false;
    })
  }

  handleOnKeydown(event: KeyboardEvent, decade: string) {
    let isEnterOrSpace = event.keyCode === 32 || event.keyCode === 13;
    if(isEnterOrSpace) {
      event.preventDefault();
      this[decade] = !this[decade]
    } 
  }
}