import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{


  ngOnInit(): void {
    Chart.register(...registerables);

    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sample Data',
          data: [10, 20, 15, 30, 25],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {},
        });
      } else {
        console.error('Could not get 2D context for canvas');
      }
    } else {
      console.error('Canvas element not found');
    }
  }
}
