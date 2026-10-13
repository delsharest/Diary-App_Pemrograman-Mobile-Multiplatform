# Diary App - Praktikum Pertemuan 2 & 3

**Mata Kuliah:** Pemrograman Mobile Multiplatform  
**Nama:** Fadhla Rahayu Alfairuz  
**NIM:** 2430511007

## Deskripsi
Diary App adalah aplikasi buku harian sederhana yang dibuat menggunakan React Native dan Expo CLI. Aplikasi ini merupakan lanjutan dari praktikum pertemuan 2 yang dikembangkan pada pertemuan 3 dengan tampilan responsif dan fitur detail diary.

## Fitur Aplikasi
- Menampilkan 7 entri diary beserta gambar, tanggal, dan ringkasan.
- Menggunakan komponen DiaryCard dan DiaryDetailModal.
- Menggunakan FlatList dengan tampilan 1 dan 2 kolom.
- Menampilkan detail diary ketika kartu ditekan.
- Menggunakan StyleSheet, Flexbox, dan design tokens.
- Menampilkan gambar mood, avatar, serta warna border yang berbeda.

## Cara Menjalankan
1. Buka folder project di VS Code.
2. Jalankan `npm install` melalui terminal.
3. Jalankan `npx expo start`.
4. Scan QR code menggunakan Expo Go.

## Layout Responsif
Aplikasi menggunakan `useWindowDimensions()` dengan breakpoint 600 dp. Jika lebar layar kurang dari 600 dp, diary ditampilkan dalam 1 kolom. Jika lebar layar mencapai 600 dp atau lebih, diary ditampilkan dalam 2 kolom.

## Hasil Pengujian
Aplikasi berhasil dijalankan melalui Expo Go. Tampilan portrait menampilkan 1 kolom, sedangkan landscape menampilkan 2 kolom. Kartu diary juga dapat ditekan untuk membuka modal detail.

Screenshot hasil pengujian terdapat pada folder `screenshots/`.