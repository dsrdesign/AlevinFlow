import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  AlimentInterfaceData,
} from 'src/app/inventual/data/productData';
import { PurchaseService } from '../../service/purchase.service';
import { AlimentService } from 'src/app/features/product/modules/aliment/services/aliment.service';
import { SupplierService } from 'src/app/features/supplier/services/supplier.service';
import { UserService } from 'src/app/features/user/services/user.service';

@Component({
  selector: 'app-addpurchase',
  templateUrl: './addpurchase.component.html',
  styleUrls: ['./addpurchase.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddpurchaseComponent implements AfterViewInit {
  createForm!: FormGroup
  submitted: any;
  displayedColumns: string[] = [
    'name',
    'type',
    'price',
    'stock',
    'quantity',
    'tax',
    'subTotal',
    'action',
  ];

  aliments!: AlimentInterfaceData[]
  dataSource: MatTableDataSource<AlimentInterfaceData> =
    new MatTableDataSource<AlimentInterfaceData>([]);
  totalAmount: number = 0;
  totalDiscount: number = 0;
  totalTax: number = 0;
  shippingValue: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  suppliers!: any[]
  users!: any[]

  constructor(
    private _formBuilder: FormBuilder,
    private _purchaseService: PurchaseService,
    private _supplierService: SupplierService,
    private _alimentService: AlimentService,
    private _userService: UserService
  ) {
    // Assign an empty array to the data source initially
    this.dataSource = new MatTableDataSource<AlimentInterfaceData>([]);
    this.calculateSubtotals();
    this.calculateTotalAmount();
    this.calculateTotalDiscount();
    this.calculateTotalTax();
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      date_achat: [, Validators.required],
      statut: ['', Validators.required],
      date_livraison: ['', [Validators.required]],
      prix_total: ['', [Validators.required]],
      id_fournisseur: ['', [Validators.required]],
      id_utilisateur: ['', [Validators.required]],
      id_recu: [],
    });

    this.getAllAliment()
    this.getAllSupplier()
    this.getAllUser()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  addProductToTable(product: AlimentInterfaceData) {
    this.dataSource.data = [product]; // Set the table data to contain only the selected product
    this.updateValues(); // Recalculate totals
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateSubtotal(product: AlimentInterfaceData): number {
    const price = product.prix_unitaire || 0;
    const quantity = product.quantite || 0;
    const tax = product.tax || 0;
    const discount = product.discount || 0;

    return (
      price * quantity +
      (price * quantity * tax) / 100 -
      (price * quantity * discount) / 100
    );
  }

  calculateSubtotals() {
    this.dataSource.data.forEach((product) => {
      product.prix_total = this.calculateSubtotal(product);
    });
  }
  calculateTotalAmount() {
    this.totalAmount = this.dataSource.data.reduce(
      (acc, product) => acc + product.prix_unitaire * product.quantite,
      0
    );
  }

  calculateTotalDiscount() {
    this.totalDiscount = this.dataSource.data.reduce(
      (acc, product) =>
        acc + (product.discount / 100) * product.prix_unitaire * product.quantite,
      0
    );
  }

  calculateTotalTax() {
    this.totalTax = this.dataSource.data.reduce(
      (acc, product) =>
        acc + (product.tax / 100) * product.prix_unitaire * product.quantite,
      0
    );
  }

  increaseQuantity(product: AlimentInterfaceData) {
    product.quantite += 1;
    this.updateValues();
  }

  decreaseQuantity(product: AlimentInterfaceData) {
    if (product.quantite > 1) {
      product.quantite -= 1;
      this.updateValues();
    }
  }

  updateValues() {
    this.calculateSubtotals();
    this.calculateTotalAmount();
    this.calculateTotalDiscount();
    this.calculateTotalTax();
  }
  removeProduct(product: AlimentInterfaceData) {
    const index = this.dataSource.data.indexOf(product);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data]; // Triggering change detection
      this.updateValues();
    }
  }

  ngOnInit(): void { 
    this.initialize()
  }

  searchResults: AlimentInterfaceData[] = [];

  updateSearchResults(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.searchResults = this.aliments.filter((product) =>
      product.nom.toLowerCase().includes(filterValue)
    );
  }

  // Function to toggle selected state of a product
  toggleSelected(product: AlimentInterfaceData) {
    product.selected = !product.selected;
    if (product.selected) {
      // Add the product to the table data if selected
      this.dataSource.data.push(product);
    } else {
      // Remove the product from the table data if deselected
      const index = this.dataSource.data.indexOf(product);
      if (index !== -1) {
        this.dataSource.data.splice(index, 1);
      }
    }
    this.dataSource.data = [...this.dataSource.data]; // Trigger change detection
    this.updateValues(); // Recalculate totals
  }

  // Function to add selected products to the table data
  addSelectedProductsToTable() {
    this.dataSource.data = [
      ...this.searchResults.filter((product) => product.selected),
    ];
    this.updateValues(); // Recalculate totals
  }

  // Function to hide the search results section
  hideSearchResults() {
    this.searchResults = []; // Clear the search results array
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

  getAllAliment() {
    this._alimentService.getAllAliment().subscribe(res => {
      this.aliments = res.data.map(aliment => ({
        id_aliment: aliment.id,
        nom: aliment.nom,
        image: 'assets/img/product/tab-8.png',
        type: aliment.type,
        quantite: 0,
        prix_unitaire: aliment.prix_unitaire,
        prix_total: 0,
        stock: aliment.stock,
        tax: 0,
        discount: 0,
        subTotal: 0,
        action: 'action',
        isFeatured: false,
        selected: false
      }));
    })
  }

  getAllSupplier() {
    this._supplierService.getAllSupplier().subscribe(res => {
      this.suppliers = res.data
      
    })
  }

  getAllUser() {
    this._userService.getAllUser().subscribe(res => {
      this.users = res.data
      
    })
  }

  public createAchat() {
    const grandTotal = this.totalAmount - this.totalDiscount + this.totalTax + this.shippingValue
    this.createForm.get("prix_total")?.setValue(grandTotal)
    this.submitted = true;
    console.log("Values : ", this.createForm.value);
    console.log("Alevins : ", this.dataSource.data);


    if (!this.createForm.valid) {
      return ""
    }



    const datas = { ...this.createForm.value, achat_aliments: this.dataSource.data }
    this._purchaseService.createPurchase(datas).subscribe(res => {

    })
    return ""
  }
}
