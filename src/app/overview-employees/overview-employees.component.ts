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
      console.log('val ', val);
      this.selectedOption = val
      console.log('selectedOption ', this.selectedOption);
    })
  }

  changeTab(tabName: string) {
    console.log('tabame ', tabName);
    this.apiService.updateSelectedTab(tabName);
    this.selectedOption = tabName
  }

}
