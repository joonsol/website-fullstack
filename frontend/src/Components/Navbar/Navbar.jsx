import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  { path: '/', label: '홈' },
  { path: '/about', label: '회사정보' },
  { path: '/leadership', label: '임원소개' },
  { path: '/board', label: '업무 게시판' },
  { path: '/our-services', label: '제공 기술' },
  { path: '/contact', label: '문의하기' },
]

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className='hover:text-blue-600 transition duration-300'
    >
      {label}

    </Link>
  </li>
)



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('ko')


  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <nav
      className='fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50'
    >
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex gap-8 text-lg">
          {menuItems.map((item) => (
            <MenuItem key={item.path}{...item} />
          ))}
        </ul>
        <select
          className='hidden lg:block px-3 py-1 ml-8 border rounded-md bg-white hover:border-blue-500 duration-300'
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="ko">한국어</option>
          <option value="en">English</option>

        </select>

        <button
          className='lg:hidden text-2xl'
          onClick={toggleMenu}
          aria-label='메뉴'
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div className={`fixed top-0 right-0 h-full w-64 bg-white text-black transfrom transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>

        <div className="p-4">
          <button
            onClick={toggleMenu}
            aria-label='닫기'
            className='text-2xl mb-8 float-right'>
            <HiX />
          </button>
        </div>
      </div>
    </nav >
  )
}

export default Navbar