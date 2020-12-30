import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import statistics from '../../assets/statistics.json';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {
  
  stats: any = (statistics as any)._default;
  
  private percent: number[] = []; //this.stats.map(k => Object.keys(k).map(key => k[key]['percent']));
  private time: string[] = []; //this.stats.map(k => Object.keys(k).map(key => k[key]['time']));
  
  //public lineChartData: ChartDataSets[] = [
  //	{ data: [88, 75, 77, 75, 74, 78] , label: 'cpu-percentage' }
  //];

  public lineChartData: ChartDataSets[] = [];

  //public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6'];

  public lineChartLabels: Label[] = [];

  public lineChartOptions = {
	responsive: true,
  };

  lineChartColors: Color[] = [
	{
		borderColor: 'black',
		backgroundColor: 'rgba(255,255,0,0.28)',
	},
  ];

  public lineChartLegend = true;
  public lineChartPlugins = [];
  public lineChartType = "line";

  constructor() {
	for(var key of Object.keys(this.stats)) {
		this.percent.push(this.stats[key]['percent']);
		this.time.push(this.stats[key]['time']);
	}
	console.log("Percent: ",this.percent," Time= ",this.time);
	this.lineChartData = [
		{ data: this.percent, label: 'cpu-usage' }
	];
	this.lineChartLabels = this.time;
  }

  ngOnInit(): void {
  }

}
