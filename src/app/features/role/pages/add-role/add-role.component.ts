import { Component } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {
  createForm!: FormGroup
  submitted: any;
  roles: any[] = []
  categories: any;


  constructor(
    private _roleService: RoleService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  public createRole() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._roleService.createRole(this.createForm.value).subscribe(res => {

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
