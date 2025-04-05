import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  //sidebar menu activation start
menuSidebarActive:boolean=false;
myfunction(){
  if(this.menuSidebarActive==false){
    this.menuSidebarActive=true;
  }
  else {
    this.menuSidebarActive=false;
  }
}
//sidebar menu activation end

hide = true;

createForm!: FormGroup
submitted: any;


constructor(
  private _customerService: CustomerService,
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

public createCustomer() {
  this.submitted = true;
  if (!this.createForm.valid) {
    return ""
  }
  this._customerService.createCustomer(this.createForm.value).subscribe(res => {
  })
  return ""
}

}
