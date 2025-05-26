import React, { useState } from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";



const index = ({ slides }) => {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) {
            setCurrent(slides.length - 1);
        }
        else setCurrent(current - 1)
    }

    let nextSlide = () => {
        if (current === slides.length - 1) {
            setCurrent(0);
        }
        else setCurrent(current + 1)
    }


    if (!slides || slides.length === 0) {
        return <p>Don't Have Slides</p>;
    }


    return (
        <div className="carousel_parent relative overflow-hidden w-full mx-auto">
            {/* <div className="flex justify-between align-middle"> */}
            {/* <button className='px-4'>
                    <FaArrowCircleLeft />
                </button> */}

            <div className={`flex transition ease-in-out duration-500`} style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((item) => (
                    // <div key={item.id} className="min-w-fit px-20 h-3/4">
                    <div key={item.id} className="min-w-fit px-6 mx-6">
                        <img src={item.image} alt={item.alt} />
                        <p>{item.caption}</p>
                    </div>
                ))}
            </div>


            <div className="absolute top-0 text-white h-full w-full justify-between items-center flex px-12 text-3xl">
                <button className='px-4' onClick={previousSlide}>
                    <FaArrowCircleLeft />
                </button>
                <button className='px-4' onClick={nextSlide}>
                    <FaArrowCircleRight />
                </button>
            </div>

            <div className="absolute bottom-8 z-10 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div onClick={()=>setCurrent(i)} key={"circle" + i} className={`rounded-full w-2 h-2 border cursor-pointer ${i===current ? "bg-gray-600": "bg-white"}`}>

                        </div>
                    )
                })}
            </div>


            {/* <button className='px-4'>
                    <FaArrowCircleRight />
                </button> */}
            {/* </div> */}

        </div>
    );
};
export default index









// const index = ({ slides }) => {
//     // const finalData = slides && slides.length ? slides : "Dont Have Slides"
//     if (!slides || slides.length === 0) {
//         return <p>Don't Have Slides</p>;
//     }
//     return (
//         <div className='carousel_parent'>
//             {slides.map((item, key) => {
//                 return (
//                     <div key={item.id}>
//                         <img src={item.image} alt={item.alt} />
//                         <p>{item.caption}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default index