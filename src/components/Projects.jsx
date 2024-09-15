
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'
import { project } from '../constants';

const ProjectCard = ({ image, title, description, responsibility, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-max bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-max">
            <img className="w-full rounded-t-lg h-auto object-cover " src={{ image }} alt="" />
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className="p-4 sm:p-6">
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{responsibility}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="h-full flex flex-col gap-7 justify-center m-2 mt-12 p-12 pl-3 pr-3">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        responsibility={item.responsibility}
                        links={item.links}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Projects