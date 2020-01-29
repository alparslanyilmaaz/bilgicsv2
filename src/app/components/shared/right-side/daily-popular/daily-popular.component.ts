import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-popular',
  templateUrl: './daily-popular.component.html',
  styleUrls: ['./daily-popular.component.css']
})
export class DailyPopularComponent implements OnInit {

  constructor() { }
  slides: any = [];
  cardLimitSize = 600;
  defaultPageSize = 1;
  totalPageCount = 1;
  
  ngOnInit() {
    this.initSlides(this.defaultPageSize);
  }

  private initSlides(pageSize: number) {
    this.slides = this.chunk(this.items, pageSize);
    this.totalPageCount = this.slides.length;
  }

  chunk(arr: any, chunkSize: any) {
    const tempArray = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      tempArray.push(arr.slice(i, i + chunkSize));
    }
    return tempArray;
  }

  items = [
    {
      id: '1',
      cardCategory: 'Fashion',
      title: 'Did you know penguins used to fly in ancient times!'
    },
    {
      id: '2',
      title: 'Space mission ended sadly during this week :('
    },
    {
      id: '3',
      title: 'Beyond music, The BEATLES'
    },
    {
      id: '4',
      title: 'In universites this methods will end your lonely nights!'
    },
    {
      id: '5',
      title: 'How could such a creature Survive in such a habitat? Can you explain :)'
    },
  ];
}

