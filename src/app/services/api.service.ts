import { Tracks } from './../models/track';
import { Artists } from './../models/artist';
import { Users } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const token = window.location.hash.replace('#access_token=', '');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<Users> {
    return this.http.get<Users>(`${environment.baseURL}/me`, httpOptions);
  }

  handleSearch(search: string): Observable<any> {
    return this.http.get<any>(
      `${environment.baseURL}/search?q=${search}&type=artist,track`,
      httpOptions
    );
  }
}
