import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PurchaseInterfaceData, purchaseData } from 'src/app/inventual/data/purchaseData';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent {
  displayedColumns: string[] = [
    'select',
    'code',
    'nom',
    'action',
  ];
  dataSource: MatTableDataSource<PurchaseInterfaceData>;
  selection = new SelectionModel<PurchaseInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _roleService: RoleService,
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(purchaseData);
  }

  roles: any[] = [];


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRole()

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

  getAllRole(){
    this._roleService.getAllRole().subscribe(res => {
      this.roles = res.data
    })
  }

  deleteRole(id_role: number){
    this._roleService.deleteRole(id_role).subscribe(res => {
      this.getAllRole()
    })
  }

  downloadFile() {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.documentElement.innerHTML));
    element.setAttribute('download', 'fiche-candidat.html');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
