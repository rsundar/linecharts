import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import rest from '../../assets/rest.json';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  rest: any[] = rest;
  private memory;
  public donutChartType: ChartType = "doughnut";
  public donutChartData: MultiDataSet = [];
  public donutChartLabels: Label[] = ['used','free'];

  constructor() { }

  ngOnInit(): void {
	console.log("Data: ",this.rest);
	this.memory = this.rest['memory'];
	this.donutChartData = [this.memory, 100-this.memory];
  }

}
