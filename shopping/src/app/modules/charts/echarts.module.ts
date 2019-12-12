import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsLineComponent} from './charts-line/charts-line.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {GroupBarChartComponent} from './group-bar-chart/group-bar-chart.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    ChartsLineComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    GroupBarChartComponent
  ],
  exports: [
    ChartsLineComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    GroupBarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class EchartsModule {
}
