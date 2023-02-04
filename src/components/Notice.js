import React from 'react'
import Slide from './Slide'

export default function () {
  return (
    
    <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 py-4 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SURVEY KEPUASAN PELAYANAN RS ISLAM BOGOR</h2>
            <p className="mt-4 text-gray-500">Kami harapkan kepada pasien yang telah berkunjung ke RS Islam Bogor untuk dapat mengisi survey kepuasan atas pelayanan di RS Islam Bogor. Adapun link pengisiannya adalah sebagai berikut :</p>
            <br/><br/>
            <a href='https://forms.gle/cn5Y8jsb5FDbVWPe7' target="_blank">https://forms.gle/cn5Y8jsb5FDbVWPe7</a>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900"><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/perpus%20online.JPG' className='w-32' alt='' /></dt>
                {/* <!-- <dd className="mt-2 text-sm text-gray-500">Klik link di atas untuk mengisi form survey</dd> --> */}
                </div>

                <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900"><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Untitled.jpg' className='w-32' alt='' /></dt>
                {/* <!-- <dd className="mt-2 text-sm text-gray-500">Klik link di atas untuk mengakses perpustakan online</dd> --> */}
                </div>

                <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900"><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/simrs%20online.JPG' className='w-32' alt='' /></dt>
                {/* <!-- <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd> --> */}
                </div>

                <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900"><img src='https://www.rsislambogor.or.id/tinymcpuk/gambar/images/sipnap.JPG' className='w-32' alt='' /></dt>
                {/* <!-- <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd> --> */}
                </div>

                {/* <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Sistem pelaporan narkotika & psikotripika </dt>
                <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
                </div> */}

            </dl>
            </div>
            <div>
                <Slide />
              {/* <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/perpus%20online.JPG" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
              <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Untitled.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100" />
              <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/simrs%20online.JPG" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100" />
              <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/sipnap.JPG" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100" /> */}
            </div>
        </div>
    </div>
  )
}

