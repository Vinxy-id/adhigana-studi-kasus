# PANDUAN PENGGUNAAN WEB MINIGAME STUDI KASUS ADHIGANA 2026
**Tema:** DIGITAL FRONTIER  
**Institusi:** Himpunan Mahasiswa Prodi Informatika, Universitas Bhinneka PGRI Tulungagung  

Aplikasi web minigame interaktif ini dirancang untuk pos studi kasus mahasiswa baru (Maba) angkatan 2025/2026. Aplikasi beroperasi **100% OFFLINE** (tanpa butuh akses internet/WiFi sama sekali).

---

## 📁 Cara Menjalankan di Laptop Panitia Pos
1. Salin (copy) folder proyek ini (`Studi kasus`) ke flashdisk atau langsung ke laptop panitia di tiap pos.
2. Di laptop pos, buka folder tersebut.
3. Klik ganda (double click) file **`index.html`**.
4. Web akan langsung terbuka di browser default (Google Chrome / Microsoft Edge / Mozilla Firefox).
5. **Rekomendasi:** Tekan tombol **`Fullscreen`** di pojok kanan atas layar agar tampilan web memenuhi layar laptop dan terlihat profesional layaknya antarmuka investigasi cyberpunk!

---

## ⏱️ Mekanisme Waktu (10 Menit per Pos)
Sesuai ketentuan booklet kegiatan:
- **Total Waktu di Pos:** 10 Menit.
- **Fase 1 (Menit 00:00 s/d 05:00) — Eksplorasi Kasus:**
  - Panitia memilih nama kelompok yang sedang berkunjung (Meta, Gemini, Copilot, Deepseek, atau Claude).
  - Panitia menekan tombol **"Mulai Misi"**.
  - Peserta membaca cerita kasus dan berinteraksi dengan antarmuka di laptop pos untuk mengamati bukti, mengurutkan langkah, atau mencari data.
- **Transisi Otomatis (Menit ke-5):**
  - Alarm suara futuristik berbunyi otomatis menandakan waktu eksplorasi habis.
  - Sistem beralih ke **Fase 2 (Diskusi & Penyelesaian)**. Panel pertanyaan studi kasus otomatis menyala (*glow* kuning-oranye).
- **Fase 2 (Menit 05:00 s/d 10:00) — Diskusi & Penilaian Lisan:**
  - Peserta menuliskan poin-poin kesimpulan di **Buku Catatan A5** mereka.
  - Peserta memaparkan jawaban logisnya secara lisan di hadapan panitia pos.
  - Panitia menilai berdasarkan **Kelogisan Nalar Jawaban**.

---

## 🎮 Ringkasan Kasus di 4 Pos

### 🔹 Pos 1: Investigasi Email Palsu (Cyber Phishing)
- **Tugas:** Menemukan email phishing di antara 3 email kampus.
- **Kunci:** Email ke-2 ("PENTING: Dana Beasiswa Rp 10 Juta Segera Hangus!").
- **Indikator Logis:** Pengirim beralamat `xyz-domain.com` (bukan `.ac.id` / `.go.id`), tombol link mengarah ke website berbahaya, ada desakan panik "59 menit".

### 🔹 Pos 2: Robot Barista Glitch (Logika Algoritma Dasar)
- **Tugas:** Mengurutkan 6 langkah instruksi robot pembuat kopi yang teracak.
- **Kunci:**
  1. Nyalakan pemanas air
  2. Taruh cangkir kosong di tatakan mesin
  3. Masukkan bubuk kopi ke cangkir
  4. Tuangkan air panas mendidih
  5. Aduk larutan kopi hingga rata
  6. Sajikan cangkir kopi ke pelanggan
- **Fitur Interaktif:** Klik tombol **"⚡ Uji Eksekusi Robot"** untuk melihat simulasi apakah kopi tumpah atau tersaji sukses!

### 🔹 Pos 3: Brankas Dokumen Hilang (Logika Pola & Eliminasi)
- **Tugas:** Menemukan brankas berkas rahasia dari 8 brankas digital menggunakan 3 petunjuk.
- **Kunci:** **BRANKAS 03 (Vault 03)**.
- **Alur Eliminasi:**
  - Clue 1 (Bukan nomor genap) -> Menggugurkan Vault 02, 04, 06, 08.
  - Clue 2 (Ukuran > 50 MB) -> Menggugurkan Vault 01 (15MB) & 05 (35MB).
  - Clue 3 (Hari akhir pekan: Sabtu/Minggu) -> Menggugurkan Vault 07 (Kamis). Tersisa Vault 03!

### 🔹 Pos 4: Dilema Seleksi AI (Etika Teknologi & Kritis)
- **Tugas:** Menganalisis mengapa sistem AI mendiskualifikasi kandidat mahasiswa berprestasi tertinggi (Budi Santoso, IPK 3.92, Juara 1 Nasional).
- **Kunci:** Kesalahan sistem regex (*Parser Error 415*) karena programmer hanya menyetel sistem untuk membaca format `.pdf`. Berkas Budi yang berformat `.docx` tidak terbaca dan diberi nilai 0 otomatis.
- **Solusi Logis Peserta:** Otomatisasi konversi dokumen, pengawasan manusia (*human-in-the-loop*), atau fasilitas banding dokumen.

---

## 🔑 Fitur Khusus Panitia: "Rubrik Panitia"
1. Klik tombol **"🔑 Rubrik Panitia"** di pojok kanan atas.
2. Jendela modal akan terbuka menampilkan:
   - Kunci jawaban lengkap pos yang sedang aktif.
   - Tabel rubrik penilaian (Nalar 40 poin, Ketepatan 30 poin, Kerjasama 30 poin = Total 100 poin).
   - Form input nilai cepat per kelompok yang otomatis tersimpan di memori laptop (*browser local storage*).
   - Rekap nilai semua kelompok (Meta, Gemini, Copilot, Deepseek, Claude).

---

## 🔊 Catatan Efek Suara (Audio)
Aplikasi memanfaatkan fitur *Web Audio API* bawaan browser untuk menghasilkan suara bip, alarm detik terakhir, dan nada transisi fase tanpa perlu memutar file lagu eksternal. Jika ingin mematikan suara, cukup klik tombol **Audio (🔊)** di bilah atas.
