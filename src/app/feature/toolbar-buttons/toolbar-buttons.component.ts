import { Component } from '@angular/core';
interface Buttons {
  title: string,
  quantity: string,
  icon: string,
  open_arrow?: true,
  bg_color:string
}
@Component({
  selector: 'csgo-toolbar-buttons',
  templateUrl: './toolbar-buttons.component.html',
  styleUrls: ['./toolbar-buttons.component.scss']
})
export class ToolbarButtonsComponent {
  buttons: Buttons[] = [

    { title: "To be Fulfilled", quantity: "56", icon: "assets/red.svg", open_arrow: true, bg_color:"red"},
    { title: "To be Invoiced", quantity: "24", icon: "assets/blue.svg", bg_color:"blue"},
    { title: "Completed", quantity: "12", icon: "assets/green.svg", open_arrow: true ,bg_color:"green"},
    { title: "Assigned to me", quantity: "3", icon: "assets/purple.svg" ,bg_color:"purple"}
  ]
}
