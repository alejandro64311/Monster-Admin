import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadAllMeasurements } from 'src/app/data/measurement/measurement.actions';
import { MeasurementState, selectAllMeasurements } from 'src/app/data/measurement/measurement.reducer';
import { LoadUserByFilter, LoadUserById, SelectUser } from 'src/app/data/user/user.actions';
import { selectAllUsers, selectCurrentUser, UserState } from 'src/app/data/user/user.reducer';
import { GetUsersByFilter } from 'src/app/data/user/user.request';
import { Measurement } from 'src/app/models/user/measurement.model';
import { User } from 'src/app/models/user/user.model';
import { PaginationWrapper } from 'src/app/utils/models/api.model';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @Input() public modalConfig: NgbModalConfig
  @ViewChild('modal') private modalContent: TemplateRef<UserSearchComponent>
  private modalRef: NgbModalRef
  searchForm: FormControl;
  request = new GetUsersByFilter(0, 5);

  users: PaginationWrapper<User>;
  users$ = this.store.select(selectAllUsers);

  constructor(private modalService: NgbModal,private store: Store<UserState>) { }
  ngOnInit(): void { 
    this.searchForm = new FormControl();
    this.users$.subscribe(users=>{
      this.users = users;
      
    });
    
    this.searchForm.valueChanges.subscribe(res => {
      if (res) {
        if(res != ''){
          this.request.parameters = { filterKey: res }
          this.store.dispatch(new LoadUserByFilter({ request: this.request }));
        }
      }

    })
  }

  open() {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }

  select(userId){
    
    let user = this.users?.items?.find(x=>x.id==userId);
   
    console.log("useruser",user);
    if(user)
    this.store.dispatch(new SelectUser({ user: user }));
  }

}

