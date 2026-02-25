import React, { useState } from 'react'
import ModelContent from '../modal/ModelContent'

const TraditionalModal = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='relative border border-black mb-5 p-2 w-64 h-22 overflow-hidden'>
      <button
      className='bg-black text-white p-1 border rounded-md'
      onClick={() => setShowModal(true)}>
        Show the Traditional Modal
      </button>
      {
        showModal && (
            <ModelContent onClose={() => setShowModal(false)}/>
        )
      }
    </div>
  )
}

export default TraditionalModal
