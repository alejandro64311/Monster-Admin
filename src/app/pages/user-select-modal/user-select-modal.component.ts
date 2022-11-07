import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-select-modal',
  templateUrl: './user-select-modal.component.html',
  styleUrls: ['./user-select-modal.component.scss']
})
export class UserSelectModalComponent implements OnInit {


  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal ) { }
 
  

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });

  }
 
  create(){
 

  }

 
  transform(id: string, form: FormGroup): FormControl {
    return form.controls[id] as FormControl;
  }

}
