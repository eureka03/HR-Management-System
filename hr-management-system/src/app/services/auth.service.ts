//service acting as a central data store for authentication state and user information
import {Injectable,inject} from "@angular/core";
import { LoginRequest, LoginResponse } from "../auth/models/auth.model";
import { Observable,tap } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class AuthService{
   baseUrl = 'http://localhost:8080/api/auth';
   http = inject(HttpClient);

   login(email:string, password:string): Observable<LoginResponse>{
      const loginRequest: LoginRequest = {email, password}; 
      return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginRequest).pipe(
         tap(response => {
            this.setToken(response.token);
         })
      );
   }

   private setToken(token:string){
      return localStorage.setItem('token', token);
   }

   getToken(): string | null {
      return localStorage.getItem('token');
   }

   isLoggedIn(): boolean{
      return this.getToken() !== null;
   }

   logout(){
      localStorage.removeItem('token');
   }
}                            