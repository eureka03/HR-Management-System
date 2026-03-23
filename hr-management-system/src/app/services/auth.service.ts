//service acting as a central data store for authentication state and user information
import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class AuthService{
   private isAuthenticated = false;
}