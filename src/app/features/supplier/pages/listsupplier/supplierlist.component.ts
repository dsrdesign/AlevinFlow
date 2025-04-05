import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierInterfaceData, supplierData } from 'src/app/inventual/data/supplierData';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SupplierlistComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'id',
    'nom',
    'prénom',
    'email',
    'tél',
    'adresse',
    'fonction',
    'nom entreprise',
    'statut',
    'action',
  ];
  dataSource: MatTableDataSource<SupplierInterfaceData>;
  selection = new SelectionModel<SupplierInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  suppliers: any = [];

  constructor(
    private _supplierService: SupplierService
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(supplierData);
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
  checkboxLabel(row?: SupplierInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.supplierCode + 1
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

  ngOnInit(): void {
    this.getAllSupplier()
  }

  getAllSupplier(){
    this._supplierService.getAllSupplier().subscribe(res => {
      this.suppliers = res.data
    })
  }

  deleteSupplier(id_supplier: number){
    this._supplierService.deleteSupplier(id_supplier).subscribe(res => {
      this.getAllSupplier()
    })
  }
}


