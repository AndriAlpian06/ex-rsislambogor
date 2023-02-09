import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Logo from '../assets/images/logo-rsislam.png'
import DropdownLink from './DropdownLink'
import MobileNavbar from './MobileNavbar'
import SecondMobileNavbar from './SecondMobileNavbar'
import JadwalDokter from './pages/JadwalDokter'
// import NavLink from './NavLink'
import { Link } from 'react-router-dom'

import '../css/search.css'
import Line from './Line'

const Navbar = () => {
    
    const [click, setClick] = useState(false)
    const [color, setColor] = useState(false)
      const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false)

  return (
    <div className={color ? 'fixed w-full bg-white z-10 border-2 border-white border-b-green-600' : 'w-full border-2 border-white border-b-green-600'}>
        <SecondMobileNavbar />
        <div className="hidden lg:block py-4">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <a href="/" className="text-white font-medium"><img src={Logo} className='w-16 h-[55px] ml-4' alt='Logo'></img></a>
                        <h1 className={color ? 'font-bold text-black text-2xl' : 'font-bold text-black text-2xl'}>RS ISLAM BOGOR</h1>
                    </div>
                    <div className="flex items-center gap-x-4">    
                        <a href='#' className={color ? 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-black hover:text-white hover:bg-green-700 rounded-lg' : 'md:text-sm font-medium lg:text-tiny px-4 py-2 hover:text-white hover:bg-green-700 rounded-lg'}>BERANDA</a>
                        {/* <NavLink>BERANDA</NavLink> */}
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className={color ? 'flex items-center gap-x-2 text-black' : 'flex items-center gap-x-2 text-black'}>
                            PROFIL
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        SEJARAH
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        VISI & MISI
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        PENGURUS & DIREKSI
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        SUMBER DAYA MANUSIA 
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        KEGIATAN & FUNGSI SOSIAL
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        PRESTASI & PENGHARGAAN
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className={color ? 'flex items-center gap-x-2 text-black' : 'flex items-center gap-x-2 text-black'}>
                            PELAYANAN
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        PELAYANAN MEDIK
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        PELAYANAN PENUNJANG
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        PERALATAN MEDIS
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className={color ? 'flex items-center gap-x-2 text-black' : 'flex items-center gap-x-2 text-black'}>
                            JADWAL DOKTER
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        PROSEDUR RAWAT
                                    </DropdownLink>
                                    <Line />
                                    {/* <DropdownLink to='/JadwalDokter'>
                                        JADWAL PRAKTEK DOKTER
                                    </DropdownLink> */}
                                    <Link to='/JadwalDokter' onClick={closeMenu} className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>JADWAL DOKTER</Link>
                                    <Line />
                                    <DropdownLink href='/'>
                                        HAK & KEWAJIBAN PASIEN
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        TATA TERTIB RAWAT
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        TARIF PELAYANAN
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        INDIKATOR MUTU
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        {/* <NavLink>ARTIKEL</NavLink> */}
                        {/* <a href='#' className={color ? 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-black hover:text-white hover:bg-green-700 rounded-lg' : 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-white hover:text-white hover:bg-green-700 rounded-lg'}>ARTIKEL</a> */}
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className={color ? 'flex items-center gap-x-2 text-black' : 'flex items-center gap-x-2 text-black'}>
                            MITRA
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        PERUSAHAAN / LEMBAGA
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        ASURANSI
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        RUMAH SAKIT
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        {/* <NavLink>GALLERY</NavLink> */}
                        {/* <a href='#' className={color ? 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-black hover:text-white hover:bg-green-700 rounded-lg' : 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-white hover:text-white hover:bg-green-700 rounded-lg'}>GALLERY</a> */}
                        {/* <NavLink>DOWNLOAD</NavLink> */}
                        {/* <a href='#' className={color ? 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-black hover:text-white hover:bg-green-700 rounded-lg' : 'md:text-sm font-medium lg:text-tiny px-4 py-2 text-white hover:text-white hover:bg-green-700 rounded-lg'}>DOWNLOAD</a> */}
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className={color ? 'flex items-center gap-x-2 text-black' : 'flex items-center gap-x-2 text-black'}>
                            LAIN-LAINNYA
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        ARTIKEL
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        GALLERY
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        DOWNLOAD
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className={color ? 'flex items-center gap-x-2 text-black' : 'flex items-center gap-x-2 text-black'}>
                            KONTAK
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mt-8 top-0 py-1 rounded-lg w-56 overflow-hidden'>
                                    <DropdownLink href='/'>
                                        KARIR
                                    </DropdownLink>
                                    <Line />
                                    <DropdownLink href='/'>
                                        JUMLAH BED
                                    </DropdownLink>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </nav>
            </div>
        </div>
    </div>

  )
}

export default Navbar