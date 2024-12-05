import React, { useContext, useEffect , useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import star  from '../assets/star_icon.png'
import star_dull from '../assets/star_dull_icon.png'
import RealtedProducts from '../components/RealtedProducts';

const Product = () => {
  const { products , currency , addToCart} = useContext(ShopContext);
  const { productId } = useParams();
  const [ productData, setProductData ] = useState(false);
  const [ image , setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
      
        return null;
      }
    })
  }

  useEffect(()=> {
    fetchProductData();
  },[productId,products]);


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     {/* Product Data */}
     <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
      {/* Product Images */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
      <div className="flex  sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[18.7%]">
      {
        productData.image.map((item,index) => (
          <img onClick={()=> setImage(item)} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} key={index} alt="" />
        ))
      }

      </div>

      <div className='w-full sm:w-[80%]'>
        <img src={image} className='w-full h-auto' alt="" />
      </div>
     </div>
      
      {/* Product Info */}
      <div className="flex-1">
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <img className='' src="" alt="" />
          <img src={star} className="w-3 5" alt="" />
          <img src={star} className="w-3 5" alt="" />
          <img src={star} className="w-3 5" alt="" />
          <img src={star} className="w-3 5" alt="" />
          <img src={star_dull} className="w-3 5" alt="" />
          <p className='pl-2' >(122)</p>
         </div>

         <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
         <p className='mt-5 text-gray-400 md:w-4/5'>{productData.description}</p>
         <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            { productData.sizes.map((item,index)=>(
              <button onClick={()=> setSize(item)} className={`py-2 px-4 border bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
            ))}
          </div>

         </div>

         <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to Cart</button>
         <hr className='mt-8 sm:w-4/5'/>
         <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p>100% Original Product</p>
          <p>Cash on delivery is availble on this product</p>
          <p>Easy return nd exchange policy within 7 days</p>
         </div>
      </div>

     </div>


     {/* Description  */}
     <div className="mt-20">
      <div className="flex">
        <b className='border px-5 py-3 text-sm'>Description</b>
        <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
      </div>

      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
        <p>An e-commerce website is an online platform that facilitates online presence of products. Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus exercitationem repellendus sit iure nisi laudantium blanditiis itaque in quisquam?</p>
      </div>
     </div>

     {/* Display related products */}

      <RealtedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product