import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csgo-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
   cardActivate:boolean=false
  taskActivate:boolean=false
  toolbarActivate:boolean=false
  visitsActivate:boolean=false
  statsActivate:boolean=false
  statisticsActivate:boolean=false
  settingsActivate:boolean=false
 
  ngOnInit(): void {
  }
  constructor(
    private cdRef: ChangeDetectorRef   
  ) { }

  ngAfterViewInit(): void {
     this.cdRef.detectChanges(); 
  }
}
