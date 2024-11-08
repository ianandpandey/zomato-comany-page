import { Component } from '@angular/core';
import { ComponentNavigationService } from '../component-navigation.service';


@Component({
  selector: 'app-internal-navbar',
  templateUrl: './internal-navbar.component.html',
  styleUrls: ['./internal-navbar.component.scss'] // Add any styles here
})
export class InternalNavbarComponent {
  selectedOption: string = '';

  constructor(
    private apiService: ComponentNavigationService
  ) { }


  ngOnInit(): void {

    this.apiService.updateSelectedTab('overview');

    this.apiService.selectedTab$.subscribe((val) => {
      this.selectedOption = val
    })
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.apiService.updateSelectedTab(option); //to update service file with updated value
}
}
