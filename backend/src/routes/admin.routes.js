const { Router } = require('express');
const { check } = require('express-validator');
const jwt = require('jsonwebtoken');
const validate = require('../middlewares/validateAttributes');
const adminController = require('../controllers/admin.controller');
const {getData} = require('../config/db.mongo');
const bcrypt = require('bcryptjs');
const router = Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        msg : "Hola mundo"
    });
});

router.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    //aca se busca el usuario en la base de datos
    
    const usuario = getData('Usuarios', {email, password});
    if(usuario && (await bcrypt.compare(password, usuario.password))){
        
        res.send(generateTokenResponse(usuario));
    }else{
        res.status(400).send("¡El usuario o contraseña no es valido!");
    }
});

router.post('/registrarUsuario', 
    [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('apellido', 'El apellido es obligatorio').notEmpty(),
        check('usuario', 'El usuario es obligatorio').notEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').notEmpty(),
        validate

    ],
    adminController.registro
)

const generateTokenResponse =(user)=>{
    const token = jwt.sign({
        email:user.correo, isAdmin:user.isAdmin
        }, "SomeRandomText", {
        expiresIn: "30d"
    });

    
    return {
        id : user.id,
        email: user.correo,
        name: user.nombre,
        usuario: user.usuario,
        isAdmin: user.isAdmin,
        token : token,


    };
}

module.exports = router;