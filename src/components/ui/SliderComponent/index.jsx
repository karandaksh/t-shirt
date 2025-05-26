// import React from "react";
// import Slider from "react-slick";

// export default function index(item = [], renderItem) {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };


//     return (

//         <Slider {...settings}>
//             <div>
//                 <h3>1</h3>
//             </div>
//             <div>
//                 <h3>2</h3>
//             </div>
//             <div>
//                 <h3>3</h3>
//             </div>
//             <div>
//                 <h3>4</h3>
//             </div>
//             <div>
//                 <h3>5</h3>
//             </div>
//             <div>
//                 <h3>6</h3>
//             </div>
//         </Slider>
//     );
// }








import React from "react";
import Slider from "react-slick";
import settings from "./settings.js"; //This is Js File or Slider Js


function index({ items = [], renderItem }) {


    const defaultItems = [
        {
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
            alt: "Default Image 1"
        },
        {
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
            alt: "Default Image 2"
        },
        {
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
            alt: "Default Image 3"
        },
        {
            image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
            alt: "Default Image 4"
        }
    ];


    const finalItems = items && items.length ? items : defaultItems;





    const DefaultSlide = ({ item }) => (
        <div className="bg-gray-100 p-4 rounded shadow">
            <img src={item.image} alt={item.alt} className="w-full h-40 object-cover" />
            {/* <img src={item?.image || "https://via.placeholder.com/300/200"} alt={item?.alt || "Default Image"} className="w-full h-40 object-cover" /> */}
            {/* <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt={item.alt} className="w-full h-40 object-cover" /> */}
        </div>
    );






    return (
        <div className="slider-container px-2">
            <Slider {...settings} className="py-4">
                {finalItems.map((item, index) => (
                    <div key={index} className="max-w-28">
                        {renderItem ? renderItem(item) : <DefaultSlide item={item} />}
                    </div>
                ))}
            </Slider>
        </div>
    );




}


export default index;



