import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/models/token';
import { TokenClaim } from 'src/app/services/tokenclaim.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:Token;
  x:string[]=[]
  constructor(private tokenClaim:TokenClaim) { }

  ngOnInit(): void {
    this.getinfo()
  }


  getinfo(){
    this.token = this.tokenClaim.decode()
    this.token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
  }

  
  checklog(){
    if(localStorage.getItem("token")){
      return true
    }
    return false
  }

  checkauth(){
    this.x = []
    this.x = this.tokenClaim.claims();
    
    for(let i = 0; i <this.x.length ; i++){
      if( this.x[i] == "Admin"){
        return true;
      }
    }
    return false;
  }

  exit(){
    localStorage.removeItem("token")
  }

}
