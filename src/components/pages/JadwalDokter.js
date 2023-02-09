import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import BackToUp from '../BackToUp'
import Footer from '../Footer'

import App from '../../App.css';

export default function JadwalDokter() {
  return (
    <div>
        <Navbar className='bg-green-600' />
        <SideBar />        
        <div class="relative overflow-x-auto px-32 py-4 top-32">
            <h1 className='font-bold text-2xl py-4'>JADWAL PRAKTEK DOKTER RS. ISLAM BOGOR</h1>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 px-4">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            NAMA DOKTER
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Senin
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Selasa
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Rabu
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Kamis
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Jumat
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Sabtu
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-300 border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" colSpan='7' class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Spesialis Jantung & Pembuluh Darah
                        </th>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Dr. Rina Elfiani, Sp.JP.
                        </th>
                        <td class="px-6 py-4">
                            14.00-selesai
                        </td>
                        <td class="px-6 py-4">
                            Hanya tindakan ECHO
                        </td>
                        <td class="px-6 py-4">
                            $14.00-selesai
                        </td>
                        <td class="px-6 py-4">
                            Hanya tindakan ECHO
                        </td>
                        <td class="px-6 py-4">
                            14.00-selesai
                        </td>
                        <td class="px-6 py-4">
                            -
                        </td>
                    </tr>
                    <tr class="bg-gray-300 border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" colSpan='7' class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Spesialis Bedah
                        </th>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dr. H. Widjajanto, SP. B
                        </th>
                        <td class="px-6 py-4">
                        08:30 - 10:00
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        08:30 - 10:00
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        08:30 - 10:00
                        </td>
                        <td class="px-6 py-4">
                        08:00 - 10:00
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dr. Solya Wijaya, SP. B
                        </th>
                        <td class="px-6 py-4">
                        14:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        09:00 - 11-00
                        </td>
                        <td class="px-6 py-4">
                        14:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        09:00 - 11-00
                        </td><td class="px-6 py-4">
                        14:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dr. Ariefa Adha Putra, SP. B
                        </th>
                        <td class="px-6 py-4">
                        17:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        17:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        17:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        17:00 - selesai
                        </td><td class="px-6 py-4">
                        17:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        15:00 - selesai
                        </td>
                    </tr>
                    <tr class="bg-gray-300 border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" colSpan='7' class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Spesialis Kesehatan Jiwa
                        </th>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        dr. Rininta Mardiani, Sp.KJ
                        </th>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        15:00 - 17:00
                        </td>
                        <td class="px-6 py-4">
                        15:00 - 17:00
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dr. Syarifah Husna, Sp.KJ
                        </th>
                        <td class="px-6 py-4">
                        09:00 - 11:30
                        </td>
                        <td class="px-6 py-4">
                        09:00 - 11:30
                        </td>
                        <td class="px-6 py-4">
                        09:00 - 11:30
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                    </tr>
                    <tr class="bg-gray-300 border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" colSpan='7' class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Spesialis Anak
                        </th>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dr. Nadya Leifina, Sp. A
                        </th>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        14:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        14:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Dr. Dyah Pusmala Djunaidi, Sp. A
                        </th>
                        <td class="px-6 py-4">
                        10:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        10:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        10:00 - selesai
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        dr. Andi Indriaty Syaiful, Sp. A
                        </th>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        13:00 - 15:00
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        13:00 - 15:00
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                        <td class="px-6 py-4">
                        -
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <BackToUp />
        <Footer />
    </div>
  )
}
