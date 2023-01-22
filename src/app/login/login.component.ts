import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = 'test1@mail.com';
  password: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          console.log(params); // { order: "popular" }
          this.email = params['email']
        }
      );
  }

  async login() {

    const response = await this.authService.doLogin(this.email, this.password)
    console.log({response})
  }
}
