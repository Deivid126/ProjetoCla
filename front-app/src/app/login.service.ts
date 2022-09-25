import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { user } from './models/autenticacao';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient : HttpClient) { }

  usuario : user[] = [];

   private URL = "https://localhost:7096/api/User/login"

  autenticar(usuario:user){
    return this.httpclient.post(this.URL,usuario);
  }

}
