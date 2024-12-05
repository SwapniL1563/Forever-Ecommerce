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
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores similique harum laudantium omnis, sit tenetur, quam minima quibusdam at temporibus dignissimos dolorem deleniti est atque!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore distinctio tempore dolores, adipisci iure aspernatur provident? Eveniet hic recusandae non alias eligendi totam expedita distinctio? Rerum veniam libero dolorum.</p>
      <b className='text-gray-800 '>Our Mission</b>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aperiam quae recusandae fugiat repudiandae ad cumque assumenda, repellendus natus nisi.</p>
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