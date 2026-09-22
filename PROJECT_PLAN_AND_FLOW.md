# 📅 PROJECT PLAN & OPERATIONAL FLOW
## "Digital Frontier: The Logic Escape" — ADHIGANA INFORMATIKA 2026
**Acara:** Adhigana Informatika 2026  
**Penyelenggara:** Himpunan Mahasiswa Prodi Informatika, Universitas Bhinneka PGRI Tulungagung  
**Tim:** Divisi IT & Acara  
**Durasi Proyek:** 14 Hari (H-14 hingga H-Day)  

---

## 1. Struktur Tim & Tanggung Jawab (Roles & Responsibilities)

| Peran | Jumlah | Tanggung Jawab Utama |
| :--- | :---: | :--- |
| **Project Manager (PM)** | 1 | Mengawasi timeline, koordinasi antar divisi, memastikan seluruh kebutuhan terpenuhi. |
| **UI/UX Designer** | 1 | Mendesain tampilan web (tema Cyber Mecha/Pixel Sci-Fi), animasi glitch, dan alur pengguna. |
| **Frontend Developer** | 1-2 | Membangun antarmuka web interaktif, dual-timer, input jawaban, dan generator kode unik. |
| **Backend Developer** | 1 | Setup database (Firebase/Local storage fallback), kalkulasi poin, dan leaderboard real-time. |
| **Content Writer** | 1 | Menyusun 4 studi kasus, kunci jawaban, dan materi petunjuk fisik di tiap pos. |
| **Logistics & Acara** | 2 | Menyiapkan laptop/tablet per pos, lembar jawaban kertas, properti fisik, dan hadiah. |

---

## 2. Timeline & Milestones (14 Hari)

### 📌 Fase 1: Perencanaan & Desain (H-14 s/d H-10)
**Tujuan:** Finalisasi konsep, soal, dan desain antarmuka.
- **H-14:**
  - [PM] Kick-off meeting dengan seluruh tim IT & Acara.
  - [Content Writer] Menyusun draf 4 studi kasus (Meta, Gemini, Copilot, Deepseek, Claude).
  - [UI/UX] Membuat wireframe dan mockup desain web (tema Digital Frontier).
- **H-12:**
  - [Content Writer] Finalisasi soal, kunci jawaban, dan petunjuk fisik tersembunyi.
  - [UI/UX] Finalisasi desain UI (Pixel Sci-Fi, warna Mecha Red & Cyan, animasi glitch, layout leaderboard).
  - [PM] Review dan approval desain & konten.
- **H-10:**
  - [Backend] Setup database (Firebase Realtime DB / Local Storage Fallback) dan struktur data.
  - [Frontend] Setup project repository (Git), inisialisasi framework & modul web standalone.
  - [Logistics] Mulai inventarisir laptop pos dan printer lembar jawaban.

### 📌 Fase 2: Development & Testing (H-9 s/d H-5)
**Tujuan:** Membangun sistem, integrasi, dan uji coba internal.
- **H-9 s/d H-7:**
  - [Frontend] Membangun halaman: Landing, Pilih Kelompok, Soal, Input Jawaban, Kode Unik.
  - [Backend] Membuat fungsi submit jawaban, generate kode unik, dan kalkulasi poin.
  - [UI/UX] Membuat aset animasi (glitch, energy gauge, sound effects 8-bit).
- **H-6:**
  - [Frontend & Backend] Integrasi sistem. Uji coba submit jawaban dan munculnya kode unik.
  - [PM] Internal Testing 1: Memastikan tidak ada bug fatal dan timer akurat.
- **H-5:**
  - [Backend] Membangun halaman Admin & Leaderboard Realtime.
  - [Logistics] Mencetak lembar jawaban kertas, kunci jawaban, dan petunjuk fisik.
  - [PM] Internal Testing 2: Simulasi alur lengkap (5 menit eksplorasi, 5 menit jawab).

### 📌 Fase 3: Persiapan Akhir & Gladi Resik (H-4 s/d H-1)
**Tujuan:** Memastikan semua perangkat siap dan panitia paham alur.
- **H-4:**
  - [Frontend] Memperbaiki bug dari hasil testing.
  - [Logistics] Menyiapkan properti fisik (kertas petunjuk tersembunyi, amplop, dll).
  - [PM] Menyusun SOP untuk Panitia Pos (IP).
- **H-3:**
  - [All] **Gladi Resik Full Team:** Simulasi di lokasi acara (area kampus UBHI).
  - [IT] Deployment ke server / uji coba buka offline di laptop pos.
  - [PM] Briefing panitia pos: Cara mengoperasikan web, mengisi jawaban, dan mencocokkan kode unik.
- **H-2:**
  - [IT] Backup database dan source code.
  - [Logistics] Memastikan semua laptop pos terisi daya baterai penuh dan terhubung ke jaringan lokal/offline.
  - [PM] Final check semua kebutuhan (hadiah, sertifikat, konsumsi).
- **H-1:**
  - [IT] Setup laptop di lokasi acara. Uji coba audio dan timer.
  - [All] Istirahat cukup. Siap untuk H-Day.

### 📌 Fase 4: Hari H (Execution Day)
**Tujuan:** Eksekusi lancar, dokumentasi lengkap, dan penilaian akurat.
- **Pagi (07.00 - 08.00):**
  - [IT] On-site setup: Nyalakan laptop, buka `index.html` di tiap pos, set fullscreen.
  - [Logistics] Sembunyikan kertas petunjuk fisik di 4 pos.
- **Sesi Studi Kasus (Sesuai Jadwal):**
  - [Panitia Pos] Menjalankan alur 10 menit per pos (5 menit eksplorasi + 5 menit jawab & submit).
  - [Panitia Pos] Menuliskan kode unik yang muncul di web pada lembar jawaban kertas peserta.
  - [IT/Admin] Memantau leaderboard real-time di pos pusat.
- **Sesi Akhir:**
  - [Admin] Mengumpulkan semua lembar jawaban kertas dari 4 pos.
  - [Juri] Mencocokkan kode unik di kertas dengan data di web.
  - [Juri] Menginput skor tambahan untuk "Kelogisan Jawaban Kertas" (skala 1-5).
  - [PM] Mengumumkan pemenang berdasarkan total poin (Web + Kertas).

---

## 3. SOP & Flow Operasional

### 🔹 BAGIAN 1: FLOW UNTUK PANITIA POS (OPERATOR WEB)
1. **Persiapan (H-15 Menit):**
   - Buka laptop pos, jalankan web browser (Chrome/Edge), buka `index.html`.
   - Pilih Pos yang dijaga (Pos 1: Meta, Pos 2: Gemini, Pos 3: Copilot, Pos 4: Deepseek/Claude).
   - Pastikan lembar jawaban kertas dan alat tulis sudah tersedia.
   - Sembunyikan kertas petunjuk fisik di sekitar pos.
2. **Saat Peserta Tiba (Menit 0):**
   - Sambut kelompok, pilih nama kelompok di dropdown.
   - Tekan tombol **"▶ MULAI MISI"** → Timer 5 menit otomatis berjalan.
   - Web memunculkan animasi glitch: *"🚨 SERVER DOWN! Temukan petunjuk fisik di sekitar pos untuk memperbaiki sistem!"*
3. **Fase Eksplorasi (Menit 1-5):**
   - Arahkan peserta mencari kertas petunjuk yang disembunyikan.
   - Peserta mencatat temuan di buku catatan A5 mereka.
   - Pantau timer di web (kedip merah saat sisa 1 menit).
   - Pastikan peserta **tidak menggunakan HP**.
4. **Fase Penyelesaian (Menit 5-10):**
   - Tekan tombol **"SELESAI EKSPLORASI"** (atau otomatis saat timer habis) → Buka panel **Input Jawaban**.
   - Peserta menuliskan jawaban logika di lembar kertas dan menyampaikannya ke panitia.
   - Panitia menginput jawaban peserta di web.
   - Tekan tombol **"SUBMIT JAWABAN"**.
   - Web menampilkan animasi **"DATA TERKUNCI"** dan menghasilkan **KODE UNIK** (contoh: `META-P1-0922`).
   - Panitia menyalin Kode Unik tersebut ke pojok kanan atas lembar jawaban kertas peserta.
   - Ambil lembar jawaban kertas peserta untuk diarsipkan.
   - Tekan **"POS SELESAI"** → Kelompok dipersilakan rotasi ke pos berikutnya.
5. **Setelah Peserta Pergi:**
   - Sembunyikan kembali kertas petunjuk untuk kelompok berikutnya.
   - Reset form untuk menyambut kelompok baru.

### 🔹 BAGIAN 2: FLOW UNTUK PESERTA
1. Tiba di pos, duduk tertib, catat nama pos & kelompok di buku A5.
2. **Fase 1 (Menit 1-5):** Berpencar mencari kertas petunjuk fisik di sekitar pos tanpa menggunakan HP.
3. **Fase 2 (Menit 5-10):** Duduk kembali, berdiskusi menyusun jawaban logika, dan menuliskan jawaban di lembar kertas jawaban resmi.
4. Sampaikan jawaban kepada panitia pos agar diinput ke web.
5. Pastikan panitia mencantumkan **Kode Unik** resmi dari web pada lembar kertas jawaban.
6. Serahkan lembar jawaban ke panitia dan bersiap pindah ke pos berikutnya.

### 🔹 BAGIAN 3: FLOW UNTUK ADMIN & PENILAI PUSAT
1. Buka halaman **Admin & Leaderboard** di laptop pos pusat.
2. Pantau pergerakan poin tiap kelompok secara real-time.
3. Kumpulkan lembar jawaban kertas dari seluruh pos di akhir sesi.
4. Cocokkan Kode Unik di kertas dengan rekaman data digital di web admin.
5. Berikan nilai **Kelogisan Jawaban Kertas (Skala 1-5)** berdasarkan rubrik:
   - **5:** Logika sangat mendalam, runtut, dan memiliki argumen kuat.
   - **4:** Logika jelas dan alasan cukup memadai.
   - **3:** Logika standar / cukup menjawab pertanyaan.
   - **2:** Logika kurang jelas atau ada lompatan nalar.
   - **1:** Jawaban tidak logis / asal-asalan.
6. Masukkan skor tambahan ke web admin -> Total skor langsung terupdate otomatis.
7. Unduh file rekapitulasi via tombol **"📥 Ekspor Data ke CSV/Excel"**.
8. Tampilkan leaderboard final dan umumkan pemenang.

---

## 4. Format Kode Unik
Format kode unik dibuat acak-terstruktur untuk mencegah duplikasi dan pemalsuan:
```
[NAMA_KELOMPOK]-[KODE_POS]-[WAKTU_SUBMIT]-[CHECKSUM]
Contoh: META-P1-0922-K89
Contoh: GEMINI-P2-0935-F42
Contoh: COPILOT-P3-0948-B17
```
