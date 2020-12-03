import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts/lib/base-chart.directive';
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
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  
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
    //this.currency(); 
    //this.randomCat();
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


}
