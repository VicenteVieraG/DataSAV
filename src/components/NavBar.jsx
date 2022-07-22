import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-transparent via-white w-full h-[5.25rem] brightness-125 pb-0">
            <div className="w-full h-20 bg-black">
                <nav className="flex justify-around h-full">
                    <div className="flex h-full w-1/3 justify-around">
                        <Link
                            to="/data_structures" 
                            className="transition ease-in-out duration-300 delay-75 text-white text-xl brightness-125 self-center hover:-translate-y-1 hover:brightness-200 hover:scale-105"
                            >Data Structures
                        </Link>
                        <Link
                            to="/algorithms"
                            className="transition ease-in-out duration-300 delay-75 text-white text-xl brightness-125 self-center hover:-translate-y-1 hover:brightness-200 hover:scale-105"
                            >Algorithms
                        </Link>
                    </div>
                    
                    <Link
                        to="/"
                        className="text-white text-3xl brightness-125 self-center"
                        >DataSAV
                    </Link>

                    <div className="flex gap-3 justify-end w-1/3 self-center">
                        <p className="text-white">mis redes</p>
                        <p className="text-white">mis redes</p>
                    </div>             
                </nav>
            </div>
        </div>
    )
}

export default NavBar