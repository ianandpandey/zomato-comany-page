import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.scss'],
})
export class SankeyChartComponent implements OnInit {
  chartOptions: EChartsOption = {};

  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    this.chartOptions = {
      // title: {
      //   text: 'Acquisitions',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'sankey',
          emphasis: {
            focus: 'adjacency'
          },
          nodeGap: 30,
          nodeWidth: 20,
          label: {
            color: '#000',
            fontWeight: 'bold',
            fontSize: 14
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: '#aaa'
          },
          lineStyle: {
            color: 'gradient',
            curveness: 0.5
          },
          data: [
            { name: 'Zomato' },
            { name: 'Blinkit' },
            { name: 'Townrush' },
            { name: 'Uber Eats' },
            { name: 'Runnr' },
            { name: 'TongueStun' },
            { name: 'FITSO' }
          ],
          links: [
            { source: 'Zomato', target: 'Blinkit', value: 10 },
            { source: 'Zomato', target: 'Townrush', value: 15 },
            { source: 'Zomato', target: 'Uber Eats', value: 25 },
            { source: 'Zomato', target: 'Runnr', value: 30 },
            { source: 'Zomato', target: 'TongueStun', value: 20 },
            { source: 'Zomato', target: 'FITSO', value: 35 }
          ]
        }
      ]
    };
    
  }
}
