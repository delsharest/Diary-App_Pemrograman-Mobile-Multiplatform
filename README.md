# Diary App — Praktikum Pertemuan 1

**Mata kuliah:** Pemrograman Mobile Multiplatform  
**Nama:** Fadhla Rahayu Alfairuz  
**NIM:** 2430511007

## Deskripsi
Aplikasi daftar buku harian statis menggunakan React Native dan Expo CLI. Aplikasi menampilkan 5 entri buku harian dengan gambar, tanggal, ringkasan, dan variasi tampilan berdasarkan mood.

## Cara menjalankan
1. Pastikan Node.js LTS dan Expo Go sudah terpasang.
2. Buka folder `diary-app` dengan VS Code.
3. Jalankan `npm install` pada terminal di folder ini.
4. Jalankan `npx expo start`.
5. Pindai QR code dengan Expo Go (pastikan laptop dan HP dapat terhubung).

## Fitur yang diselesaikan
- Menampilkan **5 entri diary statis** dalam `ScrollView`.
- Menggunakan komponen reusable `src/components/DiaryCard.js` dan `props`.
- Menampilkan gambar mood, judul, tanggal, dan ringkasan maksimal 3 baris.
- Menggunakan **gambar lokal** `assets/moods/happy.png` pada salah satu entri.
- Menampilkan **avatar** di header dari `assets/avatar.png`.
- Menggunakan **warna border kiri yang berbeda** sesuai mood kartu.
- Styling menggunakan `StyleSheet` dan layout `Flexbox`.

## Dokumentasi Pengujian
Aplikasi Diary App telah berhasil dijalankan menggunakan Expo Go pada perangkat Android. Pengujian menunjukkan bahwa aplikasi mampu menampilkan lima entri buku harian, gambar mood, avatar pengguna, serta variasi warna border pada setiap kartu.

Hasil screenshot pengujian disimpan dalam folder `screenshots/` sebagai bukti aplikasi telah berhasil dijalankan.

## Catatan
Gambar mood pada empat entri lainnya menggunakan URL `picsum.photos`, sehingga membutuhkan akses internet untuk tampil. Project ini merupakan daftar statis dan belum memiliki fitur tambah/edit entri.
