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
            </div>
            <div>
                <Slide />    
            </div>
        </div>
    </div>
  )
}

