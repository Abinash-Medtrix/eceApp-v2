import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeList: any[]=[
    {
      "name" : "PA13",
      "img" : "assets/images/lungs.png",
      "link" : "/homesub"
    },

    {
      "name" : "PA14",
      "img" : "assets/images/heart.png"
    },

    {
      "name" : "PA15",
      "img" : "assets/images/brain.png"
    },
    {
      "name" : "PA16",
      "img" : "assets/images/liver.png"
    },

  ];


  

  constructor() { }

  ngOnInit() {
  }

}
