import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NutritionService } from 'src/app/features/nutrition/service/nutrition.service';
import { AlimentService } from '../../services/aliment.service';

@Component({
  selector: 'app-addaliment',
  templateUrl: './addaliment.component.html',
  styleUrls: ['./addaliment.component.scss']
})
export class AddalimentComponent implements OnInit {

  createForm!: FormGroup
  submitted: any;
  aliments: any[] = []
  categories: any;


  constructor(
    private _alimentService: AlimentService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      categorie: ['', [Validators.required]],
      prix_unitaire: [, [Validators.required]], // Initialisé à false par défaut
    });
  }

  public createAliment() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._alimentService.createAliment(this.createForm.value).subscribe(res => {

    })
    return ""
  }



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
}


