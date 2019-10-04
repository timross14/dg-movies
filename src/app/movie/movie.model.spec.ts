import { MovieModel } from './movie.model'


describe('MovieModel', () => {
  
  it('should create an instance', () => {
    expect(new MovieModel()).toBeTruthy();
  });
  
  it('should parse the url', () => {
    const prefix = "https://m.media-amazon.com/images/M/"
    const movie = new MovieModel("Title", "1999", "PG", "Release", "140", "Plot", `${prefix}test-value`);
    expect(movie.poster).toEqual('test-value');
  });

  it('should return not-found for no url given', () => {
    const prefix = "https://m.media-amazon.com/images/M/"
    const movie = new MovieModel("Title");
    expect(movie.poster).toEqual('not-found');
  });

});