import { Component } from "@angular/core";

@Component({
  selector: 'prod',
  templateUrl: 'employee.html'
})
export class Employee {

    Id:number;
    Name:string;
    Salary:number;
    Department:string;

    //prodAll:any[]=[];
    addEmployee(){
    alert(this.Id+" "+this.Name+" "+this.Salary+" "+this.Department)
    } 
  

}
