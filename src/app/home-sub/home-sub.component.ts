import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-sub',
  templateUrl: './home-sub.component.html',
  styleUrls: ['./home-sub.component.css']
})
export class HomeSubComponent implements OnInit {
title : string = 'PA13';
  constructor() { 
  }
  ngOnInit() {
  }

}
