import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{faUser} from '@fortawesome/free-regular-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginservice : LoginService, private router : Router) { }

  ngOnInit(): void {
  }

  iconuser = faUser;
  iconlock= faLock;

  login(usuario:{Login:string,PasswordHash:string}){
    
  
      console.log(usuario);

      this.loginservice.autenticar(usuario).subscribe(data => {
        if(data == true)
        {
          this.router.navigate(['/home'])
        }
        else{
        alert("Usuário ou Senha estão erradas, tente novamente");
        }
      });


    
    
    
  }

  
 

}
