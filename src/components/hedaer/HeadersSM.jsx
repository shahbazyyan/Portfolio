import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs';

function HeadersSM() {
    return (
        <div className='header-sm'>
            <a href="" target='_blank'>
                <BsLinkedin className='icons-sm'/>
            </a>
            <a href="" target='_blank'>
                <BsGithub className='icons-sm'/>
            </a>
            <a href="" target='_blank'>
                <BsFacebook className='icons-sm'/>
            </a>
        </div>
    )
}

export default HeadersSM