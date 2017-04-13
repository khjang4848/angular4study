/**
 * Created by khjan on 3/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import {GitDashService} from './gitDashService';
import {TestData} from './TestData';

@Component({
  moduleId : module.id,
  selector: 'git-dash-language',
  templateUrl : 'LanguageComponent.html'
})

export class LanguageComponent implements OnInit{
  language : TestData[];
  constructor(private gitService : GitDashService){}

  doughnutChartLabels: string[];
  doughnutChartData: number[] = [];
  doughnutChartType: string = 'doughnut';

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];



  getLanguage() : void{
    this.gitService.getLanguage()
      .then(languages => {
          this.language = languages;

        let chartData : number[] = [];
        let chartLabels : string[] = [];
        for(let l of  this.language){
          chartData.push(l.Value);
          chartLabels.push(l.Name);
        }

        this.doughnutChartLabels = chartLabels;
        this.doughnutChartData = chartData;


      });
  }

  ngOnInit() : void{
    this.getLanguage();
  }
}
