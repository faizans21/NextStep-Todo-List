import React from 'react'
import NextLogo from './NextLogo'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex flex-col justify-center items-center sm:justify-between sm:flex-row bg-[#C9ADA7] text-white h-18 sm:h-16 sm:py-2 ">
            <div className="logo mx-15">
                <NextLogo />
            </div>
            <ul className="flex text-blue-600 text-lg font-semibold mx-15 pb-2 sm:p-0">
                <li className='hover:font-bold'><Link to='/'>Home</Link></li>
                <li className='hover:font-bold ml-8'>Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar
