import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./User";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  kubeurl = "http://192.168.64.3/first/users"

  url = "http://192.168.64.3/first/users";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.kubeurl)

  }
}
