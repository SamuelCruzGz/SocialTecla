
let bd = document.getElementById('bd')
let api = document.getElementById('apis')
let test = document.getElementById('testing')
let seguridad = document.getElementById('seguridad')
let tObjeto = document.getElementById('t_objetos')


class Conocimiento {

    constructor (){
        this.id_conocimiento = ""
    }

    static async agregarConocimiento(){
                
        bd.addEventListener('click', async(event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/conocimiento',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "bd" : bd.value
                })

            })
            let res = await resultado.json()
            let idCon = res.id_conocimiento

            console.log(idCon);
            location.href = '/puntuacion/conocimiento/'+idCon
                
        })
        api.addEventListener('click', async(event)=>{
            event.preventDefault()
            let resultado = await fetch('http://localhost:3000/puntuacion/conocimiento',{
                method : 'POST',
                headers : {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "apis" : api.value
                })
        })
    })

    test.addEventListener('click', async(event)=>{
        event.preventDefault()
        let resultado = await fetch('http://localhost:3000/puntuacion/conocimiento',{
            method : 'POST',
            headers : {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                "testing" : test.value
            })
    })
})

seguridad.addEventListener('click', async(event)=>{
    event.preventDefault()
    let resultado = await fetch('http://localhost:3000/puntuacion/conocimiento',{
        method : 'POST',
        headers : {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            
            "seguridad" : seguridad.value
        })
})
})

tObjeto.addEventListener('click', async(event)=>{
    event.preventDefault()
    let resultado = await fetch('http://localhost:3000/puntuacion/conocimiento',{
        method : 'POST',
        headers : {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            "t_objetos" : tObjeto.value
        })
})
})

}
}

Conocimiento.agregarConocimiento()