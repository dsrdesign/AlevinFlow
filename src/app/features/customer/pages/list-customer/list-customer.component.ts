import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerInterfaceData, customerData } from 'src/app/inventual/data/customerData';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListCustomerComponent implements AfterViewInit {
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
  dataSource: MatTableDataSource<CustomerInterfaceData>;
  selection = new SelectionModel<CustomerInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  customers: any = [];

  constructor(
    private _customerService: CustomerService
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(customerData);
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
  checkboxLabel(row?: CustomerInterfaceData): string {
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

  ngOnInit(): void {
    this.getAllCustomer()
  }

  getAllCustomer(){
    this._customerService.getAllCustomer().subscribe(res => {
      this.customers = res.data
    })
  }

  deleteCustomer(id_customer: number){
    this._customerService.deleteCustomer(id_customer).subscribe(res => {
      this.getAllCustomer()
    })
  }
}

