let contenedor = document.getElementById("marcas")
let marcas = [
    {
        titulo: 'Fim Frannino',
        descripcion: 'Conversion de HTML3 a HTML5 manteniendo estilo - Opcion de multilenguaje - Panel Administrato, login',
        imagen: 'frannino.png',
        link: 'https://frannino.com/'
    },
    {
        titulo: 'Lac Viajes',
        descripcion: 'Sitio Web Completo con CMD WordPress',
        imagen: 'lac.png',
        link: 'https://www.lacviajes.tur.ar/'
    },
    {
        titulo: 'Divali Clinic',
        descripcion: 'Sitio Web Completo - Sistema de turnos online',
        imagen: 'divali.png',
        link: 'http://divaliclinic.com/'
    },
    {
        titulo: 'Bazar Manzano',
        descripcion: 'Continuar estilo anterior - Sistema de Catalogo de Productos',
        imagen: 'manzano.png',
        link: 'http://www.bazarmanzano.com.ar/'
    },
    {
        titulo: 'Masfe',
        descripcion: 'Sitio Web Completo - implementacion de WordPress en el blog',
        imagen: 'masfe.png',
        link: 'https://partidomasfe.com/'
    },
    {
        titulo: 'Power Level',
        descripcion: 'Sitio Web Completo',
        imagen: 'power-level.png',
        link: 'https://powerlevel.com.ar/'
    },
    {
        titulo: 'Moretti Logistica',
        descripcion: 'Sitio Web Completo',
        imagen: 'moretti.png',
        link: 'http://morettilogistica.com/'
    },
    {
        titulo: 'Optica Sur',
        descripcion: 'Sitio Web Completo - Sistema Stock',
        imagen: 'opticasur.png',
        link: 'http://opticasur.online/'
    },
    {
        titulo: 'Malara Publicidad',
        descripcion: 'Sitio Web Completo - Panel para editar sitio - Mailing',
        imagen: 'malara.png',
        link: 'https://www.malarapublicidad.com.ar/'
    },
    {
        titulo: 'Widefield',
        descripcion: 'Sitio Web Completo',
        imagen: 'widefield.png',
        link: 'http://widefield.malarapublicidad.com.ar/'
    },
];




for (let i = 0; i < marcas.length; i++) {

    console.log(marcas[i])

    let html = `<div class="col-xl-4">
    <div class="card alto" style="width: 18rem;">
    <img class="card-img-top" src="./img/marcas/${marcas[i].imagen}" alt="${marcas[i].titulo} - Fernando Romo">
    <div class="card-body">
        <h5 class="card-title">${marcas[i].titulo}</h5>
        <p class="card-text">${marcas[i].descripcion}</p><br>
        <a class="mt-5" target="_blank" href="${marcas[i].link}">Ver Sitio</a>
    </div>
    </div>
    <br>
    </div>`;

    contenedor.innerHTML += html

}


