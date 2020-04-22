const fila = document.querySelector(`.contenedor-carousel`)
//Guardamos en un arreglo todos los objetos de  clase .pelicula
const peliculas = document.querySelectorAll(`.pelicula`)

const flechaIzquierda = document.getElementById(`flecha-izquierda`)
const flechaDerecha = document.getElementById(`flecha-derecha`)

// ------------------Event Listener para la flecha derecha--------------

flechaDerecha.addEventListener(`click`, () => {
  //permite calcular el scroll necesario para que las imagenes se muevan
  fila.scrollLeft += fila.offsetWidth

  const indicadorActivo = document.querySelector(`.indicadores .activo`)
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add(`activo`)
    indicadorActivo.classList.remove(`activo`)
  }
})

flechaIzquierda.addEventListener(`click`, () => {
  //permite calcular el scroll necesario para que las imagenes se muevan
  fila.scrollLeft -= fila.offsetWidth

  const indicadorActivo = document.querySelector(`.indicadores .activo`)
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add(`activo`)
    indicadorActivo.classList.remove(`activo`)
  }
})

//--------------Paginacion-------------------------
//Math.ceil para redondear hacia arriba
const numeroPaginas = Math.ceil(peliculas.length / 5)
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement("button")
  if (i === 0) {
    indicador.classList.add("activo") //agregamos la clase activo a indicador
  }
  //agregamos el elemento indicador al div .indicadores
  document.querySelector(`.indicadores`).appendChild(indicador)

  indicador.addEventListener(`click`, (e) => {
    fila.scrollLeft = i * fila.offsetWidth

    document.querySelector(`.indicadores .activo`).classList.remove(`activo`)
    e.target.classList.add(`activo`)
  })
}

//----------------------Hover----------------------------------

peliculas.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget
    setTimeout(() => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"))
      elemento.classList.add("hover")
    }, 200)
  })
})

fila.addEventListener("mouseleave", () =>
  peliculas.forEach((pelicula) => pelicula.classList.remove(`hover`))
)
