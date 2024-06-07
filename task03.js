const piketSenen = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const piket = ['adit', 'agus'];
            let result = {
                message: 'ini adalah nama yang piket hari Senin',
                piket: piket
            };
            resolve(result);
        }, 2000);
    });
};
// program 1

const piketSelasa = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const piket2 = ['sopo', 'jarwo'];
            let result = {
                message: 'ini adalah nama yang piket hari Selasa',
                piket: piket2
            };
            resolve(result);
        }, 1000);
    });
};
// program 2

Promise.all([piketSenen(), piketSelasa()])
    .then(results => {
        let resultSatu = results[0];
        let resultDua = results[1];
        console.log(resultSatu.message);
        console.log("Nama yang piket hari Senin:", resultSatu.piket);
        console.log(resultDua.message);
        console.log("Nama yang piket hari Selasa:", resultDua.piket);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });