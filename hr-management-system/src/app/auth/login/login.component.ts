import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, ReactiveFormsModule,FormControl,Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { error } from "console";



@Component({
    selector: "app-login",
    templateUrl:"./login.component.html",
    imports:[ReactiveFormsModule],
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent{
    isLoggedIn = false;

    constructor(private router: Router, private authService:AuthService){}
    loginForm = new FormGroup(
        {
            email: new FormControl("",[Validators.required, Validators.email]),
            password: new FormControl("",[Validators.required])
        }
    );

    //Connect the form to a user model when loging in
    onSubmit(){

        //We are going to use the values from the form to create a login request object that we will send to the backend
        const email = this.loginForm.get('email')?.value as string;
        const password = this.loginForm.get('password')?.value as string;

        this.authService.login(email,password).subscribe({
            next:(response) => {
                this.router.navigate(['./dashboard']);
            },
            error:(error)=>{
                console.log("Login failed", error);
            }
        })
       
    }
}