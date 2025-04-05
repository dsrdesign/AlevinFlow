import { Component, ViewChild, ViewEncapsulation } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis,
  ChartComponent,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BarchartComponent {
  title = "angular-charts-demo";
  @ViewChild("chart2") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;
  public isRTL: boolean = false; // Set to true for right-to-left, false for left-to-right

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Stock d'ouverture",
          type: "column",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
          name: "Stock de clôture",
          type: "column",
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
      ],
      chart: {
        height: 494,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FF9720", "#11562D"],
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "Analyse des stocks ",
        align: this.isRTL ? "right" : "left",
      },
      xaxis: {
        categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#f1f1f1",
          },
          labels: {
            style: {
              color: "#0D0F19",
            },
          },
          title: {
            text: "Stock (Montant)",
            offsetX: 6,
            style: {
              color: "#FF9720",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "Revenu",
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#00E396",
          },
          labels: {
            style: {
              color: "#0D0F19",
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: this.isRTL ? "topRight" : "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "top",
      },
    };
  }
}
