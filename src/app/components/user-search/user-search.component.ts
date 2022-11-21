import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { LoadUserById } from 'src/app/data/user/user.actions';
import { selectCurrentUser, UserState } from 'src/app/data/user/user.reducer';

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
  
  constructor(private modalService: NgbModal,private store: Store<UserState>) { }

  ngOnInit(): void { 
    this.searchForm = new FormControl();

    this.searchForm.valueChanges.subscribe(res => {
      console.log("res",res);
      
      if (res) {
        if(res != ''){
          
          this.store.dispatch(new LoadUserById({ id: 4 }));
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

}

