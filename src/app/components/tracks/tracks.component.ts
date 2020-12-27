import { Component, Input, OnInit } from '@angular/core';

import { Tracks } from './../../models/track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  @Input() tracks: Tracks;

  constructor() {}

  ngOnInit(): void {}
}
