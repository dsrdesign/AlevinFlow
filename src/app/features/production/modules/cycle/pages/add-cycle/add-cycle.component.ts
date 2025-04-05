import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/features/user/services/user.service';
import { Router } from '@angular/router';
import { CycleService } from '../../services/cycle.service';

@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.scss']
})
export class AddCycleComponent {

  createForm!: FormGroup
submitted: any;

  constructor(
    private _cycleService: CycleService,
    private _toastrService: ToastrService,
    private _formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void { 
    this.initialize()
  }

  initialize() {
    this.createForm = this._formBuilder.group({
      nom: ['', Validators.required],
      date_debut: ['', Validators.required],
    });
  }


  public createCycle() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return ""
    }
    this._cycleService.createCycle(this.createForm.value).subscribe(res => {
      this.router.navigate(['/productions'])
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
