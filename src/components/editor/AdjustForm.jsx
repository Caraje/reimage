import React from 'react'
import AdjustsFormComponent from '../forms/AdjustsFormComponent'
import DimensionsForm from '../forms/DimensionsForm'
import EffectsForm from '../forms/EffectsForm'
import OptionsForm from '../forms/OptionsForm'
import ButtonsForm from './ButtonsForm'

const AdjustForm = ({ handleAdjusts, image, name }) => {
  return (
    <>
      <form
        onSubmit={handleAdjusts}
        className='flex flex-col items-center w-80 gap-3'
      >
        <DimensionsForm />
        <AdjustsFormComponent />
        <EffectsForm />
        <OptionsForm />
        <ButtonsForm image={image} name={name} />
      </form>

    </>
  )
}

export default AdjustForm
