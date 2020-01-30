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

  tags = [
    {
      id: '1',
      categoryName: 'Fashion'
    },
    {
      id: '2',
      categoryName: 'Travel'
    },
    {
      id: '3',
      categoryName: 'Science'
    },
    {
      id: '4',
      categoryName: 'Culture'
    },
    {
      id: '5',
      categoryName: 'Planets'
    },
    {
      id: '6',
      categoryName: 'History'
    },
    {
      id: '7',
      categoryName: 'Movies'
    },
    {
      id: '8',
      categoryName: 'Something I did not know '
    },
    {
      id: '9',
      categoryName: 'Everything about everything'
    },
    {
      id: '10',
      categoryName: 'Celebrities'
    },
  ];
}
