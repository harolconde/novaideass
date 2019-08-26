import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../home/services/users.service';
import { environment } from '../../../../environments/environment'
import { Location } from '@angular/common'
import { Chart } from 'chart.js'
import { from } from 'rxjs';

@Component({
    selector: 'app-show-user-detail',
    templateUrl: './show-user-detail.component.html',
    styleUrls: ['./show-user-detail.component.scss']
})
export class ShowUserDetailComponent implements OnInit {

    user: any = {}
    ideaPrivate: any
    ideaPublic: any
    commentIdea: any

    constructor(
        private route: ActivatedRoute,
        private userData: UsersService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getIdUser()
    }
    getIdUser() {
        const id: any = this.route.snapshot.paramMap.get('id')
        this.userData.getUser(id).subscribe(
            user => {

                this.user = user
                console.log(this.user)
                this.ideaPublic = this.user.IdeasTypeDTO.IdeasPublicaTotal
                this.ideaPrivate = this.user.IdeasTypeDTO.IdeasPrivadaTotal
                this.commentIdea = this.user.CommentsTotalesDTO.CommentsTotales

                const ctx = document.getElementById('myChart');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Ideas y comentarios publicados'],
                        datasets: [
                            {
                                label: 'Ideas publicadas publicas',
                                data: [this.ideaPublic],
                                backgroundColor: [
                                    'rgba(138,221,45,1)'
                                ],
                                borderColor: [
                                    'rgba(138,221,45,0.6)'
                                ],
                                borderWidth: 1
                            },
                            {
                                label: 'Ideas publicadas privadas',
                                data: [this.ideaPrivate],
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 1)'
                                ],
                                borderWidth: 1
                            },
                            {
                                label:'Comentarios publicados',
                                data: [this.commentIdea],
                                backgroundColor: [
                                    'rgba(255, 206, 86, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 206, 86, 1)'
                                ]
                            }
                        ]
                    },
                    options: {
                        title:{
                            display: true,
                            text: `Estadisticas de ${this.user.UsersDTO.UserFirstName} ${this.user.UsersDTO.UserLastName}`,
                            position: 'top',
                            fontSize: 16
                        },
                        legend: {
                            labels: {
                                fontFamily: "'Aristotelica Display Regular'",
                                fontSize: 11
                            },
                            display: true,
                            position: "bottom",
                        },
                        responsive: true,
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
        )
    }
    getImgUserIndividual(id) {
        return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
    }
    goBack(): void {
        this.location.back()
    }

}
