import React, { useState } from 'react'

export default function NavLink({className, href, children}) {

  const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <a href={href} 
        className={`${
            className ? className : ''
        } md:text-sm font-medium lg:text-tiny px-4 py-2 text-white hover:text-white hover:bg-green-700 rounded-lg`}>
        {children}
    </a>
  )
}
