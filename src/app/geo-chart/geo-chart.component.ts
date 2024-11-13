// geo-chart.component.ts
import { Component, OnInit, ElementRef } from '@angular/core';

declare var google: any;  // Declaring google as a global variable

@Component({
  selector: 'app-geo-chart',
  // template: `<div id="regions_div"></div>`,
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    google.charts.load('current', {
      packages: ['geochart'],
    });
    google.charts.setOnLoadCallback(this.drawRegionsMap.bind(this));
  }

  drawRegionsMap() {
    const data = google.visualization.arrayToDataTable([
      ['Country', 'Employees'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700],
      ['AU', 100]
    ]);

    const options = {
      colorAxis: { colors: ['#E5F3FD', '#0B4F82'] },  // Blue shades based on values
      legend: { position: 'center' },  // Set legend position here
      magnifyingGlass: {enable: true, zoomFactor: 7.5},

    };

    const chart = new google.visualization.GeoChart(
      this.elRef.nativeElement.querySelector('#regions_div')
    );

    chart.draw(data, options);
  }
}
