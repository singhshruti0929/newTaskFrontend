import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'StudentPortal';

  constructor(private router: Router) {}

  goToStudent() {
    this.router.navigate(['/student']);
  }

  goToTeacher() {
    this.router.navigate(['/teacher']);
  }
  goToFilter() {
    this.router.navigate(['/filter']);
  }
}
