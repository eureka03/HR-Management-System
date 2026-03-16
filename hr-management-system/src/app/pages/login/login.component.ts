import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl:"./login.component.html",
    imports:[ReactiveFormsModule],
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent{

    form;

    constructor(private router:Router, private fb:FormBuilder) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit(){
        if(this.form.valid){
            this.router.navigate(['/dashboard'])
        }
    }

    

}