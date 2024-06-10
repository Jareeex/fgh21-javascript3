/ Fungsi untuk mendapatkan daftar orang yang piket pada hari Senin
const piketSenen = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Daftar orang yang piket pada hari Senin
            const piket = ['adit', 'agus'];
            let result = {
                message: 'ini adalah nama yang piket hari Senin',
                piket: piket
            };
            resolve(result); // Mengembalikan hasil ke promise
        }, 2000); // Waktu simulasi
    });
};

// Fungsi untuk mendapatkan daftar orang yang piket pada hari Selasa
const piketSelasa = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Daftar orang yang piket pada hari Selasa
            const piket2 = ['sopo', 'jarwo'];
            let result = {
                message: 'ini adalah nama yang piket hari Selasa',
                piket: piket2
            };
            resolve(result); // Mengembalikan hasil ke promise
        }, 1000); // Waktu simulasi
    });
};

// Menjalankan kedua fungsi secara paralel menggunakan Promise.all()
Promise.all([piketSenen(), piketSelasa()])
    .then(results => {
        let resultSatu = results[0];
        let resultDua = results[1];
        // Menampilkan pesan dan daftar orang yang piket pada hari Senin
        console.log(resultSatu.message);
        console.log("Nama yang piket hari Senin:", resultSatu.piket);
        // Menampilkan pesan dan daftar orang yang piket pada hari Selasa
        console.log(resultDua.message);
        console.log("Nama yang piket hari Selasa:", resultDua.piket);
    })
    .catch(error => {
        // Menangani kesalahan jika terjadi
        console.error("Terjadi kesalahan:", error);
    });
