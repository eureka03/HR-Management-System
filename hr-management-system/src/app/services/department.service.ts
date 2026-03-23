import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DepartmentService{
    private baseUrl = 'https://localhost:8080/api/departments';
    constructor(private http:HttpClient){}

    
}