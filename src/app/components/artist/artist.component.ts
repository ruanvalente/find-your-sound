import { Artists } from '../../models/artist';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  @Input() artists: Artists;
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
