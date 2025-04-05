import { Component } from '@angular/core';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss']
})
export class AddexpenseComponent {
//sidebar menu activation start
menuSidebarActive:boolean=false;
myfunction(){
  if(this.menuSidebarActive==false){
    this.menuSidebarActive=true;
  }
  else {
    this.menuSidebarActive=false;
  }
}
//sidebar menu activation end

hide = true;

  constructor() { }

  ngOnInit(): void {}

}

