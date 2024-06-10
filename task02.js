// Fungsi untuk mendapatkan daftar bulan dengan pola callback
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
            'November', 'Desember'];
        if (!error) {
            // Jika tidak ada kesalahan, panggil callback dengan null dan data bulan
            callback(null, month);
        } else {
            // Jika ada kesalahan, panggil callback dengan pesan kesalahan dan array kosong
            callback(new Error('Sorry Data Not Found'), []);
        }
    }, 4000);
};

// Fungsi callback untuk menangani hasil dari getMonth
const months = (error, data) => {
    if (error) {
        // Jika terjadi kesalahan, log pesan kesalahan
        console.error(error);
    } else {
        // Jika berhasil, ambil nama bulan dari data menggunakan map
        const namaBulan = data.map((month) => month);
        console.log(namaBulan);
    }
};

// Memanggil fungsi getMonth dengan fungsi callback months
getMonth(months);
