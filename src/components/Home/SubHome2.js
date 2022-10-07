import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_2 from '../images/img2.jpg';
import img_3 from '../images/img3.jpg';
import img_4 from '../images/img4.jpg';
import img_5 from '../images/img5.jpg';

const Images = [
    {
        image: img_3,
    },

    {
        image: img_4,
    },
    {
        image: img_5,
    },
]
const SubHome2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <section>
            <Slider className="min_slider" {...settings}>
                {
                    Images.map(({ image }, index) => {
                        return (
                            <div key={index} className="img">
                                <img src={image} alt="" />
                            </div>
                        )
                    })
                }

            </Slider>
        </section>)
}

export default SubHome2;
