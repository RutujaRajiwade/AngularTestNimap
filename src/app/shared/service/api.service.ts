import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { userModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public userDetails = new Subject();

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/user";

  // Get All
  getAllData(): Observable<userModel[]> {
    return this.http.get<userModel[]>(this.apiUrl);
  }

  // Get
  getUserById(id: any): Observable<userModel> {
    return this.http.get<userModel>(this.apiUrl + '/' + id);
  }

  // Delet
  deletUserById(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  //Post
  createUser(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }

  //Update
  updateUser(id: any, userData: any) {
    return this.http.put(this.apiUrl + '/' + id, userData);
  }

}
