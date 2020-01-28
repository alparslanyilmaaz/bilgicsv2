import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  cards = [
    {
      id: '1',
      cardCategory: 'Fashion',
      title: 'For illustirator Doris Liou "drawings are about what you want to show others"',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      saveDate: '23.03.2020',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      id: '2',
      cardCategory: 'Interviews',
      title: 'For illustirator Doris Liou "drawings are about what you want to show others"',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      saveDate: '23.03.2020',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5RacK_e90cHMoXw7GXmn65K1IkTuH8WyHpXljEJeEtu-Hj1zG'
    },
    {
      id: '3',
      cardCategory: 'Gossip',
      title: 'For illustirator Doris Liou "drawings are about what you want to show others"',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      saveDate: '23.03.2020',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      id: '4',
      cardCategory: 'Science',
      title: 'For illustirator Doris Liou "drawings are about what you want to show others"',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      saveDate: '23.03.2020',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      id: '5',
      cardCategory: 'None',
      title: 'For illustirator Doris Liou "drawings are about what you want to show others"',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      saveDate: '23.03.2020',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
}
