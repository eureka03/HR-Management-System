import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"app-homepage",
    templateUrl:"./homepage.component.html",
    styleUrls:["./homepage.component.scss"],
    imports:[]
})

export class HomepageComponent{
    constructor(private router: Router) {}

    goToLogin() {
        this.router.navigate(['/login']);
    }
    
}