import { FormGroup } from "@angular/forms";

export class User {
    id: number;
    name: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
   initialWight: number;
    height: number;
    age: number;
    enabled:boolean;
}

export class CreateUserCommand {
    name: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    initialWight: number;
    height: number;
    age: number;
    enabled:boolean;
    constructor(form:FormGroup){
        this.name= form.controls["name"].value;
        this.lastName= form.controls["lastName"].value;
        this.username= form.controls["username"].value;
        this.email= form.controls["email"].value;
        this.phoneNumber= form.controls["phoneNumber"].value;
        this.initialWight= form.controls["initialWight"].value;
        this.height= form.controls["height"].value;
        this.age= form.controls["age"].value;
        this.enabled= false}
}

export class UpdateUserCommand {
    name: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    initialWight: number;
    height: number;
    age: number;
    enabled:boolean;
    constructor(form:FormGroup){
        this.name= form.controls["name"].value;
        this.lastName= form.controls["lastName"].value;
        this.username= form.controls["username"].value;
        this.email= form.controls["email"].value;
        this.phoneNumber= form.controls["phoneNumber"].value;
        this.initialWight= form.controls["initialWight"].value;
        this.height= form.controls["height"].value;
        this.age= form.controls["age"].value;
        this.enabled= false}
}