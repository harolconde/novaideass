import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../home/services/users.service';
import { environment } from '../../../../environments/environment'
import { FormControl, FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms'
import { Location } from '@angular/common'
import { Chart } from 'chart.js'
import { from } from 'rxjs';
import { UserModel } from '../../home/models/userModel';

@Component({
    selector: 'app-show-user-detail',
    templateUrl: './show-user-detail.component.html',
    styleUrls: ['./show-user-detail.component.scss']
})
export class ShowUserDetailComponent implements OnInit {

    id: any
    userActive: any
    userRol: any
    user: any = {}
    ideaPrivate: any
    ideaPublic: any
    commentIdea: any

    userTypeArray: any = []
    userStatus: any = []

    public states: any = [
        { id: 1, name: 'Activo' },
        { id: 2, name: 'Inactivo' }
    ]

    public userType: any = [
        { id: 1, typeUser: 'Normal' },
        { id: 2, typeUser: 'Comité' },
        { id: 3, typeUser: 'Administrador' }
    ]

    constructor(
        private route: ActivatedRoute,
        private userData: UsersService,
        private location: Location,
        private nickname: FormBuilder
    ) { }

    // Formulario edidcion usuario
    formEditarUsuario = new FormGroup({
        nickName: new FormControl(''),
        optionStatus: new FormControl(''),
        optionUserType: new FormControl('')
    })

    ngOnInit() {
        this.getIdUser()

        setTimeout(() => {
            this.getDataUsersStatus()
            this.getDataUsetType()
        }, 500)
    }
    getIdUser() {
        this.id = this.route.snapshot.paramMap.get('id')
        this.userData.getUser(this.id).subscribe(
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
                                label: 'Comentarios publicados',
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
                        title: {
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

    getDataUsersStatus() {
        this.userStatus = this.states
    }
    getDataUsetType() {
        this.userTypeArray = this.userType
    }
    getImgUserIndividual(id) {
        return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
    }
    goBack(): void {
        this.location.back()
    }

    putEditUser(formValueUserEdit: any) {
        console.log(this.formEditarUsuario.get('optionStatus').value.name)
        console.log(this.formEditarUsuario.get('optionUserType').value.typeUser)
        if (this.formEditarUsuario.get('optionStatus').value.name == "Activo") {
            this.userActive = 1
        }
        else if (this.formEditarUsuario.get('optionStatus').value.name == "Inactivo") {
            this.userActive = 2
        }
        else {
            this.userActive = 0
        }

        if (this.formEditarUsuario.get('optionUserType').value.typeUser == 'Administrador') {
            this.userRol = 3
        }
        else if (this.formEditarUsuario.get('optionUserType').value.typeUser == 'Comité') {
            this.userRol = 2
        }
        else if (this.formEditarUsuario.get('optionUserType').value.typeUser == 'Normal') {
            this.userRol = 1
        }
        else {
            this.userRol = 0
        }
        setTimeout(() => {
            console.log(this.userActive)
            console.log(this.userRol)
            let userDataEdit = new UserModel()
            this.userData.idUserEdit = this.id
            userDataEdit.IdUsers = this.id
            userDataEdit.UserNickName = formValueUserEdit.nickName
            userDataEdit.UserType = this.userRol
            userDataEdit.UserStatus = this.userActive
            this.userData.updAdmonDateUsers(userDataEdit)
        }, 500)
        setTimeout(() => {
            this.getIdUser()
        }, 600)

    }

}
