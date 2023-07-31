import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  regresar(){
    location.href= 'home' ;
  }
  buscar(texto:string){
    console.log(texto)
  }

}
