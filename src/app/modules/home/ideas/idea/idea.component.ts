import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Positivos', 'Negativos', 'Me es indiferente'],
            datasets: [
            {
              label: '',
                data: [7,3,2],
                backgroundColor: [
                    'rgba(138,221,45,1)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(138,221,45,0.6)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            },
          ]
        },
        options: {
          legend: {
            labels:{
              fontFamily: "'Aristotelica Display Regular'"
            },
            display: false
          },
          responsive: false,
          scales: {
              yAxes: [{
                  //display: false
                  gridLines: {
                    // Boolean - if true, show the grid lines
                    show: true,
            
                    // String - color of the grid lines
                    color: "rgba(0, 0, 0, 0.05)",
            
                    // Number - width of the grid lines
                    lineWidth: 1,
            
                    // Boolean - if true draw lines on the chart area
                    drawOnChartArea: true,
            
                    // Boolean - if true draw ticks in the axis area
                    drawTicks: true,
            
                    // Number - width of the grid line for the first index (index 0)
                    zeroLineWidth: 1,
            
                    // String - color of the grid line for the first index
                    zeroLineColor: "rgba(0,0,0,0.25)",
            
                    // Boolean - if true, offset labels from grid lines
                    offsetGridLines: false
                    
                  },
                  ticks: {
                    fontSize: 12,
                    fontFamily: "'Aristotelica Display Regular'"
                  }
              }],
              xAxes: [{
                ticks: {
                  fontSize: 12,
                  fontFamily: "'Aristotelica Display Regular'"
                }
              }]
          }
        }
    });
  }

}
