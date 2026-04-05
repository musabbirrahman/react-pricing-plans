import React from 'react';


const Link = ({link}) => {
    return (
        <li className='mr-10 hover:text-emerald-200'>
            <a href="{link.path}">{link.name}</a>
        </li>
    );
};

export default Link;