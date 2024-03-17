import React from 'react';
import "animate.css"
const About = () => {
    return (
        <div className="transition flex justify-center items-center min-h-screen py-12" id='about'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-white mb-10 ">Sobre el Proyecto</h2>
                        <p className="text-white mb-4">
                            Es una página web que ofrece una experiencia inmersiva para explorar la evolución de los medios de transmisión a lo largo de la historia. A través de una cuidadosa selección de objetos en 3D, los usuarios pueden visualizar ejemplos representativos de medios de comunicación, desde las formas más rudimentarias hasta las tecnologías más avanzadas de hoy en día. Esta representación visual ofrece una perspectiva única sobre cómo la humanidad ha progresado en su capacidad para comunicarse y compartir información.
                        </p>
                        <p className="text-white mb-4">
                        A través de esta experiencia interactiva, mi objetivo es no solo informar, sino también inspirar una apreciación más profunda de cómo la comunicación ha sido un motor fundamental para el progreso humano. Al ofrecer una representación visual detallada y accesible, espero fomentar la reflexión sobre la importancia de los medios de transmisión en la configuración de nuestro mundo actual y futuro
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8 scroll-m-10 hover:cursor-pointer transition-all">
                        <img className="rounded-lg shadow-md hover:animate__animate animate-pulse" src="https://media.istockphoto.com/id/1168442759/es/v%C3%ADdeo/4k-loopable-l%C3%ADneas-de-onda-abstractas.jpg?s=640x640&k=20&c=EU5xUd04XT9FDY9WOHdp5K5Uhvnx03zcOZs3ziEyzw4=" alt="Project" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
