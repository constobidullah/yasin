import React from 'react';
import './WorkSummary.css'

const WorkSummary = () => {
    return (
        <div className='work-container'>
            <div className='work'>
                <div>
                    <i className="fa-solid fa-heart text-3xl text-white rounded-3xl p-2"></i>
                    <h2 className='text-3xl text-amber-400 font-medium'>549+</h2>
                    <p className='text-white'>Happy Ounership</p>
                </div>
                <div>
                    <i className="fa-solid fa-arrow-trend-up text-3xl text-white rounded-3xl p-2"></i>
                    <h2 className='text-3xl text-amber-400 font-medium'>75482+</h2>
                    <p className='text-white'>Working hours </p>
                </div>
                <div>
                    <i className="fa-solid fa-mug-saucer text-3xl text-white rounded-3xl p-2"></i>
                    <h2 className='text-3xl text-amber-400 font-medium'>131+</h2>
                    <p className='text-white'>Coffee cups </p>
                </div>
                <div>
                    <i class="fa-solid fa-star text-3xl text-white rounded-3xl p-2"></i>
                    <h2 className='text-3xl text-amber-400 font-medium'>899+</h2>
                    <p className='text-white'>Review and Raiting</p>
                </div>
                <div>
                    <i class="fa-solid fa-user-doctor text-3xl text-white rounded-3xl p-2"></i>
                    <h2 className='text-3xl text-amber-400 font-medium'>1302</h2>
                    <p className='text-white'>Complete project</p>
                </div>
                <div>
                    <i class="fa-solid fa-award text-3xl text-white rounded-3xl p-2"></i>
                    <h2 className='text-3xl text-amber-400 font-medium'>13</h2>
                    <p className='text-white'>Award Got</p>
                </div>
            </div>
        </div>
    );
};

export default WorkSummary;