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
// import { AddpaymentComponent } from '../../popup/addpayment/addpayment.component';
import { MatDialog } from '@angular/material/dialog';
// import { ViewpaymentComponent } from '../../popup/viewpayment/viewpayment.component';
import { InvoiceComponent } from '../../components/invoice/invoice.component';
import { SaleInterfaceData} from 'src/app/shared/utils/data/saleData';
import { SaleService } from '../../services/sale.service';

@Component({
  selector: 'app-managesale',
  templateUrl: './managesale.component.html',
  styleUrls: ['./managesale.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManagesaleComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'reference',
    'date',
    'statut',
    'date de livraison',
    'client',
    'vendeur',
    'total',
    'action',
  ];
  sales! : SaleInterfaceData[]
  dataSource!: MatTableDataSource<SaleInterfaceData>;
  selection = new SelectionModel<SaleInterfaceData>(true, []);


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _saleService: SaleService,
    public dialog: MatDialog,

  ) {
    // Assign your data array to the data source
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
  checkboxLabel(row?: SaleInterfaceData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
  //checkbox end

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

  // addPayment() {
  //   this.dialog.open(AddpaymentComponent);
  // }

  // viewPayment() {
  //   this.dialog.open(ViewpaymentComponent);
  // }

  invoice() {
    this.dialog.open(InvoiceComponent);
  }

  getAllSale(){
    this._saleService.getAllSale().subscribe(res => {
      this.sales = res.data
    })
  }

  deleteSale(id_sale: number){
    this._saleService.deleteSale(id_sale).subscribe(res => {
      this.getAllSale()
    })
  }

  ngOnInit(): void {
    this.getAllSale()
    this.dataSource = new MatTableDataSource(this.sales);

  }
}
