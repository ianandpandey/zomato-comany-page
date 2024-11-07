import { Component } from '@angular/core';
import { ComponentNavigationService } from '../component-navigation.service';


interface Competitor {
  name: string;
  logo: string;
  description: string;
  employees: number;
  funding: string;
}

@Component({
  selector: 'app-competitor-details',
  templateUrl: './competitor-details.component.html',
  styleUrls: ['./competitor-details.component.scss']
})
export class CompetitorDetailsComponent {

  selectedOption: String = '';


  competitors: Competitor[] = [
    { name: 'Swiggy', logo: 'https://res.cloudinary.com/dbmka9scm/image/upload/v1730873918/Swiggy_goz3iq.png', description: 'Restaurant Discovery Platform', employees: 2000, funding: '5M' },
    { name: 'Dunzo', logo: 'https://res.cloudinary.com/dbmka9scm/image/upload/v1730873918/Dunzo_b5csnl.png', description: 'Restaurant Discovery Platform', employees: 2000, funding: '5M' },
    { name: 'Eat Sure', logo: 'https://res.cloudinary.com/dbmka9scm/image/upload/v1730873918/EatSure_rkd7qz.png', description: 'Restaurant Discovery Platform', employees: 2000, funding: '5M' },
    { name: 'Just My Roots', logo: 'https://res.cloudinary.com/dbmka9scm/image/upload/v1730873919/JustMyRoots_nhclkj.png', description: 'Restaurant Discovery Platform', employees: 2000, funding: '5M' },
    { name: 'Deliveroo', logo: 'https://res.cloudinary.com/dbmka9scm/image/upload/v1730873918/Deliveroo_lfyybu.png', description: 'Restaurant Discovery Platform', employees: 2000, funding: '5M' },
    { name: 'Fresh Menu', logo: 'https://res.cloudinary.com/dbmka9scm/image/upload/v1730873919/freashMenu_la8xbh.png', description: 'Restaurant Discovery Platform', employees: 2000, funding: '5M' },
  ];


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
