const DataDokter = [
    {
      id: 1,
      imgPath: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/03/08055643/Cari-Dokter-Umum-Terbaik-di-Yogyakarta_-Ini-5-Rekomendasinya.jpg",
      name: "Dr. Rina Elfiani, Sp, JP",
      email: "janedoe@gmail.com",
      address: "New Delhi, India",
      spesialis: "Spesialis Jantung dan Pembuluh Darah",
      jadwal: [
        { idJadwal:1,
          day: ['senin','selasa','rabu','kamis','jumat' ], 
          jam: ['14:00 - Selesai','Hanya tindakan ECHO','14:00 - Selesai','Hanya tindakan ECHO','14:00 - Selesai']
        },
      ],
    },
    {
      id: 2,
      imgPath: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg",
      name: "Dr H Widiajanto SP. B",
      email: "agra@rosie.com",
      address: "Tbilisi, India",
      spesialis: "Spesialis Bedah",
      jadwal: [
        { day: 'senin', jam: '08:30 - 10:00' },
        { day: 'selasa', jam: '-' },
        { day: 'rabu', jam: '08:30 - 10:00' },
        { day: 'kamis', jam: '-' },
        { day: 'jumat', jam: '08:30 - 10:00' },
        { day: 'sabtu', jam: '08:30 - 10:00' }
      ],
    },
    {
      id: 3,
      imgPath: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
      name: "Dr. Sofya Wijaya SP. B",
      email: "irene@johnlock.com",
      address: "Baker Street, India",
      spesialis: "Spesialis Bedah",
      jadwal: [
        { day: 'senin', jam: '14:00 - selesai' },
        { day: 'selasa', jam: '09:00 - 11:00' },
        { day: 'rabu', jam: '14:00 - selesai' },
        { day: 'kamis', jam: '09:00 - 11:00' },
        { day: 'jumat', jam: '14:00 - selesai' },
        { day: 'sabtu', jam: '-' }
      ],
    },
    {
      id: 4,
      imgPath: "https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg",
      name: "Dr. Ariefa Adha Putra, SP. B",
      email: "mary@johnlock.com",
      address: "Seven Street, India",
      spesialis: "Spesialis Bedah",
      jadwal: [
        { day: 'senin', jam: '17:00 - selesai' },
        { day: 'selasa', jam: '17:00 - selesai' },
        { day: 'rabu', jam: '17:00 - selesai' },
        { day: 'kamis', jam: '17:00 - selesai' },
        { day: 'jumat', jam: '17:00 - selesai' },
        { day: 'sabtu', jam: '15:00 - selesai' }
      ],
    },
    {
      id: 5,
      imgPath: "https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg",
      name: "Dr. H. Trihadji, Sp. B",
      email: "britishgovt@gmail.com",
      address: "London, India",
      spesialis: "Spesialis Bedah Syarat",
      jadwal: [
        { day: 'senin', jam: 'Hanya pasien rawat inap' },
        { day: 'selasa', jam: 'Hanya pasien rawat inap' },
        { day: 'rabu', jam: 'Hanya pasien rawat inap' },
        { day: 'kamis', jam: 'Hanya pasien rawat inap' },
        { day: 'jumat', jam: 'Hanya pasien rawat inap' },
        { day: 'sabtu', jam: 'Hanya pasien rawat inap' }
      ],
    },
    {
      id: 6,
      imgPath: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
      name: "dr. Rininta Mardiani, Sp.KJ",
      email: "shawn@gmail.com",
      address: "Street seven",
      spesialis: "Spesialis Kesehatan Jiwa",
      jadwal: [
        { day: 'senin', jam: '-' },
        { day: 'selasa', jam: '-' },
        { day: 'rabu', jam: '-' },
        { day: 'kamis', jam: '15:00 - 17:00' },
        { day: 'jumat', jam: '15:00 - 17:00' },
        { day: 'sabtu', jam: '-' }
      ],
    },
    {
      id: 7,
      imgPath: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg",
      name: "Dr. Syarifah Husna, Sp.KJ",
      email: "janedoe@gmail.com",
      address: "tokyo, Jepang",
      spesialis: "Spesialis Kesehatan Jiwa",
      jadwal: [
        { day: 'senin', jam: '09:00 - 11:30' },
        { day: 'selasa', jam: '09:00 - 11:30' },
        { day: 'rabu', jam: '09:00 - 11:30' },
        { day: 'kamis', jam: '-' },
        { day: 'jumat', jam: '-' },
        { day: 'sabtu', jam: '-' }
      ],
    },
    {
      id: 8,
      imgPath: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg",
      name: "Dr. Nadya Leifina Sp. A",
      email: "janedoe@gmail.com",
      address: "tokyo, Jepang",
      spesialis: "Spesialis Anak",
      jadwal: [
        { day: 'senin', jam: '-' },
        { day: 'selasa', jam: '14:00 - selesai' },
        { day: 'rabu', jam: '-' },
        { day: 'kamis', jam: '14:00 - selesai' },
        { day: 'jumat', jam: '-' },
        { day: 'sabtu', jam: '-' }
      ],
    },
    {
      id: 9,
      imgPath: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg",
      name: "Dr. Dyah Pusmala, Sp. A",
      email: "janedoe@gmail.com",
      address: "tokyo, Jepang",
      spesialis: "Spesialis Anak",
      jadwal: [
        { day: 'senin', jam: '10:00 - selesai' },
        { day: 'selasa', jam: '-' },
        { day: 'rabu', jam: '10:00 - selesai' },
        { day: 'kamis', jam: '-' },
        { day: 'jumat', jam: '10:00 - selesai' },
        { day: 'sabtu', jam: '-' }
      ],
    },
    
    {
      id: 10,
      imgPath: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg",
      name: "Dr. Andi Indriaty Syaiful Sp. A",
      email: "janedoe@gmail.com",
      address: "tokyo, Jepang",
      spesialis: "Spesialis Anak",
      jadwal: [
        { day: 'senin', jam: '-' },
        { day: 'selasa', jam: '13:05 - 15:00' },
        { day: 'rabu', jam: '-' },
        { day: 'kamis', jam: '13:05 - 15:00' },
        { day: 'jumat', jam: '-' },
        { day: 'sabtu', jam: '-' }
      ],
    }
  ];
  
  export default DataDokter;