import { Usuario } from "./app/shared/models/usuario";
import { Viaje } from "./app/shared/models/viaje";

export const sample_usuarios: Usuario[] = [
    {
        nombre: 'Carlos',
        user : 'Carlos12',
        correo : 'carlitos@gmail.com',
        password : '1111',
        confirm_password: '1111'
    }
];

export const sample_viajes: Viaje[] = [
    {
        id : '1',
        agencia : 'Montana',
        ciudad_origen : 'Montana',
        ciudad_destino : 'Los Angeles',
        duracion : 1,
        precio : 500,
        imgUrl : 'assets/viaje1.jpg'
    },
    {
        id : '2',
        agencia : 'Enjoy',
        ciudad_origen : 'London, England',
        ciudad_destino : 'Paris, France',
        duracion : 1,
        precio : 900,
        imgUrl : 'assets/viajar-2.jpg'
    },
    {
        id : '3',
        agencia : 'BestChoice',
        ciudad_origen : 'FairField',
        ciudad_destino : 'Springville',
        duracion : 1,
        precio : 300,
        imgUrl : 'assets/plan.jpg'
    },
    {
        id : '4',
        agencia : 'TheUniqueChoice',
        ciudad_origen : 'Toronto',
        ciudad_destino : 'Vancouver',
        duracion : 4,
        precio : 500,
        imgUrl : 'assets/auto1.jpg'
    }
];

