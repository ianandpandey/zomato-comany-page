import { Component } from '@angular/core';

@Component({
  selector: 'app-internal-navbar',
  templateUrl: './internal-navbar.component.html',
  styleUrls: ['./internal-navbar.component.scss'] // Add any styles here
})
export class InternalNavbarComponent {
  selectedOption: string = 'overview'; // Default selected option

  selectOption(option: string) {
    this.selectedOption = option; // Update the selected option
  }
}
