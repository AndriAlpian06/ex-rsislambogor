import React from 'react'

export default function Service() {
  return (
    <div>
        {/* <div className='grid grid-cols-4 gap-2'>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/perpus%20online.JPG' className='w-20' alt='' />
            </div>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Untitled.jpg' className='w-20' alt='' />
            </div>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/simrs%20online.JPG' className='w-20' alt='' />
            </div>
            <div>
                <img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/sipnap.JPG' className='w-20' alt='' />
            </div>
        </div> */}
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                {/* {clients.map((client) => (
                    <div key={client.id}>
                    <img
                        src={client.imageSrc}
                        alt={client.imageAlt}
                    />
                    </div>
                ))} */}
                <div className='px-16'>
                    <a href='http://www.perpustakaan.depkes.go.id/' target='_blank' ><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/perpus%20online.JPG' className='w-full' alt='' /></a>
                </div>
                <div className='px-16'>
                    <a href='http://www.infopenyakit.org/' target='_blank' ><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Untitled.jpg' className='w-full' alt='' /></a>
                </div>
                <div className='px-16'>
                    <a href='http://202.70.136.52/sirs/login.php' target='_blank'><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/simrs%20online.JPG' className='w-full' alt='' /></a>
                </div>
                <div className='px-16'>
                    <a href='http://sipnap.binfar.depkes.go.id/login.php' target='_blank'><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/sipnap.JPG' className='w-full' alt='' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
