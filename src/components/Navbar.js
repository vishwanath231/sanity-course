import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='bg-red-600'>
            <div className='container mx-auto max-w-screen-lg px-4 flex justify-between'>
                <nav className='flex items-center'>
                    <Link 
                        to='/'
                        className='inline-flex items-center py-6 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking widest'
                    >Vishwa</Link>
                    <Link 
                        to='/post'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                    >Blog post</Link>
                    <Link 
                        to='/project'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                    >Project</Link>
                    <Link 
                        to='/about'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
                    >About</Link>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <Link to='/' className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="35px" height="35px">
<path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/>
<path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3 c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6 c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057 c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2 c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13 C34.95,18.818,35.342,18.104,36,17.12"/>
</svg>
                    </Link>
                    <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="35px" height="35px">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
<path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/>
</svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;