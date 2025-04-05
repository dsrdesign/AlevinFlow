import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeniteurService } from '../../services/geniteur.service';

@Component({
  selector: 'app-addgeniteur',
  templateUrl: './addgeniteur.component.html',
  styleUrls: ['./addgeniteur.component.scss']
})
export class AddgeniteurComponent implements OnInit {

  constructor(
    private _geniteurService: GeniteurService,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void { 
    this.initialize()
  }

  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  createForm!: FormGroup;
  submitted: any;

  initialize() {
    this.createForm = this._formBuilder.group({
      intitule: ['', [Validators.required]],
      poids_male: [],
      poids_femelle: [],
      poids_oeufs: [],
      poids_testicules: [], // Initialisé à false par défaut
    });
  }

  public createGeniteur() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._geniteurService.createGeniteur(this.createForm.value).subscribe(res => {

    })
    return ""
  }


  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }
  //sidebar menu activation end

  showWarehouseRow: boolean = false;


  toggleWarehouseRow(event: any) {
    this.showWarehouseRow = event.target.checked;
  }

  @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;
  selectedItemCount: number = 0;

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      this.selectedItemCount += files.length;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('image-container');

          const img = document.createElement('img');
          img.src = reader.result as string;
          img.classList.add('uploaded-item', 'h-[60px]');

          const deleteIcon = document.createElement('span');
          deleteIcon.classList.add('delete-icon');
          deleteIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
          deleteIcon.onclick = () => {
            imgContainer.remove();
            this.selectedItemCount--;
          };

          imgContainer.appendChild(img);
          imgContainer.appendChild(deleteIcon);

          this.imageContainer.nativeElement.appendChild(imgContainer);
        };
        // Read the file as a data URL
        reader.readAsDataURL(file);
      }
    }
  }






}

