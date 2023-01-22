import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from "@angular/router";

interface User {
  first_name: string
  last_name: string
  password: string
  phone: string
  email: string
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
      .subscribe((next:any) => {
        console.log('next', next)
        // user = next
        alert('El usuario se ha creado correctamente')
        this.router.navigate(['/login'], {queryParams:{email: next['email']}})
      }, error => {
        console.log('error', error)
        this.router.parseUrl('/register')
      })
  }
}
