import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TexModule} from './tex/tex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
