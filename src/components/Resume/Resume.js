import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <div className='resume-parent'>

            <h2 className='text-7xl text-neutral-200 my-10 underline'>Resume</h2>
            
            <div className='resume-container'>

                <div className='text-left'>
                    <h3 className='text-4xl text-cyan-400 mb-10'>Education</h3>

                    <div className='education-text'>
                        <p className='text-white'>12 December 2020 to 04 july 2021 </p>
                        <h3 className='text-3xl text-orange-400'>Graphic design with Sikhbe-sobai</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam laborum repellat excepturi unde! Ipsa perspiciatis quasi dignissimos praesentium distinctio.</p>
                    </div>

                    <div className='education-text'>
                        <p className='text-white'>01 january 2017 to 12 February 2020</p>
                        <h3 className='text-3xl text-orange-400'>Secondary School Certificate</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam laborum repellat excepturi unde! Ipsa perspiciatis quasi dignissimos praesentium distinctio.</p>
                    </div>

                    <div className='education-text'>
                        <p className='text-white'>01 July 2020 t0 20 Novembor 2022</p>
                        <h3 className='text-3xl text-orange-400'>Higher School Certificate</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam laborum repellat excepturi unde! Ipsa perspiciatis quasi dignissimos praesentium distinctio.</p>
                    </div>

                </div>



                <div className='text-left'>
                    <h3 className='text-4xl text-rose-300 mb-10'>Experience</h3>
                    <div className='education-text experience-border'>
                        <p className='text-white'>01 January 2022 - present </p>
                        <h3 className='text-3xl text-emerald-400'>Top Rated Seller at Upwork</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam laborum repellat excepturi unde! Ipsa perspiciatis quasi dignissimos praesentium distinctio.</p>
                    </div>

                    <div className='education-text experience-border'>
                        <p className='text-white'>05 Jun 2020 to 12 Decembor 2021</p>
                        <h3 className='text-3xl text-emerald-400'>Winner 205 contest in Freelancer.com </h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam laborum repellat excepturi unde! Ipsa perspiciatis quasi dignissimos praesentium distinctio.</p>
                    </div>

                    <div className='education-text experience-border'>
                        <p className='text-white'>20 May 2022 - Present </p>
                        <h3 className='text-3xl text-emerald-400'>Top Rated seller at Fiverr</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam laborum repellat excepturi unde! Ipsa perspiciatis quasi dignissimos praesentium distinctio.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Resume;