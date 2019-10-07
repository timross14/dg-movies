import {Pipe, PipeTransform} from '@angular/core';
import { DecadesModel } from '../movie/decades.model';

@Pipe({
  name: "decades",
  pure: false
})

// can sort less here
export class DecadePipe implements PipeTransform {
  transform(movies, decades: DecadesModel ){
    var output = [];
    console.log(decades)
    decades.eighties ? output.push(this.filterByRange(movies, 1980, 1989)) : null;
    decades.nineties ? output.push(this.filterByRange(movies, 1990, 1999)) : null;
    decades.twoThousands ? output.push(this.filterByRange(movies, 2000, 2009)) : null;
    decades.twentyTens ? output.push(this.filterByRange(movies, 2010, 2019)) : null;
    return [].concat(...output);
    //return this.sortByYear(output);
  }

  filterByRange(movies, startYear: number, endYear: number) {
    return movies.filter(movie => {
      let year = movie.Year.substring(0,4);
      return +year >= startYear && year <= endYear;
    });
  }

  // sortByYear(movies) {
  //   movies.sort((a, b) => {
  //     (+a.Year > +b.Year) ? 1 : -1);
  //   }
  // }
}