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
  hasError: boolean = false;
  user: Users = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUserData().subscribe({
      next: (value) => (this.user = value),
    });
  }

  submit() {
    console.log(this.search);
    this.clearForm();
  }

  clearForm() {
    this.search = '';
  }
}
