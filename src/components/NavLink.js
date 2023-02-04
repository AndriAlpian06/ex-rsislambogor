import React from 'react'

export default function NavLink({className, href, children}) {
  return (
    <a href={href} 
        className={`${
            className ? className : ''
        } md:text-sm font-medium lg:text-tiny px-4 py-2 text-white hover:text-white hover:bg-green-700 rounded-lg`}>
        {children}
    </a>
  )
}
