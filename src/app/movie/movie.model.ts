export class MovieModel {
  public title: string;
  public year: string;
  public rated: string;
  public released: string;
  public runtime: string;
  public plot: string;
  public poster: string;
  public imdbLink: string;
  private imdbID: string;


  constructor(
    title?: string,
    year?: string,
    rated?: string,
    released?: string,
    runtime?: string,
    plot?: string,
    poster?: string,
    imdbID?: string
    ) {
      this.title = title,
      this.year = year,
      this.rated = rated,
      this.released =  released,
      this.runtime = runtime,
      this.plot = plot,
      this.poster = this.parsePosterId(poster),
      this.imdbID = imdbID,
      this.imdbLink = `http://imdb.com/title/${this.imdbID}`
    }

    parsePosterId(url) {
      let prefix = "https://m.media-amazon.com/images/M/" // should abstract this to config value
      if(url && url.includes(prefix)) {
        return url.replace("https://m.media-amazon.com/images/M/", "");
      } else {
        return "not-found" // can use this to propagate an error
      }
    }
}