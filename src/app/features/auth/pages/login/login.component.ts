import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ILogin } from '../../models/login.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  hide = true;

  form: FormGroup = new FormGroup({
    matricule: new FormControl(''),
    mot_de_passe: new FormControl(''),
  });


  isSignInSuccessful = false;
  isSignInFailed = false;
  errorMessage = '';
  submitted = false;

  password: any;
  show = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _auth: AuthService,
    private _formBuilder: FormBuilder,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.form = this._formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        mot_de_passe: ['',[Validators.required]
        ],
      }
    );
  }


   // Connexion d'un utilisateur 
   signIn(value: ILogin): void {
    this.submitted = true;
    this._auth.login(value).subscribe({
     
    });
  }

}
