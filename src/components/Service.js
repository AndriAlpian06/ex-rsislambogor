import React, { useEffect } from 'react'
import fotoGambar from '../assets/images/foto-dokter.webp'

import AOS from "aos";
import "aos/dist/aos.css";
import Search from './parts/Search';
import DataDokter from './parts/data/DataDokter.js'

export default function Service({ details }) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className='bg-white px-8'>
        {/* <div classNameName='grid grid-cols-4 gap-2'>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/perpus%20online.JPG' classNameName='w-20' alt='' />
            </div>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Untitled.jpg' classNameName='w-20' alt='' />
            </div>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/simrs%20online.JPG' classNameName='w-20' alt='' />
            </div>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/sipnap.JPG' classNameName='w-20' alt='' />
            </div>
        </div> */}
        <div className="w-full  py-8 mx-auto px-8">
            <div className="grid grid-cols-1 gap-4">
                {/* <div className="bg-white px-8 py-8 text-black space-y-4 rounded-lg border-2 border-black" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                <h1 className="font-bold text-3xl">Jam Buka</h1>
                    <div className="flex justify-between">
                        <p>Mon - Fri</p>
                        <p>08:00am - 9:00pm</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Saturday</p>
                        <p>08:00am - 7:00pm</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Sunday</p>
                        <p>08:00am - 5:00pm</p>
                    </div>
                <button className="w-full bg-green-900 text-white rounded-sm py-2 hover:bg-green-700 hover:text-white">Janji Temu</button>
                </div> */}
                {/* <div className="bg-white px-8 py-8 text-black space-y-4 rounded-lg border-2 border-black z-0" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                    <img src={fotoGambar} alt='' />
                </div> */}
                <div className="bg-white w-full px-2 py-8 text-black space-y-4 rounded-lg" data-aos="fade-up">
                <h1 className="font-bold text-3xl">Cari Spesialis</h1>
                <form action="" className="space-y-4">
                    {/* <input type="date" name="" className="w-full text-black rounded-md py-2 px-4" placeholder=""/> */}
                    {/* <input type="text" detail={DataDokter} name="search" onChange={handleChange} className="w-full text-black rounded-md py-2 px-4" placeholder="Hari"/> */}
                    
                    {/* <select name="pelayanan" id="" className="w-full py-2 rounded-md text-black px-4">
                    <option value="" className="text-black">Pilih Spesialis</option>
                    <option value="" className="text-black">Spesialis Penyakit Dalam</option>
                    <option value="" className="text-black">Spesialis Bedah Umum</option>
                    <option value="" className="text-black">Spesialis Anak</option>
                    </select> */}
                </form>
                <Search details={DataDokter} className="w-full text-black rounded-md py-2 px-4" placeholder="Cari Spesialis"/>
                {/* <button className="w-full bg-white text-black rounded-sm py-2 hover:bg-green-700 hover:text-white">Cari Dokter</button> */}
                </div>
                {/* <div className="bg-white px-8 py-8 text-black space-y-4 rounded-lg border-2 border-black" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                    <h1 className="font-bold text-3xl">Nomor Darurat</h1>
                    <p>Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet.</p>
                    <h1 className="font-bold text-3xl">0251 - 831 - 16822</h1>
                </div> */}
            </div>
        </div>
    </div>
  )
}
