import React from 'react'
// import SliderComponent from "@/component/ui/Slider"

import SliderComponent from "@/components/ui/SliderComponent"

import ironman from "@/assets/images/ironman.png"
import batman from "@/assets/images/batman.png"
import avengers from "@/assets/images/avengers.png"
import captainamerica from "@/assets/images/captainamerica.png"
import superman from "@/assets/images/superman.png"
import thor from "@/assets/images/thor.png"
import thor1 from "@/assets/images/thor1.png"
import loki from "@/assets/images/loki.png"
import marvel from "@/assets/images/marvel.png"
import flash from "@/assets/images/flash.png"
import blackwidow from "@/assets/images/blackwidow.png"
import isro from "@/assets/images/isro.png"
import nasa from "@/assets/images/nasa.png"
import hulk from "@/assets/images/hulk.png"
import spiderman from "@/assets/images/spiderman.png"
import spiderman1 from "@/assets/images/spiderman1.png"


const index = () => {


  const logos = [
    { image: batman, alt: 'Image2' },
    { image: avengers, alt: 'Image3' },
    { image: superman, alt: 'Image5' },
    { image: marvel, alt: 'Image9' },
    { image: captainamerica, alt: 'Image4' },
    { image: thor1, alt: 'Image7' },
    { image: isro, alt: 'Image14' },
    { image: ironman, alt: 'Image1' },
    { image: loki, alt: 'Image8' },
    { image: thor, alt: 'Image6' },
    { image: spiderman1, alt: 'Image11' },
    { image: flash, alt: 'Image9' },
    { image: hulk, alt: 'Image15' },
    { image: nasa, alt: 'Image13' },
    { image: spiderman, alt: 'Image10' },
    { image: blackwidow, alt: 'Image12' },
  ]

  return (
    <>
   
      {/* <SliderComponent>
      </SliderComponent> */}

      <SliderComponent items={logos} renderItem={(item) => (
            <img src={item.image} alt={item.alt} />
        )} />


    </>
  )
}

export default index
