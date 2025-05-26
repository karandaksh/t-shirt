

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default settings;