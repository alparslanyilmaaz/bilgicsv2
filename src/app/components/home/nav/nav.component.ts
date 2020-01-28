import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  isActive: boolean = false;
  ngOnInit() {
    this.isActive= false;
  }

  showNavigation(){
    if(this.isActive){
      this.isActive = false;
    }
    else{
      this.isActive = true;
    }

    console.log(this.isActive);
  }

}
