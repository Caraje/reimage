import React from 'react'
import { homeData } from '../../../data/homeData'
import CardInfo from './CardInfo'

const InfoApp = () => {
  return (
    <section className='mt-16 mx-auto flex flex-col flex-wrap gap-48 max-w-7xl mb-10'>
      {
      homeData.map(el => (
        <CardInfo
          key={el.id}
          title={el.title}
          img={el.img}
          text={el.text}
          id={el.id}
        />
      ))
    }

    </section>
  )
}

export default InfoApp
