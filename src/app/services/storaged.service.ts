import { Tracks } from './../models/track';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoragedService {
  loadingPlaylist = new EventEmitter<Tracks[]>();

  constructor() {}

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data as []));
    console.log(data);
    this.loadingPlaylist.emit(data);
  }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
