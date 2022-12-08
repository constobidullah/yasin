import React from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import './Service.css'

const Service = () => {
    return (
        <div className='bg-slate-700 text-white'>
            <h1 className='text-5xl pt-20'>WHAT SERVICE I PROVIDE </h1>

            <div className='service-container'>
                <div>
                    <i class="fa-solid fa-camera-rotate text-4xl"></i>
                    <h2 className='text-4xl'>Adobe photoshop</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur vel consectetur vitae, distinctio veniam nam ipsam sint odit delectus? Praesentium eum veniam pariatur ab.</p>
                </div>
                <div>
                    <i class="fa-solid fa-a text-4xl"></i>
                    <h2 className='text-4xl'>Adobe illustrator</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur vel consectetur vitae, distinctio veniam nam ipsam sint odit delectus? Praesentium eum veniam pariatur ab.</p>
                </div>
                <div>
                    <i class="fa-brands fa-microsoft text-4xl"></i>
                    <h2 className='text-4xl'>Microsoft office</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur vel consectetur vitae, distinctio veniam nam ipsam sint odit delectus? Praesentium eum veniam pariatur ab.</p>
                </div>
                <div>
                    <i class="fa-solid fa-file-excel text-4xl"></i>
                    <h2 className='text-4xl'>Microsoft Excel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur vel consectetur vitae, distinctio veniam nam ipsam sint odit delectus? Praesentium eum veniam pariatur ab.</p>
                </div>
                <div>
                    <i class="fa-solid fa-file-powerpoint text-4xl"></i>
                    <h2 className='text-4xl'>Microsoft Powerpoint</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur vel consectetur vitae, distinctio veniam nam ipsam sint odit delectus? Praesentium eum veniam pariatur ab.</p>
                </div>
                <div>
                    <i class="fa-solid fa-file-word text-4xl"></i>
                    <h2 className='text-4xl'>Microsoft Word</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur vel consectetur vitae, distinctio veniam nam ipsam sint odit delectus? Praesentium eum veniam pariatur ab.</p>
                </div>
            </div>

        </div>
    );
};

export default Service;