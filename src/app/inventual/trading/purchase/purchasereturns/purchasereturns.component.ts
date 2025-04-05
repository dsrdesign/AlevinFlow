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
import {
  PurchaseReturnsInterfaceData,
  purchaseReturnsData,
} from 'src/app/inventual/data/purchaseReturnsData';
import { PurchaseReturnsComponent } from '../popup/purchase-returns/purchase-returns.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-purchasereturns',
  templateUrl: './purchasereturns.component.html',
  styleUrls: ['./purchasereturns.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurchasereturnsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'date',
    'reference',
    'supplier',
    'warehouse',
    'amount',
    'remark',
    'action',
  ];
  dataSource: MatTableDataSource<PurchaseReturnsInterfaceData>;
  selection = new SelectionModel<PurchaseReturnsInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(purchaseReturnsData);
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
  checkboxLabel(row?: PurchaseReturnsInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }

  ngOnInit(): void {}

  purchaseReturns() {
    this.dialog.open(PurchaseReturnsComponent);
  }

  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    } else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end
}
