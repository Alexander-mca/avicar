import { Injectable } from '@angular/core';
import { Viaje } from '../shared/models/viaje';
import { sample_viajes } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor() { }

  getAll():Viaje[]{
    return sample_viajes;
  }
}
