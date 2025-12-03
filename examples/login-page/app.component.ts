import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../components/organisms/login-page/login-page.component';

/**
 * App Component
 * 
 * Example application showing how to integrate and use
 * the LoginPageComponent with the bio-ds design system.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, LoginPageComponent]
})
export class AppComponent {
  title = 'Bio Design System - Login Page';
}
