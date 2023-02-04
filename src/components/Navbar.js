import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Logo from '../images/logo-rsislam.png'
import DropdownLink from './DropdownLink'
import MobileNavbar from './MobileNavbar'
import NavLink from './NavLink'

import '../css/search.css'
import Line from './Line'

const Navbar = () => {

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
    <div className={color ? 'fixed w-full bg-gradient-to-br from-green-900 to-green-900 z-10' : 'w-full absolute z-10'}>
        <MobileNavbar />
        <div className="hidden lg:block py-4">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <a href="/" className="text-white font-medium"><img src={Logo} className='w-16 h-[55px] ml-4' alt='Logo'></img></a>
                    </div>
                    <div className="flex items-center gap-x-4">    
                        <NavLink>BERANDA</NavLink>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                                    <DropdownLink href='/'>
                                        JADWAL PRAKTEK DOKTER
                                    </DropdownLink>
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
                        <NavLink>ARTIKEL</NavLink>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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
                        <NavLink>GALLERY</NavLink>
                        <NavLink>DOWNLOAD</NavLink>
                        <Menu className='relative' as={'div'}>
                            <Menu.Button className='flex items-center gap-x-2 text-white'>
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