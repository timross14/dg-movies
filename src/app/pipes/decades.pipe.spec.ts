import { DecadePipe } from './decades.pipe'
import { MovieModel } from '../movie/movie.model';


describe('DecadePipe', () => {
  let pipe: DecadePipe;
  let eighties: boolean;
  let nineties: boolean;
  let twoThousands: boolean;
  let twentyTens: boolean;
  let eightiesMovie;
  let ninetiesMovie;
  let twoThousandsMovie;
  let twentyTensMovie;
  
beforeEach(() => {
  pipe = new DecadePipe();
  eightiesMovie =     {"Title": "Movie1", "Year": "1989"};
  ninetiesMovie =     {"Title": "Movie1", "Year": "1999"};
  twoThousandsMovie = {"Title": "Movie2", "Year": "2005"};
  twentyTensMovie =   {"Title": "Movie2", "Year": "2015"};
});

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter a range', () => {
    let rangeMovie = {"Title": "Movie2", "Year": "2015-2019"};
    let movies = [eightiesMovie, twentyTensMovie]
    eighties = false;
    twentyTens = true;

    let result = pipe.transform(movies, eighties, nineties, twoThousands, twentyTens);
    expect(result.length).toBe(1);
    expect(result[0]["Year"]).toBe("2015")
  });


  it('should filter by 1980s', () => {
    let movies = [eightiesMovie, twoThousandsMovie, twentyTensMovie]
    eighties = true;
    nineties = false;
    twoThousands = false;
    twentyTens = false;

    let result = pipe.transform(movies, eighties, nineties, twoThousands, twentyTens);
    expect(result.length).toBe(1);
    expect(result[0]["Year"]).toBe("1989")
  });

  it('should filter by 1990s', () => {
    let movies = [ninetiesMovie, twoThousandsMovie, twentyTensMovie]
    eighties = false;
    nineties = true;
    twoThousands = false;
    twentyTens = false;

    let result = pipe.transform(movies, eighties, nineties, twoThousands, twentyTens);
    expect(result.length).toBe(1);
    expect(result[0]["Year"]).toBe("1999")
  });

  it('should filter by 2000s', () => {
    let movies = [ninetiesMovie, twoThousandsMovie, twentyTensMovie]
    eighties = false;
    nineties = false;
    twoThousands = true;
    twentyTens = false;

    let result = pipe.transform(movies, eighties, nineties, twoThousands, twentyTens);
    expect(result.length).toBe(1);
    expect(result[0]["Year"]).toBe("2005")
  });

  it('should filter by 2010s', () => {
    let movies = [ninetiesMovie, twoThousandsMovie, twentyTensMovie]
    eighties = false;
    nineties = false;
    twoThousands = false;
    twentyTens = true;

    let result = pipe.transform(movies, eighties, nineties, twoThousands, twentyTens);
    expect(result.length).toBe(1);
    expect(result[0]["Year"]).toBe("2015")
  });

  it('should filter all', () => {
    let movies = [ninetiesMovie, twoThousandsMovie, twentyTensMovie]
    eighties = false;
    nineties = false;
    twoThousands = false;
    twentyTens = false;

    let result = pipe.transform(movies, eighties, nineties, twoThousands, twentyTens);
    expect(result.length).toBe(0);
  });

  
});