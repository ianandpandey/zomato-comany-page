import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobPostings: any[] = [];
  filteredJobPostings: any[] = [];
  departments: string[] = ['Engineering', 'Marketing', 'Sales', 'HR']; // Example department options
  selectedDepartment: string = '';
  selectedDateRange: string = 'This Month';

  constructor() { }

  ngOnInit(): void {
    this.fetchJobs();
  }

  fetchJobs(): void {
    // Static job data for testing
    this.jobPostings = [
      {
        id: 1,
        title: 'Software Engineer',
        department: 'Engineering',
        postedDate: '2024-11-01',
        
        location: 'new delhi',
        description: 'Develop and maintain software applications.'
      },
      {
        id: 2,
        title: 'Marketing Manager',
        department: 'Marketing',
        postedDate: '2024-10-20',
        description: 'Plan and execute marketing strategies.'
      },
      {
        id: 3,
        title: 'HR Specialist',
        department: 'HR',
        postedDate: '2024-09-15',
        description: 'Manage recruitment and employee relations.'
      }
    ];
    this.applyFilters(); // Apply initial filter
  }
  
  applyFilters(): void {
    this.filteredJobPostings = this.jobPostings.filter(job => {
      const departmentMatch = this.selectedDepartment ? job.department === this.selectedDepartment : true;
      const dateMatch = this.filterByDate(job.postedDate);
      return departmentMatch && dateMatch;
    });
  }

  filterByDate(postedDate: string): boolean {
    // Implement date filtering logic based on selectedDateRange
    return true; // For now, allow all dates
  }
}
