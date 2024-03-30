import React from 'react';
import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>Is this tutorial is about JavaScript?</h2>
            <p className='text-gray-500 my-2'>Some of these resources about JavaScript are available.</p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
              <a href='https://javascript.info/' target='_blank' rel='noopener noreferrer'>Learn More</a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src='https://media.geeksforgeeks.org/wp-content/uploads/20230809133232/JavaScript-Complete-Guide-copy-2.webp' alt='' />
        </div>
    </div>
  )
}
