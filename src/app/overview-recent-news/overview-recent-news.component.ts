import { Component, OnInit } from '@angular/core';
import { ComponentNavigationService } from '../component-navigation.service';


@Component({
  selector: 'app-overview-recent-news',
  templateUrl: './overview-recent-news.component.html',
  styleUrls: ['./overview-recent-news.component.scss']
})
export class OverviewRecentNewsComponent implements OnInit {


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
