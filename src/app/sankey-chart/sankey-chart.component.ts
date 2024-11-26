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
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'sankey',
          emphasis: {
            focus: 'adjacency',
          },
          draggable:false,
          nodeGap: 30, // Increased gap between nodes
          nodeWidth: 10, // Slightly wider nodes
          label: {
            fontSize: 14,
            rich: {
              Zomato: {
                backgroundColor: {
                  image:
                    'https://res.cloudinary.com/dbmka9scm/image/upload/v1729598575/zomato_symbol.png_tgbgur.png',
                },
                height: 40,
                width: 40,
                align: 'center',
              },
              Blinkit: {
                backgroundColor: {
                  image:
                    'https://res.cloudinary.com/dbmka9scm/image/upload/v1731066616/blinkit_icon.jpeg_hdwpyu.png',
                },
                height: 30,
                width: 30,
                align: 'center',
              },
              UberEats: {
                backgroundColor: {
                  image:
                    'https://res.cloudinary.com/dbmka9scm/image/upload/v1731066616/UberEats_jmf2pt.png',
                },
                height: 30,
                width: 30,
                align: 'center',
              },
            },
            formatter: (params: any) => {
              return `{${params.name.replace(' ', '')}|} ${params.name}`;
            },
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: '#aaa',
          },
          data: [
            { name: 'Zomato' },
            { name: 'Blinkit' },
            { name: 'Townrush' },
            { name: 'Uber Eats' },
            { name: 'Runnr' },
            { name: 'TongueStun' },
            { name: 'FITSO' },
            { name: 'Grocery Delivery' },
            { name: 'Green Box' },
            { name: 'Child 1' },
            { name: 'Child 2' },
          ],
          links: [
            {
              source: 'Zomato',
              target: 'FITSO',
              value: 30,
              lineStyle: { color: '#FFC107', curveness: 0.5 },
            },
            {
              source: 'Zomato',
              target: 'Blinkit',
              value: 30,
              lineStyle: { color: '#FFC107', curveness: 0.5 },
            },
            {
              source: 'Zomato',
              target: 'Townrush',
              value: 30,
              lineStyle: { color: '#FF5252', curveness: 0.5 },
            },
            {
              source: 'Zomato',
              target: 'Uber Eats',
              value: 30,
              lineStyle: { color: '#9E9E9E', curveness: 0.5 },
            },
            {
              source: 'Zomato',
              target: 'Runnr',
              value: 30,
              lineStyle: { color: '#4CAF50', curveness: 0.5 },
            },
            {
              source: 'Zomato',
              target: 'TongueStun',
              value: 30,
              lineStyle: { color: '#FF9800', curveness: 0.5 },
            },
            {
              source: 'FITSO',
              target: 'Child 1',
              value: 30,
              lineStyle: { color: '#03A9F4', curveness: 0.5 },
            },
            {
              source: 'FITSO',
              target: 'Child 2',
              value: 30,
              lineStyle: { color: '#03A9F4', curveness: 0.5 },
            },
            {
              source: 'Blinkit',
              target: 'Grocery Delivery',
              value: 30,
              lineStyle: { color: '#FFC107', curveness: 0.5 },
            },
            {
              source: 'Blinkit',
              target: 'Green Box',
              value: 30,
              lineStyle: { color: '#FFC107', curveness: 0.5 },
            },
          ],
        },
      ],
    };
  }
}
