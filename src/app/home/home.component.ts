import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  grafico() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.route.navigate(['grafico']);
    }, 2000);
  }

}
