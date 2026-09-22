# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Web Minigame Studi Kasus — ADHIGANA INFORMATIKA 2026
**Tema Acara:** DIGITAL FRONTIER  
**Institusi:** Himpunan Mahasiswa Prodi Informatika, Universitas Bhinneka PGRI Tulungagung  
**Target Pengguna:** Mahasiswa Baru (Maba) Angkatan 2025/2026 & Panitia Pos  

---

## 1. Latar Belakang & Tujuan
### 1.1 Latar Belakang
Pada kegiatan ADHIGANA 2026, terdapat agenda **Studi Kasus** yang diadakan di 4 pos berbeda. Sesuai aturan booklet:
- Durasi total per pos adalah **10 menit** (5 menit eksplorasi mencari kasus/petunjuk + 5 menit penyelesaian & diskusi).
- Peserta dilarang menggunakan HP (jika ketahuan akan disita).
- Laptop dibawa oleh panitia di tiap pos (peserta tidak perlu membawa laptop saat keliling).
- Mahasiswa baru **belum pernah menerima materi perkuliahan apa pun**, sehingga studi kasus harus ramah pemula, mengutamakan **kelogisan berpikir (computational thinking, ketelitian, dan common sense)** daripada koding/teori teknis.

### 1.2 Tujuan Produk
1. Menghadirkan pengalaman studi kasus yang interaktif, modern, dan menyenangkan berbasis web minigame bertema *Digital Frontier*.
2. Membantu panitia pos mengontrol waktu secara presisi dengan sistem dual-timer otomatis (5 menit eksplorasi + 5 menit diskusi).
3. Memberikan panduan penilaian (rubrik/cheat sheet panitia) agar penilaian kelogisan jawaban seragam dan objektif.
4. Beroperasi **100% offline** di laptop panitia tanpa ketergantungan koneksi internet.

---

## 2. Profil Pengguna & Lingkungan Operasional
1. **Peserta (Maba)**:
   - Terbagi dalam 5 kelompok: **Meta, Gemini, Copilot, Deepseek, Claude**.
   - Berkerumun di depan laptop panitia untuk mengamati kasus, berdiskusi, dan mencatat jawaban di Buku Catatan A5.
2. **Panitia Pos**:
   - Membuka web di laptop pos, mengoperasikan timer, memandu peserta, dan menilai jawaban berdasarkan rubrik yang tertera di web.
3. **Lingkungan**:
   - Outbound / area pos kampus. Bebas internet (bisa dibuka langsung dari file `index.html` lokal di browser Chrome/Edge/Firefox).

---

## 3. Fitur Utama & Spesifikasi Fungsional

### 3.1 Kontrol Sesi & Header Pos
- **Pemilihan Pos**: Menu cepat untuk berganti antar Pos 1, 2, 3, dan 4.
- **Pemilihan Kelompok**: Dropdown kelompok aktif (Meta, Gemini, Copilot, Deepseek, Claude).
- **Status Bar**: Indikator tema *Digital Frontier*, status waktu, dan tombol fullscreen.

### 3.2 Sistem Dual-Timer & Sound FX (10 Menit)
- **Fase 1: Eksplorasi (05:00 - 00:00)**
  - Tampilan fokus pada penemuan bukti, dokumen digital, atau simulasi interaktif.
  - Saat waktu Fase 1 habis, berbunyi alarm transisi (Web Audio API synthesised sound).
- **Fase 2: Penyelesaian & Diskusi (05:00 - 00:00)**
  - Layar otomatis menampilkan pertanyaan studi kasus utama & instruksi pencatatan.
  - Hitung mundur 5 menit kedua untuk diskusi kelompok & penyampaian jawaban lisan ke panitia.
- **Kontrol Panitia**: Tombol *Mulai*, *Jeda (Pause)*, *Reset*, dan *Lewati ke Fase 2 (Skip)*.

### 3.3 Konten 4 Modul Studi Kasus

#### 🔹 Pos 1: Cyber Forensic — "Detektif Phishing Email"
- **Tema IT**: Keamanan Digital & Ketelitian.
- **Interaksi**: Kotak masuk webmail dengan 3 email masuk:
  1. *Email A (Resmi)*: Pengumuman KRS dari Dosen Wali (`dosen@ubhi.ac.id`).
  2. *Email B (Phishing)*: Notifikasi Beasiswa Rp 10 Juta Mendesak (`beasiswa-ubhi-pasti-cair@xyz-domain.com`), tautan mencurigakan, meminta login akun.
  3. *Email C (Resmi)*: Pengembalian Buku Perpustakaan Kampus.
- **Tantangan Peserta**:
  - Tentukan email palsu.
  - Berikan minimal 2 bukti logis kecurigaan (domain email tidak resmi, desakan panik, permintaan data kredensial).

#### 🔹 Pos 2: Algoritma Kehidupan — "Robot Barista Glitch"
- **Tema IT**: Urutan Instruksi Logis (*Sequential Logic & Bug Analysis*).
- **Interaksi**: Visualisasi interaktif robot pembuat kopi yang gagal karena urutan salah. Terdapat 6 kartu instruksi yang dapat diurutkan (naik/turun atau drag).
  - Kartu: (A) Tuang air mendidih, (B) Taruh cangkir di tatakan, (C) Masukkan bubuk kopi ke cangkir, (D) Nyalakan pemanas air, (E) Aduk larutan kopi, (F) Berikan cangkir ke pelanggan.
  - Tombol **"Tes Jalankan Robot"**: Menunjukkan simulasi apakah kopi tumpah ke lantai atau sukses tersaji.
- **Tantangan Peserta**:
  - Susun urutan instruksi yang paling benar.
  - Jelaskan apa yang terjadi jika cangkir belum ditaruh tapi air/kopi sudah dituang (mengapa urutan eksekusi sangat penting di logika komputer).

#### 🔹 Pos 3: Pencarian Data — "Brankas Dokumen Hilang"
- **Tema IT**: Logika Eliminasi & Pola (*Logical Elimination / Search Algorithm*).
- **Interaksi**: 8 brankas digital (Vault 01 s/d Vault 08). Peserta dapat membaca 3 petunjuk logis:
  - *Clue 1*: "Dokumen tidak disimpan di brankas berangka genap." (Eliminasi: 2, 4, 6, 8).
  - *Clue 2*: "Ukuran dokumen lebih besar dari 50 MB." (Peserta cek Vault 1, 3, 5, 7 -> Vault 1=15MB, Vault 3=85MB, Vault 5=30MB, Vault 7=95MB).
  - *Clue 3*: "Tanggal pembuatan dokumen terjadi di akhir pekan (Sabtu/Minggu)." (Vault 3 dibuat hari Minggu, Vault 7 dibuat hari Kamis).
- **Tantangan Peserta**:
  - Tentukan brankas mana yang berisi dokumen rahasia (Vault 03).
  - Paparkan urutan eliminasi logis tim hingga menemukan brankas tersebut dalam waktu sesingkat mungkin.

#### 🔹 Pos 4: Etika Teknologi — "Dilema Seleksi AI Kampus"
- **Tema IT**: Etika AI & Kritis Terhadap Otomasi (*Human-in-the-Loop*).
- **Interaksi**: Tampilan dashboard seleksi AI untuk beasiswa prestasi. 
  - Kasus: Siswa A (IPK 3.9, Juara Lomba Nasional) didiskualifikasi otomatis oleh sistem hanya karena mengunggah berkas dalam format `.docx` (Word), sementara sistem hanya diprogram mendeteksi format `.pdf`.
- **Tantangan Peserta**:
  - Apakah keputusan sistem AI tersebut adil? Mengapa sistem otomasi bisa melakukan kekeliruan konyol seperti itu?
  - Sebagai calon mahasiswa Informatika, solusi logis apa yang harus diterapkan pada sistem agar kasus serupa tidak terulang (misal: penambahan converter format otomatis, peringatan upload, atau verifikasi banding manusia)?

### 3.4 Kunci Jawaban & Rubrik Penilaian Panitia (Modal Tersembunyi)
- Tombol rahasia/modal "Kunci & Rubrik Panitia" untuk juri pos.
- Memuat poin kunci jawaban, tips memancing jawaban peserta, serta rentang skor (Kekompakan, Kecepatan Analisis, Kelogisan Penjelasan).

---

## 4. Desain Antarmuka (UI/UX)
- **Tema Visual**: Sci-Fi Dark Mode dengan aksen Neon Cyan (`#00f3ff`), Neon Purple (`#a855f7`), dan Dark Slate (`#0a0f1d`).
- **Tipografi**: Bersih, modern, nuansa terminal/kode monospace pada data numerik & timer.
- **Responsivitas**: Optimal untuk layar laptop resolusi standar (1366x768 s/d 1920x1080).
- **Audio Feedback**: Menggunakan Web Audio API internal (efek bip klik, tick timer detik 10-0, dan nada kemenangan/pergantian fase). Tanpa aset file audio eksternal.

---

## 5. Kebutuhan Non-Fungsional
1. **Zero External Dependencies / 100% Offline**:
   - Seluruh kode HTML, CSS, dan JS dikemas mandiri tanpa CDN eksternal (tidak bergantung pada koneksi internet saat hari-H).
2. **Performa Ringan**:
   - Dapat dibuka instan di browser apa pun tanpa instalasi server Node/Python rumit (cukup double-click `index.html`).
3. **Kemudahan Pengoperasian**:
   - Antarmuka intuitif untuk panitia pos yang bertugas menjaga laptop.
