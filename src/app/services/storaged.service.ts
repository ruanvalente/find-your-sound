import { Tracks } from './../models/track';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoragedService {
  changeData = new EventEmitter<any>();
  constructor() {}

  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    this.changeData.emit(data);
  }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
