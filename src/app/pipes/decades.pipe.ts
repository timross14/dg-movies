import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "decades",
  pure: true
})

// can sort less here
export class DecadePipe implements PipeTransform {
  transform(movies, nineties: boolean, twoThousands: boolean, twentyTens: boolean ){
    var output = [];
    nineties ? output.push(this.sortMoviesByYear(movies, 1990, 1999)) : null;
    twoThousands ? output.push(this.sortMoviesByYear(movies, 2000, 2009)) : null;
    twentyTens ? output.push(this.sortMoviesByYear(movies, 2010, 2019)) : null;
    return [].concat(...output);
  }

  sortMoviesByYear(movies, startYear: number, endYear: number) {
    return movies.filter(movie => {
       return +movie.Year >= startYear && +movie.Year <= endYear;
    });
  }
}