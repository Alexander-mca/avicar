import { Injectable } from '@angular/core';
import { sample_viajes } from '../../../data';
import { Viaje } from '../../shared/models/viaje';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  
  constructor() { }

  getAll():Viaje[]{
    return sample_viajes;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Viaje[]{
    return  this.getAll().filter(viaje =>
      viaje.id.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
