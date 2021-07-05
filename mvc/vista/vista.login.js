const { restart } = require('nodemon')
const controladorLogin = require ('../controlador/controlador.login')

module.exports = async (app)=>{
    app.get('/', controladorLogin.verificacionUsuario, async (req, res) =>{
        res.json('ok')
        
    })

    app.get('/principal/:id_usuario', async (req, res)=>{
        let data = req.params
       
        try {
            let resultado = await controladorLogin.obtenerId(data)
            let resp = await controladorLogin.consultarComentario()
          
            res.render("principal",{
                data : resultado[0],
                dato : resp[0]
            })
        } catch (e) {
            console.log(e);
            res.status(400)
        } 
        
    })

    app.get('/login', async (req, res) => {
        let user = res.body
        try {
            res.render("login",{
                data : user
            })
        } catch (e) {
            console.log(e);
            res.status(400).json('No se pudo abrir la pagina')
        }
    })    

    app.get ('/comentario/:id_usuario', async (req, res) =>{
        let data = req.params
   
        try {
 
            res.redirect('/principal/:id_usuario')
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/comentario', async (req, res) =>{
        let comentario = req.body

        console.log('hola');
        console.log(comentario);
        try {
            let resultado = await controladorLogin.crearComentario(comentario)
            res.redirect('/comentario/:id_usuario')
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/login', async (req, res) => {
        let usuario = req.body 
        
        try {
            let resultado = await controladorLogin.revisarUSuario(usuario)
  
            if (resultado) {

                let usuarioR = await controladorLogin.perfilUsuario(usuario)
              
                let tokenResult = await controladorLogin.generaToken(usuario)
                res.json({
                    token : tokenResult,
                    usuarioId : usuarioR
                })
             
            }else{
                throw new Error('No se pudo generar el token')
            }
        } catch (e) {
            console.log(e);
            res.status(400)
        }
    })

    app.get('/registro', async (req, res) =>{
        try {
            res.render("registro")
        } catch (e) {
            console.log(e);
            res.status(400)
        }

    })

    app.get('/puntuacion/conocimiento/', async (req, res) =>{
        let idCon = await controladorLogin.obtIdCon()
        try {
            
            let resultado = await controladorLogin.consultarConocimiento(idCon[0])  
                           
            console.log('cc');
            console.log(resultado);
            res.render  ('puntuaciones',{
                data : resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/puntuacion/conocimiento/', async (req, res) =>{
        let data = req.body
   
        try {
            let id_conocimiento = await controladorLogin.obtIdCon()
       
            if (id_conocimiento !== undefined) {
                let resultado = await controladorLogin.actualizarCon(data ,id_conocimiento[0])      
                res.redirect('/puntuacion/conocimiento/')
            }
           
          
            
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/puntuacion/tecnologia/', async (req, res) =>{
        let data = req.body 
        try {
            let id_tecnologia = await controladorLogin.obtIdTec()
            if (id_tecnologia !== undefined) {
                let resultado = await controladorLogin.actualizarTec(data ,id_tecnologia[0])
            }
        } catch (e) {
            console.log(e);
        }
    })

    
    app.post('/puntuacion/desempeno/', async (req, res) =>{
        let data = req.body 
        try {
            let id_desempeno = await controladorLogin.obtIdDes()
            console.log(id_desempeno);
            if (id_desempeno !== undefined) {
                let resultado = await controladorLogin.actualizarDes(data, id_desempeno[0])
            }
        } catch (e) {
            console.log(e);
        }
    })

    
    app.post('/puntuacion/blandas/', async (req, res) =>{
        let data = req.body 
        try {
            let id_blanda = await controladorLogin.obtIdBla()
            if (id_blanda !== undefined) {
                let resultado = await controladorLogin.actualizarBla(data, id_blanda[0])
            }
        } catch (e) {
            console.log(e);
        }
    })

    
    app.post('/puntuacion/entornos/', async (req, res) =>{
        let data = req.body 
        try {
            let id_entorno_profesional = await controladorLogin.obtIdEP()
            if (id_entorno_profesional !== undefined) {
                let resultado = await controladorLogin.actualizarEP(data, id_entorno_profesional[0])
            }
        } catch (e) {
            console.log(e);
        }
    })


    app.get('/puntuaciones/:id_usuario', async (req, res)=>{
        let data = req.params
        let idCon = await controladorLogin.obtIdCon()
        try {
            let resultado = await controladorLogin.obtenerId(data)
            let agregarT = await controladorLogin.agregarTecnologia()
            let agregarC = await controladorLogin.agregarConocimiento()
            let agregarD = await controladorLogin.agregarDesempeno()
            let agregarB = await controladorLogin.agregarBlanda()
            let agregarEP = await controladorLogin.agregarEntornoP()
        
            res.render("puntuaciones", {
                data : resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
       
    })

    app.post('/registro', async (req, res)=>{
        let user = req.body
        try {
            let resultado = await controladorLogin.crearUsuario(user)
            res.redirect('/registro')
        } catch (e) {
            console.log(e)
            res.status(400)
        }
    })

    app.get('/perfil/:id_usuario', async(req, res)=>{
        let data = req.params
        try {
            let resultado = await controladorLogin.obtenerId(data)
            res.render('perfil',{
                data : resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })



}