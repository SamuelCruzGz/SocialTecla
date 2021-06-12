const sequelize = require ('../../db/db.conexion')

module.exports  = class Login {
    constructor (datos){
        this.datos = datos
    }

    static async usuarioExistente (dato){
        let usuarioExiste = [
            dato.usuario,
            dato.pass
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuario WHERE usuario = ? and pass = ?`,
            {
                replacements : usuarioExiste , type: sequelize.QueryTypes.SELECT
            })
            if (resultado[0] === undefined ){
                return false
            } else {
                return true 
            }
        } catch (e) {
            
        }
    }
}