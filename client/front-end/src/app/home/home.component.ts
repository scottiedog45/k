import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from "../http-service.service";
import { User } from "../User";
import { Observable, Subscription } from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  users : Observable<User[]>;

  constructor(private httpServiceService : HttpServiceService) { }

  ngOnInit(): void {
    this.users = this.httpServiceService.getUsers()
  }

}
