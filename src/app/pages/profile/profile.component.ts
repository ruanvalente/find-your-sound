import { StoragedService } from './../../services/storaged.service';
import { Tracks } from './../../models/track';
import { Artists } from './../../models/artist';
import { Users } from './../../models/user';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  search: string = '';
  loading: boolean = false;
  hasError: boolean = false;
  user: Users = null;

  artists: Artists;
  tracks: Tracks;
  playlist: any = [];

  constructor(
    private apiService: ApiService,
    private storagedService: StoragedService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.playlist =
      this.storagedService.getData('@FindYourSound::Playlist') || [];

    this.apiService.getUserData().subscribe({
      next: (value) => (this.user = value),
      error: (error) => console.error(error),
      complete: () => (this.loading = false),
    });
  }

  submit() {
    this.loading = true;
    console.log(this.search);
    this.apiService.handleSearch(this.search).subscribe({
      next: (value) => {
        this.artists = value.artists;
        this.tracks = value.tracks;
      },
      error: (error) => {
        this.hasError = true;
        console.error(error);
      },
      complete: () => {
        this.hasError = false;
        this.loading = false;
      },
    });

    this.clearForm();
  }

  clearForm() {
    this.search = '';
  }
}
