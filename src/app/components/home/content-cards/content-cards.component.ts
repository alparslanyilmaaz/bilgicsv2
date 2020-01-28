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
      cardCategory: 'Travel',
      title: 'Do you ever think, while you were sitting you are missing',
      description: 'Great memories comes with great places!',
      saveDate: '23.03.2020',
      imageUrl: 'https://images.pexels.com/photos/3363331/pexels-photo-3363331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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
      title: 'While you were thinking you got everything you wanted, this things maybe change your mind',
      description: 'Things can change sometime and this things will change your mind!',
      saveDate: '23.03.2020',
      imageUrl: 'https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: '4',
      cardCategory: 'Science',
      title: 'About viruses',
      description: 'Lately, in mother earth, most of things started to change',
      saveDate: '23.03.2020',
      imageUrl: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '5',
      cardCategory: 'Culture',
      title: 'Different cultures makes you belive different ideas',
      description: 'This cultures maybe not the greatest things!',
      saveDate: '23.03.2020',
      imageUrl: 'https://images.pexels.com/photos/3393444/pexels-photo-3393444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ];
}
