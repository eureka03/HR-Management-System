import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent, HomepageComponent],
  template: `
    <app-homepage/>
    <app-login/>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('hr-management-system');
}
