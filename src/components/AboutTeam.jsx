import React from 'react';

const AboutTeam = () => {
    return (
        <div className=" py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Sobre el Equipo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <img className="rounded-full h-20 w-20 mx-auto mb-4" src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3 className="text-xl font-semibold mb-2">Nombre del Miembro</h3>
                            <p className="text-gray-600 mb-2">Breve descripción del miembro del equipo.</p>
                            <p className="text-gray-600 mb-2">Rol: Desarrollador Frontend</p>
                            <div className="flex justify-center">
                                <a href="https://github.com/" className="text-gray-400 hover:text-gray-700">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.418 0-8-3.582-8-8s3.582-8 8-8c1.517 0 2.949.433 4.174 1.245a.75.75 0 01.219 1.037l-1.007 1.671a.75.75 0 00-.145.498l.005.124c0 2.976-2.276 5.566-5.274 5.991a.75.75 0 01-.894-.744l-.02-.138a.75.75 0 00-.736-.64c-.365 0-.68.265-.736.64l-.02.138a.75.75 0 01-.894.744C3.865 16.373 2 13.815 2 10c0-4.418 3.582-8 8-8s8 3.582 8 8c0 3.815-1.865 6.373-3.38 8.009a.75.75 0 01-.736.491c-.359 0-.69-.26-.741-.624l-.024-.143a.75.75 0 00-.736-.64c-.365 0-.68.265-.736.64l-.024.143a.75.75 0 01-.741.624C13.865 16.373 12 13.815 12 10c0-2.976 2.276-5.566 5.274-5.991a.75.75 0 01.894.744l.02.138a.75.75 0 00.736.64c.365 0 .68-.265.736-.64l.02-.138a.75.75 0 01.894-.744C18.135 3.627 20 6.185 20 10c0 4.418-3.582 8-8 8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;

