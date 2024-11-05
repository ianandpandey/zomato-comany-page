import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-employee-map',
  templateUrl: './employee-map.component.html',
  styleUrls: ['./employee-map.component.scss']
})
export class EmployeeMapComponent implements OnInit {
  mapOptions: EChartsOption = {};
  employeeData = {
    "US": 365,
    "RU": 220,
    "AU": 150,
    // Add more locations with employee counts
  };

  ngOnInit(): void {
    this.mapOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>Employee Count: {c}',
      },
      visualMap: {
        min: 0,
        max: 400, // Adjust based on your data range
        left: 'left',
        top: 'bottom',
        text: ['High', 'Low'],
        inRange: {
          color: ['#e0f7fa', '#006064'], // Color gradient for employee counts
        },
        calculable: true,
      },
      series: [
        {
          type: 'map',
          map: 'world',
          roam: true,
          data: [
            { name: 'United States', value: this.employeeData['US'] },
            { name: 'Russia', value: this.employeeData['RU'] },
            { name: 'Australia', value: this.employeeData['AU'] },
            // Add more country data here
          ],
        },
      ],
    };
  }
}
