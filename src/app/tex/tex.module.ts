import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';
import {MatButtonModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [UserComponent, HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class TexModule {
}
