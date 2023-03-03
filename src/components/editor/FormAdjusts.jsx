import React from 'react'
import AdjustForm from './AdjustForm'

const FormAdjusts = ({ adjusts, handleAdjusts, image, name, size }) => {
  return (
    <section className='absolute bottom-8 right-8 bg-slate-700 flex flex-col gap-7 items-center justify-center p-4 rounded-2xl shadow-2xl'>

      <AdjustForm
        adjusts={adjusts}
        handleAdjusts={handleAdjusts}
        image={image}
        name={name}
        size={size}
      />

    </section>
  )
}

export default FormAdjusts
