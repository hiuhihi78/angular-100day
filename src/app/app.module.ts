import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProgessBarComponent } from './progess-bar/progess-bar.component';
import { AuthorListComponent } from '../author-list/author-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProgessBarComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
