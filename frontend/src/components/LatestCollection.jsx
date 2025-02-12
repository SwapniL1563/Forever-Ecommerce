import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(5); // Initial number of visible products
    const observer = useRef();

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const lastEntry = entries[0];
            if (lastEntry.isIntersecting) {
                setVisibleProducts((prev) => Math.min(prev + 5, latestProducts.length));
            }
        });

        if (observer.current && latestProducts.length > 0) {
            observer.current.observe(document.querySelector('#loadMoreTrigger'));
        }

        return () => observer.current && observer.current.disconnect();
    }, [latestProducts]);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Step into the season with Forever's latest collection, a celebration of vibrant colors and breezy styles perfect for sunny days and warm nights with beautiful dresses to trendy tops.
                </p>
            </div>

            {/* Latest products with lazy loading */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.slice(0, visibleProducts).map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>

            {/* Loading Trigger */}
            {visibleProducts < latestProducts.length && <div id="loadMoreTrigger" className="h-10"></div>}
        </div>
    );
};

export default LatestCollection;
