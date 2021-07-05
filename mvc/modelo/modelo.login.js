const { restart } = require('nodemon')
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
        let idC =[
            id.id_conocimiento
        ]
        
        try {
            let resultado = await sequelize.query(`update conocimiento set bd = ?, apis = ?, testing = ?, seguridad = ?, t_objetos = ? where id_conocimiento = ${idC}`,{
                replacements : conocimiento, type : sequelize.QueryTypes.SELECT,
            })
        
        } catch (e) {
            console.log(e);
        }
    }

    static async actualizarTecnologia (data, id){
        let tecnologia = [
            data.nodejs, 
            data.frontend,
            data.swagger,
            data.javascript
        ]

        let idT = [
            id.id_tecnologia
        ]
        
        try {
            let resultado = await sequelize.query(`update tecnologia set nodejs = ?, frontend = ?, swagger = ?, javascript = ? where id_tecnologia = ${idT}`,{
                replacements : tecnologia, type : sequelize.QueryTypes.SELECT,
            })
        } catch (e) {
            console.log(e);
        }

    }

    static async actualizarDesempeno (data, id){
        let desempeno = [
            data.calidad_codigo, 
            data.velocidad_entrega,
            data.performance
        ]

        let idD = [
            id.id_desempeno
        ]
        try {
            let resultado = await sequelize.query(`update desempeno set calidad_codigo = ?, velocidad_entrega = ?, performance = ? where id_desempeno = ${idD}`,{
                replacements : desempeno, type : sequelize.QueryTypes.SELECT,    
            })
        } catch (e) {
            console.log(e);
            
        }
    }

    static async actualizarBlandas (data, id){
        let blandas = [
            data.enfocado, 
            data.trabajo_equipo,
            data.compromiso,
            data.comunicacion,
            data.capacidad_aprendizaje,
            data.resolucion_problemas
        ]
        let idB = [
            id.id_blanda
        ]
        try {
            let resultado = await sequelize.query(`update blandas set enfocado = ?, trabajo_equipo = ?, compromiso = ?, comunicacion = ?, capacidad_aprendizaje = ?, resolucion_problemas = ? where id_blanda = ${idB}`,{
                replacements : blandas, type : sequelize.QueryTypes.SELECT,
            })
        } catch (e) {
            console.log(e);
        }
    }

    static async actualizarEntornosProfesionales (data, id){
        let entornosPro = [
            data.versionado, 
            data.trello,
            data.slack,
            data.metodologia
        ]
        let idEP = [
            id.id_entorno_profesional
        ]
        try {
            let resultado = await sequelize.query(`update entornos_profesionales set versionado = ?, trello = ?, slack = ?, metodologia = ? where id_entorno_profesional = ${idEP}`,{
                replacements : entornosPro , type : sequelize.QueryTypes.SELECT,
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

    static async obtIdTecnologia(){
        try {
            let resultado = await sequelize.query('select id_tecnologia from tecnologia')
            return resultado
        } catch (e) {
            console.log(e);
        }
    }

    static async obtIdDesempeno(){
        try {
            let resultado = await sequelize.query('select id_desempeno from desempeno')
            return resultado
        } catch (e) {
            console.log(e);
        }
    }

    static async obtIdBlandas (){
        try {
            let resultado = await sequelize.query('select id_blanda from blandas')
            return resultado
        } catch (e) {
            console.log(e);
        }
    }

    static async obtIdEntornosPro (){
        try {
            let resultado = await sequelize.query('select id_entorno_profesional from entornos_profesionales')
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

        } catch (e) {
            console.log(e);
        }
    }

    static async agregarTecnologia(){
        try {
            let resultado = await sequelize.query (`insert into tecnologia (nodejs, frontend, swagger, javascript) values (0,0,0,0)`)
            
        } catch (e) {
            console.log(e);
        }
    }

    static async agregarDesempeno(){
        try {
            let resultado = await sequelize.query ('insert into desempeno (calidad_codigo, velocidad_entrega, performance) values (0,0,0)')
        } catch (e) {
            console.log(e);
        }
    }
    static async agregarBlandas (){
        try {
            let resultado = await sequelize.query('insert into blandas (enfocado, trabajo_equipo, compromiso, comunicacion, capacidad_aprendizaje, resolucion_problemas) values (0,0,0,0,0,0)')
        } catch (e) {
            console.log(e);
        }
    }
    static async agregarEntornosProfesionales(){
        try {
            let resultado = await sequelize.query('insert into entornos_profesionales (versionado, trello, slack, metodologia) values (0,0,0,0)')
        } catch (e) {
            console.log(e);
        }
    }

    static async consultarConocimiento(id){
        let idCon = [
            id.id_conocimiento
        ]
        try {
            let resultado = await sequelize.query(`select * from conocimiento where id_conocimiento = ?`,{
                replacements  : idCon , type: sequelize.QueryTypes.SELECT
            })
            console.log(resultado);
        } catch (e) {
            console.log(e);
        }
    }
}