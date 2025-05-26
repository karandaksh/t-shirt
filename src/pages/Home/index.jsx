import React from 'react'
// import SliderComponent from "@/component/ui/Slider"

import SliderComponent from "@/components/ui/SliderComponent";
import CarouselComponent from "@/components/ui/CarouselComponent"
// import sliderdata from '../../components/ui/CarouselComponent/sliderdata.json'
import carouselData from '@/components/ui/CarouselComponent/CarouselData';

import ironman from "@/assets/images/logos/ironman.png";
import batman from "@/assets/images/logos/batman.png";
import avengers from "@/assets/images/logos/avengers.png";
import captainamerica from "@/assets/images/logos/captainamerica.png";
import superman from "@/assets/images/logos/superman.png";
import thor from "@/assets/images/logos/thor.png";
import thor1 from "@/assets/images/logos/thor1.png";
import loki from "@/assets/images/logos/loki.png";
import marvel from "@/assets/images/logos/marvel.png";
import flash from "@/assets/images/logos/flash.png";
import blackwidow from "@/assets/images/logos/blackwidow.png";
import isro from "@/assets/images/logos/isro.png";
import nasa from "@/assets/images/logos/nasa.png";
import hulk from "@/assets/images/logos/hulk.png";
import spiderman from "@/assets/images/logos/spiderman.png";
import spiderman1 from "@/assets/images/logos/spiderman1.png";




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


      <div className="mt-4 pt-4">
        <CarouselComponent slides={carouselData} ></CarouselComponent>
      </div>



kjsdvnsk



    </>
  )
}

export default index
