import { Component } from '@angular/core';

interface task{
  title:string,
  quantity:string,
  icon:string
}
@Component({
  selector: 'csgo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  tasks: task[] = [{ title: "Home", quantity: "0" ,icon:"assets/home.svg" },
  { title: "Calendar", quantity: "0" ,icon:"assets/calendar.svg"},
  { title: "Messages", quantity: "22" ,icon:"assets/message-square.svg"},
  { title: "Projects", quantity: "0" ,icon:"assets/projects.svg"},
  { title: "Progress", quantity: "0" ,icon:"assets/progress.svg"},
  { title: "Goals", quantity: "0" ,icon:"assets/goals.svg"},
  { title: "Settings", quantity: "0" ,icon:"assets/settings.svg"},
  ]
}
