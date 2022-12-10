import React from 'react';
import './Resume.css'

const Resume = () => {
    return (
        <div className='resume-parent'>

            <div className='resume-container'>

                <div className='text-left'>
                    <h3 className='text-4xl text-cyan-400 mb-10'>Education Qualification</h3>

                    <div className='education-text'>
                        <p className='text-white'>April - May 2022 </p>
                        <h3 className='text-3xl text-orange-400'>Graphic Design Course</h3>
                        <h3 className='text-3xl text-red-500'>Institute: Muktopath.gov.bd</h3>
                        <p className='text-white text-2xl'>Complite Flyer</p>
                    </div>

                    <div className='education-text'>
                        <p className='text-white'>2017 - 2020</p>
                        <h3 className='text-3xl text-orange-400'>Secondary School Certificate (SSC)</h3>
                        <h3 className='text-3xl text-red-500'>Institute: Shiruail High School</h3>
                        <p className='text-white text-2xl'>Complite secondary school in life</p>
                    </div>

                    <div className='education-text'>
                    <p className='text-white'>2020 - 2022</p>
                        <h3 className='text-3xl text-orange-400'>Humanities Higher Secondary (HSC)</h3>
                        <h3 className='text-3xl text-red-500'>Institute: Eliyas Ahmed Chowdhury Degree Colleage</h3>
                        <p className='text-white text-2xl'>Complite higher secondary school in life</p>
                    </div>

                    <div className='education-text'>
                    <p className='text-white'>2023 - Present</p>
                        <h3 className='text-3xl text-orange-400'>Humanities Bachelor Degree</h3>
                        <h3 className='text-3xl text-red-500'>Institute: Eliyas Ahmed Chowdhury Degree Colleage</h3>
                        <p className='text-white text-2xl'>Studying Bachelor Degree</p>
                    </div>

                </div>



                <div className='text-left'>
                    <h3 className='text-4xl text-rose-300 mb-10'>Work Experience</h3>
                    <div className='education-text experience-border'>
                        <p className='text-white'>2021 - Present </p>
                        <h3 className='text-3xl text-emerald-400'>Graphic Designer</h3>
                        <p className='text-2xl text-emerald-200'>Upwork as a freelancer</p>
                        <p className='text-white'> Here I provide service for my clients related to all of Graphic Desing using Adobe Photoshop, Adobe illustrator, and Adobe Lightroom.  </p>
                    </div>

                    <div className='education-text experience-border'>
                    <p className='text-white'>2021 - Present </p>
                        <h3 className='text-3xl text-emerald-400'>Graphic Designer</h3>
                        <p className='text-2xl text-emerald-200'>Frelancer.com as a freelancer</p>
                        <p className='text-white'> Here I provide service for my clients related to all of Graphic Desing using Adobe Photoshop, Adobe illustrator, and Adobe Lightroom.  </p>
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