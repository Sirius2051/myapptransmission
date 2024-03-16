import React from 'react';

const About = () => {
    return (
        <div className=" min-h-80 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sobre el Proyecto</h2>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit, massa sit amet feugiat fermentum, nisi velit tristique libero, vel molestie nisi libero ac metus. Donec tempor, eros at fringilla efficitur, tortor elit bibendum sapien, at dapibus urna ipsum ut risus.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Vivamus tincidunt pharetra erat, vel pharetra felis dapibus a. Morbi volutpat nisl ut lorem aliquam, id aliquam est finibus. Duis vulputate auctor sodales. In laoreet nunc eget arcu fermentum, non sagittis libero vestibulum. Nam vel pulvinar dolor.
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
                        <img className="rounded-lg shadow-md" src="https://via.placeholder.com/600x400" alt="Project" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
