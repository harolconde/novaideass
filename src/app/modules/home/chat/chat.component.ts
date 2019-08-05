import { Component, OnInit } from '@angular/core'
import { IdeasService } from './../services/ideas.service'
import { IdeasModel } from '../models/modelIdea'
import { IdeasResponseModel } from '../models/modelResponseIdea'
import { FormControl, FormGroup, FormBuilder, FormArray} from '@angular/forms'
import { and } from '@angular/router/src/utils/collection'
import { AngularSvgIconModule } from 'angular-svg-icon'
import { from } from 'rxjs'
import { modelComments } from '../models/modelComments'
import * as $ from 'jquery'
import { environment } from '../../../../environments/environment'
import { modelVotes } from '../models/votesModel';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../login/services/authentication.service'
import { CookieService } from 'ngx-cookie-service';


declare var $:any

export interface myIdea{
  obj: Object
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  //
  
  // Variables de session
  sessionUser:any
  //Variables mostrar idea completa
  //messageIdea:any =document.getElementsByClassName('ideaMessageChatUsers')
  btnShowIdea:any = document.getElementsByClassName('btnSeeMoreMessage')
  textCollapse:any = document.getElementsByClassName('ideaMessageChatUsers')
  panelReply:any = document.getElementsByClassName('containerDisplayReply')
  btnMinus:any = document.getElementsByClassName('iconMoreMinus')
  stateCollapseIdea:boolean = false;


  //Variables popover
  btnPopober:any = document.getElementsByClassName('imgHeart')
  popovers:boolean = false;

  // Agregar nueva idea
  generateIdea:boolean = false;

  //Replicar idea
  btnReply:any = document.getElementsByClassName('btnAddNewReply')
  layoutReply:any = document.getElementById('replyMessage')
  textReplyMessage:any = document.getElementById('input-reply-idea')
  replyButton:boolean = false;
  
  // Service Ideas

  //ideas:any[] = []
  ideas:any[]
  comments:any[]
  resultado: Array<IdeasResponseModel> 
  addTaskValue: string = ""

  // Formulario
  formulario: FormGroup
  // Formulario comentarios
  fcomentarios: FormGroup

  // Variables votos
  vote:any []
  resp:any

  constructor(
    private _service : IdeasService, 
    private fidea: FormBuilder, 
    private ruta:ActivatedRoute, 
    private idUserSession:AuthenticationService,
    private cookieService: CookieService
  ) {}


  ngOnInit() {
    this.formulario = this.fidea.group({
      idea: ['']
    })

    this.fcomentarios = this.fidea.group({
      comment: ['']
    })

    setTimeout(()=>{
      this.sessionUser = this.cookieService.get('session')
      console.log(this.sessionUser)
    },50)
    this.getListIdeas()
    
    
    
  }

  // Traer todas las ideas
  getListIdeas(){
    this._service.getIdeas().subscribe((data) => {
      this.ideas = data;
      console.log("Vamos !!", data)
      // for(let i = 0; i < this.ideas.length; i++){
      //   this.votePos = this.ideas[i].Likes
      //   console.log(this.votePos)
      // }
    })
  }

  

  // Asignar id de idea a parametro del servicio
  getId(i){
    let idIdeas = document.getElementsByClassName('containerIdeaCredentials')
    let ideaId = idIdeas[i].id
    console.log(ideaId)
    this._service.id = idIdeas
    return this._service.idIdeas = ideaId 
    
  }
  // Traer todos los comentarios
  getComments(): void{
    this._service.getAllComents().subscribe((data) =>{
      this.comments = data;
      //console.log(data)
    })
  }

  // Evento submit nueva idea
  onSubmit(formValue:any){

    const ideap = new IdeasModel()
    ideap.opcion = 1 
    ideap.idUsuario = this.sessionUser
    ideap.id = 141
    ideap.ideaText = formValue.idea
    ideap.ideaType = 1
    ideap.status = 1

    this._service.postSendIdea(ideap)
    this.newIdea()
    setTimeout(()=>{
      this.getListIdeas()
      this.reset()
    }, 100)
    setInterval(()=>{
      this.getListIdeas()
    },5)

  }
  // Evento submit nuevo comentario
  onSubmiComment(formValueComment:any, i){
    let idIdea = this.getId(i)
    let iddea = parseInt(idIdea)
    //console.log(iddea)
    
    const commentp = new modelComments()
    commentp.opcion = 1
    commentp.idIdea = iddea
    commentp.idUser = this.sessionUser
    commentp.comentsText = formValueComment.comment
    commentp.idComents = 0

    this._service.postSendComment(commentp)
    this.addComments(i)
    
    this.resetAddMessage(i)
    setTimeout(()=>{
      this.getComments()
    }, 200)
    setInterval(()=>{
      this.getComments()
    },5)
  }

  // Reset inputs and textareas
  reset(){
    this.formulario.reset()
  }

  // Imagen de usuario
  getImgUser(id){
    return environment.endpoint + `/ImageUsers?opcion=1&idUsers=${id}`
  }

  // Post votes
  addVote(){
    
  }

  // Animacion evntos chat de ideas 
  collapseIdea(i){
    this.getComments();
    const textWrap = document.getElementsByClassName('ideaMessageChatUsers')
    let text = textWrap[i].id
    const panelReply:any = document.getElementsByClassName('containerDisplayReply')
    const idIdeaCollapse:any = document.getElementById(this.textCollapse[i].id)
    const idPanel:any = panelReply[i].id
    let but = document.getElementsByClassName('btnSeeMoreMessage')
    let idbutton = but[i].id
    let plus = document.getElementsByClassName('iconMoreMinus')
    let iPlus = `${plus[i].id}`
    
    if($('#'+idPanel).is(":visible")){
      
      $('#'+idPanel).toggle("swing",function(){
        $(this).hide(500)
        $('#'+iPlus).removeClass("fa-minus")
        $('#'+iPlus).addClass("fa-plus")
        $('#' + text).css({
          'white-space' : 'nowrap'
        })
      })
    }
    else{
      $(panelReply).hide()
      $('#'+iPlus).removeClass("fa-minus")
      $(plus).addClass("fa-plus")
      $('#'+idPanel).toggle("swing",function(){
        $(this).show(500)
        $('#'+iPlus).removeClass("fa-plus")
        $('#'+iPlus).addClass("fa-minus")
        $('#' + text).css({
          'white-space' : 'normal'
        })
      })
    }
  }


  //Add comments
  addComments(i){
    let idPanel = document.getElementsByClassName('replyMessage')
    let id = idPanel[i].id
    let textareaInfo = document.getElementById(id)
    $('#'+id).toggle()
  }

  // Reset comments submit
  resetAddMessage(i){
    const textareaReset = document.getElementsByClassName('textareaFormulario')
    let resetElement = textareaReset[i].id
    return $('#'+resetElement).val("")
  }
  // Reset Ideas submit
  resetAddIdea(){
    const textareaReset = document.getElementsByClassName('postNIdea')
    for(let i = 0; i < textareaReset.length; i++){
      let id = textareaReset[i].id
      //console.log(id)
      $("#"+id).val("")
    }
    
  }

  //Popover
  popLikes(i){
    const votes: any = document.getElementsByClassName('votos')
    let myId: any = votes[i].id
    //console.log(myId)
    $('#'+myId).toggle(500)
  }

  // Toast
  hideToast(i){
    let toasts = document.getElementsByClassName('containerToast')
    let idToast = toasts[i].id
    $('#'+idToast).fadeToggle()
  }
  // Nuevo comentario
  newIdea(){
    this.generateIdea = ! this.generateIdea
    //this.formGroup.reset()
    let textarea = document.getElementById('postNIdea')
    let cont = $(textarea).val("")
  }

  // **************************************************** //
  // ***************** Peticiones votos ***************** //
  // **************************************************** //

  // Votar
  // Postivos
  addVotesPos(id, i){
    let idIdeaVote
    let idVote = id
    this._service.idIdeas = idVote
    let toasts = document.getElementsByClassName('toast')

    const vote = new modelVotes()
    vote.opcion = 1
    vote.idVote = 0
    vote.idIdea = id
    vote.idUser = this.cookieService.get('session') 
    vote.voteType = 1
    this._service.postSendVote(vote)
    setTimeout(()=>{ 
      this.resp = this._service.resp
      console.log(this.resp)
      if(this.resp = 1){
        this._service.getIdVote().subscribe((data) => {
          console.log(data)
          idIdeaVote = data 
        }) 
      }
    }, 700)
  }

  // Negativos
  addVotesNeg(id, i){
    const vote = new modelVotes()
    vote.opcion = 1
    vote.idVote = 0
    vote.idIdea = id 
    vote.idUser = 19
    vote.voteType = 2 

    this._service.postSendVote(vote)
    this.resp = this._service.resp
    console.log(this.resp)
    if(this.resp = 1){
      this.hideToast(i)
    }
  }

  // Neutrales
  addVotesNeu(id, i){
    const vote = new modelVotes()
    vote.opcion = 1
    vote.idVote = 0
    vote.idIdea = id
    vote.idUser = 19
    vote.voteType = 3

    this._service.postSendVote(vote)
    this.resp = this._service.resp
    console.log(this.resp)
    if(this.resp = 1){
      this.hideToast(i)
    }
  }

}
$(function(){
  
  $('[data-toggle="tooltip"]').tooltip()
})
