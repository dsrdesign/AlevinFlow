import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/features/customer/services/customer.service';
import { CustomerInterfaceData, customerData } from 'src/app/shared/utils/data/customerData';
import { DecesService } from '../../service/deces.service';
import { PurchaseInterfaceData } from 'src/app/shared/utils/data/purchaseData';
import { purchaseData } from 'src/app/inventual/data/purchaseData';

@Component({
  selector: 'app-listdeces',
  templateUrl: './listdeces.component.html',
  styleUrls: ['./listdeces.component.scss']
})
export class ListdecesComponent implements OnInit {
 

  displayedColumns: string[] = [
    'select',
     'id',
     'date',
     'alevin',
     'cycle',
     'quantite',
     'lot',
     'poids',
     'action',
   ];
   
  dataSource: MatTableDataSource<PurchaseInterfaceData>;
  selection = new SelectionModel<PurchaseInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _decesService: DecesService,
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(purchaseData);
  }

  allDeces: any[] = [];


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllDeces()

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

  getAllDeces(){
    this._decesService.getAllDeces().subscribe(res => {
      this.allDeces = res.data
    })
  }

  deleteDeces(id_deces: number){
    this._decesService.deleteDeces(id_deces).subscribe(res => {
      this.getAllDeces()
    })
  }
}


