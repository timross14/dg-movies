import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "decades",
  pure: true
})

// can sort less here
export class DecadePipe implements PipeTransform {
  transform(movies, eighties: boolean, nineties: boolean, twoThousands: boolean, twentyTens: boolean ){
    var output = [];
    eighties ? output.push(this.sortMoviesByYear(movies, 1980, 1989)) : null;
    nineties ? output.push(this.sortMoviesByYear(movies, 1990, 1999)) : null;
    twoThousands ? output.push(this.sortMoviesByYear(movies, 2000, 2009)) : null;
    twentyTens ? output.push(this.sortMoviesByYear(movies, 2010, 2019)) : null;
    return [].concat(...output);
  }

  sortMoviesByYear(movies, startYear: number, endYear: number) {
    return movies.filter(movie => {
       if (movie.Year.length > 4) {
         let year = movie.Year.substring(0,4);
         return +year >= startYear && +year <= endYear;
       }
       return +movie.Year >= startYear && +movie.Year <= endYear;
    });
  }
}