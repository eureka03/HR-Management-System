import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, ReactiveFormsModule,FormControl,Validators } from "@angular/forms";


@Component({
    selector: "app-login",
    templateUrl:"./login.component.html",
    imports:[ReactiveFormsModule],
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent{
    isLoggedIn = false;

    constructor(private router: Router){}
    loginForm = new FormGroup(
        {
            email: new FormControl("",[Validators.required, Validators.email]),
            password: new FormControl("",[Validators.required])
        }
    );

    //Connect the form to a user model when loging in
    onSubmit(){
        
        if(this.loginForm.valid){
            this.router.navigate(['/dashboard']);
            this.isLoggedIn = true;
        }
    }

    

}