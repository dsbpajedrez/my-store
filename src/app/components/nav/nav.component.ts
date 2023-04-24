import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuActive : boolean = false;
  counter : number = 0;
  constructor(
    private storeService : StoreService
  ){}
  ngOnInit(): void {
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
