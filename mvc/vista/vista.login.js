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

    app.get('/puntuacion/update/conocimiento/:id_conocimiento', async (req, res) =>{
        let data = req.params
        try {
            console.log('hola');
            console.log(data);            
                             
        } catch (e) {
            console.log(e);
        }
    })

    app.post('/puntuacion/conocimiento/:id_usuario', async (req, res) =>{
        let data = req.body
        let id = req.params
        console.log(data);
        try {
            let resultado = await controladorLogin.actualizarCon(data , id)
            let id_conocimiento = await controladorLogin.obtIdCon()
            if (agregarC === 1) {
                let id_conocimiento = await controladorLogin.obtIdCon()
                res.json({
                    id_conocimiento : id_conocimiento[0]
                })
            }else{
                let id_conocimiento = await controladorLogin.obtIdCon()
                res.json({
                    id_conocimiento : id_conocimiento[0]
                })
      
            }
            
        } catch (e) {
            console.log(e);
        }
    })

    app.get('/puntuaciones/:id_usuario', async (req, res)=>{
        let data = req.params
        try {
            let resultado = await controladorLogin.obtenerId(data)
            let agregarC = await controladorLogin.agregarConocimiento()

            
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