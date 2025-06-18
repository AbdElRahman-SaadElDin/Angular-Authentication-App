import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    if (this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }
}
