import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { DecadePipe } from './pipes/decades.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DecadePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
