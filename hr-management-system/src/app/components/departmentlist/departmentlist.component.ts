import { Component, inject } from "@angular/core";
import { Department } from "../../models/department.model";
import { DepartmentService } from "../../services/department.service";

@Component({
    selector: "app-departmentlist",
    templateUrl:"./departmentlist.component.html",
    styleUrls: ["./departmentlist.component.scss"]
})

export class DepartmentListComponent{

    departments:Department[] = [];

    departmentService = inject(DepartmentService); // This is like saying , Angular give me the Department service 

    constructor(){
       
    }

}