import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NutritionService } from '../../service/nutrition.service';
import { CycleService } from 'src/app/features/production/modules/cycle/services/cycle.service';
import { GeniteurService } from 'src/app/features/product/modules/geniteur/services/geniteur.service';

@Component({
  selector: 'app-addnutrition',
  templateUrl: './addnutrition.component.html',
  styleUrls: ['./addnutrition.component.scss']
})
export class AddnutritionComponent implements OnInit {

  createForm!: FormGroup
  submitted: any;
  cycles: any[] = [];
  aliments: any[] = []
  allAlevins: any[] = []
  alevins: any[] = []
  geniteurs: any = []

  id_cycle!: number;


  constructor(
    private _nutritionServeice: NutritionService,
    private _cycleService: CycleService,
    private _geniteurService: GeniteurService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      quantite_aliment: [, Validators.required],
      heure: ['', Validators.required],
      date_nutrition: ['', [Validators.required]],
      id_aliment: ['', [Validators.required]],
      id_geniteur: [], // Initialisé à false par défaut
      id_alevinCycle: [], // Initialisé à false par défaut
      id_cycle: ['', [Validators.required]], // Initialisé à false par défaut
    });

    this.getAllCycle()
    this.getAllGeniteur()
    this.getAllAliment()
    this.getAllAlevinCycle()
  }

  getAllCycle() {
    this._cycleService.getAllCycle().subscribe(res => {
      this.cycles = res.data
    })
  }

  getAllGeniteur() {
    this._geniteurService.getAllGeniteur().subscribe(res => {
      this.geniteurs = res.data
    })
  }

  getAllAliment() {
    this._nutritionServeice.getAllAliment().subscribe(res => {
      this.aliments = res.data
    })
  }

  async filterAlevinByCycle() {
    console.log(" Cycle change ");
    await console.log("before : ", this.alevins, this.id_cycle);
    this.alevins = await this.allAlevins.filter(allAlevin => allAlevin.cycle.id == this.id_cycle)
    await console.log("after : ", this.alevins, this.id_cycle);
  }

  getAllAlevinCycle() {
    this._nutritionServeice.getAllAlevinCycle().subscribe(res => {
      this.allAlevins = res.data
    })
  }


  public createNutrition() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._nutritionServeice.createNutrition(this.createForm.value).subscribe(res => {

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
