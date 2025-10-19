import { Component } from '@angular/core';
import { Router, RouterLink,  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
 constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
