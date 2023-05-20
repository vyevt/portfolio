import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csgo-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  cardActivate: boolean = false
  taskActivate: boolean = false
  toolbarActivate: boolean = false
  visitsActivate: boolean = false
  statsActivate: boolean = false
  statisticsActivate: boolean = false
  settingsActivate: boolean = false

  ngOnInit(): void {
    this.router.navigate([
      {
        outlets:
        {
          settings: 'settings'

          ,
          stats: 'stats'

          ,
          visits: 'visits'

          ,
          toolbar: 'toolbar_open'

          ,
          user_task: 'user-task'

          ,
          user_card: 'user-card'

        }
      }])
    console.log(this.router)
  }
  constructor(
    private cdRef: ChangeDetectorRef, private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }
}
