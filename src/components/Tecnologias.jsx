import React from 'react';
import Slider from 'react-slick';

// Estilos de Tailwind para las flechas del slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tecnologias = () => {
    // Array de tecnologías usadas en el proyecto
    const tecnologias = [
        { nombre: 'HTML5', imagen: '/html5_logo.png' },
        { nombre: 'CSS3', imagen: '/css3_logo.png' },
        { nombre: 'JavaScript', imagen: '/javascript_logo.png' },
        // Agrega más tecnologías según sea necesario
    ];

    // Configuración del slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
            <Slider {...settings}>
                {tecnologias.map((tecnologia, index) => (
                    <div key={index} className="mx-2">
                        <img
                            src={tecnologia.imagen}
                            alt={tecnologia.nombre}
                            className="w-32 h-32 object-contain rounded-lg shadow-md"
                        />
                        <p className="text-center mt-2">{tecnologia.nombre}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Tecnologias;

