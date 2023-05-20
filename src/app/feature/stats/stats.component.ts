import { Component,     ViewChild } from '@angular/core';
import { single } from './data';
 


@Component({
  selector: 'csgo-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {


  single: any[]=[
   
  ];

  constructor() {
    this.single = single; // Присвойте дані змінній single
  } 
  



}




