import React from 'react'
import { Link } from "react-router-dom"
const Contact = () => {
  return (
    <div className='py-10 '>
      <div className='bg-white py-20 lg:py-40'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <div className='text-center mb-12'>
            <h2 className=' text-4xl lg:text-5xl font-bold text-gray-800 mb-4'> 문의하기</h2>
            <p className='text-gray-600 text-lg'> 궁금하신 점이 있으신가요? 언제든 문의해주세요.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-6 mb-20'>
            {[
              {
                title: "전화 문의",
                info: "02-1234-5678",
                subInfo: "평일 09:00 - 18:00",
              },
              {
                title: "이메일 문의",
                info: "support@example.com",
                subInfo: "24시간 접수 가능",
              },
              {
                title: "위치",
                info: "서울특별시 강남구",
                subInfo: "삼성동 123번지",
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-center cursor-pointer py-5 border border-gray-50'
              >
                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                <p className='text-gray-600'>{item.info}</p>
                <p className='text-gray-500'>{item.subInfo}</p>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.279301018033!2d126.9754847612344!3d37.572040327749015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2sGwanghwamun%20Square!5e0!3m2!1sen!2skr!4v1735115389923!5m2!1sen!2skr" frameborder="0"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full h-[400px] md:h-[600px] lg:h-[600px]'
            ></iframe>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact