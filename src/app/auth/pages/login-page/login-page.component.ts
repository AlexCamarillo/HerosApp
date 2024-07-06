import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(
    private authService: AuthServiceService,
    private router: Router ) {}

  onLogin(): void {

    this.authService.login('alex7camarillo@gmail.com', '1234567')
      .subscribe( user => {
        this.router.navigate(['/']);
      })

  }
}
