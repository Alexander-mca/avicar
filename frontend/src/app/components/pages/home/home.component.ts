import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../../services/viajes/vuelo.service';
import { Viaje } from '../../../shared/models/viaje';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from '../../partials/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, HeaderComponent, CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    viajes:Viaje[] = [];
    constructor(private vueloService:VueloService){
        this.viajes = vueloService.getAll();
    }

    ngOnInit():void{
      
    }
}
