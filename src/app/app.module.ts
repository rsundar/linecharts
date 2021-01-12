import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path :'line-chart', component:LineChartComponent
}

];
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
