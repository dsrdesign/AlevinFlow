import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUserGet } from 'src/app/features/user/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profil!: IUserGet
  //short menu activation start
  menuShortcutActive: boolean = false;
  shortmenu() {
    if (this.menuShortcutActive == false) {
      this.menuShortcutActive = true;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
    else {
      this.menuShortcutActive = false;
    }
  }
  //short menu activation end

  //short menu activation start
  notifyShortcutActive: boolean = false;
  notifydropdown() {
    if (this.notifyShortcutActive == false) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = true;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
    else {
      this.notifyShortcutActive = false;
    }
  }
  //short menu activation end

  //short menu activation start
  emailShortcutActive: boolean = false;
  emaildropdown() {
    if (this.emailShortcutActive == false) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = true;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
    else {
      this.emailShortcutActive = false;

    }
  }
  //short menu activation end

  //short menu activation start
  langShortcutActive: boolean = false;
  langdropdown() {
    if (this.langShortcutActive == false) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = true;
      this.proShortcutActive = false;
    }
    else {
      this.langShortcutActive = false;

    }
  }
  //short menu activation end

  //short menu activation start
  proShortcutActive: boolean = false;
  prodropdown() {
    if (this.proShortcutActive == false) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = true;
    }
    else {
      this.proShortcutActive = false;

    }
  }
  //short menu activation end

  constructor(
    private _router: Router,
    private _toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.profil  = JSON.parse(localStorage.getItem("user") || "")
  }


  async logout() {
    await localStorage.clear()
    await this._router.navigateByUrl('/auth/login');
    this._toastrService.info("Vous êtes déconnecté !", "Info")
  }
}
