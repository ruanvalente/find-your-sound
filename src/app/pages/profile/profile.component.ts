import { Component, OnInit } from '@angular/core';

import { Artists } from './../../models/artist';
import { Tracks } from './../../models/track';
import { Users } from './../../models/user';

import { StoragedService } from './../../services/storaged.service';
import { ToastNotifyService } from './../../services/toast-notify.service';
import { ApiService } from './../../services/api.service';

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
    private storagedService: StoragedService,
    private toastNotify: ToastNotifyService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    if (this.storagedService.getData('@FindYourSound::Playlist')) {
      this.playlist = this.storagedService.getData('@FindYourSound::Playlist');
      this.toastNotify.showSucess('Sua playlist foi carregada com sucesso 😎');
    }

    this.apiService.getUserData().subscribe({
      next: (value) => (this.user = value),
      error: (error) => console.error(error),
      complete: () => (this.loading = false),
    });
  }

  submit() {
    this.loading = true;
    this.apiService.handleSearch(this.search).subscribe({
      next: (value) => {
        this.artists = value.artists;
        this.tracks = value.tracks;
        this.toastNotify.showSucess('Busca realizada com sucesso 😁');
      },
      error: (error) => {
        this.hasError = true;
        this.toastNotify.showError(
          'Opa, não consegui realizar a sua busca, tente novamente mais tarde 😅'
        );
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
