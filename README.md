# DgMovies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Known Issues / To Do List

- Refactor CSS to be more dynamic and less pixel-dependent.  
- Create component for checkboxes to clean up the app component.
- A few unit tests for edge cases and components
- End to end tests

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Original Readme

# Front-End Coding Challenge

## Task

Create a simple interface for viewing the latest Batman movies as a vertical list of ten movies which can also be filtered by decade.

A UI mockup can be found in the included `moviemock.sketch` file (or `moviemock.pdf` if you don't have Sketch).
Only one movie is shown in the mockup, but use that as a template for the other 9.

## Requirements
* Build using the latest version of AngularJS or Angular, whichever is most comfortable to you.
* Use SASS to write your css and compile it down.
* Write your JavaScript using either vanilla js or using TypeScript and compile it down.
* Build and include at least one Angular component.
* Make sure your code is supported by Chrome, FF, and IE11.
* Publish your completed project to a github repo provide us with a link.

## APIs

Sign up for a free api key to use the Movie service here:
http://www.omdbapi.com/apikey.aspx


Using the first 10 results of this api search for batman movies:
http://www.omdbapi.com/?apikey=863c14fa&s=Batman

Take those results and look up details for each movie returned using this api pattern:
http://www.omdbapi.com/?i=tt0372784 (where i = the imdb id found above)

Hint: Images will be blocked from hotlinking. Manually download all of those images to the project first, then reference them locally (parse the url string from the response).

