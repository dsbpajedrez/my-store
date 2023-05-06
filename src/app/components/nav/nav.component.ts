import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuActive : boolean = false;
  counter : number = 0;
  sesionProfile : User ={
    id : 0,
    email : '',
    password : '',
    name: ''
  }
  constructor(
    private storeService : StoreService
  ){}
  ngOnInit(): void {
    localStorage.setItem('profile', JSON.stringify(this.sesionProfile))
    console.log(this.sesionProfile);
    
    this.storeService.myCart$.subscribe({
      next: productos =>{
        console.log(productos);
        this.counter = productos.length;        
      }
    });
  }

  toggleMenu = () => {
    this.menuActive = !this.menuActive
  }



}
