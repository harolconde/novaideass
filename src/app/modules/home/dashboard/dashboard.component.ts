import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { IdeasService } from './../services/ideas.service';
import { UsersService } from './../services/users.service';
import { tick } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router'
import { environment } from '../../../../environments/environment'
import { from } from 'rxjs';
import { reverse } from 'dns';
import { OrderPipe } from 'ngx-order-pipe'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Variable menu navegacion oculto.
  menuComponents:boolean = false 

  // Arreglo contenedor ideas
  // Ultimas cuatro ideas pustuladas
  lastFourIdeas:any[]
  // Ultimas cuatro ideas en debate
  lastFourDebateIdeas:any[]
  // Ultimas cuatro ideas aprovadas
  lastFourApprovedIdeas:any[]
  // Ultimas cuatro ideas finalizadas
  lastFourFinishIdeas:any[]
  //Ultimas cuatro ideas muertas
  lastFourDeadIdeas:any[]
  // Cuatro ideas mas votadas;
  lastFourIdeasVotes:any[]

  // Usuario servicio
  topUserParticipation:any[]

  // Id por idea redireccionar
  idRedir: any

  // Ordenar 
  order:string = 'VotesTypeDTO.VotesTotal'
  reverse: boolean = true
  // Arreglo para las ideas mas votadas.
  dataStatisc: any = []

  constructor(
    private _service:IdeasService, 
    private _userService:UsersService, 
    private _route:ActivatedRoute,
    private orderPipe: OrderPipe
    ) {
       
      
    }

  ngOnInit() {
    // Asignacion datos estadisticos a mostrar en ideas mas votadas.
    setTimeout(()=>{
      this.dataStatisc = this.orderPipe.transform(this.lastFourIdeasVotes, this.order, this.reverse)
      console.log(this.dataStatisc[0].VotesTypeDTO.VotesTotal)
    },700)

    this._route.paramMap.subscribe(param => {this.idRedir = param.get('id')
      console.log(this.idRedir)
    })

    //Ultimas cuatro ideas
    this.getLastFourIdeas()

    //Ultimas cuatro ideas en debate
    this.getLastFourDebate()

    //Ultimas cuatro ideas aprovadas
    this.getLastFourIdeasApproved()

    //Ultimas cuatro ideas Finalizadas
    this.getLastFourIdeasFinish()

    //Ultimas cuatro ideas muertas
    this.getLastFourIdeasDead()

    // Cuatro ideas mas votadas
    this.getIdeasVotes()

    // Top participacion de usuarios
    this.getTopParticipation()

    // Idea por Id

    
  }

  // Fuuncion que retorna las ultimas cuatro ideas publicadas
  getLastFourIdeas(){
    this._service.getIdeasLast().subscribe((data) => {
      this.lastFourIdeas = data;
    })
  }

  // Funcion que trae las ultimas cuatro ideas en debate
  getLastFourDebate(){
    this._service.getIdeasLastDebate().subscribe((data)=>{
      this.lastFourDebateIdeas = data;
    })
  }

  // Funcion que trae las ultimas cuatro ideas aprovadas..
  getLastFourIdeasApproved(){
    this._service.getIdeasLastApproved().subscribe((data)=> {
      this.lastFourApprovedIdeas = data;
    })
  }

  // Funcion que trae las ultimas cuatro ideas finalizadas
  getLastFourIdeasFinish(){
    this._service.getIdeasLastFinish().subscribe((data) => {
      this.lastFourFinishIdeas = data;
      console.log(data)
    })
  }

  // Funcion que trae las ultimas cuatro ideas muertas
  getLastFourIdeasDead(){
    this._service.getIdeasLastDead().subscribe((data) => {
      this.lastFourDeadIdeas = data;
    })
  }

  //Function mostrar menu de navegacion.
  showMenuNav(){
    this.menuComponents =! this.menuComponents
  }

  //Funcion que trae los votos por la cantidad de ideas.
  getIdeasVotes(): void{
    this._service.getIdeasMoreVotes().subscribe(data => {
        this.lastFourIdeasVotes = data
        console.log(data)
        
        //  Estadisticas
        setTimeout(() => {
          const ctx = document.getElementById('myChart');

          let myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: ['Positivos', 'Negativos', 'Me es indiferente'],
                  datasets: [
                  {
                      label: 0,
                      data: [this.dataStatisc[0].VotesTypeDTO.VotesLikeTotal,this.dataStatisc[0].VotesTypeDTO.VotesDislikeTotal,this.dataStatisc[0].VotesTypeDTO.VotesNeutralTotal],
                      backgroundColor: [
                          'rgba(138,221,45,1)',
                          'rgba(138,221,45,1)',
                          'rgba(138,221,45,1)'   
                      ],
                      borderColor: [
                          'rgba(138,221,45,1)',
                          'rgba(255, 99, 132, 1)',
                          'rgba(12, 12, 12, 0.6)'
                      ],
                      borderWidth: 2
                  },
                  {
                  label: '',
                      data: [this.dataStatisc[1].VotesTypeDTO.VotesLikeTotal,this.dataStatisc[1].VotesTypeDTO.VotesDislikeTotal,this.dataStatisc[1].VotesTypeDTO.VotesNeutralTotal],
                      backgroundColor: [
                        
                          'rgba(198, 255, 0, 0.7)',
                          'rgba(198, 255, 0, 0.7)',
                          'rgba(198, 255, 0, 0.7)'
                      ],
                      borderColor: [
                          'rgba(138,221,45,1)',
                          'rgba(255, 99, 132, 1)',
                          'rgba(12, 12, 12, 0.6)',
                      ],
                      borderWidth: 2
                  },
                  {
                  label: '',
                      data: [this.dataStatisc[2].VotesTypeDTO.VotesLikeTotal,this.dataStatisc[2].VotesTypeDTO.VotesDislikeTotal,this.dataStatisc[2].VotesTypeDTO.VotesNeutralTotal],
                      backgroundColor: [
                        'rgba(255, 125, 0, 0.7)',
                        'rgba(255, 125, 0, 0.7)',
                        'rgba(255, 125, 0, 0.7)'
                      ],
                      borderColor: [
                        'rgba(138,221,45,1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(12, 12, 12, 0.6)'
                      ],
                      borderWidth: 2
                  },
                  {
                  label: '',
                      data: [this.dataStatisc[3].VotesTypeDTO.VotesLikeTotal,this.dataStatisc[3].VotesTypeDTO.VotesDislikeTotal,this.dataStatisc[3].VotesTypeDTO.VotesNeutralTotal],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(255, 99, 132, 0.7)'
                      ],
                      borderColor: [
                          'rgba(138,221,45,1)',
                          'rgba(255, 99, 132, 1)',
                          'rgba(12, 12, 12, 0.6)'
                      ],
                      borderWidth: 2
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
                          zeroLineColor: "rgba(0,0,0,0.05)",
                  
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
        },800)
    })
  }

  //****************************//
  // Funciones servicio usuario //
  //****************************//

  // Top de participacion
  getTopParticipation():void{
    this._userService.getTopParticipationUsers().subscribe(data => {
      this.topUserParticipation = data
      console.log(data)
    })
  }
  // Imagenes del top
  getImgUser(id){
    return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
  }

}
