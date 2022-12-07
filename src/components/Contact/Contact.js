import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='mt-20'>
            <h3 className='text-4xl text-orange-300'>Contact me</h3>

            <form className='mt-10'>
                <label className='text-stone-100'>Name</label> <br />
                <input type="text" required/>
                <br />
                <label className='text-stone-100'>E-mail</label> <br />
                <input type="email"  required/> <br /> <br />
                <label className='text-white'>Your messages</label> <br />
                <textarea name="Your message" id="" cols="50" rows="10"></textarea> 
                <br /> <br />
                <input className='text-white bg-orange-400 px-10 text-2xl rounded-lg mb-32' type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Contact;