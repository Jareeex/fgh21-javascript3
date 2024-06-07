const cekHariKerja = (day) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
        })
        if (cek){
            resolve(cek)
        }else {
            reject(new Error("hari ini bukan hari kerja"))
        }
    },1000)
})
}

const day = 'minggu';

try {
    cekHariKerja(day)
        .then(result => { 
            console.log("Hari ini adalah hari kerja");
        })
        .catch(error => {
            throw error;
        });
} catch(error) {
    console.error("Terjadi kesalahan:");
}