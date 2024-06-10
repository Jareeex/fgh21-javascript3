const cekHariKerja = (day) => { // Fungsi untuk memeriksa apakah hari yang diberikan adalah hari kerja
    return new Promise((resolve,reject) =>{  // Mengembalikan promise yang akan diselesaikan 
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat'] // Array yang berisi nama-nama hari kerja
            let cek = dataDay.find((item) => {  // Mencari apakah hari yang diberikan terdapat dalam array dataDay
                return item === day
        })
        if (cek){      // Jika hari ditemukan, promise akan diselesaikan dengan nilai hari tersebut
            resolve(cek)
        }else {
            reject(new Error("hari ini bukan hari kerja"))   // Jika tidak ditemukan, promise akan ditolak dengan pesan kesalahan
        }
    },1000)
})
}


// Tugas a
const success = (day) =>{  // Fungsi untuk menangani apabila promise diterima
    console.log('hari ' +day+' adalah hari kerja')
}
const failed  = (err) => { // Funsi untuk menangani apabila promise ditolak
    console.log(err.message)

    }

    cekHariKerja ('senin')
    .then(success) // Menampilkan promise ketika diterima
    .catch(failed) // Menampilkan promise ketika ditolak

    // Tugas b
    async function cekHari (hari) { // Fungsi async untuk memeriksa hari kerja
        try {
            const day = await cekHariKerja(hari) // menunggu hasil dari promise cekHariKerja
            success(day) // jika diterima memanggil fungsi success
        }catch(err){
            failed(err) // jika ditolak memanggil fungsi failed
        }
    }
    cekHari('Minggu') // memanggil fungsi cek hari dengan parameter hari
