import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
export default function Header() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header className='shadow-md bg-slate-200'>
            <div className='flex items-center justify-between max-w-6xl mx-auto'>
                <Link to='/'>
                    <h1 className='flex flex-wrap text-sm font-bold sm:tex'>
                        <span className='text-slate-500'>My </span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>

                <form
                    // onSubmit={handleSubmit}
                    className='flex p-3 bg-slate-100 round-lg item-centers '>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-24 bg-transparent focus:outline-none sm:w-64'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <FaSearch className='text-slate-600' />
                </form>
                
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>
                            About
                        </li>
                    </Link>
                    <Link to='/profile'>

                        <li className=' text-slate-700 hover:underline'> Sign in</li>

                    </Link>
                </ul>
            </div>
        </header>
    )
}

