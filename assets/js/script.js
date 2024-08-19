const propiedades_venta = [
    {
        nombre: 'Apartamento en zona exclusiva',
        src: './assets/img/casa-1.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Ruta del Sol 212, Nuevo Horizonte, CP 45612',
        habitaciones: 4,
        banos: 2,
        costo: 50000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento con vista al lago',
        src: './assets/img/casa-2.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Residencial El Roble, Verdevalle, CP 34567',
        habitaciones: 4,
        banos: 3,
        costo: 55000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento con terraza',
        src: './assets/img/casa-3.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Avenida de los Olivos 201, Barrio El Nogal, La Cumbre, CP 66778',
        habitaciones: 3,
        banos: 2,
        costo: 60000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento en zona exclusiva',
        src: './assets/img/casa-7.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Calle de los Destellos, Ciudad Arcadia, CP 12345',
        habitaciones: 4,
        banos: 2,
        costo: 80000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor',
        src: './assets/img/casa-8.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Calle de la Fantasía, 9, Casa 8, Sector del Alba, CP 78902',
        habitaciones: 5,
        banos: 3,
        costo: 85000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/casa-9.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Avenida del Cielo, 45, Urbanización Estrella, CP 23478',
        habitaciones: 2,
        banos: 2,
        costo: 70000,
        smoke: false,
        pets: false
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/casa-4.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Avenida del Jardín 150, Las Flores, CP 90123',
        habitaciones: 2,
        banos: 2,
        costo: 65000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/casa-5.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Avenida del Mar 789, Edificio Horizonte, Playa Azul, CP 23456',
        habitaciones: 3,
        banos: 2,
        costo: 70000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Condominio en zona residencial',
        src: './assets/img/casa-6.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Calle del Valle 123, Apartamento 4B, Ciudadela Nueva, CP 45678',
        habitaciones: 2,
        banos: 2,
        costo: 75000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento en zona rural',
        src: './assets/img/casa-10.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Calle de los Castaños 777, Casa 5A, CP 78901',
        habitaciones: 4,
        banos: 2,
        costo: 65000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con piscina',
        src: './assets/img/casa-11.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Calle de los Cerezos 78, Apartamento 12B, CP 89012',
        habitaciones: 3,
        banos: 2,
        costo: 70000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento en zona tranquila',
        src: './assets/img/casa-12.jpg',
        descripcion: 'Este apartamento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'Calle de los Abetos 333, Casa 10A, CP 90123',
        habitaciones: 2,
        banos: 1,
        costo: 75000,
        smoke: true,
        pets: true
    }
];

function cargarPropiedades() {
    const contenedor = document.querySelector('.div-container-2');
    const pathname = window.location.pathname;

    const propiedades = pathname.includes('alquiler') ? propiedades_alquiler : propiedades_venta;

    contenedor.innerHTML = '';

    propiedades.forEach(propiedad => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card-container';

        const smokeMessage = propiedad.smoke ? '🚬 Está permitido fumar.' : '🚭 No está permitido fumar.';
        const petsMessage = propiedad.pets ? '🐕 Está permitido tener mascotas.' : '🚫 No está permitido tener mascotas.';

        tarjeta.innerHTML = `
            <article class="article-card">
                <div class="card-img">
                    <img src="${propiedad.src}" alt="${propiedad.nombre}">
                </div>
                <div class="card-content">
                    <p class="card-title">${propiedad.nombre}</p>
                    <p class="card-subtitle">${propiedad.descripcion}</p>
                    <div class="card-text">
                        <i class="fa-solid fa-map-marker-alt"></i>
                        <span>${propiedad.ubicacion}</span>
                    </div>
                    <div class="card-text">
                        <i class="fa-solid fa-bed"></i>
                        <span>${propiedad.habitaciones} Habitaciones |</span>
                        <i class="fa-solid fa-bath"></i>
                        <span>${propiedad.banos} Baños</span>
                    </div>
                    <div class="card-text">
                        <p>$${propiedad.costo.toLocaleString()}</p>
                    </div>
                    <div class="card-text">
                        <span>${smokeMessage}</span>
                    </div>
                    <div class="card-text">
                        <span>${petsMessage}</span>
                    </div>
                </div>
            </article>
        `;

        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', cargarPropiedades);