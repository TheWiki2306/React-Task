import React from 'react'
import './Home.css';
import SubHome from './SubHome';
import SubHome2 from './SubHome2';
import { useEffect, useState } from "react";
import img_2 from '../images/img2.jpg';
import img_3 from '../images/img3.jpg';
import img_4 from '../images/img4.jpg';
import img_5 from '../images/img5.jpg';
import Search from '../search/Search';

const Home = () => {

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
        <section className='container'>
            <Search />

            <div className="home_container">
                <div className="low_container">
                    <img src="" alt="" />
                    <p>Lowest prices all the way</p>
                </div>

                <div className="del_container">
                    <img src="" alt="" />
                    <p>On-time Delivery</p>
                </div>

                <div className="promo_container">
                    <img src="" alt="" />
                    <p>Promo Sales!!!</p>
                </div>

                <div className="discount_container">
                    <img src="" alt="" />
                    <p>Mid-year Discount</p>
                </div>

            </div>
            <div className="body">

                <ul className='markets'>
                    <p>Markets</p>
                    <li ><a href="">Clothes</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Furniture</a></li>
                    <li><a href="">Others</a></li>
                </ul>

                <div>

                    <SubHome />

                </div>

                <div className="sub_slider">
                    <div className="slide">
                        <SubHome2 />
                    </div>

                    <div className="sign">
                        <p>Get our Weekend special!</p>
                        <a href="">Sign up now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
