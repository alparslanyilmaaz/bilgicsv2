import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() cards:any[];
  slides:any[];

  ngOnInit() {
  }

  navigateURL(url:string){
    this.router.navigateByUrl('/content/'+url);
  }
}
