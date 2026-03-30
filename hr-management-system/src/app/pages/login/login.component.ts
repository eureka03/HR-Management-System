import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, ReactiveFormsModule,FormControl } from "@angular/forms";
import { User } from "../../models/user.model";


@Component({
    selector: "app-login",
    templateUrl:"./login.component.html",
    imports:[ReactiveFormsModule],
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent{
    isLoggedIn = false;

  //cREATE THE REACTIVE FORM 
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private router: Router){}

    //Connect the form to a user model when loging in
    onSubmit(){
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
    }

    handleClick(){
        this.isLoggedIn = true;
    }
    

}