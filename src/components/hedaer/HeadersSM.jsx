import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs';

function HeadersSM() {
    return (
        <div className='header-sm'>
            <a href="https://www.linkedin.com/in/david-shahbazyan-82834226b/
" target='_blank'>
                <BsLinkedin className='icons-sm' />
            </a>
            <a href="https://github.com/shahbazyyan" target='_blank'>
                <BsGithub className='icons-sm' />
            </a>
            <a href="https://www.facebook.com/gooodmannn" target='_blank'>
                <BsFacebook className='icons-sm' />
            </a>
        </div>
    )
}

export default HeadersSM