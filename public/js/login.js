let formLogin = document.getElementById('form_login')
let usuarioL = document.getElementById('usuario')
let passL = document.getElementById('pass')

class Usuario {
    constructor(usuarioL, passL){
        this.usuarioL = usuarioL,
        this.passL = passL,
        this.token = "",
        this.id_usuario = ""
    }

    static async guardaUsuario(usuario) {
        localStorage.setItem("dataUsuario", JSON.stringify(usuario))
    }

    static async recuperaUsuario() {
        let resultado = await JSON.parse(localStorage.getItem('dataUsuario'))
        return resultado
    }


}


formLogin.addEventListener("submit", async (event)=>{
    event.preventDefault()
    Usuario.guardaUsuario(new Usuario(usuarioL.value, passL.value))
    let resultado = await fetch ('http://localhost:3000/login',{
        method:'POST',
        headers : {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            "usuario" : usuarioL.value,
            "pass" : passL.value,
        })

    })

    let regresoToken = await resultado.json()
    console.log(regresoToken);
    let data = await Usuario.recuperaUsuario()
    data.token = regresoToken.token
    data.id_usuario = regresoToken.usuarioId.id_usuario
    Usuario.guardaUsuario(data)
    if (data.token === undefined) {
        console.log('no puedes acceder porque no tienes un token');
    } else {
        let data = await Usuario.recuperaUsuario();
        let resultado = await fetch("http://localhost:3000/", {
            method: 'get',
            headers: {
                "Accept": "application/json, text/plain, /",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`,
            },
        })
 
    
        let res = await resultado.json();
       if (res === 'ok') {
            location.href = '/principal/' + data.id_usuario
        } else {
            console.log('no se pudo acceder');
        }
    }
})
