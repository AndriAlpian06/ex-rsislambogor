import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import Line from './Line'
import Logo from '../images/logo-rsislam.png'
// import DropdownLink from './DropdownLink'

export default function MobileNavbar() {
  return (
    <Menu as={'div'} className='flex lg:hidden items-center justify-between py-2 px-4'>
        <div className='flex px-4'>
            <a href="#" className="text-white font-medium mr-6"><img src={Logo} className='w-16 h-[55px]'></img></a>
        </div>

        <Menu.Button className='focus:outline-none'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
          <Menu.Items as={'div'} className='shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-8 py-1 rounded-lg w-56 overflow-hidden'>

            <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">BERANDA</a>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
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
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        SEJARAH
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        VISI & MISI
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        PENGURUS & DIREKSI
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        SUMBERDAYA MANUSIA
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        KEGIATAN & FUNGSI SOSIAL
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        PRESTASI & PENGHARGAAN
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
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
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        PELAYANAN MEDIK
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        PELAYANAN PENUNJANG
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        PELAYANAN MEDIS
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
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
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        PROSEDUR RAWAT
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        JADWAL PRAKTEK DOKTER
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        HAK & KEWAJIBAN PASIEN
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        TATA TERTIB RAWAT
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        TARIF PELAYANAN
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                        INDIKATOR MUTU
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">ARTIKEL</a>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
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
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            PERUSAHAAN / LEMBAGA
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            ASURANSI
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            RUMAH SAKIT
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Line />
            <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">GALLERY</a>
            <Line />
            <a href="#" className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block">DOWNLOAD</a>
            <Line />
            <Menu className='relative ml-4' as={'div'}>
                <Menu.Button className='flex text-black items-center gap-x-2'>
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
                    <Menu.Items as={'div'} className='bg-white relative right-4 mt-2 top-0 py-0 rounded-lg w-56 overflow-hidden'>
                        <Line />
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            KARIR
                        </a>
                        <a href='#' className='px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block'>
                            JUMLAH BED
                        </a>
                    </Menu.Items>
                </Transition>
            </Menu>
          </Menu.Items>
        </Transition>
    </Menu>
  )
}
