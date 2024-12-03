import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent {
  revenueLabels = ['Aug 2021', 'Oct 2021', 'Dec 2021', 'Feb 2022', 'Apr 2022', 'Jun 2022'];
  
  revenueData: ChartData<'line'> = {
    labels: this.revenueLabels,
    datasets: [
      {
        data: [2000, 8000, 9000, 9500, 9400, 9460],
        label: 'Revenue ($K)',
        fill: true,
        backgroundColor: 'rgba(255, 153, 102, 0.2)',
        borderColor: '#ff9933',
        tension: 0.4
      }
    ]
  };

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#e3e3e3' } }
    }
  };

  // Funding chart data
  fundingData: ChartData<'bar'> = {
    labels: ['Seed', 'Series A', 'Series B', 'Series C', 'Series D'],
    datasets: [
      {
        data: [50, 210, 338, 420, 1000],
        label: 'Funding ($M)',
        backgroundColor: 'rgba(144, 238, 144, 0.7)',
        borderColor: '#2ca02c',
        borderWidth: 1
      }
    ]
  };

  fundingChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}M`; // Format tooltip value as $XM
          }
        }
      }
    }
  };
}
