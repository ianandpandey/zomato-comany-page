import { Component, OnInit } from '@angular/core';
import { ComponentNavigationService } from '../component-navigation.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {


  constructor(
    private apiService: ComponentNavigationService
  ) { }

  ngOnInit(): void {
  }

}
