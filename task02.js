const getMonth = (callback)=>{
    setTimeout(()=>{
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
            'November', 'Desember']
        if (!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}
const months = (error, data) => {
    if (error) {
        console.error(error)
    } else {
        const namaBulan = data.map((month) => month)
        console.log(namaBulan)      
    }
}
getMonth(namaBulan)