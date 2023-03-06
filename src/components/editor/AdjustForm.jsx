import React from 'react'
import AdjustsFormComponent from '../forms/AdjustsFormComponent'
import DimensionsForm from '../forms/DimensionsForm'
import EffectsForm from '../forms/EffectsForm'
import OptionsForm from '../forms/OptionsForm'
import ButtonsForm from './ButtonsForm'

const AdjustForm = ({ handleAdjusts, image, name, size, setIsVisible }) => {
  return (
    <>
      <form
        onSubmit={handleAdjusts}
        className='max-h-[90vh] w-72 overflow-y-scroll flex flex-col items-center gap-3 p-2'
      >
        <DimensionsForm size={size} />
        <AdjustsFormComponent />
        <EffectsForm />
        <OptionsForm />
        <ButtonsForm image={image} name={name} setIsVisible={setIsVisible} />
      </form>

    </>
  )
}

export default AdjustForm
