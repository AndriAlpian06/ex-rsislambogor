import React from 'react'
import { Element } from 'react-scroll'

export default function 
() {
  return (
    <>
        <div className='my-8'>
            <h1 className='text-2xl font-bold ml-32'>Artikel Terkini</h1>
            <Element name="test7" className="element px-4" id="containerElement" style={{
                height: '500px',
                overflow: 'scroll',
                marginBottom: '100px'
        
            }}>
                <Element name="firstInsideContainer" style={{
                    marginBottom: '200px'
                }}>
                    <div class="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-2 mx-auto my-4">
                <div class="">
                    <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/menjaga%20kesehatan.jpeg" class="w-full mx-auto" alt="" />
                </div>
                <div class="col-span-2 py-4">
                <h2 class="font-bold py-8 text-2xl">5 TIPS MENJAGA KESEHATAN SAAT MENGHADAPI PUNCAK MUSIM HUJAN</h2>
                <p class="text-justify">Assalamualaikum warahmatullahi wabarakatuh, Sahabat RSIB Segala puji bagi Allah subhanahu wa ta’ala atas segala nikmat-Nya. Shalawat dan salam semoga senantiasa tercurah atas panutan kita Nabi Muhammad shallallahu ‘alaihi wa sallam, keluarganya, sahabatnya, dan semua orang-orang yang istiqamah di atas ajarannya hingga hari kiamat tiba..</p>
                <div class="flex items-center justify-between my-4">
                <div>
                    <p class="text-sm text-gray-400">Emir, Info Seputar RSIB</p>
                </div>
                <div>
                    <span class="text-sm text-gray-400">06 Desember 2022</span>
                </div>
                </div>
                <button class="bg-blue-600 rounded-lg px-4 py-2 my-4 hover:bg-blue-500 hover:text-white">Lihat Selengkapnya</button>
                </div>
                    </div>
                    <div class="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-4 my-2 mx-auto">
                        <div class="col-span-2 py-4">
                            <h2 class="font-bold py-8 text-2xl">GIZI RUMAH SAKIT ISLAM BOGOR TELAH BERSERTIFIKAT HALAL MUI</h2>
                            <p class="text-justify">Para pembaca yang dirahmati Allah, benar adanya sabda Rasulullah saw. yang beliau katakan beratus tahun yang lalu tersebut. Modernisasi yang merupakan tanda kemajuan ilmu pengetahuan manusia seringkali tidak sejalan dengan kondisi iman dan takwa. Tidak sedikit orang yang menghalalkan segala cara untuk mendapatkan nikmat dunia yang diinginkan oleh hawa nafsunya. Tindakan korupsi, perampokan, pembegalan, pengedaran narkoba, pencurian, penipuan merupakan beberapa contoh cara yang tidak halal untuk mendapatkan harta dan marak sekali diberitakan di media dan seringkali meresahkan dan merugikan masyarakat..</p>
                            <div class="flex items-center justify-between my-4">
                                <div>
                                    <p class="text-sm text-gray-400">Emir, Info Seputar RSIB</p>
                                </div>
                            <div>
                                <span class="text-sm text-gray-400">15 Maret 2022</span>
                            </div>
                            </div>
                            <button class="bg-blue-600 rounded-lg px-4 py-2 my-4 hover:bg-blue-500 hover:text-white">Lihat Selengkapnya</button>
                        </div>
                        <div class="">
                            <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Sertifikat%20Gizi%20Halal.jpeg" class="w-full mx-auto" alt="" />
                        </div>
                    </div>
                    <div class="w-5/6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-2 py-4 my-2 mx-auto">
                        <div class="">
                            <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/kars%20paripurna.jpg" class="w-full mx-auto" alt="" />
                        </div>
                        <div class="col-span-2 py-4">
                            <h2 class="font-bold py-8 text-2xl">RS Islam Bogor Didirikan KH Sholeh Iskandar dan Menjadi Wakaf Umat Islam</h2>
                            <p class="text-justify">Ketua Takmir Masjid Baitus Syifa Rumah Sakit Islam Bogor (RSIB) KH Djudjih Djajasumpena menyampaikan rasa syukurnya atas prestasi RSIB mendapatkan Akreditasi Paripurna dari Komisi Akreditasi Rumah Sakit (KARS) Nasional.<br/><br/>
                                “Kita sangat bersyukur atas capaian predikat Paripurna, dan Yayasan RSIB akan terus berupaya meningkatkan pelayanan dan fasilitas rumah sakit ini,” kata Djudjih dalam kajian zuhur di Masjid Baitus Syifa, Selasa (17/1/2023).</p>
                            <div class="flex items-center justify-between my-4">
                                <div>
                                    <p class="text-sm text-gray-400">Emir, Info Seputar RSIB</p>
                                </div>
                                <div>
                                    <span class="text-sm text-gray-400">15 Febuari 2022</span>
                                </div>
                            </div>
                            <button class="bg-blue-600 rounded-lg px-4 py-2 my-4 hover:bg-blue-500 hover:text-white">Lihat Selengkapnya</button>
                        </div>
                    </div>
                </Element>
            </Element>
        </div>
    </>
  )
}
