import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartArea, ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'csgo-total-visits',
  templateUrl: './total-visits.component.html',
  styleUrls: ['./total-visits.component.scss']
})
export class TotalVisitsComponent {
 
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      
    ],
    datasets: [
      {
        data: [55, 50, 50, 60, 50, 40, 60],
        label: 'This month',
        fill: true,
        tension: 0.5,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
  
          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          let gradient:any
          let width:any
          let height:any
   
          const chartWidth = chartArea.right - chartArea.left;
          const chartHeight = chartArea.bottom - chartArea.top;
          if (! gradient ||  width !== chartWidth ||  height !== chartHeight) {
            // Create the gradient because this is either the first render
            // or the size of the chart has changed
            width = chartWidth;
            height = chartHeight;
            gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, "#FD79B3"      );
            gradient.addColorStop(1, " #FCBD77")
     }   
        
        
          return gradient
   } },
   {
    data: [65, 59, 60, 81, 56, 55, 40],
    label: 'Profit',
    fill: true,
    tension: 0.5,
    backgroundColor: function(context) {
      const chart = context.chart;
      const {ctx, chartArea} = chart;

      if (!chartArea) {
        // This case happens on initial chart load
        return;
      }
      let gradient:any
      let width:any
      let height:any

      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (! gradient ||  width !== chartWidth ||  height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0.36, "rgba(132, 64, 238, 0.66)");
        gradient.addColorStop(0.66, "rgba(253, 116, 155, 0.36)");
       }   
    
    
      return gradient
} }, ]
  };
  width:any
  height:any
  gradient:any
  
  getGradient(ctx:CanvasRenderingContext2D, chartArea:ChartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!this.gradient || this.width !== chartWidth || this.height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    this.width = chartWidth;
    this.height = chartHeight;
    this.gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    this.gradient.addColorStop(0, "rgba(132, 64, 238, 0.66)");
    this.gradient.addColorStop(0.5, "rgba(253, 116, 155, 0.36)");
   }   


  return this.gradient }
  public lineChartOptions: ChartOptions<'line'> = {
  responsive: true,
        interaction: {
    mode: 'index',
   },
   plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis'
    }
  } 
}
  public lineChartLegend = true;

constructor() {
}

ngOnInit() {
}

}

