import React, { useContext, useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const ProductItem = lazy(() => import('./ProductItem')); // Lazy Load ProductItem

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    // Memoize best sellers list
    const bestSellerList = useMemo(() => bestSeller, [bestSeller]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover the timeless favorites that our customers can't get enough of in Forever's Best Sellers collection.
                    From versatile wardrobe staples to statement pieces, these top-rated items are loved for their style, comfort, and quality.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                <Suspense fallback={<p className="text-center text-gray-500">Loading Products...</p>}>
                    {bestSellerList.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
}

export default BestSeller;
