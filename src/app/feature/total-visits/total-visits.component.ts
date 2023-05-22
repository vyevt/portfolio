import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import * as Annotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-total-visits-chart',
  templateUrl: './total-visits.component.html',
  styleUrls: ['./total-visits.component.scss']
})
export class TotalVisitsComponent implements OnInit {
  private newLabel?= 'New label';

  constructor() {
    Chart.register(Annotation)
  } canvas: any

  ngOnInit() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');


  }

  width: any
  height: any;

  getGradient(ctx: any, chartArea: any, colors: any, gradient: any
  ) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || this.width !== chartWidth || this.height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      this.width = chartWidth;
      this.height = chartHeight;
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, colors[1]);
    }

    return gradient;
  }
  gradient1 = {
    colors: ['rgba(132, 64, 238, 0.66)', 'rgba(253, 116, 155, 0.36)'],
    value: ""
  }

  gradient2 = {
    colors: ['rgba(252, 189, 119, 0)', 'rgba(253, 121, 179, 1)'],
    value: ""
  }




  ctx: any = {}
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [

      {
        data: [28, 48, 40, 19, 86, 27, 90],
        yAxisID: 'y1',
   
         label: 'Profit',
        backgroundColor: (context: { chart: any }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on the initial chart load
            return;
          }

          return this.getGradient(ctx,
            chartArea, this.gradient1.colors, this.gradient1.value);
        },
        borderColor: 'rgba(77,83,96,0)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: 'green',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 80, 270, 400],
        label: 'Users',
        yAxisID: 'y1',
        backgroundColor: (context: { chart: any }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on the initial chart load
            return;
          }

          return this.getGradient(ctx, chartArea, this.gradient2.colors, this.gradient2.value);
        },
        borderColor: 'rgba(77,83,96,0)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
            maintainAspectRatio: false,
responsive:true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      /* y:
      {
        position: 'left',
      }, */
      y1: {
        position: 'left',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'green'
        }
      } 
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              display: true,
              position: 'center',
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }



  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }



  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
}

