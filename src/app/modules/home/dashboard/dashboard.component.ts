import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Variable menu navegacion oculto.
  menuComponents:boolean = false
  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('myChart');

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Positivos', 'Negativos', 'Me es indiferente'],
            datasets: [
              {
                label: 0,
                data: [4,2,2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            },
            {
              label: '',
                data: [8,2,4],
                backgroundColor: [
                    'rgba(255, 125, 0, 0.5)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 125, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            },
            {
              label: '',
                data: [12,4,0],
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
            {
              label: '',
                data: [10,4,7],
                backgroundColor: [
                    'rgba(178,255,89,0.8)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(178,255,89,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }
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

  //Function mostrar menu de navegacion.
  showMenuNav(){
    this.menuComponents =! this.menuComponents
  }
  
}
