import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/features/role/services/role.service';
import { IRoleGet } from 'src/app/features/role/interfaces/role.interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdduserComponent implements OnInit {

  createForm!: FormGroup
  submitted: any;

  roles: IRoleGet[] = []

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _roleService: RoleService,

  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      telephone: [, [Validators.required]], // Initialisé à false par défaut
      fonction: ['', [Validators.required]], // Initialisé à false par défaut
      mot_de_passe: ['', [Validators.required]], // Initialisé à false par défaut
      statut: ['ACTIF', [Validators.required]], // Initialisé à false par défaut
      id_role: ['', [Validators.required]],
    });

    this.getAllRole()
  }


  public createUser() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._userService.createUser(this.createForm.value).subscribe(res => {
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

  getAllRole(){
    this._roleService.getAllRole().subscribe(roles => {
      this.roles = roles.data
    })
  }

}
