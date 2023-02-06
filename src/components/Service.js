import React from 'react'

export default function Service() {
  return (
    <div>
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
        <div className="w-5/6 py-8 mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900 px-8 py-8 text-white space-y-4 rounded-lg">
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
                <button className="w-full bg-white text-black rounded-sm py-2 hover:bg-green-700 hover:text-white">Janji Temu</button>
                </div>
                <div className="bg-green-900 px-8 py-8 text-white space-y-4 rounded-lg">
                <h1 className="font-bold text-3xl">Cari Seorang Dokter</h1>
                <form action="" className="space-y-4">
                    <input type="date" name="" className="w-full text-black rounded-md py-2 px-4" placeholder=""/>
                    <select name="pelayanan" id="" className="w-full py-2 rounded-md text-black px-4">
                    <option value="" className="text-black">Pilih Layanan</option>
                    <option value="" className="text-black">Layanan 1</option>
                    <option value="" className="text-black">Layanan 2</option>
                    <option value="" className="text-black">Layanan 3</option>
                    </select>
                </form>
                <button className="w-full bg-white text-black rounded-sm py-2 hover:bg-green-700 hover:text-white">Cari Dokter</button>
                </div>
                <div className="bg-gray-500 px-8 py-8 text-white space-y-4 rounded-lg">
                <h1 className="font-bold text-3xl">Nomor Darurat</h1>
                <p>Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet.</p>
                <h1 className="font-bold text-3xl">0251 - 831 - 16822</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
