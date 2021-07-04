const sequelize = require ('../../db/db.conexion')

module.exports  = class Login {
    constructor (datos){
        this.datos = datos
    }

    static async actualizarConocimiento (data, id){
        let conocimiento = [
            data.bd,
            data.apis,
            data.testing,
            data.seguridad,
            data.t_objetos,
        ]
        let idCon = [
            id.id_conocimiento
        ]
        console.log(conocimiento);
        try {
            let resultado = await sequelize.query(`update conocimiento set bd = ?, set apis = ?, set testing = ?, set seguridad = ?, t_objetos = ? where id_conocimiento = ?`,{
                replacements : user, idCon, type : sequelize.QueryTypes.SELECT
            })
        } catch (e) {
            console.log(e);
        }
    }

    static async obtIdConocimiento (){
        try {
            let resultado = await sequelize.query('select id_conocimiento from conocimiento')
            return resultado 
        } catch (e) {
            console.log(e);
        }
    }

    static async listar(dato){
        let usuario = [
            dato.usuario,
            dato.pass
        ]

        try {
            let resultado = await sequelize.query(`SELECT * FROM usuario WHERE usuario = ? and pass = ?`,
            {
                replacements : usuario, type :sequelize.QueryTypes.SELECT
            })
         
            if (resultado [0]===undefined  ) {
                return false
            }else{
                return resultado[0]
            }
        } catch (e) {
            console.log("Error aqui");
        }
    }

    static async obtId(data){
        let user = [
            data.id_usuario
        ]
        try {
            let resultado = await sequelize.query(`SELECT * FROM usuario WHERE id_usuario = ?`,
                {
                    replacements : user, type : sequelize.QueryTypes.SELECT
                }
            )
            return resultado
        } catch (e) {
            console.log(e);
        }
    }


    static async usuarioExistente (dato){
        let usuarioExiste = [          
            dato.usuario,
            dato.pass
        ]
        console.log(usuarioExiste);
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
            throw new Error ('Ocurrio un error inesperado')

        }
    }

    static async crearUsuario (dato){
        let crearUsr = [
            dato.nombres, 
            dato.apellidos,
            dato.usuario, 
            dato.pass, 
            dato.edad, 
            dato.linkedin
        ]
        try {
            let resultado = await sequelize.query(`insert into usuario (nombres, apellidos, usuario, pass, edad, linkedin) values (?,?,?,?,?,?)`,
            {
                replacements : crearUsr , type: sequelize.QueryTypes.SELECT
            })
        } catch (e) {
            console.log(e); 
        }

    }

    static async comentario (dato){
        let crearComentario = [
            dato.comentario
        ]
        try {
            let resultado = await sequelize.query (`insert into comentarios values (?)`,{
                replacements : crearComentario, type : sequelize.QueryTypes.SELECT
            })
            return resultado
        } catch (e) {
            console.log(e);
        }

    }

    static async obtComentario (){
     
            let resultado = await sequelize.query (`select * from comentarios`)
      
            return resultado
     
    }

    static async agregarConocimiento (){

        
        try {
            let resultado = await sequelize.query (`insert into conocimiento (bd, apis, testing, seguridad, t_objetos) values (0,0,0,0,0)`)
            console.log(resultado);
        } catch (e) {
            console.log(e);
        }
    }
}