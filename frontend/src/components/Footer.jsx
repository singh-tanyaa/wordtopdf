import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='items-center justify-center'>
       <hr className='border-[1px]'/>
      <h1 className="flex items-center justify-center py-3 text-sm">
     
        Copyright  <AiOutlineCopyright className="mr-1" /> {new Date().getFullYear()} . All rights reserved by SCRIPT  Company Ltd
        </h1>
    </div>
  )
}

export default Footer
