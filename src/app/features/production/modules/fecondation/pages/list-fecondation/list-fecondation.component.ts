import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseInterfaceData, purchaseData } from 'src/app/inventual/data/purchaseData';
import { FecondationService } from '../../services/fecondation.service';

@Component({
  selector: 'app-list-fecondation',
  templateUrl: './list-fecondation.component.html',
  styleUrls: ['./list-fecondation.component.scss']
})
export class ListFecondationComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'geniteur',
    'poids_oeufs',
    'poids_males',
    'poids_femelles',
    'cycle',
    'action',
  ];
  dataSource: MatTableDataSource<PurchaseInterfaceData>;
  selection = new SelectionModel<PurchaseInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _fecondationService: FecondationService,
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(purchaseData);
  }

  fecondations: any[] = [];


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllFecondation()

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
  checkboxLabel(row?: PurchaseInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
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

  // ngOnInit(): void {
  //   this.getAllUser()
  // }

  getAllFecondation(){
    this._fecondationService.getAllFecondation().subscribe(res => {
      this.fecondations = res.data
    })
  }

  deleteFecondation(id_fecondation: number){
    this._fecondationService.deleteFecondation(id_fecondation).subscribe(res => {
      this.getAllFecondation()
    })
  }
}
