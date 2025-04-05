import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { purchaseData, PurchaseInterfaceData } from 'src/app/shared/utils/data/purchaseData';
import { GeniteurService } from '../../services/geniteur.service';

@Component({
  selector: 'app-list-geniteur',
  templateUrl: './list-geniteur.component.html',
  styleUrls: ['./list-geniteur.component.scss']
})
export class ListGeniteurComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'intitule',
    'poids_male',
    'poids_femelle',
    'achat',
    'action',
  ];
  dataSource: MatTableDataSource<PurchaseInterfaceData>;
  selection = new SelectionModel<PurchaseInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _geniteurService: GeniteurService,
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(purchaseData);
  }

  geniteurs: any[] = [];


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllGeniteur()

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

  getAllGeniteur(){
    this._geniteurService.getAllGeniteur().subscribe(res => {
      this.geniteurs = res.data
    })
  }

  deleteGeniteur(id_geniteur: number){
    this._geniteurService.deleteGeniteur(id_geniteur).subscribe(res => {
      this.getAllGeniteur()
    })
  }
}
