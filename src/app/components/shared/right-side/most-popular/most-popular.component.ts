import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostPopularCards = [
    {
      id: '1',
      categoryName: 'Fashion',
      title: 'First of all that is a title',
      pictureUrl: 'https://images.pexels.com/photos/3363331/pexels-photo-3363331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: '2',
      categoryName: 'Travel',
      title: 'First of all that is a title',
      pictureUrl: 'https://images.pexels.com/photos/3363331/pexels-photo-3363331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    
    },
    {
      id: '3',
      categoryName: 'Science',
      title: 'First of all that is a title',
      pictureUrl: 'https://images.pexels.com/photos/3363331/pexels-photo-3363331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    
    }
  ];
}
