import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ActivatedRoute } from '@angular/router'
import { IdeasService } from '../../services/ideas.service'
import { environment } from '../../../../../environments/environment'
import * as $ from 'jquery'
declare var $:any

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

    ideas:any = []
    comments:any = []
    menu:boolean = false

    constructor(
        private ruta:ActivatedRoute,
        private _service:IdeasService
    ) { 

        
    }
    id:string 
    pos:any 
    neg:any 
    neu:any
    total: any  
    ngOnInit() {
        this.getRouteId()
        this.getIdeaDetail()  
        this.getCommentDetail() 
    } 
    getRouteId(){
        this.ruta.paramMap.subscribe(param => {this.id = param.get('id')
            console.log(this.id)
            this._service.id = this.id
            this._service.idIdeas = this.id
        })
    }
    getIdeaDetail(){
        this.getCommentDetail()
        this._service.id = this.id
        this._service.getIdeaDetalle().subscribe((data) => { 
            this.ideas = data;
            console.log(data)
            this.pos = this.ideas[0].Likes
            this.neg = this.ideas[0].Dislikes
            this.neu = this.ideas[0].Neutral
            this.total = (this.pos) + (this.neg) + (this.neu) 
           // this.getCommentDetail()
            // Estadisticas
            const ctx = document.getElementById('myChart');
            let myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Positivos', 'Negativos', 'Me es indiferente'],
                    datasets: [
                    {
                    label: '',
                        data: [this.pos,this.neg,this.neu],
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
            
        })
         
    }
    getCommentDetail(){
        this._service.getAllComents().subscribe((datac) => {
            this.comments = datac
            this._service.idIdeas = this.ideas[0].Id
            console.log(datac)
            console.log(`Comentario ${this.ideas[0].Id}`)
            
        })
    }
    // Mostrar imagen de usuario
    getImgUser(id){
        return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
    }

    // Menu mostrar ocultar
    showMenu(){
        this.menu =! this.menu
    }
    
  
}
