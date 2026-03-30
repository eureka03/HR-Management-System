import { UpperCasePipe } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
    selector:"app-sidebar",
    templateUrl:"./sidebar.component.html",
    styleUrls:["./sidebar.component.scss"],
    imports: [RouterLink, RouterLinkActive,UpperCasePipe]
})

export class SidebarComponent{


}