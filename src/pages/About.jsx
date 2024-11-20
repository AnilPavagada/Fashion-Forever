import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Anil Fashion Forever, your trusted destination for timeless and trendy clothing.</p>
        <p>Who We Are:</p>
        <p>At Anil Fashion Forever, we blend style, quality, and affordability to bring you a curated collection of clothing for every occasion. Whether you're looking for casual comfort or elegant sophistication, we have something for everyone.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is simple: to help you look and feel your best without compromising on quality or budget. We strive to provide exceptional fashion that complements your unique style.</p>
        

        
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <p>Quality Guaranteed: Each piece is designed with care, ensuring long-lasting comfort and elegance.</p>
        <p>Affordable Trends: We bring you the latest styles at prices you'll love.</p>
        <p>Customer Focused: Your satisfaction is our priority, with seamless shopping and excellent service.</p>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'> 
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulosly select and vet each product to ensure it meets our stringent Quality standard.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'> 
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, Shopping.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'> 
          <b>Exceptonal Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring you.</p>

        </div>
      

      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About
