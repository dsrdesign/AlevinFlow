import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserInterfaceData, userData } from 'src/app/inventual/data/userData';
import { CycleService } from '../../services/cycle.service';

@Component({
  selector: 'app-list-cycle',
  templateUrl: './list-cycle.component.html',
  styleUrls: ['./list-cycle.component.scss']
})
export class ListCycleComponent {
  displayedColumns: string[] = [
    'select',
    'id',
    'nom',
    'date_debut',
    'date_fin',
    'statut',
    // 'address',
    'action',
  ];
  dataSource: MatTableDataSource<UserInterfaceData>;
  selection = new SelectionModel<UserInterfaceData>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _cycleService: CycleService,
  ) {
    // Assign your data array to the data source
    this.dataSource = new MatTableDataSource(userData);
  }

  cycles: any[] = [];


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllCycle()

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
  checkboxLabel(row?: UserInterfaceData): string {
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


  getAllCycle(){
    this._cycleService.getAllCycle().subscribe(res => {
      this.cycles = res.data
    })
  }

  deleteCycle(id_cycle: number){
    this._cycleService.deleteCycle(id_cycle).subscribe(res => {
      this.getAllCycle()
    })
  }

  updateStatutCycle(id_cycle: number, statut: string){
    this._cycleService.updateStatusCycle(id_cycle, statut).subscribe(res => {
      this.getAllCycle()
    })
  }
}
