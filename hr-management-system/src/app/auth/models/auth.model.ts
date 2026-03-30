import {User} from './user.model';

//This is what we will send to the backend when logging in
export interface LoginRequest {
    email: string;
    password: string;
}

//What we expect to receive from the backend when logging in
export interface LoginResponse{
    token: string;
    user: User;
}