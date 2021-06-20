const controladorLogin = require ('../controlador/controlador.login')

module.exports = async (app)=>{
    app.get('/', controladorLogin.verificacionUsuario, async (req, res) =>{
        res.json('ok')
    })

    app.get('/principal/:id_usuario', async (req, res)=>{
        let id = await req.params.id_usuario
        console.log(id);   
        try {
            resultado = await controladorLogin.perfilUsuario()
            res.render("principal",{
                data : resultado[0]
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

    app.post('/login', async (req, res) => {
        let usuario = req.body
       
        try {
            let resultado = await controladorLogin.revisarUSuario(usuario)
            if (resultado) {
                let tokenResult = await controladorLogin.generaToken(usuario)
        
                res.redirect('/principal')
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

    app.get('/puntuaciones', async (req, res)=>{
        try {
            let resultado = await controladorLogin.perfilUsuario()
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

    app.get('/perfil', async(req, res)=>{
        try {
            let resultado = await controladorLogin.perfilUsuario()
            res.render('perfil',{
                data : resultado[0]
            })
        } catch (e) {
            console.log(e);
        }
    })



}