import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalibrageService } from '../../service/calibrage.service';
import { EclosionService } from 'src/app/features/production/modules/eclosion/services/eclosion.service';
import { CycleService } from 'src/app/features/production/modules/cycle/services/cycle.service';

@Component({
  selector: 'app-addcalibrage',
  templateUrl: './addcalibrage.component.html',
  styleUrls: ['./addcalibrage.component.scss']
})
export class AddcalibrageComponent implements OnInit {
  
  createForm!: FormGroup
  submitted: any;
  cycles: any[] = [];
  aliments: any[] = []
  allAlevins: any[] = []
  alevins: any[] = []
  id_cycle!: number;


  constructor(
    private _calibrageService: CalibrageService,
    private _cycleService: CycleService,
    private _eclosionService: EclosionService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      date_calibrage: [, Validators.required],
      quantite: ['', Validators.required],
      id_alevinCycle: ['', [Validators.required]],
      id_nouveauCalibre: ['', [Validators.required]],

      id_cycle: ['', Validators.required],
    });

    this.getAllCycle() 
    this.getAllAlevinCycle()
  }

  getAllCycle() {
    this._cycleService.getAllCycle().subscribe(res => {
      this.cycles = res.data
    })
  }


  async filterAlevinByCycle() {
    console.log(" Cycle change ");
    await console.log("before : ", this.alevins, this.id_cycle);
    this.alevins = await this.allAlevins.filter(allAlevin => allAlevin.cycle.id == this.id_cycle)
    await console.log("after : ", this.alevins, this.id_cycle);
  }

  getAllAlevinCycle(){
    this._eclosionService.getAllEclosion().subscribe(res => {
      this.allAlevins = res.data
    })
  }


  public createCalibrage() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._calibrageService.createCalibrage(this.createForm.value).subscribe(res => {
      
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
  
  
  
