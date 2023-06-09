'use client'

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io'

interface ModalProp {
    isOpen? : boolean;
    onClose : () => void
    onSubmit : () => void
    title? : string
    body?: React.ReactElement
    footer? : React.ReactElement
    actionLabel : string
    disable? : boolean
    secondaryAction?: () => void
    secondaryLabel? : string
}

const Modal: React.FC<ModalProp> = ({
    isOpen, onClose , onSubmit, title, body,footer,actionLabel,disable,secondaryAction,secondaryLabel
    
}) => {

    const [showModal , setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    },[isOpen])


// HandleClose Function 
    const handleClose = useCallback(() => {
        if(disable) {
            return
        }
        setShowModal(false)
        setTimeout(() => {
            onClose();
        }, 300)
    },[disable , onClose])


// Handle Submit Function 
    const handleSubmit = useCallback(() => {
    if (disable) {
        return;
    }
    onSubmit()
    },[disable , onSubmit])

// Handle Secondary Action Function 
    const handleSecondaryAction = useCallback(() => {
        if (disable || !secondaryAction ) {
            return
        } 
        secondaryAction()
    }, [disable , secondaryAction])

    if(!isOpen) {
        return null
    }




  return (
    <>
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 ">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">

            {/* Content */}
             <div className={`translate duration-300 h-full 
            ${showModal ? 'translate-y-0' : "translate-y-full"}
            ${showModal ? 'opacity-100' : 'opacity-0'} `}>

                <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/* Header  */}
                    <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                        <button className="p-1 border-0 hover:opacity-70 transition absolute left-9 " onClick={handleClose}>
                            <IoMdClose size={18}/>
                        </button>
                        <div className="text-lg font-semibold">
                            {title}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Modal