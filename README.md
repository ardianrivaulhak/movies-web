# movies-web

Let's create a simple web application about movies Read, Detail and search using JavaScript ORM Sequelize on the backend and Vue.js framework on the frontend.

```
Simple Web Movies adalah sebuah aplikasi web sederhana yang menggunakan Vue.js sebagai frontend dan Express.js sebagai backend. Aplikasi ini memungkinkan pengguna untuk melakukan operasi Read, Detail dan search pada data film, serta melakukan pencarian film berdasarkan judul.


## Fitur

- Menampilkan daftar film beserta detailnya
- Menambahkan film baru
- Pencarian film berdasarkan judul

## Teknologi yang Digunakan

- Vue.js
- Express.js
- Sequelize (ORM)
- PostgreSQL

## Cara Penggunaan Backend & Frontend

- Clone repositori ini ke komputer Anda.
- Buka terminal dan navigasi ke direktori root aplikasi.
- Install dependency dengan menjalankan perintah npm \* install pada terminal.
- Buat database pada PostgreSQL, kemudian ubah konfigurasi database pada file /config/config.json.
- Jalankan migrasi untuk membuat tabel pada database dengan menjalankan perintah npx sequelize-cli db:migrate.
- Jalankan seed untuk mengisi tabel pada database dengan \* data dummy dengan menjalankan perintah npx sequelize-cli db:seed:all.
- Jalankan backend dengan menjalankan perintah nodemon app.js.
  Buka imsomnia dan akses http://localhost:4000 untuk melihat aplikasi.
- Jalankan frontend dengan npm install pada terminal lalu npm run dev dan askes http://localhost:8080 untuk melihat aplikasi

## Struktur Direktori

- /backend/config: Konfigurasi database dan pengaturan lainnya.
- /backend/data: Data dummy untuk seed database.
- /backend/models: Model Sequelize.
- /backend/routes: Route Express.js.
- /backend/controllers: Controller Express.js.
- /backend/app.js: File entry point aplikasi.
- /frontend/stores/useMovieStore.js: File entry point aplikasi
```
