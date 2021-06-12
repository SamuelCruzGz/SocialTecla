
const sequelize = require ('../../db/db.conexion')

module.exports = class ModeloUsuario {
    constructor (datos)
    {
        this.datos = datos
    }

    static async crearUsuario (dato){
        let crearUsr = [
            dato.nombres, 
            dato.apellidos, 
            dato.usuario,
            dato.pass,
            dato.edad, 
            dato.linkedin,
        ]
        try {
            let resultado = await sequelize.query(`INSERT INTO usuario (nombres, apellidos, usuario, pass, edad, linkedin) values (?,?,?,?,?,?)`,
            {
                replacements : crearUsr, type : sequelize.QueryTypes.SELECT
            })
            return resultado
        } catch (e) {
            console.log(e);
        }
    }
}