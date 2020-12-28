import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = false;

  constructor(private activatedRouter: ActivatedRoute) {}
  ngOnInit(): void {
    this.loading = true;

    if (this.activatedRouter.snapshot.params.get('/profile')) {
      this.loading = false;
    }
  }
}
