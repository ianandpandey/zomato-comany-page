import { Component, OnInit } from '@angular/core';
import { ComponentNavigationService } from '../component-navigation.service';


@Component({
  selector: 'app-overview-company-products',
  templateUrl: './overview-company-products.component.html',
  styleUrls: ['./overview-company-products.component.scss']
})
export class OverviewCompanyProductsComponent implements OnInit {

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
