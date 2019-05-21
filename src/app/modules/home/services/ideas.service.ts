import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  ideas:any[] =[
    { id: 1, user: 'Harol Conde', img: 'assets/img/users/ideas-avatar-hombre.svg', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, accusamus! Vitae, quo.', votes: 8, votePos: 4, voteNeg: 2, voteMeeh: 2, state: 'propuesta'},
    { id: 2, user: 'Luisa Rodriguez', img: 'assets/img/users/ideas-avatar-mujer.svg', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 10, votePos: 5, voteNeg: 2, voteMeeh: 3, state: 'propuesta'},
    { id: 3, user: 'Luisa Rodriguez', img: 'assets/img/users/ideas-avatar-mujer.svg', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi, ex nihil nam asperiores repellendus voluptatem nemo, ad excepturi architecto, dolor dignissimos voluptates sint nulla a. Aut doloremque fuga explicabo?', votes: 2, votePos: 0, voteNeg: 0, voteMeeh: 2, state: 'propuesta'},
    { id: 4, user: 'Harol Conde', img: 'assets/img/users/ideas-avatar-hombre.svg', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusamus aspernatur dicta tempora doloribus repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit.', votes: 1, votePos: 0, voteNeg: 1, voteMeeh: 0, state: 'propuesta'},
    { id: 5, user: 'Harol Conde', img: 'assets/img/users/ideas-avatar-hombre.svg', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 8, votePos: 2, voteNeg: 4, voteMeeh: 2, state: 'muerta'},
    { id: 6, user: 'Luisa Rodriguez', img: 'assets/img/users/ideas-avatar-mujer.svg', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, accusamus!', votes: 10, votePos: 3, voteNeg: 4, voteMeeh: 3, state: 'propuesta'},
    { id: 7, user: 'Luisa Rodriguez', img: 'assets/img/users/ideas-avatar-mujer.svg', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 15, votePos: 12, voteNeg: 2, voteMeeh: 1, state: 'aprobacion'},
    { id: 8, user: 'Harol Conde', img: 'assets/img/users/ideas-avatar-hombre.svg', description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla consequatur alias quis!, dolor dignissimos voluptates sint nulla a.', votes: 3, votePos: 1, voteNeg: 1, voteMeeh: 1, state: 'muerta'},
    { id: 9, user: 'Luisa Rodriguez', img: 'assets/img/users/ideas-avatar-mujer.svg', description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptas incidunt deserunt, velit aut quis quam, praesentium voluptatibus optio accusamus pariatur modi, quaerat rerum a consequuntur atque rem! Vitae, quo.', votes: 20, votePos: 12, voteNeg: 3, voteMeeh: 5, state: 'aprobada'},
    { id: 10, user: 'Luisa Rodriguez', img: 'assets/img/users/ideas-avatar-mujer.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cupiditate repudiandae laudantium nisi. Temporibus, aliquam quas quibusdam error odit, nihil facilis natus voluptas cumque a dicta nobis perspiciatis eaque asperiores voluptatem nisi, sapiente praesentium quaerat! Dolorem deleniti eligendi, delectus quo beatae sequi voluptate, est nisi et amet voluptatibus tempora illum, nam neque omnis corrupti reiciendis provident aliquam animi impedit officia.', votes: 17, votePos: 12, voteNeg: 2, voteMeeh: 3, state: 'aprobacion'}, 
  ]
  constructor() { }
  getDataIdeas(){
    return this.ideas
  }
  getOneIdea(i){
    return this.ideas[i]
  }
}
