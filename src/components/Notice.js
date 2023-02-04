import React from 'react'

export default function () {
  return (
    
    <div class="bg-white">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 py-4 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SURVEY KEPUASAN PELAYANAN RS ISLAM BOGOR</h2>
            <p class="mt-4 text-gray-500">Kami harapkan kepada pasien yang telah berkunjung ke RS Islam Bogor untuk dapat mengisi survey kepuasan atas pelayanan di RS Islam Bogor. Adapun link pengisiannya adalah sebagai berikut :</p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div class="border-t border-gray-200 pt-4">
                <a href="https://forms.gle/cn5Y8jsb5FDbVWPe7" class="font-medium text-gray-900">https://forms.gle/cn5Y8jsb5FDbVWPe7</a>
                {/* <!-- <dd class="mt-2 text-sm text-gray-500">Klik link di atas untuk mengisi form survey</dd> --> */}
                </div>

                <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Perpustakan Online</dt>
                {/* <!-- <dd class="mt-2 text-sm text-gray-500">Klik link di atas untuk mengakses perpustakan online</dd> --> */}
                </div>

                <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Info Penyakit</dt>
                {/* <!-- <dd class="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd> --> */}
                </div>

                <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Sistem Informasi Rumah Sakit</dt>
                {/* <!-- <dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd> --> */}
                </div>

                <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Sistem pelaporan narkotika & psikotripika </dt>
                {/* <!-- <dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd> --> */}
                </div>

            </dl>
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/perpus%20online.JPG" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
            <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/Untitled.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
            <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/simrs%20online.JPG" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
            <img src="https://www.rsislambogor.or.id/tinymcpuk/gambar/images/sipnap.JPG" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
            </div>
        </div>
    </div>
  )
}

