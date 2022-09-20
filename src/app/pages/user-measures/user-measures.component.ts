import { animate, state, style, transition, trigger } from '@angular/animations';
import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-measures',
  templateUrl: './user-measures.component.html',
  styleUrls: ['./user-measures.component.scss'],
   
})
export class UserMeasuresComponent implements OnInit {

  public measuresformGroup:FormGroup;

  public img =1;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.measuresformGroup = this.formBuilder.group({
      peso: new FormControl("",[Validators.required]),
      pecho: new FormControl("",[Validators.required]),
      cintura: new FormControl("",Validators.required),
      caderas: new FormControl("",Validators.required),
      cuello: new FormControl("",Validators.required),
      brazo: new FormControl("",Validators.required),
      pierna: new FormControl("",Validators.required),
      pGrasa: new FormControl("",Validators.required),
      mc: new FormControl("",Validators.required)
    });
    this.measuresformGroup.controls["peso"].valueChanges.subscribe(value=>{
      if (value) this.img =8; else this.img =1;
    })
    this.measuresformGroup.controls["pecho"].valueChanges.subscribe(value=>{
      if (value)  this.img =3; else this.img =1;
    })
    this.measuresformGroup.controls["cintura"].valueChanges.subscribe(value=>{
       if (value) this.img =5;else this.img =1;
    })
    this.measuresformGroup.controls["caderas"].valueChanges.subscribe(value=>{
       if (value) this.img =6;else this.img =1;
    })
    this.measuresformGroup.controls["cuello"].valueChanges.subscribe(value=>{
       if (value) this.img =4;else this.img =1;
    })
    this.measuresformGroup.controls["brazo"].valueChanges.subscribe(value=>{
       if (value) this.img =2;else this.img =1;
      
    })
    this.measuresformGroup.controls["pierna"].valueChanges.subscribe(value=>{
       if (value) this.img =7;else this.img =1;
    })
    this.measuresformGroup.controls["pGrasa"].valueChanges.subscribe(value=>{
       if (value) this.img =8;else this.img =1;
    })
    this.measuresformGroup.controls["mc"].valueChanges.subscribe(value=>{
       if (value) this.img =8;else this.img =1;
    })
  }
 


}
