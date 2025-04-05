import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.scss']
})
export class AddsupplierComponent {
  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end

  hide = true;

  createForm!: FormGroup
  submitted: any;


  constructor(
    private _supplierService: SupplierService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initialize()
   }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: [''],
      prenom: [''],
      email: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      telephone: [, [Validators.required]], // Initialisé à false par défaut
      fonction: ['', [Validators.required]], // Initialisé à false par défaut
      nom_entreprise: [''],
    });
  }

  public createSupplier() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._supplierService.createSupplier(this.createForm.value).subscribe(res => {
    })
    return ""
  }

}
