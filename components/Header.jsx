import React,{useState, useEffect} from 'react'
import { getCategories } from '../services'

import Link from "next/link"


const Header = () => {
    const [categories,setCategories] = useState([])
    const [mobileClass, setMobileClass] = useState('hidden')
    useEffect(() =>{
        getCategories()
        .then((result) =>{
            setCategories(result)
        })
    }, [])

    const handleClick = ()=>{
        if(mobileClass == "hidden"){
            setMobileClass("block")
        }else{
            setMobileClass("hidden")
        }
    }
  return (
    <div className='bg-gray-800 mx-auto px-3 md:px-10 mb-8'>
        <div className='header w-full flex justify-between items-center  py-4 px-0 md:flex'>
            <div className='md:float-left block'>
                <Link href="/">
                   <span className="logo-text">dotted pine</span>
                </Link>
            </div>
            <div className='br hidden md:float-left md:block'>
                    
                {categories.map((category) =>{
                    return <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='cursor-pointer md:float-right mt-1 align-middle text-white ml-4 font-bold hover:text-pink-600'>
                            {category.name}
                        </span>
                    </Link>
                })}
                <Link  href={`/`}>
                        <span className='cursor-pointer md:float-right mt-1 align-middle text-white ml-4 font-bold hover:text-pink-600'>
                            Home
                        </span>
                    </Link>
            </div>
            <div className='float-left contents md:hidden'>
                <button onClick={handleClick} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
        <div className={mobileClass} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/"  aria-current="page">
                        <span className="text-white block px-3 py-2 rounded-md font-medium">Home</span>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default Header