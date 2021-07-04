let comentario = document.getElementById('comentario')
let contenidoComentario = document.getElementById('comentarios')

class Comentario {
    constructor (comentario){
        this.comentario = comentario
    }

    static async guardaComentario (comentarios){
        localStorage.setItem('dataComentario', JSON.stringify(comentarios))
    }

}

contenidoComentario.addEventListener("submit", async (event)=>{
    event.preventDefault()
    Comentario.guardaComentario(new Comentario(comentario.value))
    let resultado = await fetch ('http://localhost:3000/comentario',{
        method : 'POST', 
        headers : {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            "comentario" : comentario.value
        })
    })

})

