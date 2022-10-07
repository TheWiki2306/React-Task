import React from 'react'
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_2 from '../images/img2.jpg';
import img_3 from '../images/img3.jpg';
import img_4 from '../images/img4.jpg';
import img_5 from '../images/img5.jpg';


const SubHome = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,

    };

    useEffect(() => {
        getProducts();
    }, [])

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const api = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await api.json();
        console.log(data);


        setProducts(data);
    }

    return (
        <section>
            <Slider className="main_slider" {...settings}>
                {
                    products.map(product => {
                        return (
                            <div className="img">
                                <img src={product.images} alt="" />
                            </div>
                        )
                    })
                }

            </Slider>
        </section>)

}

export default SubHome;
