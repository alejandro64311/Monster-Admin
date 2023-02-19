import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateUser, UpdateUser } from 'src/app/data/user/user.actions';
import { selectCurrentUser, UserState } from 'src/app/data/user/user.reducer';
import { CreateUserCommand, UpdateUserCommand, User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  form:FormGroup;

   private currentUser$  =this.userStore.select(selectCurrentUser);
   public currentUser: User;
  constructor(private userStore: Store<UserState>, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.currentUser$.subscribe(user=>{
      this.currentUser = user;
      console.log("currentUser",this.currentUser);
      if (this.currentUser!=null)
      this.form = this.formBuilder.group(this.currentUser);
    })
    this.form = this.formBuilder.group({
      name : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      username : new FormControl(''),
      phoneNumber : new FormControl(''),
      initialWight : new FormControl(''),
      height : new FormControl(''),
      age : new FormControl(''),
    })
  }
  create(){
    this.form.controls[""].value
    let user:CreateUserCommand =new CreateUserCommand(this.form);
    console.log("createUserCommand",user);
    
    this.userStore.dispatch(new CreateUser({request:user}));
  }
  update(){
    let user:UpdateUserCommand =new UpdateUserCommand(this.form);
    console.log("createUserCommand",user);
    this.userStore.dispatch(new UpdateUser({id:this.currentUser.id, request:user}));
  }

 

}
