import { Component, OnInit } from '@angular/core';
import { ComponentNavigationService } from '../component-navigation.service';


@Component({
  selector: 'app-overview-employees',
  templateUrl: './overview-employees.component.html',
  styleUrls: ['./overview-employees.component.scss']
})
export class OverviewEmployeesComponent implements OnInit {

  selectedOption: String = '';


  constructor(

    private apiService: ComponentNavigationService

  ) { }


  ngOnInit(): void {

    this.apiService.selectedTab$.subscribe((val) => {
      this.selectedOption = val
    })
  }

  changeTab(tabName: string) {
    this.apiService.updateSelectedTab(tabName);
    this.selectedOption = tabName
  }

}
