'use client'

import { AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import Menuitem from './Menuitem'

const UserMenu = () => {

    const [isOpen , setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
    } , [])

    return (

        <div className="relative flex items-center">
            <div className="flex flex-row justify-center items-center gap-3">
                <div onClick={() => {}} className="hidden items-center md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb Your Home
                </div>
                <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className='hidden md:block'>
                        <Avatar/>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className='absolute rounded-lg shadow-md w-[40vm] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Menuitem
                            onClick={() => {}}
                            label='Login'/>
                        <Menuitem
                            onClick={() => {}}
                            label='Sign Up'/>
                    </div>
                </div>
            )}

      
          
        </div>
    )
}

export default UserMenu