import { Component } from '@angular/core';

@Component({
  selector: 'csgo-setting-table',
  templateUrl: './setting-table.component.html',
  styleUrls: ['./setting-table.component.scss']
})
export class SettingTableComponent {

  data=[{
    companyphoto:"assets/Table Cells-3.png",
    name:"Louis Vuitton",
    status:"Active",
    tybe:"Bravo",
    SKU:"9177",
    contactphoto:"assets/Ava-1.png",
    contactname:"Evan Flores",
    price:"452.85"
  },
  {
    companyphoto:"assets/Table Cells-2.png",
    name:"johnson & johnson",
    status:"Danger",
    tybe:"Alfa",
    SKU:"3064",
    contactphoto:"assets/Ava-2.png",
    contactname:"Ariene Wilson",
    price:"901.31"
  },
  {
    companyphoto:"assets/Table Cells-1.png",
    name:"Starbucks",
    status:"Pending",
    tybe:"Alfa",
    SKU:"9125",
    contactphoto:"assets/Ava.png ",
    contactname:"Jennie Cooper ",
    price:"501.31"
  },
  {
    companyphoto:"assets/Table Cells.png",
    name:"The Walt Disney",
    status:"Danger",
    tybe:"Alfa",
    SKU:"3128",
    contactphoto:"assets/Ava-3.png",
    contactname:"Philip Steward",
    price:"941.31"
  },
]
}
