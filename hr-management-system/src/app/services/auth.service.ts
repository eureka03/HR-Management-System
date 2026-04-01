//service acting as a central data store for authentication state and user information
import {Injectable} from "@angular/core";
import { LoginRequest, LoginResponse } from "../auth/models/auth.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class AuthService{
   baseUrl = 'http://localhost:8080/api/auth';
   private isAuthenticated = false;
   constructor(private http:HttpClient){}

   login(email: string, password:string): Observable<LoginResponse>{
       const request: LoginRequest = {email,password};

       return this.http.post<LoginResponse>(`${this.baseUrl}/login`, request);

   }
}