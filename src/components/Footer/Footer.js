import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <h3>copyright 2022 Yasin khan All right reserved </h3>
            </div>
            <div className='social-link'>
                <a href="https://www.facebook.com/profile.php?id=100034508957099" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/yasin-khan-arafat/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/yk753036/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/YasinKh25762797" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    );
};

export default Footer;