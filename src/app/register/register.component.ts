import {Component} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string | undefined;
  password: string | undefined;
  confirm_password: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  phone: string | undefined;

  constructor(private authService: AuthService) {
  }

  async register() {
    if(this.password !== this.confirm_password){
      alert('Las contraseñas no son iguales')
      return
    }
    const user = {
      "email": this.email,
      "password": this.password,
      "first_name": this.first_name,
      "last_name": this.last_name,
      "phone": this.phone
    }
    console.log({user});
    const response = await this.authService.registerUser(user)
    console.log({response})
  }
}
