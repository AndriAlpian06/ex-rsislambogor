import React, { useEffect } from 'react'
import Slide from './Slide'

import AOS from "aos";
import "aos/dist/aos.css";

export default function () {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    
    <div className="bg-white">
        <div className="w-5/6 mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-4 py-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
            <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SURVEY KEPUASAN PELAYANAN RS ISLAM BOGOR</h2>
            <p className="mt-4 text-gray-500">Kami harapkan kepada pasien yang telah berkunjung ke RS Islam Bogor untuk dapat mengisi survey kepuasan atas pelayanan di RS Islam Bogor. Adapun link pengisiannya adalah sebagai berikut :</p>
            <br/><br/>
            <a href='https://forms.gle/cn5Y8jsb5FDbVWPe7' target="_blank">https://forms.gle/cn5Y8jsb5FDbVWPe7</a>
            </div>
            <div>
                <Slide />    
            </div>
        </div>
    </div>
  )
}

