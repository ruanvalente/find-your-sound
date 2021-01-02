import { Artists } from './../../models/artist';
import { Component, Input, OnInit, Output } from '@angular/core';

import { StoragedService } from 'src/app/services/storaged.service';

import { Tracks } from './../../models/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  @Input() tracks: Tracks;
  @Input() playlist: any = [];

  constructor(private storagedService: StoragedService) {}

  ngOnInit(): void {}

  handleAddPlaylist(event, data: any): void {
    event.preventDefault();
    this.playlist.push({
      data: {
        images: data.album.images,
        name: data.name,
        release_date: data.album.release_date,
        id: data.id,
      },
    });
    this.storagedService.saveData('@FindYourSound::Playlist', this.playlist);
  }

  handleLoadPlaylist() {
    this.tracks = null;
    this.storagedService.changeData.subscribe({
      next: (value) => {
        this.playlist = value;
        this.storagedService.getData('@FindYourSound::Playlist');
      },
    });
  }
}
