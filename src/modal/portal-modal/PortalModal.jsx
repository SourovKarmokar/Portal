import React, {useState} from 'react'
import  ModelContent  from "../ModelContent";
import Portal from '../../Portal';

const PortalModal = () => {
    const [showModal , setShowModal] = useState(false)
  return (
    <div className='relative border border-black mb-5 p-1 w-64 h-16 overflow-hidden'>
      <button 
      className='bg-black text-white p-1 border rounded-md'
      onClick={() => setShowModal(true)}
      >Modal using React Portal</button>

        {
        showModal &&  (
          <Portal>
            <ModelContent onClose={() => setShowModal(false)}/> 
          </Portal>
        )
      }


    </div>
  )
}

export default PortalModal
