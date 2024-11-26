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
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
      },
      {
        id: 2,
        title: 'Marketing Manager',
        department: 'Marketing',
        postedDate: '2024-10-20',
        location: 'Mumbai',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat'
      },
      {
        id: 3,
        title: 'HR Specialist',
        department: 'HR',
        location: 'Mumbai',
        postedDate: '2024-09-15',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
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
