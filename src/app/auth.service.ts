import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, Observer} from "rxjs";
import {Router} from "@angular/router";


export interface FooGet {
  // Define the form of the object in JSON format that your
  // expect from the backend on get
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  async doLogin(username: string, password: string) {
    console.log('method: [doLogin]')

    return this.http.post('https://expensable-api.herokuapp.com/login', {
      "email": username,
      "password": password
    })
      .subscribe((next) => {
        console.log('next', next)
        this.router.navigate(['/'])
      }, error => {
        console.log('error', error)
        alert('El usuario o contraseña son incorrectas')
        this.router.parseUrl('/login')
      })
  }
  async registerUser(user: object) {
    console.log('method: [registerUser]')

    return this.http.post('https://expensable-api.herokuapp.com/signup', user)
      .subscribe((next) => {
        console.log('next', next)
        this.router.navigate(['/login'])
      }, error => {
        console.log('error', error)
        this.router.parseUrl('/register')
      })
  }
}
