import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Department } from "../models/department.model";

@Injectable({providedIn: 'root'})
export class DepartmentService{
    private baseUrl = 'https://localhost:8080/api/departments';
    http = inject(HttpClient);

    getDepartments(){
        return this.http.get<Department[]>(this.baseUrl);
    }

    
}