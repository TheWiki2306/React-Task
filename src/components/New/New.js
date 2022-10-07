import { useState, useEffect } from 'react'
import './New.css';

const New = () => {
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
        <>
            {/* {
                products.map(product => {
                    return (
                        // <p key={product.id}>{product.category.name}</p>
                        <img src={product.category.image} alt="" />
                    )
                })
            } */}

        </>
    )
}

export default New;
