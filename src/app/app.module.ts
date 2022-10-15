import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomComponent } from './random/random.component';
import { NewComponent } from './new/new.component';
import { RandomJokesComponent } from './random-jokes/random-jokes.component';
import { HttpClientModule } from '@angular/common/http';
import { DogImageComponent } from './dog-image/dog-image.component';
@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    NewComponent,
    RandomJokesComponent,
    DogImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
