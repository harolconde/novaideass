import { Component, OnInit } from '@angular/core';
import { IdeasService } from './../../services/ideas.service';

@Component({
  selector: 'app-deadideas',
  templateUrl: './deadideas.component.html',
  styleUrls: ['./deadideas.component.scss']
})
export class DeadideasComponent implements OnInit {

  //Variables mostrar idea completa
  btnShowIdea:any = document.getElementsByClassName('btnSeeMoreMessageIdeasDead')
  panelReply:any = document.getElementsByClassName('containerDisplayReplyIdeasDead')
  btnMinus:any = document.getElementsByClassName('iconMoreMinusIdeasDead')
  stateCollapseAllIdea:boolean = false;

  //Menu navegacion
  menuComponents:boolean = false

  ideas:any[]
  constructor(private _service:IdeasService) {
    this.ideas = this._service.getDataIdeas()
   }

  ngOnInit() {
    this.getIdeasDead()
  }

  getIdeasDead(): void{
    this._service.getIdeas().subscribe((data) => {
      this.ideas = data;
    })
  }

  collapseIdea(i){
    if(this.stateCollapseAllIdea == false){
      this.panelReply[i].style.display = 'flex'
      this.panelReply[i].style.transition = 'display 500ms ease-in'
      this.btnShowIdea[i].style.backgroundColor = '#f1f1f1'
      this.btnShowIdea[i].style.fontWeight = '600'
      this.btnShowIdea[i].style.border = '1px solid #ddd'
      this.btnShowIdea[i].style.borderRadius = '22px'
      this.btnShowIdea[i].style.transition = 'all 700ms linear'
      this.btnMinus[i].classList.remove('fa-plus')
      this.btnMinus[i].classList.add('fa-minus')
      this.stateCollapseAllIdea = true
    }
    else{
      this.panelReply[i].style.display = 'none'
      this.panelReply[i].style.transition = 'display 500ms ease-in-out'
      this.btnShowIdea[i].style.backgroundColor = '#fafafa'
      this.btnShowIdea[i].style.fontWeight = '400'
      this.btnShowIdea[i].style.border= '1px solid transparent'
      this.btnShowIdea[i].style.borderRadius = '5px'
      this.btnShowIdea[i].style.transition = 'all 700ms linear'
      this.btnMinus[i].classList.remove('fa-minus')
      this.btnMinus[i].classList.add('fa-plus')
      this.stateCollapseAllIdea = false
    }
  }

   //Menú navegacion
   showMenuNav(){
    this.menuComponents =! this.menuComponents
  }
}
