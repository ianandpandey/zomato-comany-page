import { Component } from '@angular/core';
import { ChartData, ChartOptions, Chart } from 'chart.js';

@Component({
  selector: 'app-spend-analysis',
  templateUrl: './spend-analysis.component.html',
  styleUrls: ['./spend-analysis.component.scss']
})
export class SpendAnalysisComponent {
  chartType: 'doughnut' = 'doughnut';

  chartData: ChartData<'doughnut'> = {
    labels: ['Engineering', 'Sales', 'Accounting', 'Operations', 'Finance', 'Marketing', 'HR'],
    datasets: [
      {
        data: [10, 20, 15, 25, 5, 15, 10],
        backgroundColor: [
          '#1E3A8A', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'
        ],
        hoverBackgroundColor: [
          '#1E3A8A', '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'
        ]
      }
    ]
  };

  // Define the custom plugin outside of the chart options
  centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart: Chart) => {
      const { ctx } = chart;
      const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#333';
      ctx.fillText('$54K', centerX, centerY - 10);
      ctx.font = '14px Arial';
      ctx.fillText('14 Jun 2024', centerX, centerY + 15);
      ctx.restore();
    }
  };

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '40%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.raw}`
        }
      }
    }
  };

  tableData = [
    { category: 'Engineering & Product', year1: -1, year2: -1, color: '#1E3A8A' },
    { category: 'Sales', year1: -1, year2: -1, color: '#2563EB' },
    { category: 'Accounting', year1: 2, year2: -1, color: '#3B82F6' },
    { category: 'Operations', year1: -1, year2: -1, color: '#60A5FA' },
    { category: 'Finance', year1: -2, year2: -1, color: '#93C5FD' },
    { category: 'Marketing', year1: 5, year2: -1, color: '#BFDBFE' },
    { category: 'Human Resources', year1: -2, year2: -1, color: '#DBEAFE' },
  ];

  constructor() {
    // Register the custom plugin with Chart.js
    Chart.register(this.centerTextPlugin);
  }
}
