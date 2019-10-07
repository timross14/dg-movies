import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { DecadePipe } from './pipes/decades.pipe';
import { DecadeComponent } from './decade/decade.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DecadePipe,
    DecadeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
