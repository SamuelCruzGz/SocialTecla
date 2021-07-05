let agregar = document.getElementById('add')
let bd = document.getElementById('bd')
let api = document.getElementById('apis')
let test = document.getElementById('testing')
let seguridad = document.getElementById('seguridad')
let tObjeto = document.getElementById('t_objetos')
let nodejs = document.getElementById('nodejs')
let front = document.getElementById('frontend')
let swagger = document.getElementById('swagger')
let javas = document.getElementById('javascript')
let calidad_codigo = document.getElementById('calidad_codigo')
let velocidad_entrega = document.getElementById('velocidad_entrega')
let performance = document.getElementById('performance')
let enfocado = document.getElementById('enfocado')
let trabajo_equipo = document.getElementById('equipo')
let compromiso = document.getElementById('comprometido')
let comunicacion = document.getElementById('comunicacion')
let capacidad_aprendizaje = document.getElementById('aprendizaje')
let resolucion_problemas = document.getElementById('problemas')
let versionado = document.getElementById('versionado')
let trello = document.getElementById('trello')
let slack = document.getElementById('slack')
let metodologia = document.getElementById('agiles')


class Conocimiento {

    constructor (){
        this.id_conocimiento = ""
    }

    static async agregarConocimiento(){
                
        agregar.addEventListener('click', async (event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/conocimiento/',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "bd" : bd.value,
                    "apis" : api.value,
                    "testing" : test.value,
                    "seguridad" : seguridad.value,
                    "t_objetos" : tObjeto.value
                })

            })
            
            
            let resp = await fetch ("http://localhost:3000/",{
                method : 'get',
                headers : {
                    "Accept": "application/json, text/plain, /",
                    'Content-Type': 'application/json',
                },
            })

            let res = await resp.json()
            console.log('json');
            console.log(res);
            if (res === 'ok') {
                location.href = '/puntuacion/conocimiento/'
            }
            
        })

}

    static async agregarTecnologia(){

        agregar.addEventListener('click', async (event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/tecnologia/',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "nodejs" : nodejs.value,
                    "frontend" : front.value,
                    "swagger" : swagger.value,
                    "javascript" : javas.value
                })
            })
            let res = await resultado.json()
            let idTec = res.id_tecnologia

            console.log(idTec);
            location.href = '/puntuacion/tecnologia/'+idTec
        })
        
    }

    
    static async agregarDesempeno(){

        agregar.addEventListener('click', async (event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/desempeno/',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "calidad_codigo" : calidad_codigo.value,
                    "velocidad_entrega" : velocidad_entrega.value,
                    "performance" : performance.value

                })
            })
            let res = await resultado.json()
            let idDes = res.id_desempeno

            console.log(idDes);
            location.href = '/puntuacion/desempeno/'+idDes
        })
        
    }

    
    static async agregarBlandas(){

        agregar.addEventListener('click', async (event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/blandas/',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "enfocado" : enfocado.value,
                    "trabajo_equipo" : trabajo_equipo.value,
                    "compromiso" : compromiso.value,
                    "comunicacion" : comunicacion.value,
                    "capacidad_aprendizaje" : capacidad_aprendizaje.value,
                    "resolucion_problemas" : resolucion_problemas.value
                })
            })
            let res = await resultado.json()
            let idBla = res.id_blanda

            console.log(idBla);
            location.href = '/puntuacion/blandas/'+idBla
        })
        
    }

    
    static async agregarEntornosP(){

        agregar.addEventListener('click', async (event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/entornos/',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "versionado" : versionado.value,
                    "trello" : trello.value,
                    "slack" : slack.value,
                    "metodologia" : metodologia.value
                })
            })
            let res = await resultado.json()
            let idEP = res.id_entorno_profesional

            console.log(idEP);
            location.href = '/puntuacion/entornos/'+idEP
        })
        
    }

}

Conocimiento.agregarConocimiento()
Conocimiento.agregarTecnologia()
Conocimiento.agregarDesempeno()
Conocimiento.agregarBlandas()
Conocimiento.agregarEntornosP()