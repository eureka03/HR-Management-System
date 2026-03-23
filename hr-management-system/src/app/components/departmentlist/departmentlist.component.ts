import { Component } from "@angular/core";
import { Department } from "../../models/department.model";
import { DepartmentService } from "../../services/department.service";

@Component({
    selector: "app-departmentlist",
    templateUrl:"./departmentlist.component.html",
    styleUrls: ["./departmentlist.component.scss"]
})

export class DepartmentListComponent{

    departments: Department[] = [];

    constructor(private departmentService: DepartmentService){}

    ngOnInit(){
        
    }

}