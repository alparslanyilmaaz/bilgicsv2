import { Component, OnInit, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-essay-cards-carousel',
  templateUrl: './essay-cards-carousel.component.html',
  styleUrls: ['./essay-cards-carousel.component.css']
})
export class EssayCardsCarouselComponent implements OnInit {
  @ViewChild('carousel', {static: false}) carousel;
  
  constructor() { }

  cardLimitSize = 600;
  defaultPageSize = 1;
  slides: any = [];
  totalPageCount: number = 1;
  
  ngOnInit() {
    this.checkScreenSizeAndSetCards(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkScreenSizeAndSetCards(event.target.innerWidth);
  }

  checkScreenSizeAndSetCards(width){
    if (width < this.cardLimitSize) {
      this.defaultPageSize = 1;
    }
    else {
      this.defaultPageSize = 4;
    }
    this.initSlides(this.defaultPageSize);
  }

  private initSlides(pageSize: number) {
    this.slides = this.chunk(this.cards, pageSize);
    this.totalPageCount = this.slides.length;
  }

  chunk(arr: any, chunkSize: any) {
    const tempArray = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      tempArray.push(arr.slice(i, i + chunkSize));
    }
    return tempArray;
  }

  moveNext(){
    this.carousel.next();
  }
  moveBefore(){
    this.carousel.pre();
  }

  //fake data
  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
}