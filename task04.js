// Mengambil data pengguna dari URL yang disediakan
fetch('https://jsonplaceholder.typicode.com/users')
  // Mengubah respons menjadi JSON
  .then(response => response.json())
  // Menangani data yang diterima
  .then(data => {
    // Melakukan iterasi melalui setiap pengguna
    data.forEach(user => {
      // Menampilkan nama pengguna ke konsol
      console.log(user.name);
    });
  })
  // Menangani kesalahan jika terjadi
  .catch(error => console.error('Fetch error:', error));
