import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SaleReturnsInterfaceData, saleReturnsData } from 'src/app/inventual/data/saleReturnsData';
import { MatDialog } from '@angular/material/dialog';
import { SaleReturnsComponent } from '../popup/sale-returns/sale-returns.component';

@Component({
  selector: 'app-salereturns',
  templateUrl: './salereturns.component.html',
  styleUrls: ['./salereturns.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SalereturnsComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'select',
    'date',
    'reference',
    'customer',
    'warehouse',
    'biller',
    'total',
    'remark',
    'action',
  ];
  dataSource: MatTableDataSource<SaleReturnsInterfaceData>;
  selection = new SelectionModel<SaleReturnsInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(saleReturnsData);
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SaleReturnsInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  ngOnInit(): void {}

  saleReturns() {
    this.dialog.open(SaleReturnsComponent);
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

}
