import { Component, OnInit } from '@angular/core';
//import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { from } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authguard',
  templateUrl: './authguard.component.html',
  styleUrls: ['./authguard.component.scss']
})
export class AuthguardComponent implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.authenticationService.authenticationIdea;
    if(currentUser){
      // En caso de logueo exitoso
      return true
    }
    // En caso de que el login sea invalido
    this.router.navigate(['./login'], {queryParams: {returnUrl: state.url}})
  }
  ngOnInit() {
  }

}
