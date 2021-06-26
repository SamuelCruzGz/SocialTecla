let nombre = document.getElementById('nombres')
let apellido = document.getElementById('apellidos')
let usuario = document.getElementById('usuario')
let edad = document.getElementById('edad')
let linked = document.getElementById('linkedin')
let contenedor = document.getElementById('contenedor')

async function eliminarN(){
    nombre.removeAttribute('readonly')
    const boton = document.createElement('button')
    boton.textContent = "Editar nombres"
    const salto = document.createElement('br')
    contenedor.appendChild(salto)
    contenedor.appendChild(boton)
    
}

async function eliminarA (){
    apellido.removeAttribute('readonly')
    const boton = document.createElement('button')
    boton.textContent = "Editar apellidos"
    const salto = document.createElement('br')
    contenedor.appendChild(salto)
    contenedor.appendChild(boton)
}

async function eliminarU(){
    usuario.removeAttribute('readonly')
    const boton = document.createElement('button')
    boton.textContent = "Editar usuario"
    const salto = document.createElement('br')
    contenedor.appendChild(salto)
    contenedor.appendChild(boton)
}

async function eliminarE(){
    edad.removeAttribute('readonly')
    const boton = document.createElement('button')
    boton.textContent = "Editar edad"
    const salto = document.createElement('br')
    contenedor.appendChild(salto)
    contenedor.appendChild(boton)
}

async function eliminarL(){
    linked.removeAttribute('readonly')
    const boton = document.createElement('button')
    boton.textContent = "Editar LinkedIn"
    const salto = document.createElement('br')
    contenedor.appendChild(salto)
    contenedor.appendChild(boton)
}
