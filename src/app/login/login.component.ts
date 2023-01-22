import {Component} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = 'test1@mail.com';
  password: string = '123456';

  constructor(private authService: AuthService) {
  }

  async login() {
    console.log(this.email);
    console.log(this.password);
    const response = await this.authService.doLogin(this.email, this.password)
    console.log({response})
  }
}
