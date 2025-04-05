import { Component } from '@angular/core';
import { CalibreService } from '../../service/calibre.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-calibre',
  templateUrl: './add-calibre.component.html',
  styleUrls: ['./add-calibre.component.scss']
})
export class AddCalibreComponent {
  createForm!: FormGroup
  submitted: any;
  calibres: any[] = []
  categories: any;


  constructor(
    private _calibreService: CalibreService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      grammage: ['', Validators.required],
      prix_unitaire: [, [Validators.required]], // Initialisé à false par défaut
    });
  }

  public createCalibre() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._calibreService.createCalibre(this.createForm.value).subscribe(res => {

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
