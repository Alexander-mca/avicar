import express from 'express';
import cors from 'cors';
import { sample_usuarios, sample_viajes } from './data';


const app = express();

//localhost:5000

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.get("/api/viajes",(req, res)=>{
    res.send(sample_viajes);
});

app.get("/api/usuarios", (req, res)=>{
    res.send(sample_usuarios);
});

app.get("/api/usuarios/search/:searchTerm", (req, res)=>{
    const searchTerm = req.params.searchTerm;
    const usuarios = sample_usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(usuarios);
});

app.get("/api/viajes/search/:viajeId", (req, res)=>{
    const viajeId = req.params.viajeId;
    const viajes = sample_viajes.find(viaje => viaje.id == viajeId);
    res.send(viajes);
});

const port = 5000;

app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port);
});

