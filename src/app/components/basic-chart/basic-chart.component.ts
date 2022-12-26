import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { ChartMeasurement } from 'src/app/models/user/chartMeasurement.model';
@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit,OnChanges {

  public user ={
    nombre:"sharon Martinez"
  }
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  // public clicked: boolean = true;
  // public clicked1: boolean = false;
  // public clicked2: boolean = false;

  @Input()
  meassurements:[];
  @Input()
  chartLabels:[];

  @Input()
  buttonLabels:[];
  
  @Input()
  title:string;

  @Input()
  chartId:string='1';

  public clicked:boolean[];

  constructor() { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(changes: SimpleChanges):void{
    let meassurements = changes.meassurements.currentValue as ChartMeasurement[];
    let chartLabels = changes.chartLabels.currentValue as string[];
    let chartId = changes.chartId.currentValue as string;
    
    if(meassurements!=null && meassurements.length>0 ){
      this.buildParams();  
      if(chartId!="1")
      this.buildChart();
    }
      
  }

  private buildParams(){
    this.clicked= this.meassurements.map(()=>false);
    this.clicked[0] =true; 
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

    var chart_labels =  this.chartLabels//[];
    this.datasets =this.meassurements// [ [],[],[] ]
    
    this.data = this.datasets[0];
    this.canvas = document.getElementById("chartBig1"+this.chartId);
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
  public updateOptions(data,index) {
    this.clicked.fill(false);
    this.clicked[index]=true;
    this.myChartData.data.datasets[0].data = data;
    this.myChartData.update();
  }
}
