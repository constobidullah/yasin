import React, { useState } from 'react';
import {Bars3BottomLeftIcon, XMarkIcon} from '@heroicons/react/24/solid';
import './Header.css';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>

            <nav className='flex justify-around items-center bg-slate-700 text-white h-16'>
            
                <div>
                    <h4>Yasin Khan</h4>
                </div>

                <div className={`md:static justify-center absolute duration-500 ease-out ${open ? "top-6": "top-[-100px]"} header-link`}>
                    <a href="aa">Home</a>
                    <a href="bb">About</a>
                    <a href="cc">Work demo</a>
                    <a href="dd">Skills</a>
                    <a href="ee">Contact</a>
                </div>

                <div onClick={() => {setOpen(!open)}} className={"h-6 w-6 lg:hidden"}>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomLeftIcon />
                    }
                </div>

            </nav>

        </div>
    );
};

export default Header;