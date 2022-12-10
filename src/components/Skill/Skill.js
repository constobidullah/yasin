import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div className='bg-cyan-800'>
            <h2 className='text-6xl underline text-blue-400 mb-24'>MY SKILLS</h2>
            <div className="skills-container">
                <div className='designing-skills'>
                    <h3 className='text-5xl text-green-300 mb-20'>Designing skills</h3>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>Adobe Photoshop</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-10/12" per="85%"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Adobe illustrator</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-3/4" per="83%"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Graphic design</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-5/6" per="88%"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Creative desing</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-9/12" per="70%"></div>
                        </div>
                    </div>

                </div>

                <div className='basic-skills'>
                    <h3 className='text-5xl text-green-300 mb-20'>Basic skills </h3>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Microsoft Excel</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-11/12" per="90%"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Microsoft Power point</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-9/12" per="80%"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Microsoft Word</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-11/12" per="90%"></div>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="skill-name">
                            <h3>Microsoft Access</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-7/12" per="90%"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            <h3>Microsoft office</h3>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-per w-11/12" per="90%"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Skill;