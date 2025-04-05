import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import { DashboardService } from "src/app/features/dashboard/services/dashboard.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PiechartComponent implements OnInit{
  @ViewChild("chart4") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

  dashboard!: any[]
  alevins: string[] = []
  pourcentageAlevins: string[] = []
  constructor(private _dashboardService: DashboardService) {
    
  }

  ngOnInit(): void {
   this.getDasboard() 
   console.log("Alevin : ", this.alevins);
   // this.getDasboard()
   
  }

  async getDasboard() {
    await this._dashboardService.getDashboard().subscribe(res => {
      this.dashboard = res.stockPourcentageAlevin.data
      this.dashboard.map(res => {
        console.log("res : ", res?.grammage);
        this.alevins.push(res.grammage)
        this.pourcentageAlevins.push(res.percentage)
      })
      console.log("Alevin : ", this.alevins);

      this.chartOptions = {
        series: this.pourcentageAlevins,
        chart: {
          width: 350,
          type: "pie"
        },
        labels: this.alevins,
        responsive: [
          {
            breakpoint: 575,
            options: {
              chart: {
                width: 350
              },
              legend: {
                position: "bottom"
              }
            }
          },
          {
            breakpoint: 400,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: "bottom"
              }
            }
          },
          {
            breakpoint: 350,
            options: {
              chart: {
                width: 280
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    })

   
    
  }
}
