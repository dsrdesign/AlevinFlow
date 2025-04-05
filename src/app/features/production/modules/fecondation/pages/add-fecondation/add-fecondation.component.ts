import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeniteurService } from 'src/app/features/product/modules/geniteur/services/geniteur.service';
import { CycleService } from '../../../cycle/services/cycle.service';
import { FecondationService } from '../../services/fecondation.service';

@Component({
  selector: 'app-add-fecondation',
  templateUrl: './add-fecondation.component.html',
  styleUrls: ['./add-fecondation.component.scss']
})
export class AddFecondationComponent {
  createForm!: FormGroup
  submitted: any;
  cycles: any[] = [];
  aliments: any[] = []
  allAlevins: any[] = []
  alevins: any[] = []
  geniteurs: any = []

  id_cycle!: number;


  constructor(
    private _fecondationServeice: FecondationService,
    private _cycleService: CycleService,
    private _geniteurService: GeniteurService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      date_intervation: [, [Validators.required]],
      poids_des_oeufs: [, [Validators.required]],
      poids_des_males: [], // Initialisé à false par défaut
      poids_des_femelles: [], // Initialisé à false par défaut
      id_geniteur: [, [Validators.required]], // Initialisé à false par défaut
      id_cycle: [, [Validators.required]], // Initialisé à false par défaut
    });

    this.getAllCycle()
    this.getAllGeniteur()
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

  async filterAlevinByCycle() {
    console.log(" Cycle change ");
    await console.log("before : ", this.alevins, this.id_cycle);
    this.alevins = await this.allAlevins.filter(allAlevin => allAlevin.cycle.id == this.id_cycle)
    await console.log("after : ", this.alevins, this.id_cycle);
  }

  public createFecondation() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._fecondationServeice.createFecondation(this.createForm.value).subscribe(res => {

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
