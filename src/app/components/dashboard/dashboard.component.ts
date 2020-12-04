import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as moment from 'moment';
import { Label } from 'ng2-charts/lib/base-chart.directive';
import { ICovid } from 'src/app/interfaces/covid.interface';
import { IRandomCat } from 'src/app/interfaces/random-cat.interface';
import { Constants } from 'src/app/models/constants';
import { JsonMockService } from 'src/app/services/json-mock.service';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];
  
  gaugeType:any = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  randomCatList:IRandomCat[]=[];
  randomCatAmount = 2;
  cuurencyList:any;
  baseCurrency = 'THB';
  currencyDate:Date = new Date;
  dateFormat = Constants.DATE_FORMAT;
  constructor(
    private mockService : JsonMockService
  ) { }

  async ngOnInit(): Promise<void> {
     this.currency(); 
     this.randomCat();
     this.covidChart();
  }
  async randomCat(){
    const data : any = await this.mockService.getRandomCat(this.randomCatAmount);
    this.randomCatList = data;
  }

  async currency(){
    const data : any = await this.mockService.getCurrency(this.baseCurrency);
    this.cuurencyList = Object.keys(data.rates).map(x=>{
      return { key: x, value: data.rates[x]}
    })
    this.currencyDate = data.date;
  }

  async covidChart(){
    let lastDate = moment().format('YYYY-MM-DD');
    let starDate = moment().subtract(10, 'd').format('YYYY-MM-DD');
    let dateArray:any =[];
    let totalCase:any=[];
    let defectCase:any=[];
    let deathCase:any=[];
    let recoveryCase:any=[];
    const data:any = await this.mockService.getCovid(starDate,lastDate);
    data.map((x:ICovid)=>{
      defectCase.push(x.Active);
      totalCase.push(x.Confirmed);
      deathCase.push(x.Deaths);
      recoveryCase.push(x.Recovered);
      dateArray.push(moment(x.Date).format('YYYY-MM-DD'))
    })
    this.barChartLabels = dateArray;
    this.barChartData = [
      { data: totalCase, label: 'Total Case', backgroundColor:'skyblue', hoverBackgroundColor: 'skyblue'},
      { data: defectCase, label: 'Active Case', backgroundColor:'yellow', hoverBackgroundColor: 'yellow'},
      { data: recoveryCase, label: 'Recovery Case', backgroundColor:'green', hoverBackgroundColor: 'green'},
      { data: deathCase, label: 'Death Case', backgroundColor:'red', hoverBackgroundColor: 'red'}
    ];
  }
}
