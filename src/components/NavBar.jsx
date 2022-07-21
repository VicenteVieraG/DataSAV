import React from 'react'
import Button from './Button'

const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-transparent via-white w-full h-[5.25rem] brightness-125 pb-0">
            <div className="w-full h-20 bg-black">
                <nav className="flex justify-around h-full">
                    <div className="flex h-full w-1/3 flex-1 justify-around">
                        <Button/>
                        <Button/>
                    </div>

                    <div className="self-center w-1/3 flex-1">
                        <p className="text-white text-3xl brightness-125">DataSAV</p>
                    </div>

                    <div className="bg-white h-2/3 w-1/3 flex-1 self-center">

                    </div>                 
                </nav>
            </div>
        </div>
    )
}

export default NavBar