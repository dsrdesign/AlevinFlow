import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IRoleGet } from 'src/app/features/role/interfaces/role.interface';
import { RoleService } from 'src/app/features/role/services/role.service';
import { IUserGet } from 'src/app/features/user/interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  profil!: IUserGet
  roles!: IRoleGet[]
  //sidebar menu activation start
  menuSidebarActive: boolean = false;
  isProfileEnabled: boolean = false;
  myfunction() {
    if (this.menuSidebarActive == false) {
      this.menuSidebarActive = true;
    }
    else {
      this.menuSidebarActive = false;
    }
  }

  editProfileEnable() {
    if (this.isProfileEnabled == false) {
      this.isProfileEnabled = true;
    }
    else {
      this.isProfileEnabled = false;
    }
  }

  //sidebar menu activation end
  hide = true;
  constructor(private _roleService: RoleService,) { }
  ngOnInit(): void {
    this.profil = JSON.parse(localStorage.getItem("user") || "")
    this.getAllRole()
  }

  getAllRole() {
    this._roleService.getAllRole().subscribe(roles => {
      this.roles = roles.data
    })
  }

}
