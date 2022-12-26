import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  LoadChartMeasurementstById } from 'src/app/data/measurement/measurement.actions';
import { MeasurementState,  selectChartMeasurements } from 'src/app/data/measurement/measurement.reducer';
import { selectCurrentUser, UserState } from 'src/app/data/user/user.reducer';
import { GetUsersByFilter } from 'src/app/data/user/user.request';
import { ChartMeasurement } from 'src/app/models/user/chartMeasurement.model';
import { User } from 'src/app/models/user/user.model';
@Component({
  selector: 'app-user-analysis',
  templateUrl: './user-analysis.component.html',
  styleUrls: ['./user-analysis.component.scss']
})
export class UserAnalysisComponent implements OnInit {

  public user ={
    nombre:"sharon Martinez"
  }
  public topDataset: any;
  public topChartLabels:string[];
  public botomDataset: any;
  public botomChartLabels:string[];
  public otherDataset: any;
  public otherChartLabels:string[];

  currentUser: User;
  currentUser$ = this.userStore.select(selectCurrentUser);

  meassurements: ChartMeasurement[];
  meassurements$ = this.measurementStore.select(selectChartMeasurements);

  request = new GetUsersByFilter(0, 5)
  constructor(private userStore: Store<UserState>,private measurementStore: Store<MeasurementState>) { }

  
  ngOnInit() {

    this.currentUser$.subscribe(user=>{
      this.currentUser = user;
      console.log("currentUser",this.currentUser);
      if(this.currentUser?.id!=null){ 
        this.measurementStore.dispatch(new LoadChartMeasurementstById({userId:this.currentUser?.id }) );
      }
    
    });
    this.meassurements$.subscribe(meassurements=>{
      this.meassurements = meassurements;
      this.buildChart();
    });
     
  }
 
  private buildChart(){ 

    this.topChartLabels = [];
    this.topDataset = [ [],[],[] ]
    this.botomChartLabels = [];
    this.botomDataset = [ [],[],[] ]
    this.otherChartLabels = [];
    this.otherDataset = [ [],[],[] ]
    this.meassurements.forEach(measurement=>{
      this.topChartLabels.push("MES "+measurement.month);
      this.topDataset[0].push(measurement.measurement.chest);
      this.topDataset[1].push(measurement.measurement.arm);
      this.topDataset[2].push(measurement.measurement.neck);

      this.botomChartLabels.push("MES "+measurement.month);
      this.botomDataset[0].push(measurement.measurement.hip);
      this.botomDataset[1].push(measurement.measurement.waist);
      this.botomDataset[2].push(measurement.measurement.leg);

      this.otherChartLabels.push("MES "+measurement.month);
      this.otherDataset[0].push(measurement.measurement.weight);
      this.otherDataset[1].push(measurement.measurement.fatP);
      this.otherDataset[2].push(measurement.measurement.mc);
    });
   
  }
}
