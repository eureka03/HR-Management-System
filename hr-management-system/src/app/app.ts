import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent],
  template: `
    <app-login/>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('hr-management-system');
}
