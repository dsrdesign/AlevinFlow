import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/features/dashboard/services/dashboard.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  constructor(private _dashboardService: DashboardService) { }
  dashboard!: any

  ngOnInit(): void {
    this.getDasboard()
  }

  getDasboard() {
    this._dashboardService.getDashboard().subscribe(res => {
      this.dashboard = res
    })
  }

}
