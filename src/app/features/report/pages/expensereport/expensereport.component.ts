import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExpenseReportInterfaceData, expenseReportData } from 'src/app/shared/utils/data/expenseReportData';
// import { ExpenseReportInterfaceData, expenseReportData } from '../../data/expenseReportData';

@Component({
  selector: 'app-expensereport',
  templateUrl: './expensereport.component.html',
  styleUrls: ['./expensereport.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpensereportComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'date',
    'warehouse',
    'category',
    'expenseType',
    'status',
    'amount',
  ];
  dataSource: MatTableDataSource<ExpenseReportInterfaceData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(expenseReportData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getClosingStock(): number {
    // Access the filtered data using this.dataSource.filteredData
    return (
      this.dataSource.filteredData
        // Use map to extract the price from each item
        .map((t: ExpenseReportInterfaceData) => t.amount)
        // Use reduce to sum up the prices
        .reduce((acc: number, value: number) => acc + value, 0)
    );
  }

//sidebar menu activation start
menuSidebarActive:boolean=false;
myfunction(){
  if(this.menuSidebarActive==false){
    this.menuSidebarActive=true;
  }
  else {
    this.menuSidebarActive=false;
  }
}
//sidebar menu activation end

  ngOnInit(): void {
  }

}
