import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LogService } from './log.service';
import { RouterModule } from '@angular/router';
const routes = [
  {
      path: '**',
      component: AppComponent,
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
