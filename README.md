# PANDUAN PENGGUNAAN WEB MINIGAME STUDI KASUS ADHIGANA 2026
**Tema:** DIGITAL FRONTIER  
**Institusi:** Himpunan Mahasiswa Prodi Informatika, Universitas Bhinneka PGRI Tulungagung  

Aplikasi web minigame interaktif ini dirancang untuk pos studi kasus mahasiswa baru (Maba) angkatan 2025/2026. Aplikasi beroperasi **100% OFFLINE** (tanpa butuh akses internet/WiFi) dan mendukung **Real-time Live Synchronization** antar-laptop via Cloud Firestore jika online, atau multi-tab offline via Web Storage API!

---

## 💻 Panduan Penggunaan di Tiap Laptop Panitia Pos

Sistem telah dipisahkan menjadi file mandiri per stasiun pos agar sangat praktis dibuka di laptop masing-masing panitia:

| Laptop / Station | File yang Dibuka | Fungsi & Peran |
|---|---|---|
| **Laptop Pos 1** | **`pos1.html`** | Pos 1: Investigasi Email Palsu (Cyber Phishing) |
| **Laptop Pos 2** | **`pos2.html`** | Pos 2: Robot Barista Glitch (Algoritma Sekuensial) |
| **Laptop Pos 3** | **`pos3.html`** | Pos 3: Brankas Data Hilang (Pola & Eliminasi) |
| **Laptop Pos 4** | **`pos4.html`** | Pos 4: Dilema Seleksi AI (Etika Teknologi & Kritis) |
| **Laptop Proyektor / Pusat** | **`index.html`** | Portal Utama + **Live Leaderboard Realtime** + Admin Pusat |

> 💡 **Cara Menjalankan:**
> Cukup double-click file `.html` yang sesuai di laptop masing-masing. Browser akan langsung membukanya tanpa perlu instalasi tools, web server, atau dependensi apa pun!
> Tekan tombol **`Fullscreen`** di pojok kanan atas untuk pengalaman monitor cyber arcade penuh.

---

## ⚡ Sinkronisasi Leaderboard Realtime

1. **Jaringan Online (Multi-Laptop via Firebase):**
   - Nilai yang disubmit di laptop `pos1.html` s/d `pos4.html` otomatis masuk ke database cloud dan langsung memperbarui tampilan **Live Leaderboard** di laptop proyektor `index.html` secara realtime via listener `onSnapshot`!
2. **Offline Multi-Tab (Satu Laptop Uji Coba):**
   - Jika dijalankan pada browser yang sama (tab berbeda), event `window.onstorage` langsung memperbarui tabel klasemen di tab `index.html` secara instan tanpa perlu refresh.
3. **Offline Multi-Laptop (Tanpa Internet Sama Sekali):**
   - Panitia pos dapat menekan tombol **"EKSPOR JSON (BACKUP)"** di modal Leaderboard.
   - Operator pusat di `index.html` cukup mengklik **"IMPOR & GABUNG DATA"** untuk menyatukan semua rekap pos secara otomatis tanpa duplikasi.

---

## ⏱️ Alur Misi (4 Layar Interaktif, Durasi 2 Menit)

1. **Layar 1: "Welcome in Pos ..."**
   - Sambutan audio-visual per pos, briefing objektif, durasi 2 menit, format pilihan ganda 100 poin.
   - Tombol: **"PILIH KELOMPOKMU (LANJUT) →"**.
2. **Layar 2: "Kamu dari tim mana?"**
   - Pemilihan tim: **Meta, Gemini, Copilot, Deepseek, Claude**.
3. **Layar 3: "Loading..."**
   - Animasi terminal otentikasi identitas kelompok (~1.8 detik).
4. **Layar 4: "Investigasi Studi Kasus"**
   - **Monitor Kiri (CRT 1):** Bukti interaktif & tools simulator.
   - **Monitor Kanan (CRT 2):** Soal **Pilihan Ganda (A, B, C, D)** dengan bobot poin (2 soal @ 50 poin = Total 100 Poin). CRT 2 memiliki scroll mandiri halus.
   - Peserta/panitia memilih jawaban lalu klik **"⚡ SUBMIT JAWABAN RESMI"**.
   - Sistem menerbitkan skor instan dan **Kode Unik** (misal `META-P1-9021`) untuk disalin ke lembar kertas peserta.
   - Klik **"🔄 SELESAI // ROTASI KELOMPOK"** untuk reset ke Layar 1 bagi kelompok berikutnya.

---

## 🎮 Ringkasan Kunci Jawaban Studi Kasus

### 🔹 Pos 1: Investigasi Email Palsu (Cyber Phishing)
- **Soal 1 (50 Pts):** Email Phishing -> **Opsi B** (Email 2: Kemendikbud Beasiswa 10 Juta Mendesak).
- **Soal 2 (50 Pts):** Kejanggalan Logis -> **Opsi B** (Domain liar `xyz-domain.com`, link mencurigakan, panik 59 menit).

### 🔹 Pos 2: Robot Barista Glitch (Logika Algoritma Dasar)
- **Soal 1 (50 Pts):** Urutan Logika Benar -> **Opsi B** (Nyalakan pemanas -> Taruh cangkir -> Bubuk kopi -> Air panas -> Aduk -> Sajikan).
- **Soal 2 (50 Pts):** Alasan Cangkir Harus Siap -> **Opsi B** (Wadah penampung harus siap agar bahan tidak tumpah dan sistem tidak error).

### 🔹 Pos 3: Brankas Dokumen Hilang (Logika Pola & Eliminasi)
- **Soal 1 (50 Pts):** Brankas Dokumen Rahasia -> **Opsi C** (Vault 03 - 85 MB, Akses Minggu).
- **Soal 2 (50 Pts):** Alasan Vault 07 Gugur -> **Opsi B** (Hari akses Kamis, bukan akhir pekan Sabtu/Minggu).

### 🔹 Pos 4: Dilema Seleksi AI (Etika Teknologi & Kritis)
- **Soal 1 (50 Pts):** Penyebab Diskualifikasi AI -> **Opsi B** (Parser regex hanya membaca format .PDF, berkas Budi .DOCX bernilai 0).
- **Soal 2 (50 Pts):** Solusi Etis & Rekayasa -> **Opsi B** (Auto-converter format, hak sanggah/banding, dan pengawasan Human-in-the-Loop).

---

## 🔑 Fitur Akses Panitia (Default PIN: `2026`)
- **"🔑 KUNCI POS":** Melihat kunci jawaban, analisis logis, dan lokasi petunjuk fisik pos aktif (PIN: `2026`).
- **"📊 LEADERBOARD":** Rekap nilai total realtime, monitoring skor kelompok, ekspor CSV/JSON, dan reset data (PIN: `2026`).
- **"🎯 TUTORIAL PER POS":** Buka `video_tutorial_pos.html` dengan parameter `?pos=1`, `?pos=2`, `?pos=3`, `?pos=4` untuk panduan khusus stasiun pos & simulator interaktif.
- **Sistem 100% Digital:** Pengerjaan, penilaian berbobot otomatis (100 Poin), dan sinkronisasi realtime ke central leaderboard tanpa memerlukan lembar kertas fisik.
