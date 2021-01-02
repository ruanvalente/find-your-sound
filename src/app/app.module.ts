import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

import { FormatDatePipe } from './pipes/format-date.pipe';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoadingComponent,
    ArtistComponent,
    TracksComponent,
    FormatDatePipe,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
