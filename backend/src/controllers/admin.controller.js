const { insertData } = require('../config/db.mongo');
const { uploadFile2 } = require('../config/bucket');
// const { bcrypt } = require('bcryptjs');


const registro = async (req, res) => {
    // Recibir los datos enviados desde el cliente
    const { path, imagen, nombre, apellido, usuario, correo, password } = req.body;

    // Manipulacion de datos
    // Insertar datos a la base de datos
    console.log('Datos recibidos', nombre, apellido, usuario, correo, password);

    // const p_2 = await bcrypt.hash(password, 10);
    await uploadFile2(path, imagen);

    const ruta_aws = `https://proyecto2-mia.s3.amazonaws.com/${path}`;

    console.log('Ruta AWS', ruta_aws);
    const result = await insertData('Usuarios', {
        imagen: ruta_aws,
        nombre,
        apellido,
        usuario,
        correo,
        password //: p_2
    });


    if(result instanceof Error) {
        return res.status(500).json(
            {
                status: false,
                msg: 'Error al registrar usuario',
                data: result,
                image: ruta_aws
            });
    };

    // Respuesta
    return res.status(200).json({
        status: true,
        msg: 'Registro exitoso',
        data: result,
        image: ruta_aws
    });
};


module.exports = {
    registro
}


