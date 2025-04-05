import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { BillerInterfaceData, billerData } from '../../data/billerData';


@Component({
  selector: 'app-billerlist',
  templateUrl: './billerlist.component.html',
  styleUrls: ['./billerlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BillerlistComponent implements AfterViewInit {

  displayedColumns: string[] = ['select', 'name', 'phone', 'email', 'billerCode', 'address', 'action' ];
  dataSource: MatTableDataSource<BillerInterfaceData>;
  selection = new SelectionModel<BillerInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(billerData);
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
  checkboxLabel(row?: BillerInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.billerCode + 1}`;
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

  ngOnInit(): void {}

}
