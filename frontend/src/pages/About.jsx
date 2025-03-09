import React from 'react'
import Title from "../components/Title"
import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsLetter"

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
    <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className="my-10 flex  flex-col md:flex-row gap-16">
      <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>At Forever, we believe fashion should be a perfect blend of style and comfort. Our mission is to bring you the latest trends without compromising on quality, fit, or everyday ease.

From chic topwear to cozy winterwear and trendy bottomwear, we’ve got something for everyone—men, women, and kids, in all sizes!

Join us on our journey to make fashion more inclusive, stylish, and effortless.</p>
      
      <b className='text-gray-800 '>Our Mission</b>
      <p>We aim to redefine fashion by making it inclusive, comfortable, and effortlessly stylish for everyone. Our goal is to create a wardrobe that reflects your personality, no matter the season or occasion.</p>
      <p></p>
      </div>
    </div>

    <div className="text-4xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col">
        <b>Quality Assurance: </b>
        <p  className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, sint.</p>
      </div>

      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col">
        <b>Convenience: </b>
        <p  className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, sint.</p>
      </div>

      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col">
        <b>Exceptional Customer Service: </b>
        <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, sint. </p>
      </div>

      
    </div>

    <NewsletterBox/>
    </div>
  )
}

export default About