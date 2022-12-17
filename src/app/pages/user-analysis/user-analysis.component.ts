import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Chart from 'chart.js';
import { LoadAllMeasurements, LoadChartMeasurementstById } from 'src/app/data/measurement/measurement.actions';
import { MeasurementState, selectAllMeasurements, selectChartMeasurements } from 'src/app/data/measurement/measurement.reducer';
import { selectCurrentUser, UserState } from 'src/app/data/user/user.reducer';
import { GetUsersByFilter } from 'src/app/data/user/user.request';
import { ChartMeasurement } from 'src/app/models/user/chartMeasurement.model';
import { Measurement } from 'src/app/models/user/measurement.model';
import { User } from 'src/app/models/user/user.model';
import { PaginationWrapper } from 'src/app/utils/models/api.model';
@Component({
  selector: 'app-user-analysis',
  templateUrl: './user-analysis.component.html',
  styleUrls: ['./user-analysis.component.scss']
})
export class UserAnalysisComponent implements OnInit {

  public user ={
    nombre:"sharon Martinez"
  }
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  currentUser: User;
  currentUser$ = this.userStore.select(selectCurrentUser);

  meassurements: ChartMeasurement[];
  meassurements$ = this.measurementStore.select(selectChartMeasurements);

  request = new GetUsersByFilter(0, 5)
  constructor(private userStore: Store<UserState>,private measurementStore: Store<MeasurementState>) { }

  
  ngOnInit() {

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    this.currentUser$.subscribe(user=>{
      this.currentUser = user;
      console.log("currentUser",this.currentUser);
      if(this.currentUser?.id!=null){ 
        this.measurementStore.dispatch(new LoadChartMeasurementstById({userId:this.currentUser?.id }) );
      }
    
    });
    this.meassurements$.subscribe(meassurements=>{
      this.meassurements = meassurements;
      console.log("this.meassurements",this.meassurements);
      this.buildChart();
    });
    
     var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    // this.datasets = [
    //   [40, 50, 60, 70, 80, 60, 75, 60, 90, 80, 110, 100],
    //   [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
    //   [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
    // ]; 
    // this.data = this.datasets[0];
    // this.canvas = document.getElementById("chartBig1");
    // this.ctx = this.canvas.getContext("2d");
    // var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    // gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    // gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    // gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    // var config = {
    //   type: 'line',
    //   data: {
    //     labels: chart_labels,
    //     datasets: [{
    //       label: "My First dataset",
    //       fill: true,
    //       backgroundColor: gradientStroke,
    //       borderColor: '#ec250d',
    //       borderWidth: 2,
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       pointBackgroundColor: '#ec250d',
    //       pointBorderColor: 'rgba(255,255,255,0)',
    //       pointHoverBackgroundColor: '#ec250d',
    //       pointBorderWidth: 20,
    //       pointHoverRadius: 4,
    //       pointHoverBorderWidth: 15,
    //       pointRadius: 4,
    //       data: this.data,
    //     }]
    //   },
    //   options: gradientChartOptionsConfigurationWithTooltipRed
    // };
    // this.myChartData = new Chart(this.ctx, config);


    
    /////
    this.canvas = document.getElementById("chartBig2");
    this.ctx = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#2986cc',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#2986cc',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#2986cc',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    };
    this.myChartData = new Chart(this.ctx, config);
     /////
     this.canvas = document.getElementById("chartBig3");
     this.ctx = this.canvas.getContext("2d");
     var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
     gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
     gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
     gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
     var config = {
       type: 'line',
       data: {
         labels: chart_labels,
         datasets: [{
           label: "My First dataset",
           fill: true,
           backgroundColor: gradientStroke,
           borderColor: '#ccb229',
           borderWidth: 2,
           borderDash: [],
           borderDashOffset: 0.0,
           pointBackgroundColor: '#ccb229',
           pointBorderColor: 'rgba(255,255,255,0)',
           pointHoverBackgroundColor: '#ccb229',
           pointBorderWidth: 20,
           pointHoverRadius: 4,
           pointHoverBorderWidth: 15,
           pointRadius: 4,
           data: this.data,
         }]
       },
       options: gradientChartOptionsConfigurationWithTooltipRed
     };
     this.myChartData = new Chart(this.ctx, config);
  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

  private buildChart(){
    
    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 6,
            suggestedMax: 12,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var chart_labels = [];
    this.datasets = [ [],[],[] ]
    this.meassurements.forEach(measurement=>{
      chart_labels.push(measurement.month+"-");
      this.datasets[0].push(measurement.measurement.chest);
      this.datasets[1].push(measurement.measurement.arm);
      this.datasets[2].push(measurement.measurement.neck);
    });
    // var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    // this.datasets = [
    //   [40, 50, 60, 70, 80, 60, 75, 60, 90, 80, 110, 100], //Pecho
    //   [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120], //brazo 
    //   [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130] //cuello
    // ]; 
    this.data = this.datasets[0];
    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#ec250d',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#ec250d',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#ec250d',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipRed
    };
    this.myChartData = new Chart(this.ctx, config);
  }
}
