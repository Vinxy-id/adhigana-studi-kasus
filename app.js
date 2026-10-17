/**
 * ADHIGANA 2026 - DIGITAL FRONTIER: THE LOGIC ESCAPE
 * Web Minigame Studi Kasus & Operator Console
 * Includes: Client-side Routing (adhigana/pos1 s/d pos4), Cinematic Intro Cutscene per Pos,
 * Glitch Alert, Dynamic Form Input, Unique Code Generator, Live Leaderboard & CSV Export.
 * 100% Offline Ready (Pure Vanilla JS).
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. DATA MASTER & POS CONFIGURATION
  // ==========================================================================

  const TEAMS = [
    { id: "meta", name: "Meta", ip: "Tania", color: "#b05cfb", label: "[TEAM META]" },
    { id: "gemini", name: "Gemini", ip: "Dina", color: "#00ff88", label: "[TEAM GEMINI]" },
    { id: "copilot", name: "Copilot", ip: "Melly", color: "#fcee0a", label: "[TEAM COPILOT]" },
    { id: "deepseek", name: "Deepseek", ip: "Daffa", color: "#2cd4e0", label: "[TEAM DEEPSEEK]" },
    { id: "claude", name: "Claude", ip: "Sonya", color: "#ff758f", label: "[TEAM CLAUDE]" }
  ];

  const POS_CONFIG = {
    1: {
      route: "adhigana/pos1",
      tag: "POS 01 / 04",
      title: "Pos 1: Investigasi Email Palsu (Cyber Phishing)",
      subTitle: "CYBERSECURITY & DIGITAL FORENSICS",
      objective: "Identifikasi serangan phishing dan temukan celah keamanan siber kampus.",
      threat: "CRITICAL BREACH // MALICIOUS EMAIL ATTACK",
      story: "Insiden keamanan siber melanda kampus! Salah satu mahasiswa baru menerima pesan darurat. Sebagai agen penyelidik digital, teliti 3 email di terminal investigasi dan temukan ancaman siber yang sedang berlangsung!",
      physicalClue: "Sembunyikan Amplop Merah di bawah meja panitia pos bertuliskan: 'CATATAN FORENSIK: Domain resmi lembaga pemerintah selalu berakhiran .go.id dan kampus berakhiran .ac.id. Waspadai domain bebas berakhiran .xyz!'",
      questions: [
        {
          id: "p1_q1",
          no: 1,
          points: 50,
          text: "Berdasarkan 3 email di terminal investigasi, email manakah yang merupakan serangan <strong>Phishing / Penipuan</strong>?",
          options: [
            { key: "A", text: "Email 1: Bagian Akademik UBHI (Jadwal Pengisian KRS)", score: 0 },
            { key: "B", text: "Email 2: [URGENT] Kemendikbud Pusat (Beasiswa 10 Juta Segera Hangus)", score: 50, isCorrect: true },
            { key: "C", text: "Email 3: Perpustakaan UBHI (Kartu Anggota Digital)", score: 10 },
            { key: "D", text: "Email 2 dan Email 3 sekaligus karena keduanya meminta tindakan dari mahasiswa", score: 25 }
          ]
        },
        {
          id: "p1_q2",
          no: 2,
          points: 50,
          text: "Apa <strong>kejanggalan logis paling fatal</strong> yang membuktikan email tersebut adalah penipuan siber?",
          options: [
            { key: "A", text: "Tautan (link) formulir mengarah ke domain pihak ketiga tidak resmi (beasiswa-cair-10jt.xyz/login-akun) dan bukan portal kampus", score: 30 },
            { key: "B", text: "Domain pengirim mencurigakan (xyz-domain.com), tautan eksternal pencuri kredensial, dan manipulasi batas 59 menit", score: 50, isCorrect: true },
            { key: "C", text: "Penggunaan tanda [URGENT] dan ancaman hangus 59 menit untuk memicu kepanikan mahasiswa (urgency trigger)", score: 15 },
            { key: "D", text: "Email dikirimkan pada malam hari di luar jam perkuliahan serta tidak menyertakan foto cap stempel basah rektor", score: 0 }
          ]
        }
      ],
      kunci: `
        <strong>Kunci Jawaban & Rubrik Penilaian Pos 1 (100 Poin):</strong><br>
        • <strong>Soal 1 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Tepat sasaran mengidentifikasi Email 2 sebagai vektor serangan phishing beasiswa palsu.<br>
          - <em>Opsi D (25 Pts):</em> Mengenali Email 2 berbahaya namun keliru mencurigai Email 3 resmi perpustakaan.<br>
          - <em>Opsi C (10 Pts):</em> Analisis dangkal karena mencurigai email resmi perpustakaan.<br>
          - <em>Opsi A (0 Pts):</em> Salah, email KRS akademik adalah komunikasi resmi institusi kampus (.ac.id).<br><br>
        • <strong>Soal 2 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Analisis holistik 3 pilar: spoofing domain, link pencuri kredensial, dan manipulasi psikologi panik.<br>
          - <em>Opsi A (30 Pts):</em> Bukti forensik teknis URL tepat, namun belum menganalisis teknik rekayasa sosial.<br>
          - <em>Opsi C (15 Pts):</em> Mengenali manipulasi kepanikan psikologis, namun mengabaikan bukti teknis domain/URL.<br>
          - <em>Opsi D (0 Pts):</em> Miskonsepsi non-teknis (email resmi digital modern tidak memakai stempel basah fisik).<br><br>
        • <strong>Mitigasi Darurat:</strong> Segera ganti password SIAKAD, aktifkan 2FA, hubungi helpdesk IT kampus, dan tandai email sebagai phishing.
      `,
      tutorial: {
        posTag: "POS 01 // INVESTIGASI EMAIL PALSU",
        posTitle: "PANDUAN MISI: INVESTIGASI EMAIL PALSU",
        steps: [
          {
            step: 1,
            title: "CRT 1 (KIRI): TERMINAL INVESTIGASI EMAIL",
            body: `Di monitor kiri, terdapat <strong>3 kotak masuk email</strong> mahasiswa. Tugas kelompokmu adalah mengklik dan membaca detail setiap email secara forensik:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Periksa <strong>Alamat Domain Pengirim</strong> (apakah domain resmi kampus <code>.ac.id</code> / pemerintah <code>.go.id</code>, atau domain bebas mencurigakan seperti <code>.xyz</code>).</li>
              <li>Teliti <strong>Tautan / Link Formulir</strong> yang dilampirkan (arahkan perhatian pada tujuan URL aslinya).</li>
              <li>Waspadai <strong>Trik Urgensi Palsu</strong> (ancaman waktu hangus untuk memicu kepanikan mahasiswa).</li>
            </ul>`,
            callout: "💡 <strong>Tips Forensik:</strong> Jangan terburu-buru! Klik Email 1, Email 2, dan Email 3 untuk membandingkan mana komunikasi resmi dan mana serangan penipuan siber.",
            calloutType: "tip-cyan"
          },
          {
            step: 2,
            title: "CRT 2 (KANAN): 2 SOAL PILIHAN GANDA (100 POIN)",
            body: `Di monitor kanan, terdapat <strong>2 Pertanyaan Kritis</strong> dengan sistem skor berbobot:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li><strong>Soal 1 (Max 50 Poin):</strong> Mengidentifikasi email mana yang merupakan vektor penipuan.</li>
              <li><strong>Soal 2 (Max 50 Poin):</strong> Menganalisis kejanggalan logis paling fatal pada email tersebut.</li>
              <li>Setiap pilihan jawaban memiliki bobot nilai berbeda (<strong>0 s/d 50 Poin</strong>) tergantung kedalaman analisis kelompok.</li>
            </ul>`,
            callout: "⚠️ <strong>Penting:</strong> Jawaban tidak dapat diubah setelah tombol <code>[KIRIM JAWABAN AKHIR]</code> diklik. Diskusikan dan pastikan mufakat bersama tim!",
            calloutType: "tip-yellow"
          },
          {
            step: 3,
            title: "KODE UNIK VERIFIKASI & DIGITAL SYNC",
            body: `Setelah mengklik tombol submit:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Sistem akan menerbitkan <strong>Kode Unik Verifikasi</strong> (contoh: <code>META-P1-9F2B</code>).</li>
              <li>Skor resmi <strong>100 Poin</strong> langsung tersimpan di sistem terminal pos.</li>
              <li>Nilai otomatis tersinkronisasi realtime ke <strong>Live Leaderboard Pusat</strong> (<code>index.html</code>).</li>
            </ul>`,
            callout: "🚀 <strong>Waktu Misi: 2 MENIT (120 Detik)</strong>. Timer saat ini dalam posisi STANDBY (belum berkurang). Klik tombol di bawah ketika tim sudah siap!",
            calloutType: "tip-green"
          }
        ]
      }
    },
    2: {
      route: "adhigana/pos2",
      tag: "POS 02 / 04",
      title: "Pos 2: Robot Barista Glitch (Logika Algoritma Dasar)",
      subTitle: "ALGORITHMIC THINKING & SEQUENCE DEBUGGING",
      objective: "Perbaiki urutan instruksi robot peracik kopi yang terbalik agar tidak tumpah.",
      threat: "SYSTEM DEADLOCK // HARDWARE FAULT",
      story: "Robot pembuat kopi di kantin mengalami kekacauan alur instruksi! Robot menuangkan kopi ke lantai dan mesinnya overheating. Bantu perbaiki urutan algoritma robot sebelum pelanggan komplain!",
      physicalClue: "Sembunyikan Kertas Biru di balik sandaran kursi pos bertuliskan: 'LOGIKA SEKUANSI: Penampung (cangkir) harus selalu siap di tatakan sebelum zat cair atau bubuk dituangkan!'",
      questions: [
        {
          id: "p2_q1",
          no: 1,
          points: 50,
          text: "Berdasarkan uji simulasi logika robot, <strong>urutan eksekusi langkah yang paling benar dan runtut</strong> dari awal hingga akhir adalah:",
          options: [
            { key: "A", text: "Taruh cangkir di tatakan → Masukkan bubuk kopi → Tuangkan air panas → Aduk rata → Sajikan → Nyalakan pemanas air", score: 15 },
            { key: "B", text: "Nyalakan pemanas air → Taruh cangkir di tatakan → Masukkan bubuk kopi → Tuangkan air panas mendidih → Aduk hingga rata → Sajikan ke pelanggan", score: 50, isCorrect: true },
            { key: "C", text: "Tuangkan air panas mendidih → Masukkan bubuk kopi → Taruh cangkir di tatakan → Nyalakan pemanas → Aduk → Sajikan", score: 0 },
            { key: "D", text: "Taruh cangkir di tatakan → Nyalakan pemanas air → Masukkan bubuk kopi → Tuangkan air panas mendidih → Aduk hingga rata → Sajikan ke pelanggan", score: 30 }
          ]
        },
        {
          id: "p2_q2",
          no: 2,
          points: 50,
          text: "Secara logika komputasi sekuensial, mengapa langkah <em>'Taruh cangkir di tatakan'</em> <strong>HARUS</strong> dieksekusi sebelum menuangkan air atau bubuk?",
          options: [
            { key: "A", text: "Sebagai inisialisasi hardware dan validasi kesiapan perangkat output fisik sebelum instruksi penuangan cairan dieksekusi", score: 30 },
            { key: "B", text: "Karena wadah penampung fisik harus tersedia terlebih dahulu agar bahan tidak tumpah ke meja dan sistem aktuator tidak error/deadlock", score: 50, isCorrect: true },
            { key: "C", text: "Hanya sekadar formalitas estetika penyajian di kafe agar terlihat rapi oleh pelanggan", score: 0 },
            { key: "D", text: "Agar sensor timbangan dan suhu robot dapat melakukan kalibrasi berat kosong (tare weight) sebelum bahan dimasukkan", score: 15 }
          ]
        }
      ],
      kunci: `
        <strong>Kunci Jawaban & Rubrik Penilaian Pos 2 (100 Poin):</strong><br>
        • <strong>Soal 1 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Urutan optimal & efisien: Pemanas di awal (1) → Cangkir (2) → Bubuk (3) → Air (4) → Aduk (5) → Sajikan (6).<br>
          - <em>Opsi D (30 Pts):</em> Urutan aman & berfungsi, cangkir siap di tatakan, hanya pemanas air dinyalakan setelah cangkir siap.<br>
          - <em>Opsi A (15 Pts):</em> Cangkir aman, namun kopi dingin karena pemanas baru dinyalakan di akhir setelah disajikan.<br>
          - <em>Opsi C (0 Pts):</em> Fatal! Air dituangkan sebelum cangkir ditaruh sehingga kopi tumpah ke lantai / mesin rusak.<br><br>
        • <strong>Soal 2 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Mengaitkan logika sekuensial komputasi dengan realitas fisik hardware (penampung output harus siap sebelum penuangan).<br>
          - <em>Opsi A (30 Pts):</em> Analisis inisialisasi hardware & validasi output sangat logis, namun belum menyebut pencegahan tumpah/deadlock.<br>
          - <em>Opsi D (15 Pts):</em> Analisis fungsi sensorik (tare weight) masuk akal secara fitur robotika, namun periferal.<br>
          - <em>Opsi C (0 Pts):</em> Miskonsepsi non-teknis yang mengabaikan keselamatan operasional mesin.<br><br>
        • <strong>Esensi Informatika:</strong> Algoritma sekuensial bersifat deterministik; urutan instruksi menentukan output sistem.
      `,
      tutorial: {
        posTag: "POS 02 // ROBOT BARISTA GLITCH",
        posTitle: "PANDUAN MISI: DEBUGGING ALGORITMA ROBOT",
        steps: [
          {
            step: 1,
            title: "CRT 1 (KIRI): SIMULATOR LOGIKA ALGORITMA ROBOT",
            body: `Di monitor kiri, urutan instruksi robot peracik kopi mengalami kesalahan logika sehingga kopi tumpah ke lantai:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Gunakan tombol panah <strong>[▲ Naik]</strong> dan <strong>[▼ Turun]</strong> pada kartu langkah untuk menyusun ulang 6 instruksi secara sekuensial.</li>
              <li>Klik tombol <strong>[UJI SIMULASI LOGIKA ROBOT]</strong> untuk menjalankan uji coba aktuator robot.</li>
              <li>Perhatikan avatar robot dan log terminal: apakah robot berhasil menyajikan kopi panas dengan sukses, atau mengalami tabrakan/tumpah!</li>
            </ul>`,
            callout: "💡 <strong>Prinsip Komputasi:</strong> Dalam algoritma sekuensial, urutan menentukan hasil. Wadah penampung fisik (cangkir) harus selalu siap sebelum zat cair dituangkan!",
            calloutType: "tip-cyan"
          },
          {
            step: 2,
            title: "CRT 2 (KANAN): 2 SOAL PILIHAN GANDA (100 POIN)",
            body: `Di monitor kanan, selesaikan <strong>2 Pertanyaan Logika Algoritma</strong>:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li><strong>Soal 1 (Max 50 Poin):</strong> Menentukan susunan eksekusi instruksi paling runtut, efisien, dan benar.</li>
              <li><strong>Soal 2 (Max 50 Poin):</strong> Menjelaskan secara komputasional mengapa inisialisasi penampung fisik (cangkir) wajib dilakukan di awal.</li>
              <li>Pilihan jawaban berbobot (0, 15, 30, 50 Poin) menguji pemahaman konsep sequence vs trial-and-error.</li>
            </ul>`,
            callout: "⚠️ <strong>Penting:</strong> Pastikan seluruh anggota kelompok sepakat sebelum mengklik <code>[KIRIM JAWABAN AKHIR]</code>.",
            calloutType: "tip-yellow"
          },
          {
            step: 3,
            title: "KODE UNIK VERIFIKASI & DIGITAL SYNC",
            body: `Setelah submit di monitor kanan:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Sistem akan mengunci jawaban dan memunculkan <strong>Kode Unik Verifikasi</strong> (contoh: <code>GEMINI-P2-4C1A</code>).</li>
              <li>Skor resmi <strong>100 Poin</strong> langsung tersimpan di sistem terminal pos.</li>
              <li>Nilai otomatis tersinkronisasi realtime ke <strong>Live Leaderboard Pusat</strong>.</li>
            </ul>`,
            callout: "🚀 <strong>Waktu Misi: 2 MENIT (120 Detik)</strong>. Timer saat ini STANDBY. Tekan tombol di bawah untuk memulai hitung mundur!",
            calloutType: "tip-green"
          }
        ]
      }
    },
    3: {
      route: "adhigana/pos3",
      tag: "POS 03 / 04",
      title: "Pos 3: Brankas Dokumen Hilang (Logika Pola & Eliminasi)",
      subTitle: "DATA PATTERN RECOGNITION & ELIMINATION",
      objective: "Saring 8 brankas digital menggunakan 3 petunjuk logika untuk menemukan arsip rahasia.",
      threat: "DATA ISOLATION // RECOVERY OPERATION",
      story: "Sebuah file arsip penting kampus tersimpan di salah satu dari 8 brankas digital. Gunakan 3 petunjuk logika eliminasi untuk menyaring brankas dan menemukan berkas asli!",
      physicalClue: "Sembunyikan 3 Kertas Petunjuk di sudut area pos: Clue 1 (Bukan Genap), Clue 2 (Ukuran > 50MB), Clue 3 (Hari Akhir Pekan).",
      questions: [
        {
          id: "p3_q1",
          no: 1,
          points: 50,
          text: "Gunakan 3 petunjuk eliminasi pada konsol matrix. <strong>Brankas digital manakah yang menyimpan dokumen rahasia?</strong>",
          options: [
            { key: "A", text: "Vault 01 (15 MB — Akses Hari Senin)", score: 0 },
            { key: "B", text: "Vault 02 (60 MB — Akses Hari Minggu)", score: 25 },
            { key: "C", text: "Vault 03 (85 MB — Akses Hari Minggu)", score: 50, isCorrect: true },
            { key: "D", text: "Vault 07 (95 MB — Akses Hari Kamis)", score: 25 }
          ]
        },
        {
          id: "p3_q2",
          no: 2,
          points: 50,
          text: "Mengapa <strong>Vault 07</strong> dinyatakan GUGUR dari pencarian meskipun ukurannya 95 MB (> 50 MB) dan nomornya ganjil?",
          options: [
            { key: "A", text: "Karena gagal memenuhi kondisi Petunjuk 3 (aturan waktu akses berkas), meskipun telah memenuhi Petunjuk 1 dan Petunjuk 2", score: 30 },
            { key: "B", text: "Karena hari aksesnya adalah hari Kamis (hari kerja), sedangkan Petunjuk 3 secara tegas mensyaratkan hari akhir pekan (Sabtu atau Minggu)", score: 50, isCorrect: true },
            { key: "C", text: "Karena nomor brankas 07 melebihi kapasitas indeks prioritas sistem penyimpanan kampus", score: 10 },
            { key: "D", text: "Karena brankas tersebut dibuat oleh pengguna yang tidak dikenal (anonymous user)", score: 0 }
          ]
        }
      ],
      kunci: `
        <strong>Kunci Jawaban & Rubrik Penilaian Pos 3 (100 Poin):</strong><br>
        • <strong>Soal 1 (Max 50 Poin):</strong><br>
          - <em>Opsi C (50 Pts):</em> Sempurna! Memenuhi ke-3 kriteria: Nomor Ganjil (03), Ukuran 85 MB (> 50 MB), Hari Minggu (Akhir Pekan).<br>
          - <em>Opsi B (25 Pts):</em> Lolos 2 syarat (>50MB & Minggu), namun tereliminasi karena nomor genap (Vault 02).<br>
          - <em>Opsi D (25 Pts):</em> Lolos 2 syarat (Ganjil & 95MB), namun tereliminasi karena hari Kamis bukan akhir pekan.<br>
          - <em>Opsi A (0 Pts):</em> Gagal pada 2 syarat (ukuran hanya 15 MB dan hari Senin adalah hari kerja).<br><br>
        • <strong>Soal 2 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Evaluasi logika proposisi AND lengkap dengan pembuktian hari Kamis vs akhir pekan secara presisi.<br>
          - <em>Opsi A (30 Pts):</em> Memahami prinsip eliminasi multi-kondisi dengan baik, walau tanpa merinci hari Kamis.<br>
          - <em>Opsi C (10 Pts):</em> Menebak alasan indeks fiktif yang tidak ada dalam basis aturan eliminasi.<br>
          - <em>Opsi D (0 Pts):</em> Tidak relevan dengan tabel metadata brankas.<br><br>
        • <strong>Alur Eliminasi Bertahap:</strong><br>
          - Clue 1 (Bukan Genap): Gugur Vault 02, 04, 06, 08.<br>
          - Clue 2 (> 50 MB): Gugur Vault 01 (15MB) & 05 (35MB).<br>
          - Clue 3 (Akhir Pekan): Gugur Vault 07 (Kamis). Sisa satu-satunya: <strong>Vault 03!</strong>
      `,
      tutorial: {
        posTag: "POS 03 // BRANKAS DOKUMEN HILANG",
        posTitle: "PANDUAN MISI: BRANKAS DATA HILANG",
        steps: [
          {
            step: 1,
            title: "CRT 1 (KIRI): MATRIKS 8 BRANKAS & 3 CLUE ELIMINASI",
            body: `Di monitor kiri, terdapat <strong>8 Brankas Digital</strong> penyimpanan arsip kampus:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Terapkan <strong>3 Petunjuk Logika Proposisi</strong>:
                <br>• <em>Petunjuk 1:</em> Nomor brankas BUKAN bilangan genap.
                <br>• <em>Petunjuk 2:</em> Ukuran arsip lebih dari 50 MB (&gt; 50 MB).
                <br>• <em>Petunjuk 3:</em> Berkas terakhir diakses pada hari akhir pekan (Sabtu / Minggu).
              </li>
              <li>Klik kartu brankas pada layar untuk <strong>mencoret / mengeliminasi</strong> brankas yang gugur secara interaktif.</li>
            </ul>`,
            callout: "💡 <strong>Tips Eliminasi:</strong> Saring brankas secara bertahap. Brankas yang memenuhi KETIGA syarat sekaligus adalah brankas dokumen rahasia yang asli!",
            calloutType: "tip-cyan"
          },
          {
            step: 2,
            title: "CRT 2 (KANAN): 2 SOAL PILIHAN GANDA (100 POIN)",
            body: `Di monitor kanan, jawab <strong>2 Pertanyaan Analisis Data</strong>:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li><strong>Soal 1 (Max 50 Poin):</strong> Memilih nomor brankas yang menyimpan dokumen rahasia.</li>
              <li><strong>Soal 2 (Max 50 Poin):</strong> Menganalisis alasan logis mengapa salah satu brankas jebakan (Vault 07) gugur dari seleksi.</li>
              <li>Poin berbobot: Opsi dengan penalaran logika multi-kondisi paling presisi mendapat nilai maksimal 50 Poin.</li>
            </ul>`,
            callout: "⚠️ <strong>Penting:</strong> Verifikasi nomor brankas dan metadata ukuran serta harinya sebelum mengklik <code>[KIRIM JAWABAN AKHIR]</code>.",
            calloutType: "tip-yellow"
          },
          {
            step: 3,
            title: "KODE UNIK VERIFIKASI & DIGITAL SYNC",
            body: `Setelah submit di monitor kanan:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Sistem akan menerbitkan <strong>Kode Unik Verifikasi</strong> (contoh: <code>COPILOT-P3-7E59</code>).</li>
              <li>Skor resmi <strong>100 Poin</strong> langsung tersimpan di sistem terminal pos.</li>
              <li>Nilai otomatis tersinkronisasi realtime ke <strong>Live Leaderboard Pusat</strong>.</li>
            </ul>`,
            callout: "🚀 <strong>Waktu Misi: 2 MENIT (120 Detik)</strong>. Timer saat ini STANDBY. Tekan tombol di bawah untuk mulai beraksi!",
            calloutType: "tip-green"
          }
        ]
      }
    },
    4: {
      route: "adhigana/pos4",
      tag: "POS 04 / 04",
      title: "Pos 4: Dilema Seleksi AI (Etika Teknologi & Kritis)",
      subTitle: "ARTIFICIAL INTELLIGENCE & CRITICAL REASONING",
      objective: "Evaluasi kelemahan algoritma parser AI yang mendiskualifikasi kandidat mahasiswa berprestasi.",
      threat: "ALGORITHMIC BIAS // ETHICAL PARADOX",
      story: "Sistem seleksi berbasis kecerdasan buatan (AI) digunakan untuk memilih penerima beasiswa prestasi. Amati log sistem di bawah dan temukan masalah krusial yang terjadi pada kandidat terbaik!",
      physicalClue: "Sembunyikan Kertas Kuning di dekat dinding pos bertuliskan: 'ETIKA TEKNOLOGI: Mesin otomatis hanya sepintar aturan kode yang dibuat oleh programmernya. Tanpa tinjauan akal budi manusia, otomasi bisa menjadi diskriminatif.'",
      questions: [
        {
          id: "p4_q1",
          no: 1,
          points: 50,
          text: "Mengapa sistem AI mendiskualifikasi Budi Santoso padahal memiliki IPK tertinggi (3.92) dan Juara 1 Hackathon?",
          options: [
            { key: "A", text: "Terjadi kegagalan ekstraksi dokumen otomatis pada sistem sehingga kualifikasi prestasi Budi tidak masuk ke penghitungan AI", score: 30 },
            { key: "B", text: "Parser regex sistem hanya diprogram mengekstrak format berkas .PDF (Error 415), sehingga berkas Budi (.DOCX) gagal diekstrak dan diskor 0", score: 50, isCorrect: true },
            { key: "C", text: "Sistem AI mengira berkas Budi tidak lengkap karena tidak memenuhi parameter form otomatis pada database", score: 15 },
            { key: "D", text: "Karena kuota penerima beasiswa kampus sudah habis terpenuhi sebelum berkas Budi diproses", score: 0 }
          ]
        },
        {
          id: "p4_q2",
          no: 2,
          points: 50,
          text: "Dari perspektif etika AI dan rekayasa perangkat lunak, apa <strong>solusi paling tepat & komprehensif</strong> untuk mencegah kegagalan seleksi semacam ini?",
          options: [
            { key: "A", text: "Membatalkan seluruh sistem seleksi digital dan mengundi nama kandidat beasiswa secara acak", score: 0 },
            { key: "B", text: "Menerapkan konversi format berkas otomatis di backend, fasilitas sanggah/banding dokumen bagi pelamar, dan pengawasan manusia (Human-in-the-Loop)", score: 50, isCorrect: true },
            { key: "C", text: "Menyediakan fasilitas banding dokumen dan mewajibkan verifikasi manual oleh panitia manusia untuk semua berkas yang terdeteksi error", score: 30 },
            { key: "D", text: "Menambahkan validasi format ketat di formulir frontend agar mahasiswa hanya dapat mengunggah file bertipe .PDF", score: 15 }
          ]
        }
      ],
      kunci: `
        <strong>Kunci Jawaban & Rubrik Penilaian Pos 4 (100 Poin):</strong><br>
        • <strong>Soal 1 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Menemukan akar masalah teknis presisi pada log sistem (Parser Error 415: ketidakcocokan ekstensi .DOCX vs .PDF).<br>
          - <em>Opsi A (30 Pts):</em> Mengidentifikasi modul ekstraksi yang gagal, namun belum merujuk akar teknis ekstensi berkas .DOCX.<br>
          - <em>Opsi C (15 Pts):</em> Analisis gejala permukaan tanpa membaca detail pesan error parser regex.<br>
          - <em>Opsi D (0 Pts):</em> Distractor tanpa dasar log/data sistem.<br><br>
        • <strong>Soal 2 (Max 50 Poin):</strong><br>
          - <em>Opsi B (50 Pts):</em> Solusi holistik: perbaikan software engineering (multi-format converter), fasilitas banding, dan etika Human-in-the-Loop.<br>
          - <em>Opsi C (30 Pts):</em> Prinsip Human-in-the-Loop & banding sangat adil, namun belum memperbaiki pipeline konversi otomatis sistem.<br>
          - <em>Opsi D (15 Pts):</em> Solusi cepat di frontend, namun kaku dan masih rentan mendiskualifikasi pelamar awam.<br>
          - <em>Opsi A (0 Pts):</em> Solusi destruktif yang membuang seluruh efisiensi teknologi.<br><br>
        • <strong>Pelajaran Etika:</strong> Otomatisasi AI tidak boleh berjalan tanpa supervisi manusia (Human-in-the-Loop) saat menentukan nasib manusia.
      `,
      tutorial: {
        posTag: "POS 04 // DILEMA SELEKSI AI",
        posTitle: "PANDUAN MISI: DILEMA SELEKSI AI",
        steps: [
          {
            step: 1,
            title: "CRT 1 (KIRI): SIMULATOR PARSER REGEX SELEKSI AI",
            body: `Di monitor kiri, terdapat sistem otomatisasi seleksi beasiswa berbasis AI:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Amati tabel 3 kandidat: Budi Santoso memiliki IPK 3.92 &amp; Juara 1 Hackathon, namun berstatus <strong>DISKUALIFIKASI</strong>.</li>
              <li>Klik tombol <strong>[TEST PARSE BERKAS]</strong> atau tombol simulasi di bawah untuk menjalankan engine regex parser.</li>
              <li>Baca log terminal konsol AI untuk memahami penyebab teknis: mengapa ekstensi file <code>.docx</code> ditolak error 415 oleh regex yang kaku.</li>
            </ul>`,
            callout: "💡 <strong>Etika Teknologi:</strong> AI hanya menjalankan aturan algoritma yang ditulis pembuatnya. Kesalahan sekecil regex dapat berdampak fatal dan diskriminatif bagi manusia!",
            calloutType: "tip-cyan"
          },
          {
            step: 2,
            title: "CRT 2 (KANAN): 2 SOAL PILIHAN GANDA (100 POIN)",
            body: `Di monitor kanan, pecahkan <strong>2 Pertanyaan Etika &amp; Software Engineering</strong>:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li><strong>Soal 1 (Max 50 Poin):</strong> Menganalisis penyebab teknis utama kegagalan seleksi berkas Budi Santoso.</li>
              <li><strong>Soal 2 (Max 50 Poin):</strong> Merumuskan solusi rekayasa &amp; etika komprehensif (fasilitas banding, konversi berkas otomatis, dan prinsip <em>Human-in-the-Loop</em>).</li>
              <li>Opsi dengan penalaran rekayasa perangkat lunak dan etika paling utuh mendapat 50 Poin.</li>
            </ul>`,
            callout: "⚠️ <strong>Penting:</strong> Diskusikan bersama tim solusi terbaik sebelum mengklik <code>[KIRIM JAWABAN AKHIR]</code>.",
            calloutType: "tip-yellow"
          },
          {
            step: 3,
            title: "KODE UNIK VERIFIKASI & DIGITAL SYNC",
            body: `Setelah submit di monitor kanan:
            <ul style="margin: 8px 0 0 16px; line-height: 1.6;">
              <li>Sistem akan mengunci jawaban dan mencetak <strong>Kode Unik Verifikasi</strong> (contoh: <code>DEEPSEEK-P4-3D8E</code>).</li>
              <li>Skor resmi <strong>100 Poin</strong> langsung tersimpan di sistem terminal pos.</li>
              <li>Nilai otomatis tersinkronisasi realtime ke <strong>Live Leaderboard Pusat</strong>.</li>
            </ul>`,
            callout: "🚀 <strong>Waktu Misi: 2 MENIT (120 Detik)</strong>. Timer saat ini STANDBY. Tekan tombol di bawah untuk mulai beraksi!",
            calloutType: "tip-green"
          }
        ]
      }
    }
  };

  const EMAILS_DATA = [
    {
      id: 1,
      sender: "Bagian Akademik <akademik@ubhi.ac.id>",
      subject: "Jadwal Pengisian KRS Semester Ganjil 2025/2026",
      security: "TERVERIFIKASI (Domain Resmi .ac.id)",
      securityColor: "var(--pixel-green)",
      body: `Yth. Mahasiswa Baru Prodi Informatika,\n\nDiberitahukan bahwa pengisian Kartu Rencana Studi (KRS) akan dibuka mulai tanggal 20 Oktober 2026 melalui portal resmi kampus SIAKAD.\n\nHarap berkonsultasi dengan Dosen Pembimbing Akademik masing-masing sebelum menyetujui mata kuliah.\n\nSalam hangat,\nBiro Administrasi Akademik UBHI`,
      isPhishing: false
    },
    {
      id: 2,
      sender: "[URGENT] KEMENDIKBUD PUSAT <beasiswa-ubhi-pasti-cair@xyz-domain.com>",
      subject: "PENTING: Dana Beasiswa Rp 10 Juta Segera Hangus!",
      security: "[UNVERIFIED] Domain Mencurigakan",
      securityColor: "var(--mecha-red-bright)",
      body: `SELAMAT KEPADA MAHASISWA BARU!\n\nAnda terpilih menerima BANTUAN BEASISWA DIGITAL FRONTIER KEMENDIKBUD sebesar Rp 10.000.000 (Sepuluh Juta Rupiah).\n\nPERHATIAN: Anda wajib mengklaim dana beasiswa ini dalam kurun waktu 59 MENIT sejak email ini diterima. Jika tidak diklaim sekarang, dana Anda akan dialihkan ke mahasiswa lain!\n\nKlik tombol tautan darurat di bawah ini dan masukkan username serta password akun kampus Anda untuk validasi pencairan dana ke rekening!`,
      isPhishing: true
    },
    {
      id: 3,
      sender: "Perpustakaan UBHI <perpustakaan@ubhi.ac.id>",
      subject: "Pemberitahuan Kartu Anggota Digital",
      security: "TERVERIFIKASI (Domain Resmi .ac.id)",
      securityColor: "var(--pixel-green)",
      body: `Halo Mahasiswa Baru,\n\nKartu anggota perpustakaan digital Anda sudah aktif. Anda dapat meminjam buku fisik di perpustakaan maupun membaca koleksi e-book melalui aplikasi e-library kampus.\n\nJam operasional perpustakaan: Senin - Jumat (08.00 - 16.00 WIB).\n\nSalam literasi,\nUPT Perpustakaan Universitas Bhinneka PGRI`,
      isPhishing: false
    }
  ];

  const INITIAL_STEPS = [
    { id: 1, text: "Tuangkan air panas mendidih" },
    { id: 2, text: "Sajikan cangkir kopi ke pelanggan" },
    { id: 3, text: "Nyalakan pemanas air" },
    { id: 4, text: "Masukkan bubuk kopi ke cangkir" },
    { id: 5, text: "Taruh cangkir kosong di tatakan mesin" },
    { id: 6, text: "Aduk larutan kopi hingga rata" }
  ];

  const VAULTS_DATA = [
    { id: 1, label: "Vault 01", size: 15, day: "Senin", type: "Doc", desc: "Data Log v1" },
    { id: 2, label: "Vault 02", size: 60, day: "Minggu", type: "DB", desc: "Backup SQL" },
    { id: 3, label: "Vault 03", size: 85, day: "Minggu", type: "Secret", desc: "Arsip Utama" },
    { id: 4, label: "Vault 04", size: 120, day: "Sabtu", type: "Video", desc: "Rekaman CCTV" },
    { id: 5, label: "Vault 05", size: 35, day: "Sabtu", type: "Doc", desc: "Notula Rapat" },
    { id: 6, label: "Vault 06", size: 90, day: "Rabu", type: "DB", desc: "Arsip Keuangan" },
    { id: 7, label: "Vault 07", size: 95, day: "Kamis", type: "Secret", desc: "Data Karyawan" },
    { id: 8, label: "Vault 08", size: 40, day: "Selasa", type: "Doc", desc: "Draft Modul" }
  ];

  // ==========================================================================
  // 2. RETRO 8-BIT CHIPTUNE SYNTHESIZER
  // ==========================================================================
  class ChiptuneSynth {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
    }

    playTone(freq, type = "square", duration = 0.1, gainVal = 0.15) {
      if (!this.enabled) return;
      try {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }

    blip() {
      this.playTone(880, "square", 0.05, 0.12);
    }

    coinStart() {
      if (!this.enabled) return;
      this.playTone(987.77, "square", 0.08, 0.2);
      setTimeout(() => {
        this.playTone(1318.51, "square", 0.35, 0.25);
      }, 70);
    }

    tick() {
      this.playTone(440, "square", 0.04, 0.08);
    }

    tickDanger() {
      this.playTone(1046.50, "sawtooth", 0.1, 0.2);
    }

    phaseAlert() {
      if (!this.enabled) return;
      const sirenNotes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
      sirenNotes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, "square", 0.15, 0.2);
        }, idx * 100);
      });
    }

    victoryFanfare() {
      if (!this.enabled) return;
      const notes = [
        { f: 523.25, d: 0.1 },
        { f: 659.25, d: 0.1 },
        { f: 783.99, d: 0.1 },
        { f: 1046.50, d: 0.3 }
      ];
      notes.forEach((n, idx) => {
        setTimeout(() => {
          this.playTone(n.f, "square", n.d, 0.25);
        }, idx * 110);
      });
    }

    glitchBoom() {
      if (!this.enabled) return;
      this.playTone(150, "sawtooth", 0.2, 0.3);
      setTimeout(() => this.playTone(90, "sawtooth", 0.35, 0.35), 60);
    }

    fail() {
      if (!this.enabled) return;
      this.playTone(330, "sawtooth", 0.15, 0.25);
      setTimeout(() => this.playTone(220, "sawtooth", 0.35, 0.3), 120);
    }

    // Melodic cyber tick when hovering over cards in the deck
    cardHover(index = 0) {
      if (!this.enabled) return;
      try {
        this.init();
        const baseFreqs = [659.25, 783.99, 880.00, 1046.50, 1174.66];
        const freq = baseFreqs[index % baseFreqs.length] || 880;
        const now = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.18, now + 0.04);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } catch (e) {}
    }

    // Arcade Character-Select & Mecha Lock-In Sound Effect
    teamSelectLock(teamId = "meta", index = 0) {
      if (!this.enabled) return;
      try {
        this.init();
        const now = this.ctx.currentTime;

        // Signature chord per AI team
        const chordMap = {
          meta: [587.33, 739.99, 880.00, 1174.66],       // Meta: D Major ethereal synth
          gemini: [523.25, 659.25, 783.99, 1046.50],     // Gemini: C Major bright star
          copilot: [440.00, 554.37, 659.25, 880.00],     // Copilot: A Major cyber pilot
          deepseek: [392.00, 493.88, 587.33, 783.99],    // DeepSeek: G Major ocean sonar
          claude: [493.88, 622.25, 739.99, 987.77]       // Claude: B Major warm sunburst
        };
        const chord = chordMap[teamId] || [523.25, 659.25, 783.99, 1046.50];

        // 1. Rapid Cyber Power Chime Arpeggio
        chord.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const startT = now + idx * 0.045;
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, startT);

          gain.gain.setValueAtTime(0.001, startT);
          gain.gain.linearRampToValueAtTime(0.24, startT + 0.01);
          gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.22);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(startT);
          osc.stop(startT + 0.23);
        });

        // 2. Mechanical Sci-Fi Lock Sub-Drop (Deep Sine Punch)
        const subOsc = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        const subStart = now + 0.08;
        subOsc.type = "sine";
        subOsc.frequency.setValueAtTime(260, subStart);
        subOsc.frequency.exponentialRampToValueAtTime(60, subStart + 0.32);

        subGain.gain.setValueAtTime(0.001, subStart);
        subGain.gain.linearRampToValueAtTime(0.35, subStart + 0.02);
        subGain.gain.exponentialRampToValueAtTime(0.001, subStart + 0.38);

        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);
        subOsc.start(subStart);
        subOsc.stop(subStart + 0.40);

        // 3. High Shimmer Confirmation Sparkle
        const sparkOsc = this.ctx.createOscillator();
        const sparkGain = this.ctx.createGain();
        const sparkStart = now + 0.16;
        sparkOsc.type = "sine";
        sparkOsc.frequency.setValueAtTime(1760, sparkStart);
        sparkOsc.frequency.exponentialRampToValueAtTime(2349, sparkStart + 0.18);

        sparkGain.gain.setValueAtTime(0.001, sparkStart);
        sparkGain.gain.linearRampToValueAtTime(0.12, sparkStart + 0.02);
        sparkGain.gain.exponentialRampToValueAtTime(0.001, sparkStart + 0.25);

        sparkOsc.connect(sparkGain);
        sparkGain.connect(this.ctx.destination);
        sparkOsc.start(sparkStart);
        sparkOsc.stop(sparkStart + 0.26);
      } catch (e) {}
    }

    // Sci-Fi Mainframe Engine Launch Sound
    bootLaunch() {
      if (!this.enabled) return;
      try {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(330, now);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.22);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
      } catch (e) {}
    }
  }

  const sfx = new ChiptuneSynth();

  // Auto-unlock AudioContext on first touch/pointer/key event
  const unlockAudioContext = () => {
    sfx.init();
    window.removeEventListener("pointerdown", unlockAudioContext);
    window.removeEventListener("keydown", unlockAudioContext);
  };
  window.addEventListener("pointerdown", unlockAudioContext, { once: true });
  window.addEventListener("keydown", unlockAudioContext, { once: true });

  // ==========================================================================
  // 3. APPLICATION STATE & STORAGE
  // ==========================================================================
  let currentPos = 1;
  let currentTeam = "meta";
  let phase = 1; // 1: Active Mission, 2: Locked
  let secondsLeft = 120;
  const PHASE_DURATION = 120; // 2 Menit (120 detik)
  let timerInterval = null;
  let isRunning = false;
  let robotSteps = JSON.parse(JSON.stringify(INITIAL_STEPS));
  let eliminatedVaults = new Set();

  const ICON_ROBOT_CHIP = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 16.5V21m3.75-18v1.5m0 16.5V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 19.5Z" /></svg>`;
  const ICON_ROBOT_SUCCESS = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;
  const ICON_ROBOT_CRASH = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;
  const ICON_ARCHIVE = `<svg class="h-icon h-icon-sm" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`;

  // Pos 2 Robot Barista Elements
  const robotStepsList = document.getElementById("robotStepsList");
  const robotAvatar = document.getElementById("robotAvatar");
  const robotStatusText = document.getElementById("robotStatusText");
  const robotConsole = document.getElementById("robotConsole");
  const btnRunRobot = document.getElementById("btnRunRobot");
  const btnResetSteps = document.getElementById("btnResetSteps");

  // Pos 3 Digital Vaults Elements
  const vaultsGrid = document.getElementById("vaultsGrid");
  const btnResetVaults = document.getElementById("btnResetVaults");

  // MCQ State & DOM
  let userMcqAnswers = {};
  let isMcqSubmitted = false;
  const btnSubmitMcq = document.getElementById("btnSubmitMcq");
  const mcqResultBox = document.getElementById("mcqResultBox");
  const mcqScoreDisplay = document.getElementById("mcqScoreDisplay");
  const mcqCodeDisplay = document.getElementById("mcqCodeDisplay");
  const btnNextGroupRotation = document.getElementById("btnNextGroupRotation");

  // DOM Elements
  const teamSelect = document.getElementById("teamSelect");
  const teamBadge = document.getElementById("teamBadge");
  const btnAudioToggle = document.getElementById("btnAudioToggle");
  const audioIcon = document.getElementById("audioIcon");
  const btnFullscreen = document.getElementById("btnFullscreen");
  const btnOpenRubrik = document.getElementById("btnOpenRubrik");
  const btnCloseRubrik = document.getElementById("btnCloseRubrik");
  const rubrikModal = document.getElementById("rubrikModal");
  const btnOpenAdmin = document.getElementById("btnOpenAdmin");
  const btnCloseAdmin = document.getElementById("btnCloseAdmin");
  const adminModal = document.getElementById("adminModal");
  const brandLogoHome = document.getElementById("brandLogoHome");

  // Intro Cutscene Overlay Elements
  const introCutsceneOverlay = document.getElementById("introCutsceneOverlay");
  const introMissionTag = document.getElementById("introMissionTag");
  const introRouteUrl = document.getElementById("introRouteUrl");
  const introRouteText = document.getElementById("introRouteText");
  const introPosTitle = document.getElementById("introPosTitle");
  const introPosSubtitle = document.getElementById("introPosSubtitle");
  const introObjectiveText = document.getElementById("introObjectiveText");
  const btnEnterConsole = document.getElementById("btnEnterConsole");
  const btnReturnToHub = document.getElementById("btnReturnToHub");

  // Hub & Work Area
  const arcadePortalHub = document.getElementById("arcadePortalHub");
  const activePosWorkArea = document.getElementById("activePosWorkArea");

  // Glitch Banner
  const glitchAlertBanner = document.getElementById("glitchAlertBanner");
  const btnDismissGlitch = document.getElementById("btnDismissGlitch");

  // Dual CRT Monitor Frames
  const crt1MonitorFrame = document.getElementById("crt1MonitorFrame");
  const crt2MonitorFrame = document.getElementById("crt2MonitorFrame");

  // Single Pos Station Bar & Mission Containers
  const singlePosStationBar = document.getElementById("singlePosStationBar");
  const stationTitleMain = document.getElementById("stationTitleMain");
  const stationRoutePill = document.getElementById("stationRoutePill");
  const missionTabBtns = document.querySelectorAll(".mission-tab-btn");
  const posContainers = {
    1: document.getElementById("pos1Container"),
    2: document.getElementById("pos2Container"),
    3: document.getElementById("pos3Container"),
    4: document.getElementById("pos4Container")
  };

  // Case Headers & Questions
  const caseHeading = document.getElementById("caseHeading");
  const caseStory = document.getElementById("caseStory");
  const casePosTag = document.getElementById("casePosTag");
  const challengePosLabel = document.getElementById("challengePosLabel");
  const questionsContainer = document.getElementById("questionsContainer");
  const challengeBox = document.getElementById("challengeBox");
  const modalKunciJawaban = document.getElementById("modalKunciJawaban");
  const modalPhysicalClues = document.getElementById("modalPhysicalClues");

  // Timer & Energy Gauge
  const phaseBadge = document.getElementById("phaseBadge");
  const phaseBadgeText = document.getElementById("phaseBadgeText");
  const phaseTitle = document.getElementById("phaseTitle");
  const phaseInstruction = document.getElementById("phaseInstruction");
  const timerClock = document.getElementById("timerClock");
  const hudPercentBadge = document.getElementById("hudPercentBadge");
  const energySegmentedBar = document.getElementById("energySegmentedBar");
  const btnStartTimer = document.getElementById("btnStartTimer");
  const btnFinishExploration = document.getElementById("btnFinishExploration");
  const btnPauseTimer = document.getElementById("btnPauseTimer");
  const btnResetTimer = document.getElementById("btnResetTimer");

  // Operator Input & Locked Code Section
  const operatorInputSection = document.getElementById("operatorInputSection");
  const dynamicInputFields = document.getElementById("dynamicInputFields");
  const btnSubmitOperatorAnswer = document.getElementById("btnSubmitOperatorAnswer");
  const lockedCodeSection = document.getElementById("lockedCodeSection");
  const displayGeneratedCode = document.getElementById("displayGeneratedCode");
  const btnCompletePos = document.getElementById("btnCompletePos");

  // Admin & Management Elements
  const leaderboardTbody = document.getElementById("leaderboardTbody");
  const hubLeaderboardTbody = document.getElementById("hubLeaderboardTbody");
  const verifikasiTbody = document.getElementById("verifikasiTbody");
  const btnExportCSV = document.getElementById("btnExportCSV");
  const btnExportJSON = document.getElementById("btnExportJSON");
  const btnTriggerImport = document.getElementById("btnTriggerImport");
  const importFileInput = document.getElementById("importFileInput");
  const btnResetAllData = document.getElementById("btnResetAllData");

  // Station Bar Controls
  const btnSwitchTeamBar = document.getElementById("btnSwitchTeamBar");
  const btnReturnToHubBar = document.getElementById("btnReturnToHubBar");

  // PIN Protection Modal Elements
  const pinModal = document.getElementById("pinModal");
  const pinInput = document.getElementById("pinInput");
  const pinErrorMsg = document.getElementById("pinErrorMsg");
  const btnSubmitPin = document.getElementById("btnSubmitPin");
  const btnClosePinModal = document.getElementById("btnClosePinModal");

  // Retro Cyber Alert & Confirm Modal Dialog Elements & Handlers
  const cyberDialogModal = document.getElementById("cyberDialogModal");
  const cyberDialogCard = document.getElementById("cyberDialogCard");
  const cyberDialogTitle = document.getElementById("cyberDialogTitle");
  const cyberDialogIcon = document.getElementById("cyberDialogIcon");
  const cyberDialogMessage = document.getElementById("cyberDialogMessage");
  const cyberDialogInput = document.getElementById("cyberDialogInput");
  const btnCloseCyberDialog = document.getElementById("btnCloseCyberDialog");
  const btnCyberDialogConfirm = document.getElementById("btnCyberDialogConfirm");
  const btnCyberDialogCancel = document.getElementById("btnCyberDialogCancel");

  let cyberDialogConfirmCallback = null;
  let cyberDialogCancelCallback = null;

  function closeCyberDialog() {
    if (cyberDialogModal) {
      cyberDialogModal.classList.remove("open");
    }
    if (cyberDialogInput) {
      cyberDialogInput.style.display = "none";
    }
    cyberDialogConfirmCallback = null;
    cyberDialogCancelCallback = null;
  }

  const ICON_PATHS = {
    info: '<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />',
    warning: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />',
    danger: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />',
    success: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />'
  };

  function setupCyberDialogTheme(type) {
    if (!cyberDialogCard) return;
    cyberDialogCard.classList.remove("type-info", "type-warning", "type-danger", "type-success");
    const safeType = ["info", "warning", "danger", "success"].includes(type) ? type : "info";
    cyberDialogCard.classList.add(`type-${safeType}`);
    if (cyberDialogIcon) {
      cyberDialogIcon.innerHTML = ICON_PATHS[safeType] || ICON_PATHS.info;
    }
    if (btnCyberDialogConfirm) {
      btnCyberDialogConfirm.className = "pixel-btn";
      if (safeType === "warning") btnCyberDialogConfirm.classList.add("pixel-btn-yellow");
      else if (safeType === "danger") btnCyberDialogConfirm.classList.add("pixel-btn-red");
      else if (safeType === "success") btnCyberDialogConfirm.classList.add("pixel-btn-green");
      else btnCyberDialogConfirm.classList.add("pixel-btn-cyan");
    }
  }

  function showCyberAlert(title, message, type = "info", onClose = null) {
    setupCyberDialogTheme(type);
    if (cyberDialogTitle) cyberDialogTitle.textContent = title || "NOTIFIKASI SISTEM";
    if (cyberDialogMessage) cyberDialogMessage.textContent = message || "";
    if (cyberDialogInput) cyberDialogInput.style.display = "none";
    if (btnCyberDialogCancel) btnCyberDialogCancel.style.display = "none";
    if (btnCyberDialogConfirm) btnCyberDialogConfirm.textContent = "MENGERTI";
    cyberDialogConfirmCallback = onClose;
    if (cyberDialogModal) cyberDialogModal.classList.add("open");
    sfx.blip();
  }

  function showCyberConfirm(title, message, onConfirm, type = "warning", onCancel = null) {
    setupCyberDialogTheme(type);
    if (cyberDialogTitle) cyberDialogTitle.textContent = title || "KONFIRMASI TINDAKAN";
    if (cyberDialogMessage) cyberDialogMessage.textContent = message || "";
    if (cyberDialogInput) cyberDialogInput.style.display = "none";
    if (btnCyberDialogCancel) {
      btnCyberDialogCancel.style.display = "inline-flex";
      btnCyberDialogCancel.textContent = "BATAL";
    }
    if (btnCyberDialogConfirm) btnCyberDialogConfirm.textContent = "YA, LANJUTKAN";
    cyberDialogConfirmCallback = onConfirm;
    cyberDialogCancelCallback = onCancel;
    if (cyberDialogModal) cyberDialogModal.classList.add("open");
    sfx.blip();
  }

  function showCyberPrompt(title, message, placeholder, onConfirm, type = "danger", onCancel = null) {
    setupCyberDialogTheme(type);
    if (cyberDialogTitle) cyberDialogTitle.textContent = title || "KONFIRMASI TINDAKAN";
    if (cyberDialogMessage) cyberDialogMessage.textContent = message || "";
    if (cyberDialogInput) {
      cyberDialogInput.style.display = "block";
      cyberDialogInput.placeholder = placeholder || "";
      cyberDialogInput.value = "";
    }
    if (btnCyberDialogCancel) {
      btnCyberDialogCancel.style.display = "inline-flex";
      btnCyberDialogCancel.textContent = "BATAL";
    }
    if (btnCyberDialogConfirm) {
      btnCyberDialogConfirm.textContent = "KONFIRMASI";
    }

    cyberDialogConfirmCallback = (passedVal) => {
      const raw = (typeof passedVal === "string") ? passedVal : (cyberDialogInput ? cyberDialogInput.value : "");
      const val = (raw || "").trim();
      if (onConfirm) onConfirm(val);
    };
    cyberDialogCancelCallback = onCancel;

    if (cyberDialogModal) cyberDialogModal.classList.add("open");
    sfx.blip();

    setTimeout(() => {
      if (cyberDialogInput) {
        cyberDialogInput.focus();
        cyberDialogInput.select();
      }
    }, 50);
  }

  if (cyberDialogInput) {
    cyberDialogInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (btnCyberDialogConfirm) btnCyberDialogConfirm.click();
      } else if (e.key === "Escape") {
        e.preventDefault();
        if (btnCyberDialogCancel) btnCyberDialogCancel.click();
      }
    });
  }

  if (btnCloseCyberDialog) {
    btnCloseCyberDialog.addEventListener("click", () => {
      sfx.blip();
      const cancelCb = cyberDialogCancelCallback;
      closeCyberDialog();
      if (cancelCb) cancelCb();
    });
  }

  if (btnCyberDialogCancel) {
    btnCyberDialogCancel.addEventListener("click", () => {
      sfx.blip();
      const cancelCb = cyberDialogCancelCallback;
      closeCyberDialog();
      if (cancelCb) cancelCb();
    });
  }

  if (btnCyberDialogConfirm) {
    btnCyberDialogConfirm.addEventListener("click", () => {
      sfx.blip();
      const inputVal = cyberDialogInput ? cyberDialogInput.value : "";
      const confirmCb = cyberDialogConfirmCallback;
      closeCyberDialog();
      if (confirmCb) confirmCb(inputVal);
    });
  }

  if (cyberDialogModal) {
    cyberDialogModal.addEventListener("click", (e) => {
      if (e.target === cyberDialogModal) {
        const cancelCb = cyberDialogCancelCallback;
        closeCyberDialog();
        if (cancelCb) cancelCb();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cyberDialogModal && cyberDialogModal.classList.contains("open")) {
      const cancelCb = cyberDialogCancelCallback;
      closeCyberDialog();
      if (cancelCb) cancelCb();
    } else if (e.key === "Escape" && posTutorialModal && posTutorialModal.classList.contains("open")) {
      closeTutorialModal();
    }
  });

  // ==========================================================================
  // CYBERPUNK SPOTLIGHT TOUR ENGINE (INTRO.JS STYLE)
  // ==========================================================================
  const cyberTourOverlay = document.getElementById("cyberTourOverlay");
  const cyberTourSpotlight = document.getElementById("cyberTourSpotlight");
  const cyberTourTooltip = document.getElementById("cyberTourTooltip");
  const tourStepBadge = document.getElementById("tourStepBadge");
  const tourStepTitle = document.getElementById("tourStepTitle");
  const tourStepBodyText = document.getElementById("tourStepBodyText");
  const tourStepCallout = document.getElementById("tourStepCallout");
  const tourDotsRow = document.getElementById("tourDotsRow");
  const btnCloseTour = document.getElementById("btnCloseTour");
  const btnSkipTour = document.getElementById("btnSkipTour");
  const btnPrevTourStep = document.getElementById("btnPrevTourStep");
  const btnNextTourStep = document.getElementById("btnNextTourStep");
  const btnStartMissionFromTour = document.getElementById("btnStartMissionFromTour");
  const btnOpenTutorial = document.getElementById("btnOpenTutorial");

  let isTourActive = false;
  let currentTourIndex = 0;
  let activeTourPos = 1;

  const POS_TOUR_STEPS = {
    0: [
      {
        target: ".hub-portal-grid",
        placement: "bottom",
        title: "PORTAL 4 POS STUDI KASUS",
        body: `Pilih Pos Misi yang ingin dijalankan di laptop ini (<strong>Pos 1 s/d Pos 4</strong>).<br>
        • Pos 1: Investigasi Email Phishing (Cybersecurity)<br>
        • Pos 2: Robot Barista Glitch (Algoritma Sekuensial)<br>
        • Pos 3: Brankas Data Hilang (Eliminasi Data)<br>
        • Pos 4: Seleksi Berkas AI Glitch (Etika Teknologi)`,
        callout: "💡 <strong>Tips Operasional:</strong> Buka pos sesuai jadwal rotasi pos kelompok.",
        calloutType: "tip-cyan"
      },
      {
        target: ".hub-leaderboard-section",
        placement: "top",
        title: "LIVE LEADERBOARD REALTIME",
        body: `Papan peringkat realtime 5 Kelompok (<strong>META, GEMINI, COPILOT, DEEPSEEK, CLAUDE</strong>).<br>
        • Skor otomatis tersinkronisasi saat peserta men-submit jawaban di pos manapun.<br>
        • Mendukung sinkronisasi offline (LocalStorage) maupun online (Cloud Firestore).`,
        callout: "🏆 <strong>Fair Play:</strong> Total akumulasi poin di 4 pos menentukan juara The Logic Escape.",
        calloutType: "tip-yellow"
      },
      {
        target: ".header-toolbar",
        placement: "bottom",
        title: "KONTROL AUDIO, TUTORIAL & ADMIN",
        body: `Gunakan tombol di toolbar atas:<br>
        • <strong>TUTORIAL POS:</strong> Buka panduan video & tutorial per pos terintegrasi.<br>
        • <strong>KUNCI POS:</strong> Lihat rubrik penilaian & analisis kunci jawaban (PIN Rahasia Panitia).<br>
        • <strong>LEADERBOARD:</strong> Kelola data rekapitulasi nilai.`,
        callout: "✨ <strong>Siap Digunakan:</strong> Klik tombol Buka Pos pada kartu untuk memulai!",
        calloutType: "tip-green"
      }
    ],
    1: [
      {
        target: "#crt1MonitorFrame",
        placement: "right",
        title: "CRT 1: TERMINAL BUKTI INVESTIGASI",
        body: `Di monitor kiri, terdapat <strong>3 kotak masuk email</strong> mahasiswa.<br>
        • Klik tombol Email 1, 2, dan 3 untuk membaca bukti forensik.<br>
        • Periksa domain pengirim (<code>.ac.id</code> resmi vs <code>.xyz</code> palsu).<br>
        • Waspadai tautan link eksternal dan trik urgensi kepanikan!`,
        callout: "💡 <strong>Tips Forensik:</strong> Bandingkan email KRS resmi kampus dengan email beasiswa mencurigakan.",
        calloutType: "tip-cyan"
      },
      {
        target: "#crt2MonitorFrame",
        placement: "left",
        title: "CRT 2: 2 SOAL PILIHAN GANDA (100 POIN)",
        body: `Di monitor kanan, selesaikan <strong>2 Pertanyaan Kritis</strong>:<br>
        • <strong>Soal 1 (Max 50 Pts):</strong> Identifikasi email vektor penipuan.<br>
        • <strong>Soal 2 (Max 50 Pts):</strong> Analisis kejanggalan teknis paling fatal.<br>
        • Tiap opsi memiliki bobot skor berjenjang (<strong>0 s/d 50 Pts</strong>). Diskusikan bersama tim!`,
        callout: "⚠️ <strong>Perhatian:</strong> Pilihan tidak dapat diubah setelah tombol submit ditekan.",
        calloutType: "tip-yellow"
      },
      {
        target: ".energy-timer-console",
        placement: "bottom",
        title: "COUNTDOWN TIMER: 2 MENIT (STANDBY)",
        body: `Durasi misi pos ini adalah <strong>2 MENIT (120 Detik)</strong>.<br>
        • Timer saat ini dalam kondisi <strong>STANDBY (02:00)</strong> sehingga waktu tim belum berkurang.<br>
        • Countdown baru akan mulai berdetak ketika tombol <em>Mulai Misi</em> ditekan!`,
        callout: "⏱️ <strong>Manajemen Waktu:</strong> Manfaatkan 2 menit untuk berdiskusi cepat dan mufakat.",
        calloutType: "tip-cyan"
      },
      {
        target: "#btnSubmitMcq",
        placement: "left",
        title: "SUBMIT & SINKRONISASI LEADERBOARD",
        body: `Langkah terakhir penyelesaian studi kasus:<br>
        • Klik <strong>[SUBMIT JAWABAN RESMI]</strong> untuk mengunci jawaban.<br>
        • Sistem akan mencetak <strong>KODE UNIK VERIFIKASI</strong> (misal: <code>META-P1-9F2B</code>).<br>
        • Skor 100 poin langsung tersimpan di sistem dan tersinkronisasi otomatis ke Live Leaderboard!`,
        callout: "🚀 <strong>Siap Bertanding?</strong> Klik tombol di bawah untuk langsung memulai countdown 2 menit!",
        calloutType: "tip-green"
      }
    ],
    2: [
      {
        target: "#crt1MonitorFrame",
        placement: "right",
        title: "CRT 1: SIMULATOR LOGIKA ROBOT BARISTA",
        body: `Di monitor kiri, robot peracik kopi mengalami glitch logika sekuensial:<br>
        • Gunakan tombol panah <strong>[▲ Naik]</strong> dan <strong>[▼ Turun]</strong> untuk merapikan 6 langkah.<br>
        • Klik <strong>[UJI SIMULASI LOGIKA ROBOT]</strong> untuk menguji apakah aktuator sukses menyajikan kopi atau tumpah!`,
        callout: "💡 <strong>Prinsip Algoritma:</strong> Cangkir fisik penampung harus selalu siap di tatakan sebelum zat cair dituangkan!",
        calloutType: "tip-cyan"
      },
      {
        target: "#crt2MonitorFrame",
        placement: "left",
        title: "CRT 2: 2 SOAL LOGIKA SEKUENSIAL (100 POIN)",
        body: `Di monitor kanan, jawab <strong>2 Pertanyaan Debugging</strong>:<br>
        • <strong>Soal 1 (Max 50 Pts):</strong> Tentukan urutan eksekusi langkah paling runtut dan efisien.<br>
        • <strong>Soal 2 (Max 50 Pts):</strong> Jelaskan secara komputasional mengapa wadah output wajib diinisialisasi di awal.<br>
        • Bobot poin (0, 15, 30, 50 Pts) mengukur ketajaman logika tim.`,
        callout: "⚠️ <strong>Perhatian:</strong> Pastikan seluruh anggota tim sepakat sebelum memilih opsi akhir.",
        calloutType: "tip-yellow"
      },
      {
        target: ".energy-timer-console",
        placement: "bottom",
        title: "COUNTDOWN TIMER: 2 MENIT (STANDBY)",
        body: `Durasi misi pos ini adalah <strong>2 MENIT (120 Detik)</strong>.<br>
        • Timer saat ini masih <strong>STANDBY (02:00)</strong>.<br>
        • Jangan tergesa-gesa saat membaca panduan ini, waktu baru berkurang setelah tour ditutup!`,
        callout: "⏱️ <strong>Efisien:</strong> Selesaikan urutan robot dan pilih opsi jawaban sebelum 120 detik habis.",
        calloutType: "tip-cyan"
      },
      {
        target: "#btnSubmitMcq",
        placement: "left",
        title: "SUBMIT & SINKRONISASI LEADERBOARD",
        body: `Kunci evaluasi misi kelompok:<br>
        • Klik <strong>[SUBMIT JAWABAN RESMI]</strong> untuk mencetak <strong>KODE UNIK VERIFIKASI</strong> (misal: <code>GEMINI-P2-4C1A</code>).<br>
        • Skor resmi 100 poin langsung tersimpan di sistem dan tersinkronisasi otomatis ke Live Leaderboard!`,
        callout: "🚀 <strong>Mulai Misi!</strong> Klik tombol di bawah untuk langsung mengaktifkan timer 2 menit!",
        calloutType: "tip-green"
      }
    ],
    3: [
      {
        target: "#crt1MonitorFrame",
        placement: "right",
        title: "CRT 1: MATRIKS 8 BRANKAS & 3 CLUE ELIMINASI",
        body: `Di monitor kiri, terdapat <strong>8 Brankas Digital</strong> arsip kampus:<br>
        • Terapkan 3 Clue: <em>Bukan Genap</em>, <em>Ukuran > 50 MB</em>, dan <em>Akses Akhir Pekan (Sabtu/Minggu)</em>.<br>
        • Klik kartu brankas untuk <strong>mencoret / mengeliminasi</strong> brankas yang gugur secara interaktif!`,
        callout: "💡 <strong>Tips Eliminasi:</strong> Brankas dokumen rahasia adalah yang memenuhi KETIGA syarat sekaligus.",
        calloutType: "tip-cyan"
      },
      {
        target: "#crt2MonitorFrame",
        placement: "left",
        title: "CRT 2: 2 SOAL ELIMINASI DATA (100 POIN)",
        body: `Di monitor kanan, tuntaskan <strong>2 Pertanyaan Eliminasi</strong>:<br>
        • <strong>Soal 1 (Max 50 Pts):</strong> Tentukan nomor brankas dokumen rahasia yang lolos seluruh kriteria.<br>
        • <strong>Soal 2 (Max 50 Pts):</strong> Buktikan mengapa Vault 07 gugur (hari Kamis bukan akhir pekan).<br>
        • Opsi dengan penalaran logika multi-kondisi paling presisi meraih 50 Poin!`,
        callout: "⚠️ <strong>Perhatian:</strong> Periksa kembali metadata brankas sebelum mengunci jawaban.",
        calloutType: "tip-yellow"
      },
      {
        target: ".energy-timer-console",
        placement: "bottom",
        title: "COUNTDOWN TIMER: 2 MENIT (STANDBY)",
        body: `Durasi misi pos ini adalah <strong>2 MENIT (120 Detik)</strong>.<br>
        • Waktu saat ini masih <strong>STANDBY (02:00)</strong>.<br>
        • Diskusikan eliminasi brankas bersama anggota regu sebelum menekan tombol mulai!`,
        callout: "⏱️ <strong>Fokus:</strong> Gunakan waktu 2 menit secara efektif bersama seluruh anggota regu.",
        calloutType: "tip-cyan"
      },
      {
        target: "#btnSubmitMcq",
        placement: "left",
        title: "SUBMIT & SINKRONISASI LEADERBOARD",
        body: `Penerbitan kode verifikasi pos:<br>
        • Klik <strong>[SUBMIT JAWABAN RESMI]</strong> untuk mengunci skor dan memunculkan <strong>KODE UNIK</strong> (misal: <code>COPILOT-P3-7E59</code>).<br>
        • Skor resmi 100 poin langsung tersimpan di sistem dan tersinkronisasi otomatis ke Live Leaderboard!`,
        callout: "🚀 <strong>Siap Beraksi?</strong> Klik tombol di bawah untuk langsung memulai hitung mundur 2 menit!",
        calloutType: "tip-green"
      }
    ],
    4: [
      {
        target: "#crt1MonitorFrame",
        placement: "right",
        title: "CRT 1: SIMULATOR PARSER REGEX SELEKSI AI",
        body: `Di monitor kiri, sistem AI menolak kandidat mahasiswa terbaik:<br>
        • Amati tabel kandidat: Budi (IPK 3.92 & Juara 1) berstatus <strong>DISKUALIFIKASI</strong>.<br>
        • Klik <strong>[TEST PARSE BERKAS]</strong> untuk melihat engine regex error 415 (.docx vs .pdf).<br>
        • Coba tombol perbaikan berkas .pdf untuk mengamati perbedaannya!`,
        callout: "💡 <strong>Etika Teknologi:</strong> Tanpa supervisi manusia (Human-in-the-Loop), otomasi kaku dapat mendiskriminasi manusia.",
        calloutType: "tip-cyan"
      },
      {
        target: "#crt2MonitorFrame",
        placement: "left",
        title: "CRT 2: 2 SOAL ETIKA TEKNOLOGI (100 POIN)",
        body: `Di monitor kanan, evaluasi <strong>2 Pertanyaan Etika & Rekayasa</strong>:<br>
        • <strong>Soal 1 (Max 50 Pts):</strong> Analisis akar penyebab teknis parser regex yang kaku.<br>
        • <strong>Soal 2 (Max 50 Pts):</strong> Rumuskan solusi komprehensif (konversi format otomatis, fasilitas sanggah/banding, dan supervisi manusia).<br>
        • Poin berbobot (0 s/d 50 Pts) menguji kedalaman analisis sistem.`,
        callout: "⚠️ <strong>Perhatian:</strong> Pilihlah solusi rekayasa & etika yang paling adil dan menyeluruh.",
        calloutType: "tip-yellow"
      },
      {
        target: ".energy-timer-console",
        placement: "bottom",
        title: "COUNTDOWN TIMER: 2 MENIT (STANDBY)",
        body: `Durasi misi pos ini adalah <strong>2 MENIT (120 Detik)</strong>.<br>
        • Waktu saat ini masih <strong>STANDBY (02:00)</strong>.<br>
        • Peserta tidak perlu terburu-buru membaca tour panduan ini, waktu belum berkurang!`,
        callout: "⏱️ <strong>Critical Thinking:</strong> Pahami masalah algoritma secara mendalam sebelum menjawab.",
        calloutType: "tip-cyan"
      },
      {
        target: "#btnSubmitMcq",
        placement: "left",
        title: "SUBMIT & SINKRONISASI LEADERBOARD",
        body: `Kunci nilai pos etika AI:<br>
        • Klik <strong>[SUBMIT JAWABAN RESMI]</strong> untuk menerbitkan <strong>KODE UNIK VERIFIKASI</strong> (misal: <code>DEEPSEEK-P4-3D8E</code>).<br>
        • Skor resmi 100 poin langsung tersimpan di sistem dan tersinkronisasi otomatis ke Live Leaderboard!`,
        callout: "🚀 <strong>Mulai Investigasi!</strong> Klik tombol di bawah untuk menyalakan countdown timer 2 menit!",
        calloutType: "tip-green"
      }
    ]
  };

  function updateActiveTourPosition() {
    if (!isTourActive) return;
    const steps = POS_TOUR_STEPS[activeTourPos] || POS_TOUR_STEPS[1];
    const step = steps[currentTourIndex];
    if (!step) return;
    const targetEl = document.querySelector(step.target);
    if (!targetEl || !cyberTourSpotlight || !cyberTourTooltip) return;

    positionTourSpotlight(targetEl);
    positionTourTooltip(targetEl, step.placement);
  }

  function positionTourSpotlight(targetEl) {
    if (!cyberTourSpotlight) return;
    const rect = targetEl.getBoundingClientRect();
    const pad = 8;
    const top = Math.max(0, rect.top - pad);
    const left = Math.max(0, rect.left - pad);
    const width = Math.min(window.innerWidth - left, rect.width + pad * 2);
    const height = Math.min(window.innerHeight - top, rect.height + pad * 2);

    cyberTourSpotlight.style.top = `${top}px`;
    cyberTourSpotlight.style.left = `${left}px`;
    cyberTourSpotlight.style.width = `${width}px`;
    cyberTourSpotlight.style.height = `${height}px`;
  }

  function positionTourTooltip(targetEl, preferredPlacement = "auto") {
    if (!cyberTourTooltip) return;
    const targetRect = targetEl.getBoundingClientRect();
    const tooltipRect = cyberTourTooltip.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 16;
    let top, left, placement = preferredPlacement;

    if (vw < 960) {
      if (targetRect.top > vh / 2) {
        top = pad + 40;
      } else {
        top = vh - tooltipRect.height - pad;
      }
      left = Math.max(pad, (vw - tooltipRect.width) / 2);
    } else {
      if (placement === "auto") {
        if (targetRect.right + tooltipRect.width + pad < vw) placement = "right";
        else if (targetRect.left - tooltipRect.width - pad > 0) placement = "left";
        else if (targetRect.bottom + tooltipRect.height + pad < vh) placement = "bottom";
        else placement = "top";
      }

      if (placement === "right") {
        left = targetRect.right + pad;
        top = Math.max(pad, Math.min(vh - tooltipRect.height - pad, targetRect.top + (targetRect.height - tooltipRect.height) / 2));
      } else if (placement === "left") {
        left = targetRect.left - tooltipRect.width - pad;
        top = Math.max(pad, Math.min(vh - tooltipRect.height - pad, targetRect.top + (targetRect.height - tooltipRect.height) / 2));
      } else if (placement === "bottom") {
        left = Math.max(pad, Math.min(vw - tooltipRect.width - pad, targetRect.left + (targetRect.width - tooltipRect.width) / 2));
        top = targetRect.bottom + pad;
      } else if (placement === "top") {
        left = Math.max(pad, Math.min(vw - tooltipRect.width - pad, targetRect.left + (targetRect.width - tooltipRect.width) / 2));
        top = targetRect.top - tooltipRect.height - pad;
      }
    }

    left = Math.max(pad, Math.min(vw - tooltipRect.width - pad, left));
    top = Math.max(pad, Math.min(vh - tooltipRect.height - pad, top));

    cyberTourTooltip.style.left = `${left}px`;
    cyberTourTooltip.style.top = `${top}px`;
  }

  function renderTourStep(index) {
    const steps = POS_TOUR_STEPS[activeTourPos] || POS_TOUR_STEPS[1];
    if (index < 0 || index >= steps.length) return;
    currentTourIndex = index;
    const step = steps[index];

    const targetEl = document.querySelector(step.target);
    if (!targetEl) return;

    targetEl.scrollIntoView({ behavior: "smooth", block: "nearest" });

    if (tourStepBadge) tourStepBadge.textContent = `STEP ${index + 1} / ${steps.length}`;
    if (tourStepTitle) tourStepTitle.textContent = step.title;
    if (tourStepBodyText) tourStepBodyText.innerHTML = step.body;
    if (tourStepCallout) {
      tourStepCallout.className = `tutorial-callout-box ${step.calloutType || 'tip-cyan'}`;
      tourStepCallout.innerHTML = step.callout;
    }

    if (tourDotsRow) {
      tourDotsRow.innerHTML = steps.map((_, idx) => 
        `<span class="tour-dot ${idx === index ? 'active' : ''}" data-step="${idx}" title="Langkah ${idx + 1}"></span>`
      ).join("");
      tourDotsRow.querySelectorAll(".tour-dot").forEach(dot => {
        dot.addEventListener("click", () => {
          sfx.blip();
          const s = parseInt(dot.dataset.step) || 0;
          renderTourStep(s);
        });
      });
    }

    if (btnPrevTourStep) {
      btnPrevTourStep.disabled = (index === 0);
      btnPrevTourStep.style.opacity = (index === 0) ? "0.3" : "1";
    }

    if (index === steps.length - 1) {
      if (btnNextTourStep) btnNextTourStep.style.display = "none";
      if (btnStartMissionFromTour) {
        btnStartMissionFromTour.style.display = "inline-flex";
        btnStartMissionFromTour.textContent = (activeTourPos === 0) ? "🚀 SAYA PAHAM!" : "🚀 MULAI MISI (2 MENIT)!";
      }
    } else {
      if (btnNextTourStep) btnNextTourStep.style.display = "inline-flex";
      if (btnStartMissionFromTour) btnStartMissionFromTour.style.display = "none";
    }

    setTimeout(() => {
      positionTourSpotlight(targetEl);
      positionTourTooltip(targetEl, step.placement);
    }, 40);
  }

  let wasRunningBeforeTour = false;

  function startCyberTour(posNum = 1, startStep = 0) {
    activeTourPos = posNum;
    isTourActive = true;
    wasRunningBeforeTour = isRunning;
    if (isRunning) {
      pauseTimer();
    }

    if (cyberTourOverlay) cyberTourOverlay.style.display = "block";
    if (cyberTourSpotlight) cyberTourSpotlight.style.display = "block";
    if (cyberTourTooltip) cyberTourTooltip.style.display = "flex";

    renderTourStep(startStep);
    sfx.coinStart();
  }

  function closeCyberTour(startMission = false) {
    isTourActive = false;
    if (cyberTourOverlay) cyberTourOverlay.style.display = "none";
    if (cyberTourSpotlight) cyberTourSpotlight.style.display = "none";
    if (cyberTourTooltip) cyberTourTooltip.style.display = "none";

    if (startMission || wasRunningBeforeTour) {
      startTimer();
    }
    wasRunningBeforeTour = false;
  }

  if (btnCloseTour) {
    btnCloseTour.addEventListener("click", () => {
      sfx.blip();
      closeCyberTour(false);
    });
  }

  if (btnSkipTour) {
    btnSkipTour.addEventListener("click", () => {
      sfx.blip();
      closeCyberTour(false);
    });
  }

  if (btnPrevTourStep) {
    btnPrevTourStep.addEventListener("click", () => {
      sfx.blip();
      if (currentTourIndex > 0) {
        renderTourStep(currentTourIndex - 1);
      }
    });
  }

  if (btnNextTourStep) {
    btnNextTourStep.addEventListener("click", () => {
      sfx.blip();
      const steps = POS_TOUR_STEPS[activeTourPos] || POS_TOUR_STEPS[1];
      if (currentTourIndex < steps.length - 1) {
        renderTourStep(currentTourIndex + 1);
      }
    });
  }

  if (btnStartMissionFromTour) {
    btnStartMissionFromTour.addEventListener("click", () => {
      closeCyberTour(true);
    });
  }

  if (btnOpenTutorial) {
    btnOpenTutorial.addEventListener("click", () => {
      sfx.blip();
      const p = document.getElementById("arcadePortalHub") ? 0 : currentPos;
      startCyberTour(p, 0);
    });
  }

  if (cyberTourOverlay) {
    cyberTourOverlay.addEventListener("click", () => {
      closeCyberTour(false);
    });
  }

  window.addEventListener("resize", updateActiveTourPosition);
  window.addEventListener("scroll", updateActiveTourPosition, { passive: true });
  document.querySelectorAll(".crt-screen-scrollable").forEach(el => {
    el.addEventListener("scroll", updateActiveTourPosition, { passive: true });
  });

  window.addEventListener("keydown", (e) => {
    if (!isTourActive) return;
    if (e.key === "ArrowRight" || e.key === "Enter") {
      e.preventDefault();
      const steps = POS_TOUR_STEPS[activeTourPos] || POS_TOUR_STEPS[1];
      if (currentTourIndex < steps.length - 1) {
        sfx.blip();
        renderTourStep(currentTourIndex + 1);
      } else {
        closeCyberTour(true);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentTourIndex > 0) {
        sfx.blip();
        renderTourStep(currentTourIndex - 1);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeCyberTour(false);
    }
  });

  // Pos 4 AI Simulator Elements
  const btnSimDocx = document.getElementById("btnSimDocx");
  const btnSimPdf = document.getElementById("btnSimPdf");
  const aiConsoleOutput = document.getElementById("aiConsoleOutput");
  const cardBudi = document.getElementById("cardBudi");
  const stampBudi = document.getElementById("stampBudi");
  const terminalBudi = document.getElementById("terminalBudi");
  const budiFileTag = document.getElementById("budiFileTag");

  // ==========================================================================
  // CLOUD DATABASE (FIREBASE FIRESTORE) & HYBRID OFFLINE ENGINE
  // ==========================================================================
  const cloudStatusBadge = document.getElementById("cloudStatusBadge");
  const cloudStatusText = document.getElementById("cloudStatusText");

  function updateCloudStatus(status) {
    if (!cloudStatusBadge || !cloudStatusText) return;
    cloudStatusBadge.className = `cloud-status-badge ${status}`;
    if (status === "online") {
      cloudStatusText.textContent = "CLOUD LIVE";
    } else if (status === "syncing") {
      cloudStatusText.textContent = "SYNCING...";
    } else {
      cloudStatusText.textContent = "LOCAL / CACHED";
    }
  }

  // Firebase Configuration (Adhigana 2026 Production Project)
  const firebaseConfig = {
    apiKey: "AIzaSyDoS_AZoA-ux11_U0jlJROb0zPY46DAsiY",
    authDomain: "adhigana-8d271.firebaseapp.com",
    projectId: "adhigana-8d271",
    storageBucket: "adhigana-8d271.firebasestorage.app",
    messagingSenderId: "601613357058",
    appId: "1:601613357058:web:57a251222a4f0b50b6171b",
    measurementId: "G-VYFW5XHGBV"
  };

  let db = null;
  let auth = null;
  let isCloudActive = false;

  function initFirebaseDatabase() {
    try {
      if (typeof firebase !== "undefined" && firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("GANTI_DENGAN")) {
        if (!firebase.apps || !firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        db = firebase.firestore();

        // Inisialisasi Firebase Authentication
        if (typeof firebase.auth === "function") {
          auth = firebase.auth();
          auth.onAuthStateChanged((user) => {
            if (user) {
              console.log(">> [FIREBASE AUTH]: Logged in as", user.email);
            } else {
              console.log(">> [FIREBASE AUTH]: Kiosk / Guest Mode");
            }
          });
        }

        // Aktifkan Offline Persistence (IndexedDB Cache Browser)
        db.enablePersistence({ synchronizeTabs: true }).catch(err => {
          console.warn("[FIRESTORE] Offline persistence note:", err.code);
        });

        isCloudActive = true;
        updateCloudStatus("online");
        console.log(">> [FIRESTORE]: Connected & Offline Persistence Enabled.");
        initRealtimeCloudListener();
      } else {
        updateCloudStatus("offline");
        console.log(">> [HYBRID STORAGE]: LocalStorage aktif (Offline Mode). Isi firebaseConfig di app.js untuk mengaktifkan Cloud Sync.");
      }
    } catch (e) {
      console.warn(">> [FIREBASE INIT ERROR]:", e);
      updateCloudStatus("offline");
    }
  }

  // Helper Firebase Auth untuk Panitia / Admin
  window.firebaseAuth = {
    signIn: (email, password) => {
      if (!auth) return Promise.reject(new Error("Firebase Auth belum aktif"));
      return auth.signInWithEmailAndPassword(email, password);
    },
    signUp: (email, password) => {
      if (!auth) return Promise.reject(new Error("Firebase Auth belum aktif"));
      return auth.createUserWithEmailAndPassword(email, password);
    },
    signOut: () => {
      if (!auth) return Promise.resolve();
      return auth.signOut();
    },
    getUser: () => auth ? auth.currentUser : null
  };

  // Real-time listener for live sync across laptops
  function initRealtimeCloudListener() {
    if (!db || !isCloudActive) return;

    db.collection("submissions").onSnapshot((snapshot) => {
      const incoming = [];
      snapshot.forEach(doc => incoming.push(doc.data()));

      if (incoming.length > 0) {
        // Gabungkan data cloud dengan local storage
        const current = getSubmissions();
        const mergedMap = new Map();
        current.forEach(item => mergedMap.set(item.id, item));
        incoming.forEach(item => mergedMap.set(item.id, item)); // Cloud data menjadi acuan

        const mergedList = Array.from(mergedMap.values());
        localStorage.setItem("adhigana_submissions", JSON.stringify(mergedList));
        renderLeaderboard();
        renderVerifikasiTable();
        updateCloudStatus("online");
      }
    }, (err) => {
      console.warn("[FIRESTORE SNAPSHOT ERROR]:", err);
      updateCloudStatus("offline");
    });
  }

  // Storage Helpers (Hybrid Dual-Write: LocalStorage + Cloud Firestore)
  function getSubmissions() {
    const raw = localStorage.getItem("adhigana_submissions");
    return raw ? JSON.parse(raw) : [];
  }

  async function saveSubmissions(list, targetSub = null) {
    // 1. Simpan Lokal Instan (Zero Latency & 100% Offline-Safe)
    localStorage.setItem("adhigana_submissions", JSON.stringify(list));
    renderLeaderboard();
    renderVerifikasiTable();

    // 2. Sinkronkan ke Cloud Firestore jika aktif
    if (isCloudActive && db) {
      try {
        updateCloudStatus("syncing");
        if (targetSub) {
          await db.collection("submissions").doc(targetSub.id).set(targetSub, { merge: true });
        } else {
          const batch = db.batch();
          list.forEach(item => {
            const docRef = db.collection("submissions").doc(item.id);
            batch.set(docRef, item, { merge: true });
          });
          await batch.commit();
        }
        updateCloudStatus("online");
      } catch (err) {
        console.warn("[CLOUD SYNC PUSH ERROR]:", err);
        updateCloudStatus("offline");
      }
    }
  }

  function generateUniqueCode(teamId, posId) {
    const now = new Date();
    const mmdd = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const hash = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${teamId.toUpperCase()}-P${posId}-${mmdd}-${hash}`;
  }

  // ==========================================================================
  // 4. ROUTING ENGINE, TEAM SELECTION, BOOT LOADER & INTRO CUTSCENE
  // ==========================================================================

  // DOM Elements — Team Selection Overlay
  const teamSelectOverlay = document.getElementById("teamSelectOverlay");
  const teamSelectGrid = document.getElementById("teamSelectGrid");
  const teamSelectPosLabel = document.getElementById("teamSelectPosLabel");

  // DOM Elements — Boot Loading Overlay
  const bootLoadingOverlay = document.getElementById("bootLoadingOverlay");
  const bootLines = document.getElementById("bootLines");
  const bootProgressBar = document.getElementById("bootProgressBar");
  const bootProgressLabel = document.getElementById("bootProgressLabel");
  const bootTeamName = document.getElementById("bootTeamName");

  // Team Brand SVGs for Cyber Glass Cards (Official brand vectors)
  const TEAM_ICONS = {
    meta: `<svg viewBox="0 0 24 24" class="team-glass-icon" xmlns="http://www.w3.org/2000/svg"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>`,
    gemini: `<svg viewBox="0 0 24 24" class="team-glass-icon" xmlns="http://www.w3.org/2000/svg"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>`,
    copilot: `<svg viewBox="0 0 24 24" class="team-glass-icon" xmlns="http://www.w3.org/2000/svg"><path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/></svg>`,
    deepseek: `<svg viewBox="0 0 24 24" class="team-glass-icon" xmlns="http://www.w3.org/2000/svg"><path d="M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136 9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287.3.3 0 0 1 .113.074.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078.253.253 0 0 1-.114-.358 1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45"/></svg>`,
    claude: `<svg viewBox="0 0 24 24" class="team-glass-icon" xmlns="http://www.w3.org/2000/svg"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>`
  };

  const TEAM_ROTATIONS = [-16, -8, 0, 8, 16];

  // Build team selection card deck
  function renderTeamSelectGrid(posNum) {
    const config = POS_CONFIG[posNum];
    if (teamSelectPosLabel && config) {
      teamSelectPosLabel.textContent = `POS 0${posNum}: ${config.subTitle}`;
    }
    if (!teamSelectGrid) return;

    teamSelectGrid.innerHTML = TEAMS.map((t, i) => {
      const rot = TEAM_ROTATIONS[i] !== undefined ? TEAM_ROTATIONS[i] : 0;
      const iconSvg = TEAM_ICONS[t.id] || "";
      return `
        <div class="team-glass-card" data-team-id="${t.id}" data-text="${t.name.toUpperCase()}"
          style="--r: ${rot}; --team-color: ${t.color};"
          role="button" tabindex="0" title="Pilih Kelompok ${i + 1}: ${t.name}">
          <div class="team-card-top">
            <span class="team-card-num">KELOMPOK ${i + 1}</span>
            <span class="team-card-dot" style="background:${t.color}; box-shadow:0 0 8px ${t.color};"></span>
          </div>
          <div class="team-card-icon-wrap">
            ${iconSvg}
          </div>
          <div class="team-card-bottom">
            <span class="team-card-name">${t.name.toUpperCase()}</span>
            <span class="team-card-ip">IP: ${t.ip}</span>
          </div>
        </div>
      `;
    }).join("");

    // Bind card clicks, hover & keyboard accessibility
    teamSelectGrid.querySelectorAll(".team-glass-card").forEach((card, idx) => {
      // Hover audio feedback (light ascending cyber tick)
      card.addEventListener("mouseenter", () => {
        sfx.cardHover(idx);
      });

      card.addEventListener("focus", () => {
        sfx.cardHover(idx);
      });

      // Click / Selection sound effect
      card.addEventListener("click", () => {
        const chosenId = card.dataset.teamId;
        const chosenTeam = TEAMS.find(t => t.id === chosenId);
        card.classList.add("selected-card");

        // Epic Arcade Character-Select & Mecha Lock-in sound effect
        sfx.teamSelectLock(chosenId, idx);

        setTimeout(() => {
          selectTeamAndBoot(chosenTeam, posNum);
        }, 360);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  function showTeamSelectScreen(posNum) {
    renderTeamSelectGrid(posNum);
    teamSelectOverlay.classList.remove("hidden");
    // Hide boot & cutscene
    bootLoadingOverlay.classList.add("hidden");
    introCutsceneOverlay.classList.add("hidden");
  }

  function hideTeamSelectScreen() {
    teamSelectOverlay.classList.add("hidden");
  }

  // Boot sequence lines for cinematic terminal loading
  function getBootLines(teamName, posNum) {
    const config = POS_CONFIG[posNum];
    return [
      { t: ">> [BOOT_INIT]: ADHIGANA SECURE MAINFRAME v2.026 ...", cls: "cyan", delay: 0 },
      { t: `>> [AUTH]: VALIDATING KELOMPOK — ${teamName.toUpperCase()} ...`, cls: "", delay: 180 },
      { t: ">> [AUTH]: IDENTITY CONFIRMED. ACCESS GRANTED.", cls: "ok", delay: 380 },
      { t: `>> [ROUTE]: LOADING MODULE // ${config.route.toUpperCase()} ...`, cls: "", delay: 580 },
      { t: `>> [THREAT]: ${config.threat}`, cls: "err", delay: 760 },
      { t: `>> [OBJECTIVE]: ${config.objective.substring(0, 60)}...`, cls: "warn", delay: 980 },
      { t: ">> [NET_STATUS]: POS TERMINAL ONLINE. SECURE CHANNEL ESTABLISHED.", cls: "ok", delay: 1200 },
      { t: ">> [BRIEFING]: STUDI KASUS LOADED. SIAP UNTUK INVESTIGASI.", cls: "ok", delay: 1450 },
      { t: ">> [SYSTEM]: RENDERING MISSION CONSOLE ...", cls: "cyan", delay: 1680 },
    ];
  }

  function runBootSequence(team, posNum, onComplete) {
    bootLines.innerHTML = "";
    bootProgressBar.style.width = "0%";
    bootProgressLabel.textContent = "LOADING... 0%";
    bootTeamName.textContent = team.name.toUpperCase();
    bootTeamName.style.color = team.color;

    const lines = getBootLines(team.name, posNum);
    const totalDuration = 2200; // ms total
    let startTime = null;

    // Append lines at staggered delays
    lines.forEach(l => {
      setTimeout(() => {
        const div = document.createElement("div");
        div.className = `boot-line ${l.cls}`;
        div.textContent = l.t;
        bootLines.appendChild(div);
        bootLines.scrollTop = bootLines.scrollHeight;
        sfx.blip();
      }, l.delay);
    });

    // Animate progress bar reliably with setInterval (never freezes in background tabs)
    const startTs = Date.now();
    const bootTimer = setInterval(() => {
      const elapsed = Date.now() - startTs;
      const pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));
      if (bootProgressBar) bootProgressBar.style.width = pct + "%";
      if (bootProgressLabel) bootProgressLabel.textContent = `LOADING... ${pct}%`;
      if (pct >= 100) {
        clearInterval(bootTimer);
        if (bootProgressLabel) bootProgressLabel.textContent = "COMPLETE — LAUNCHING MISSION CONSOLE";
        sfx.bootLaunch();
        setTimeout(onComplete, 280);
      }
    }, 40);
  }

  function selectTeamAndBoot(team, posNum) {
    // Sync team to the operator header selector
    currentTeam = team.id;
    if (teamSelect) teamSelect.value = team.id;
    if (teamBadge) {
      teamBadge.textContent = team.label;
      teamBadge.style.color = team.color;
    }

    // Transition: hide team screen → show boot loader (Langkah 3: Loading)
    hideTeamSelectScreen();
    if (bootLoadingOverlay) bootLoadingOverlay.classList.remove("hidden");

    runBootSequence(team, posNum, () => {
      // Boot done → Langsung tampilkan studi kasus (Langkah 4: Menampilkan Studi Kasus)
      if (bootLoadingOverlay) bootLoadingOverlay.classList.add("hidden");
      if (activePosWorkArea) activePosWorkArea.style.display = "block";
      
      // Reset entire session and re-render fresh questions for this team!
      resetGroupSession(posNum);
      renderPos(posNum);
      
      // Standby mode: Timer waits at 02:00 for participants/panitia to click MULAI
      setPhase(1);

      // Otomatis munculkan Spotlight Tour interaktif (ala Intro.js) sebelum pos dimulai!
      setTimeout(() => {
        startCyberTour(posNum, 0);
      }, 450);
    });
  }

  // SCREEN 1: Welcome in Pos
  function showWelcomeScreen(posNum) {
    currentPos = posNum;
    const config = POS_CONFIG[posNum];
    if (!config) return;

    if (introMissionTag) introMissionTag.textContent = `WELCOME TO POS 0${posNum} // DIGITAL FRONTIER`;
    if (introRouteUrl) introRouteUrl.textContent = config.route;
    if (introRouteText) introRouteText.textContent = config.route;
    if (introPosTitle) introPosTitle.textContent = `WELCOME IN POS ${posNum}: ${config.title.replace(/^Pos \d+:\s*/i, "")}`;
    if (introPosSubtitle) introPosSubtitle.textContent = config.subTitle;
    if (introObjectiveText) introObjectiveText.textContent = config.objective;

    if (introCutsceneOverlay) introCutsceneOverlay.classList.remove("hidden");
    if (teamSelectOverlay) teamSelectOverlay.classList.add("hidden");
    if (bootLoadingOverlay) bootLoadingOverlay.classList.add("hidden");
    if (activePosWorkArea) activePosWorkArea.style.display = "none";
    sfx.coinStart();
  }

  function hideWelcomeScreen() {
    if (introCutsceneOverlay) introCutsceneOverlay.classList.add("hidden");
    sfx.blip();
  }

  // When clicking "PILIH KELOMPOKMU (LANJUT)" on Welcome screen -> Screen 2: Kamu dari tim mana?
  if (btnEnterConsole) {
    btnEnterConsole.addEventListener("click", () => {
      sfx.coinStart();
      hideWelcomeScreen();
      showTeamSelectScreen(currentPos);
    });
  }

  if (btnReturnToHub) {
    btnReturnToHub.addEventListener("click", () => {
      sfx.blip();
      hideWelcomeScreen();
      hideTeamSelectScreen();
      if (bootLoadingOverlay) bootLoadingOverlay.classList.add("hidden");
      window.location.href = "index.html";
    });
  }

  if (btnReturnToHubBar) {
    btnReturnToHubBar.addEventListener("click", () => {
      sfx.blip();
      window.location.href = "index.html";
    });
  }

  if (brandLogoHome) {
    brandLogoHome.addEventListener("click", () => {
      sfx.blip();
      if (window.location.pathname.toLowerCase().includes("pos")) {
        window.location.href = "index.html";
      } else {
        window.location.hash = "#/adhigana";
        handleRouting();
      }
    });
  }

  function handleRouting() {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();
    const routeFull = `${hash} ${search} ${pathname}`;

    // Check for specific Pos routes
    let targetPos = null;
    if (routeFull.includes("pos1") || routeFull.includes("pos=1")) targetPos = 1;
    else if (routeFull.includes("pos2") || routeFull.includes("pos=2")) targetPos = 2;
    else if (routeFull.includes("pos3") || routeFull.includes("pos=3")) targetPos = 3;
    else if (routeFull.includes("pos4") || routeFull.includes("pos=4")) targetPos = 4;
    else if (routeFull.includes("leaderboard")) {
      renderLeaderboard();
      renderVerifikasiTable();
      if (adminModal) adminModal.classList.add("open");
      return;
    }

    if (targetPos) {
      const currentFile = window.location.pathname.split("/").pop().toLowerCase();
      if (currentFile === "index.html" || currentFile === "" || !currentFile.includes(".html")) {
        window.location.href = `pos${targetPos}.html`;
        return;
      }
      // Pos View: Mulai dari Langkah 1: Welcome in Pos
      if (arcadePortalHub) arcadePortalHub.style.display = "none";
      if (activePosWorkArea) activePosWorkArea.style.display = "none";
      showWelcomeScreen(targetPos);
    } else {
      // Hub View (Operator / Main Landing)
      if (activePosWorkArea) activePosWorkArea.style.display = "none";
      if (arcadePortalHub) arcadePortalHub.style.display = "flex";
      hideWelcomeScreen();
      hideTeamSelectScreen();
      if (bootLoadingOverlay) bootLoadingOverlay.classList.add("hidden");
      renderLeaderboard();
    }
  }

  window.addEventListener("hashchange", handleRouting);

  // ==========================================================================
  // 5. TIMER & PHASE ENGINE
  // ==========================================================================

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  function updateTimerUI() {
    if (!timerClock || !hudPercentBadge || !energySegmentedBar) return;
    timerClock.textContent = formatTime(secondsLeft);
    const percent = Math.round((secondsLeft / PHASE_DURATION) * 100);
    hudPercentBadge.textContent = `${percent}%`;

    const blocks = energySegmentedBar.querySelectorAll(".energy-block");
    const activeBlocksCount = Math.ceil((secondsLeft / PHASE_DURATION) * 10);

    blocks.forEach((block, idx) => {
      block.className = "energy-block";
      if (idx < activeBlocksCount) {
        block.classList.add("active");
        if (activeBlocksCount <= 2) {
          block.classList.add("danger");
        } else if (activeBlocksCount <= 4) {
          block.classList.add("warn");
        }
      }
    });

    timerClock.classList.remove("warning", "danger");
    if (secondsLeft <= 60 && secondsLeft > 15) {
      timerClock.classList.add("warning");
    } else if (secondsLeft <= 15) {
      timerClock.classList.add("danger");
    }
  }

  function setPhase(newPhase) {
    phase = newPhase;
    secondsLeft = PHASE_DURATION;
    updateTimerUI();

    if (phaseBadge) phaseBadge.className = "pixel-tag-phase standby";
    if (phaseBadgeText) phaseBadgeText.textContent = "STATUS: STANDBY // SIAP";
    if (phaseTitle) phaseTitle.textContent = "Sesi Studi Kasus Siap";
    if (phaseInstruction) phaseInstruction.textContent = "Amati bukti di terminal kiri dan pertanyaan di kanan. Tekan tombol [▶ MULAI (2 MIN)] di atas ketika kelompok sudah siap!";
    if (btnStartTimer) {
      btnStartTimer.style.display = "inline-flex";
      btnStartTimer.classList.add("btn-start-standby");
    }
    if (btnPauseTimer) btnPauseTimer.style.display = "none";
    if (challengeBox) challengeBox.classList.remove("active-glow");
    if (operatorInputSection) operatorInputSection.style.display = "none";
    if (lockedCodeSection) lockedCodeSection.style.display = "none";
    if (btnFinishExploration) btnFinishExploration.style.display = "none";
  }

  let glitchBannerTimeout = null;

  function startTimer() {
    if (isRunning) return;
    sfx.coinStart();
    isRunning = true;
    if (btnStartTimer) {
      btnStartTimer.style.display = "none";
      btnStartTimer.classList.remove("btn-start-standby");
    }
    if (btnPauseTimer) btnPauseTimer.style.display = "inline-flex";

    if (phaseBadge) phaseBadge.className = "pixel-tag-phase active";
    if (phaseBadgeText) phaseBadgeText.textContent = "MISI AKTIF // 2 MENIT";
    if (phaseTitle) phaseTitle.textContent = "Penyelesaian Studi Kasus";
    if (phaseInstruction) phaseInstruction.textContent = "Amati bukti di terminal monitor kiri dan pilih jawaban pilihan ganda di monitor kanan sebelum waktu 2 menit habis.";

    if (glitchAlertBanner) {
      glitchAlertBanner.style.display = "flex";
      sfx.glitchBoom();
      clearTimeout(glitchBannerTimeout);
      glitchBannerTimeout = setTimeout(() => {
        if (glitchAlertBanner) glitchAlertBanner.style.display = "none";
      }, 6000);
    }

    timerInterval = setInterval(() => {
      if (secondsLeft > 0) {
        secondsLeft--;
        updateTimerUI();

        if (secondsLeft <= 5 && secondsLeft > 0) {
          sfx.tickDanger();
        } else if (secondsLeft <= 15 && secondsLeft % 2 === 0) {
          sfx.tick();
        }
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        if (btnPauseTimer) btnPauseTimer.style.display = "none";
        if (btnStartTimer) {
          btnStartTimer.style.display = "inline-flex";
          btnStartTimer.classList.remove("btn-start-standby");
        }
        sfx.phaseAlert();
        if (!isMcqSubmitted) {
          submitMcqAnswers();
        }
        showCyberAlert(
          "⏱️ WAKTU 2 MENIT HABIS!",
          "Sesi investigasi studi kasus pos telah selesai.\n\nSemua jawaban pilihan ganda telah otomatis dikunci dan skor berhasil disimpan ke sistem rekap.",
          "warning"
        );
      }
    }, 1000);
  }

  function pauseTimer() {
    sfx.blip();
    clearInterval(timerInterval);
    isRunning = false;
    if (btnStartTimer) {
      btnStartTimer.style.display = "inline-flex";
      btnStartTimer.classList.add("btn-start-standby");
    }
    if (btnPauseTimer) btnPauseTimer.style.display = "none";
    if (phaseBadge) phaseBadge.className = "pixel-tag-phase standby";
    if (phaseBadgeText) phaseBadgeText.textContent = "MISI DIJEDA // PAUSED";
  }

  function resetTimer() {
    sfx.blip();
    pauseTimer();
    setPhase(1);
    clearTimeout(glitchBannerTimeout);
    if (glitchAlertBanner) glitchAlertBanner.style.display = "none";
    updateTimerUI();
  }

  if (btnStartTimer) btnStartTimer.addEventListener("click", startTimer);
  if (btnPauseTimer) btnPauseTimer.addEventListener("click", pauseTimer);
  if (btnResetTimer) btnResetTimer.addEventListener("click", resetTimer);
  if (btnDismissGlitch) {
    btnDismissGlitch.addEventListener("click", () => {
      sfx.blip();
      clearTimeout(glitchBannerTimeout);
      if (glitchAlertBanner) glitchAlertBanner.style.display = "none";
    });
  }
  if (btnFinishExploration) {
    btnFinishExploration.addEventListener("click", () => {
      sfx.phaseAlert();
      setPhase(2);
    });
  }

  // ==========================================================================
  // 6. MULTIPLE CHOICE QUESTIONS (PILIHAN GANDA) ENGINE & SUBMISSION
  // ==========================================================================

  function renderMcqQuestions(posNum) {
    const config = POS_CONFIG[posNum];
    userMcqAnswers = {};
    isMcqSubmitted = false;

    const qContainer = document.getElementById("questionsContainer");
    const resBox = document.getElementById("mcqResultBox");
    const submitBtn = document.getElementById("btnSubmitMcq");

    if (resBox) resBox.style.display = "none";
    if (submitBtn) {
      submitBtn.style.display = "inline-flex";
      submitBtn.disabled = false;
    }

    if (!qContainer) return;

    qContainer.innerHTML = config.questions.map(q => `
      <div class="mcq-question-card" id="card_${q.id}">
        <div class="mcq-q-header">
          <span class="mcq-q-badge">SOAL 0${q.no}</span>
          <span class="mcq-points-badge">[BOBOT: MAKS ${q.points} POIN]</span>
        </div>
        <div class="mcq-q-text">${q.text}</div>
        <div class="mcq-options-list" id="optList_${q.id}">
          ${q.options.map(opt => `
            <div class="mcq-option-item" data-qid="${q.id}" data-key="${opt.key}">
              <span class="mcq-opt-key">${opt.key}</span>
              <span class="mcq-opt-text">${opt.text}</span>
              <span class="mcq-opt-pts">[+${opt.score} Pts]</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");

    // Bind option click
    qContainer.querySelectorAll(".mcq-option-item").forEach(item => {
      item.addEventListener("click", () => {
        if (isMcqSubmitted) return;

        // Auto-start timer if user begins answering options directly while on standby
        if (!isRunning && secondsLeft === PHASE_DURATION) {
          startTimer();
        }

        const qid = item.dataset.qid;
        const key = item.dataset.key;
        userMcqAnswers[qid] = key;
        sfx.blip();

        const card = document.getElementById(`card_${qid}`);
        if (card) {
          card.querySelectorAll(".mcq-option-item").forEach(el => el.classList.remove("selected"));
          item.classList.add("selected");
        }
      });
    });
  }

  function submitMcqAnswers() {
    if (isMcqSubmitted) return;
    const config = POS_CONFIG[currentPos];
    let totalScore = 0;
    isMcqSubmitted = true;

    config.questions.forEach(q => {
      const selectedKey = userMcqAnswers[q.id];
      const selectedOpt = q.options.find(o => o.key === selectedKey);
      const earned = selectedOpt ? (selectedOpt.score || 0) : 0;
      totalScore += earned;

      const card = document.getElementById(`card_${q.id}`);
      if (card) {
        const optList = card.querySelector(".mcq-options-list");
        if (optList) optList.classList.add("is-submitted");

        card.querySelectorAll(".mcq-option-item").forEach(item => {
          const optKey = item.dataset.key;
          const optData = q.options.find(o => o.key === optKey);
          const optScore = optData ? (optData.score || 0) : 0;

          // Reveal point badge on all options so students learn the evaluation
          const ptsSpan = item.querySelector(".mcq-opt-pts");
          if (ptsSpan) {
            ptsSpan.textContent = optScore > 0 ? `+${optScore} Pts` : `0 Pts`;
          }

          if (optScore === 50) {
            // Optimal answer is always highlighted green
            item.classList.add("is-correct");
          } else if (optKey === selectedKey) {
            // Selected option styling based on tiered score
            if (optScore >= 25) {
              item.classList.add("is-partial"); // Yellow/amber for strong partial
            } else if (optScore > 0) {
              item.classList.add("is-minor"); // Orange for minor partial
            } else {
              item.classList.add("is-wrong"); // Red for 0 pts
            }
          }
        });
      }
    });

    pauseTimer();

    const uniqueCode = generateUniqueCode(currentTeam, currentPos);

    const submitBtn = document.getElementById("btnSubmitMcq");
    const resBox = document.getElementById("mcqResultBox");
    const scoreDisp = document.getElementById("mcqScoreDisplay");
    const codeDisp = document.getElementById("mcqCodeDisplay");

    if (submitBtn) submitBtn.style.display = "none";
    if (scoreDisp) scoreDisp.textContent = `${totalScore} / 100 POIN`;
    if (codeDisp) codeDisp.textContent = uniqueCode;
    if (resBox) resBox.style.display = "flex";

    // Auto scroll CRT 2 to show score verification and unique code
    const crt2Scrollable = document.querySelector(".crt-screen-scrollable");
    if (crt2Scrollable) {
      setTimeout(() => {
        crt2Scrollable.scrollTo({ top: crt2Scrollable.scrollHeight, behavior: "smooth" });
      }, 100);
    }

    // Simpan ke storage dan sinkronisasi
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newSub = {
      id: `${currentTeam}_pos${currentPos}`,
      team: currentTeam,
      teamName: TEAMS.find(t => t.id === currentTeam)?.name || currentTeam,
      pos: currentPos,
      time: timeStr,
      code: uniqueCode,
      webScore: totalScore,
      paperScore: 0,
      totalScore: totalScore
    };

    const subs = getSubmissions().filter(s => s.id !== newSub.id);
    subs.push(newSub);
    saveSubmissions(subs, newSub);

    if (totalScore >= 80) {
      sfx.victoryFanfare();
    } else if (totalScore >= 50) {
      sfx.phaseAlert();
    } else {
      sfx.fail();
    }
  }

  // Clean and complete reset function for rotating to a new group
  function resetGroupSession(posNum) {
    // 1. Reset timer & glitch banner
    resetTimer();

    // 2. Reset MCQ state and DOM
    userMcqAnswers = {};
    isMcqSubmitted = false;

    const submitBtn = document.getElementById("btnSubmitMcq");
    const resBox = document.getElementById("mcqResultBox");
    if (resBox) resBox.style.display = "none";
    if (submitBtn) {
      submitBtn.style.display = "inline-flex";
      submitBtn.disabled = false;
    }

    // 3. Reset minigames state per pos
    robotSteps = JSON.parse(JSON.stringify(INITIAL_STEPS));
    if (typeof renderRobotSteps === "function") renderRobotSteps();
    if (robotAvatar) robotAvatar.innerHTML = ICON_ROBOT_CHIP;
    if (robotStatusText) {
      robotStatusText.textContent = "WAITING_SEQUENCE";
      robotStatusText.style.color = "var(--pixel-yellow)";
    }
    if (robotConsole) robotConsole.textContent = "> Sistem di-reset. Susun 6 baris logika di bawah, lalu tekan tombol TEST EXECUTION.";

    eliminatedVaults.clear();
    if (typeof renderVaults === "function") renderVaults();

    if (typeof displayEmail === "function") displayEmail(1);
    if (typeof resetPos4Simulator === "function") resetPos4Simulator();

    // 4. Reset team selection card highlights
    if (teamSelectGrid) {
      teamSelectGrid.querySelectorAll(".team-glass-card").forEach(c => c.classList.remove("selected-card"));
    }

    // 5. Re-render questions fresh
    renderMcqQuestions(posNum);

    // 6. Scroll CRT 2 back to top
    const crt2Scrollable = document.querySelector(".crt-screen-scrollable");
    if (crt2Scrollable) {
      crt2Scrollable.scrollTop = 0;
    }
  }

  function handleNextGroupRotation() {
    const teamObj = TEAMS.find(t => t.id === currentTeam);
    const teamLabel = teamObj ? teamObj.name.toUpperCase() : currentTeam.toUpperCase();
    showCyberConfirm(
      "🔄 ROTASI KELOMPOK",
      `Selesaikan sesi untuk kelompok ${teamLabel} dan siapkan pos untuk kelompok berikutnya?`,
      () => {
        // 1. Reset full session state for the next group
        resetGroupSession(currentPos);

        // 2. Kembali ke Layar 1 (Welcome in Pos) untuk kelompok maba berikutnya!
        showWelcomeScreen(currentPos);
      },
      "warning"
    );
  }

  if (btnSubmitMcq) {
    btnSubmitMcq.addEventListener("click", () => {
      const config = POS_CONFIG[currentPos];
      if (config && config.questions) {
        const answeredCount = Object.keys(userMcqAnswers).length;
        if (answeredCount < config.questions.length) {
          sfx.fail();
          showCyberAlert(
            "JAWABAN BELUM LENGKAP",
            `Harap pilih jawaban untuk semua ${config.questions.length} soal sebelum mengirim evaluasi resmi!`,
            "warning"
          );
          return;
        }
      }
      sfx.coinStart();
      submitMcqAnswers();
    });
  }

  if (btnNextGroupRotation) {
    btnNextGroupRotation.addEventListener("click", handleNextGroupRotation);
  }

  if (btnCompletePos) {
    btnCompletePos.addEventListener("click", handleNextGroupRotation);
  }

  // ==========================================================================
  // 7. POS RENDERING LOGIC
  // ==========================================================================

  function renderPos(posNum) {
    currentPos = posNum;
    const config = POS_CONFIG[posNum];
    if (!config) return;

    if (stationTitleMain) {
      stationTitleMain.textContent = config.title.toUpperCase();
    }
    if (stationRoutePill) {
      stationRoutePill.textContent = config.route;
    }

    if (missionTabBtns) {
      missionTabBtns.forEach(btn => {
        btn.classList.toggle("active", parseInt(btn.dataset.pos) === posNum);
      });
    }

    Object.keys(posContainers).forEach(key => {
      if (posContainers[key]) {
        posContainers[key].style.display = parseInt(key) === posNum ? "block" : "none";
      }
    });

    if (casePosTag) casePosTag.textContent = config.tag;
    if (caseHeading) caseHeading.textContent = config.title;
    if (caseStory) caseStory.innerHTML = config.story;
    if (challengePosLabel) challengePosLabel.textContent = `TANTANGAN ${config.tag}`;

    // Render Multiple Choice Questions (Pilgan 100 Poin)
    renderMcqQuestions(posNum);

    if (modalKunciJawaban) modalKunciJawaban.innerHTML = config.kunci;
    if (modalPhysicalClues) modalPhysicalClues.innerHTML = `<strong>LOKASI &amp; INSTRUKSI:</strong> ${config.physicalClue}`;

    if (posNum === 2 && typeof renderRobotSteps === "function") renderRobotSteps();
    if (posNum === 3 && typeof renderVaults === "function") renderVaults();

    // Synchronize CRT 2 height with CRT 1 so only CRT 2 is scrollable
    syncCrtHeights();
    setTimeout(syncCrtHeights, 50);
  }

  // ==========================================================================
  // DUAL CRT MONITOR HEIGHT LOCK & INDEPENDENT SCROLL SYNC
  // ==========================================================================
  function syncCrtHeights() {
    if (!crt1MonitorFrame || !crt2MonitorFrame) return;

    if (window.innerWidth < 992) {
      crt2MonitorFrame.style.height = "";
      crt2MonitorFrame.style.maxHeight = "520px";
      return;
    }

    // Get true rendered height of CRT 1 (left side)
    const h1 = crt1MonitorFrame.offsetHeight;
    if (h1 > 280) {
      crt2MonitorFrame.style.height = `${h1}px`;
      crt2MonitorFrame.style.maxHeight = `${h1}px`;
    }
  }

  window.addEventListener("resize", () => {
    syncCrtHeights();
  });

  if (window.ResizeObserver && crt1MonitorFrame) {
    const crtResizeObserver = new ResizeObserver(() => {
      syncCrtHeights();
    });
    crtResizeObserver.observe(crt1MonitorFrame);
  }

  teamSelect.addEventListener("change", (e) => {
    currentTeam = e.target.value;
    const selectedIdx = TEAMS.findIndex(t => t.id === currentTeam);
    sfx.teamSelectLock(currentTeam, selectedIdx);
    const selectedObj = TEAMS.find(t => t.id === currentTeam);
    if (selectedObj) {
      teamBadge.textContent = selectedObj.label;
      teamBadge.style.color = selectedObj.color;
    }
  });

  const ICON_SPEAKER = `<svg class="h-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.21-1.61.572-2.327.234-.847 1.058-1.354 1.938-1.354h2.24Z" /></svg>`;
  const ICON_SPEAKER_MUTED = `<svg class="h-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.21-1.61.572-2.327.234-.847 1.058-1.354 1.938-1.354h2.24Z" /></svg>`;

  btnAudioToggle.addEventListener("click", () => {
    sfx.enabled = !sfx.enabled;
    audioIcon.innerHTML = sfx.enabled ? ICON_SPEAKER : ICON_SPEAKER_MUTED;
    btnAudioToggle.style.color = sfx.enabled ? "#fff" : "#ff758f";
    if (sfx.enabled) sfx.blip();
  });

  btnFullscreen.addEventListener("click", () => {
    sfx.blip();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  });

  // ==========================================================================
  // 8. POS 1: WEBMAIL LOGIC
  // ==========================================================================
  const mailSender = document.getElementById("mailSender");
  const mailSubject = document.getElementById("mailSubject");
  const mailSecurityBadge = document.getElementById("mailSecurityBadge");
  const mailBody = document.getElementById("mailBody");
  const mailActionCard = document.getElementById("mailActionCard");
  const mailEntries = document.querySelectorAll(".mail-entry-item");

  function displayEmail(emailId) {
    if (!mailSender) return;
    const data = EMAILS_DATA.find(e => e.id === emailId);
    if (!data) return;

    mailEntries.forEach(item => {
      item.classList.toggle("active", parseInt(item.dataset.emailId) === emailId);
    });

    mailSender.innerHTML = data.sender;
    mailSubject.textContent = data.subject;
    mailSecurityBadge.textContent = data.security;
    mailSecurityBadge.style.color = data.securityColor;
    mailBody.textContent = data.body;

    if (data.isPhishing) {
      if (mailActionCard) mailActionCard.style.display = "flex";
    } else {
      if (mailActionCard) mailActionCard.style.display = "none";
    }
  }

  mailEntries.forEach(item => {
    item.addEventListener("click", () => {
      sfx.blip();
      const id = parseInt(item.dataset.emailId);
      displayEmail(id);
    });
  });

  // ==========================================================================
  // 9. POS 2: ROBOT BARISTA LOGIC
  // ==========================================================================

  function renderRobotSteps() {
    if (!robotStepsList) return;
    robotStepsList.innerHTML = robotSteps.map((step, idx) => `
      <div class="pixel-step-card" data-index="${idx}">
        <div class="pixel-step-num">${idx + 1}</div>
        <div class="pixel-step-text">${step.text}</div>
        <div class="pixel-step-moves">
          <button class="btn-move-arrow btn-step-up" ${idx === 0 ? "disabled" : ""}>▲</button>
          <button class="btn-move-arrow btn-step-down" ${idx === robotSteps.length - 1 ? "disabled" : ""}>▼</button>
        </div>
      </div>
    `).join("");

    robotStepsList.querySelectorAll(".btn-step-up").forEach(btn => {
      btn.addEventListener("click", (e) => {
        sfx.blip();
        const card = e.target.closest(".pixel-step-card");
        const idx = parseInt(card.dataset.index);
        if (idx > 0) {
          const temp = robotSteps[idx];
          robotSteps[idx] = robotSteps[idx - 1];
          robotSteps[idx - 1] = temp;
          renderRobotSteps();
        }
      });
    });

    robotStepsList.querySelectorAll(".btn-step-down").forEach(btn => {
      btn.addEventListener("click", (e) => {
        sfx.blip();
        const card = e.target.closest(".pixel-step-card");
        const idx = parseInt(card.dataset.index);
        if (idx < robotSteps.length - 1) {
          const temp = robotSteps[idx];
          robotSteps[idx] = robotSteps[idx + 1];
          robotSteps[idx + 1] = temp;
          renderRobotSteps();
        }
      });
    });
  }

  function simulateRobotRun() {
    const textSteps = robotSteps.map(s => s.text);
    const posNyalakanAir = textSteps.indexOf("Nyalakan pemanas air");
    const posTaruhCangkir = textSteps.indexOf("Taruh cangkir kosong di tatakan mesin");
    const posBubuk = textSteps.indexOf("Masukkan bubuk kopi ke cangkir");
    const posTuangAir = textSteps.indexOf("Tuangkan air panas mendidih");
    const posAduk = textSteps.indexOf("Aduk larutan kopi hingga rata");
    const posSajikan = textSteps.indexOf("Sajikan cangkir kopi ke pelanggan");

    let isSuccess = true;
    let errorLog = "";

    if (posTaruhCangkir > posBubuk || posTaruhCangkir > posTuangAir) {
      isSuccess = false;
      errorLog = "[FATAL_CRASH]: Robot menuangkan bubuk/air panas saat cangkir BELUM ada di tatakan! Lantai basah kuyup!";
    } else if (posNyalakanAir > posTuangAir) {
      isSuccess = false;
      errorLog = "[LOGICAL_GLITCH]: Air dituangkan sebelum pemanas air dinyalakan! Kopi disajikan dengan air mentah dingin!";
    } else if (posAduk > posSajikan && posSajikan !== 5) {
      isSuccess = false;
      errorLog = "[SEQUENCE_ERR]: Cangkir disajikan ke pelanggan sebelum kopi diaduk!";
    } else if (posSajikan !== 5) {
      isSuccess = false;
      errorLog = "[SEQUENCE_ERR]: Menyajikan cangkir harus menjadi langkah paling terakhir!";
    }

    if (isSuccess && posTaruhCangkir < posBubuk && posBubuk < posTuangAir && posTuangAir < posAduk && posAduk < posSajikan) {
      sfx.victoryFanfare();
      robotAvatar.innerHTML = ICON_ROBOT_SUCCESS;
      robotStatusText.textContent = "SUCCESS_200_OK";
      robotStatusText.style.color = "var(--pixel-green)";
      robotConsole.innerHTML = `> [STATUS 200]: Algoritma dieksekusi sempurna! Kopi nikmat siap disajikan. Skor logika 100%!`;
    } else {
      sfx.glitchBoom();
      robotAvatar.innerHTML = ICON_ROBOT_CRASH;
      robotStatusText.textContent = "CRASH_FAIL";
      robotStatusText.style.color = "var(--mecha-red-bright)";
      robotConsole.innerHTML = `> ${errorLog || "[ERROR]: Urutan tidak masuk akal! Periksa kembali alur sebab-akibat proses pembuatan kopi!"}`;
    }
  }

  if (btnRunRobot) btnRunRobot.addEventListener("click", simulateRobotRun);
  if (btnResetSteps) {
    btnResetSteps.addEventListener("click", () => {
      sfx.blip();
      robotSteps = JSON.parse(JSON.stringify(INITIAL_STEPS));
      if (robotAvatar) robotAvatar.innerHTML = ICON_ROBOT_CHIP;
      if (robotStatusText) {
        robotStatusText.textContent = "WAITING_SEQUENCE";
        robotStatusText.style.color = "var(--pixel-yellow)";
      }
      if (robotConsole) robotConsole.textContent = "> Sistem di-reset. Susun 6 baris logika di bawah, lalu tekan tombol TEST EXECUTION.";
      renderRobotSteps();
    });
  }

  // ==========================================================================
  // 10. POS 3: DIGITAL VAULTS LOGIC
  // ==========================================================================

  function renderVaults() {
    if (!vaultsGrid) return;
    vaultsGrid.innerHTML = VAULTS_DATA.map(v => {
      const isEliminated = eliminatedVaults.has(v.id);
      return `
        <div class="pixel-vault-cell ${isEliminated ? "eliminated" : ""}" data-id="${v.id}">
          <div class="vault-cell-title">
            <span style="display: inline-flex; align-items: center; gap: 4px;">${ICON_ARCHIVE} ${v.label}</span>
            <span style="font-size: 0.7rem; color: ${isEliminated ? '#ff758f' : 'var(--pixel-green)'};">
              ${isEliminated ? '[OFF]' : '[LOCKED]'}
            </span>
          </div>
          <div class="vault-cell-meta">
            <div>SIZE: <strong>${v.size} MB</strong></div>
            <div>DATE: <strong>${v.day}</strong></div>
            <div>TYPE: ${v.type}</div>
          </div>
          <div class="vault-cell-buttons">
            <button class="btn-vault-mini btn-inspect-v">INSPEK</button>
            <button class="btn-vault-mini btn-elim-v">${isEliminated ? 'BATAL' : 'ELIMINASI'}</button>
          </div>
        </div>
      `;
    }).join("");

    vaultsGrid.querySelectorAll(".btn-elim-v").forEach(btn => {
      btn.addEventListener("click", (e) => {
        sfx.blip();
        const card = e.target.closest(".pixel-vault-cell");
        const id = parseInt(card.dataset.id);
        if (eliminatedVaults.has(id)) {
          eliminatedVaults.delete(id);
        } else {
          eliminatedVaults.add(id);
        }
        renderVaults();
      });
    });

    vaultsGrid.querySelectorAll(".btn-inspect-v").forEach(btn => {
      btn.addEventListener("click", (e) => {
        sfx.blip();
        const card = e.target.closest(".pixel-vault-cell");
        const id = parseInt(card.dataset.id);
        const vault = VAULTS_DATA.find(v => v.id === id);
        showCyberAlert(
          `ARSIP METADATA // ${vault.label}`,
          `• Ukuran File: ${vault.size} MB\n• Hari Pembuatan: ${vault.day}\n• Format File: ${vault.type}\n• Keterangan Bukti: ${vault.desc}`,
          "info"
        );
      });
    });
  }

  if (btnResetVaults) {
    btnResetVaults.addEventListener("click", () => {
      sfx.blip();
      eliminatedVaults.clear();
      renderVaults();
    });
  }

  // ==========================================================================
  // 11. LEADERBOARD & CENTRAL ADMIN ENGINE
  // ==========================================================================

  function renderLeaderboard() {
    const subs = getSubmissions();
    const teamStats = TEAMS.map(team => {
      const teamSubs = subs.filter(s => s.team === team.id);
      let webTotal = 0;
      let paperTotal = 0;
      teamSubs.forEach(s => {
        webTotal += s.webScore || 0;
        paperTotal += (s.paperScore || 0) * 5;
      });
      return {
        id: team.id,
        name: team.name,
        color: team.color,
        webTotal,
        paperTotal,
        totalCombined: webTotal + paperTotal,
        posDone: teamSubs.length
      };
    });

    teamStats.sort((a, b) => b.totalCombined - a.totalCombined);

    const leaderboardRowsHtml = teamStats.map((st, idx) => {
      let badge = `<span class="rank-badge">${idx + 1}</span>`;
      if (idx === 0) badge = `<span class="rank-badge rank-1">#1</span>`;
      if (idx === 1) badge = `<span class="rank-badge rank-2">#2</span>`;
      if (idx === 2) badge = `<span class="rank-badge rank-3">#3</span>`;

      const paperDisplay = st.paperTotal > 0
        ? `${st.paperTotal} Pts`
        : `<span style="color: #64748b; font-size: 0.72rem;">0 Pts (Pending)</span>`;

      return `
        <tr>
          <td>${badge}</td>
          <td><strong style="color: ${st.color};">${st.name}</strong></td>
          <td>${st.webTotal} Pts</td>
          <td>${paperDisplay}</td>
          <td><strong style="color: var(--pixel-yellow); font-size: 1.05rem;">${st.totalCombined}</strong></td>
          <td>${st.posDone} / 4 Pos</td>
        </tr>
      `;
    }).join("");

    if (leaderboardTbody) leaderboardTbody.innerHTML = leaderboardRowsHtml;
    if (hubLeaderboardTbody) hubLeaderboardTbody.innerHTML = leaderboardRowsHtml;
  }

  // Real-time synchronization across browser tabs (Instant offline multi-tab sync!)
  window.addEventListener("storage", (e) => {
    if (e.key === "adhigana_submissions") {
      renderLeaderboard();
      renderVerifikasiTable();
    }
  });

  function renderVerifikasiTable() {
    if (!verifikasiTbody) return;
    const subs = getSubmissions();
    if (subs.length === 0) {
      verifikasiTbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #94a3b8; padding: 12px;">Belum ada data submit dari pos mana pun.</td></tr>`;
      return;
    }

    verifikasiTbody.innerHTML = subs.map(s => {
      return `
        <tr style="border-bottom: 1px solid #1a2a40;">
          <td style="padding: 6px;">${s.time || '-'}</td>
          <td style="padding: 6px;"><strong style="color: var(--pixel-cyan);">${s.teamName}</strong></td>
          <td style="padding: 6px;">Pos ${s.pos}</td>
          <td style="padding: 6px;"><code style="color: var(--pixel-yellow); background: #040810; padding: 2px 4px;">${s.code}</code></td>
          <td style="padding: 6px;">${s.webScore} Pts</td>
          <td style="padding: 6px;">
            <select class="select-paper-score" data-id="${s.id}" style="background: #000; color: #fff; border: 1px solid var(--pixel-cyan); font-family: var(--font-pixel); font-size: 0.72rem;">
              <option value="0" ${(!s.paperScore || s.paperScore === 0) ? 'selected' : ''}>0 (Pending Juri)</option>
              <option value="5" ${s.paperScore === 5 ? 'selected' : ''}>5 (Sangat Logis - +25 Pts)</option>
              <option value="4" ${s.paperScore === 4 ? 'selected' : ''}>4 (Logis & Jelas - +20 Pts)</option>
              <option value="3" ${s.paperScore === 3 ? 'selected' : ''}>3 (Standar - +15 Pts)</option>
              <option value="2" ${s.paperScore === 2 ? 'selected' : ''}>2 (Kurang Jelas - +10 Pts)</option>
              <option value="1" ${s.paperScore === 1 ? 'selected' : ''}>1 (Asal-asalan - +5 Pts)</option>
            </select>
          </td>
          <td style="padding: 6px;">
            <button class="btn-save-paper-score pixel-btn-yellow" data-id="${s.id}" style="padding: 2px 8px; font-size: 0.7rem; cursor: pointer;">
              SIMPAN
            </button>
          </td>
        </tr>
      `;
    }).join("");

    verifikasiTbody.querySelectorAll(".btn-save-paper-score").forEach(btn => {
      btn.addEventListener("click", (e) => {
        sfx.blip();
        const subId = e.target.dataset.id;
        const select = verifikasiTbody.querySelector(`.select-paper-score[data-id="${subId}"]`);
        const newScore = parseInt(select.value) || 0;

        const subs = getSubmissions();
        const target = subs.find(s => s.id === subId);
        if (target) {
          target.paperScore = newScore;
          target.totalScore = target.webScore + (newScore * 5);
          saveSubmissions(subs, target);
          sfx.coinStart();
          showCyberAlert(
            "INPUT NILAI BERHASIL",
            `Nilai kertas untuk ${target.teamName} (Pos ${target.pos}) berhasil disimpan ke sistem rekap!`,
            "success"
          );
        }
      });
    });
  }

  // Export CSV
  if (btnExportCSV) {
    btnExportCSV.addEventListener("click", () => {
      sfx.coinStart();
      const subs = getSubmissions();
      if (subs.length === 0) {
        showCyberAlert("DATA KOSONG", "Belum ada data submit penilaian untuk diekspor!", "warning");
        return;
      }

      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Timestamp,Nama Kelompok,Pos,Kode Unik,Skor Web,Skor Kertas (1-5),Total Poin Pos\n";

      subs.forEach(s => {
        csvContent += `${s.time || ''},${s.teamName},Pos ${s.pos},${s.code},${s.webScore},${s.paperScore || 0},${s.totalScore || 0}\n`;
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `rekap_studi_kasus_adhigana_2026_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Export JSON (Clean backup for multi-laptop sync)
  if (btnExportJSON) {
    btnExportJSON.addEventListener("click", () => {
      sfx.coinStart();
      const subs = getSubmissions();
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(subs, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `adhigana_pos${currentPos}_backup_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  // Import & Merge Data (Offline sync from other laptops)
  if (btnTriggerImport && importFileInput) {
    btnTriggerImport.addEventListener("click", () => {
      importFileInput.click();
    });

    importFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const content = event.target.result;
          let incomingSubs = [];

          if (file.name.endsWith(".json")) {
            incomingSubs = JSON.parse(content);
          } else if (file.name.endsWith(".csv")) {
            const lines = content.split("\n").filter(l => l.trim().length > 0);
            for (let i = 1; i < lines.length; i++) {
              const cols = lines[i].split(",").map(c => c.trim());
              if (cols.length >= 7) {
                const teamName = cols[1];
                const teamObj = TEAMS.find(t => t.name.toLowerCase() === teamName.toLowerCase()) || { id: teamName.toLowerCase(), name: teamName };
                const posNum = parseInt(cols[2].replace(/\D/g, "")) || 1;
                incomingSubs.push({
                  id: `${teamObj.id}_pos${posNum}`,
                  team: teamObj.id,
                  teamName: teamObj.name,
                  pos: posNum,
                  time: cols[0],
                  code: cols[3],
                  webScore: parseInt(cols[4]) || 0,
                  paperScore: parseInt(cols[5]) || 0,
                  totalScore: parseInt(cols[6]) || 0
                });
              }
            }
          }

          if (!Array.isArray(incomingSubs) || incomingSubs.length === 0) {
            throw new Error("File tidak memuat data penilaian yang valid.");
          }

          const currentSubs = getSubmissions();
          const merged = [...currentSubs];
          let addedCount = 0;
          let updatedCount = 0;

          incomingSubs.forEach(inSub => {
            const existingIdx = merged.findIndex(m => m.id === inSub.id);
            if (existingIdx >= 0) {
              merged[existingIdx] = inSub;
              updatedCount++;
            } else {
              merged.push(inSub);
              addedCount++;
            }
          });

          saveSubmissions(merged);
          sfx.victoryFanfare();
          showCyberAlert(
            "SINKRONISASI SELESAI",
            `Sinkronisasi data penilaian berhasil!\n• Data baru: ${addedCount}\n• Data diperbarui: ${updatedCount}\n\nTotal penilaian di rekap: ${merged.length}`,
            "success"
          );
        } catch (err) {
          sfx.glitchBoom();
          showCyberAlert("GAGAL IMPOR DATA", "Terjadi kesalahan saat memproses file JSON:\n" + err.message, "danger");
        }
        importFileInput.value = "";
      };
      reader.readAsText(file);
    });
  }

  // Hard Reset Protection (Requires typing text)
  if (btnResetAllData) {
    btnResetAllData.addEventListener("click", () => {
      sfx.glitchBoom();
      showCyberPrompt(
        "PERINGATAN KERAS!",
        "Seluruh data penilaian dan rekap di laptop ini akan DIHAPUS PERMANEN!\n\nUntuk konfirmasi, ketik: HAPUS2026\n(Bisa huruf besar/kecil, tanpa perlu tanda petik)",
        "HAPUS2026",
        (confirmInput) => {
          const clean = (confirmInput || "")
            .trim()
            .replace(/['"`]/g, "")
            .replace(/\s+/g, "")
            .toUpperCase();

          if (clean === "HAPUS2026" || clean === "HAPUS") {
            localStorage.removeItem("adhigana_submissions");
            saveSubmissions([]);
            showCyberAlert("DATA DIBERSIHKAN", "Seluruh data penilaian dan rekap telah di-reset bersih.", "success");
          } else {
            showCyberAlert("AKSES DIBATALKAN", "Konfirmasi dibatalkan: Teks konfirmasi tidak sesuai. Ketik HAPUS2026.", "warning");
          }
        },
        "danger"
      );
    });
  }

  // ==========================================================================
  // PIN PROTECTION MODAL ENGINE (Default PIN: 2026)
  // ==========================================================================
  let isPanitiaUnlocked = false;
  let targetPendingModal = null;

  function openProtectedModal(modalType) {
    if (isPanitiaUnlocked) {
      if (modalType === "rubrik" && rubrikModal) rubrikModal.classList.add("open");
      else if (modalType === "admin" && adminModal) {
        renderLeaderboard();
        renderVerifikasiTable();
        adminModal.classList.add("open");
      }
    } else {
      targetPendingModal = modalType;
      if (pinInput) pinInput.value = "";
      if (pinErrorMsg) pinErrorMsg.style.display = "none";
      if (pinModal) {
        pinModal.classList.add("open");
        setTimeout(() => { if (pinInput) pinInput.focus(); }, 150);
      }
    }
  }

  if (btnSubmitPin) {
    btnSubmitPin.addEventListener("click", () => {
      if (pinInput && pinInput.value === "2026") {
        isPanitiaUnlocked = true;
        if (pinModal) pinModal.classList.remove("open");
        sfx.coinStart();
        if (targetPendingModal === "rubrik" && rubrikModal) {
          rubrikModal.classList.add("open");
        } else if (targetPendingModal === "admin" && adminModal) {
          renderLeaderboard();
          renderVerifikasiTable();
          adminModal.classList.add("open");
        }
      } else {
        sfx.glitchBoom();
        if (pinErrorMsg) pinErrorMsg.style.display = "block";
        if (pinInput) {
          pinInput.value = "";
          pinInput.focus();
        }
      }
    });
  }

  if (pinInput) {
    pinInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && btnSubmitPin) btnSubmitPin.click();
    });
  }

  if (btnClosePinModal) {
    btnClosePinModal.addEventListener("click", () => {
      sfx.blip();
      if (pinModal) pinModal.classList.remove("open");
    });
  }
  if (pinModal) {
    pinModal.addEventListener("click", (e) => {
      if (e.target === pinModal) pinModal.classList.remove("open");
    });
  }

  // Protected Modal open buttons
  if (btnOpenRubrik) {
    btnOpenRubrik.addEventListener("click", () => {
      sfx.blip();
      openProtectedModal("rubrik");
    });
  }
  if (btnCloseRubrik) {
    btnCloseRubrik.addEventListener("click", () => {
      sfx.blip();
      if (rubrikModal) rubrikModal.classList.remove("open");
    });
  }
  if (rubrikModal) {
    rubrikModal.addEventListener("click", (e) => {
      if (e.target === rubrikModal) rubrikModal.classList.remove("open");
    });
  }

  if (btnOpenAdmin) {
    btnOpenAdmin.addEventListener("click", () => {
      sfx.blip();
      openProtectedModal("admin");
    });
  }
  const btnHubOpenAdmin = document.getElementById("btnHubOpenAdmin");
  if (btnHubOpenAdmin) {
    btnHubOpenAdmin.addEventListener("click", () => {
      sfx.blip();
      openProtectedModal("admin");
    });
  }
  if (btnCloseAdmin) {
    btnCloseAdmin.addEventListener("click", () => {
      sfx.blip();
      if (adminModal) adminModal.classList.remove("open");
    });
  }
  if (adminModal) {
    adminModal.addEventListener("click", (e) => {
      if (e.target === adminModal) adminModal.classList.remove("open");
    });
  }

  // Station Bar Event Handlers
  if (btnSwitchTeamBar) {
    btnSwitchTeamBar.addEventListener("click", () => {
      sfx.blip();
      showCyberConfirm(
        "⇄ GANTI KELOMPOK",
        "Pilih kelompok baru untuk pos ini? Sesi saat ini akan di-reset bersih untuk kelompok baru.",
        () => {
          resetGroupSession(currentPos);
          showTeamSelectScreen(currentPos);
        },
        "info"
      );
    });
  }

  if (btnReturnToHubBar) {
    btnReturnToHubBar.addEventListener("click", () => {
      showCyberConfirm(
        "🚪 KELUAR KE MENU PORTAL",
        "Apakah Anda yakin ingin keluar dari pos ini dan kembali ke Menu Portal Utama?",
        () => {
          window.location.hash = "#/adhigana";
        },
        "info"
      );
    });
  }

  // ==========================================================================
  // POS 4: AI PARSER INTERACTIVE SIMULATOR
  // ==========================================================================
  function resetPos4Simulator() {
    if (cardBudi) {
      cardBudi.className = "candidate-hud-panel rejected-panel";
      cardBudi.style.borderColor = "";
      stampBudi.className = "hud-stamp-badge stamp-fail";
      stampBudi.textContent = "DISKUALIFIKASI";
      budiFileTag.textContent = "cv_budi.docx";
      terminalBudi.style.borderColor = "";
      terminalBudi.style.color = "";
      terminalBudi.innerHTML = `<strong>[PARSER ERROR 415]:</strong><br>Regex engine hanya diprogram membaca format .PDF. Format .DOCX gagal diekstrak -> Skor 0 otomatis -> Ditolak.`;
      aiConsoleOutput.textContent = `> Klik tombol "TEST PARSE BERKAS" pada salah satu kandidat di atas untuk melihat bagaimana sistem otomatisasi AI mengevaluasi berkas mereka.`;
    }
  }

  if (btnSimDocx) {
    btnSimDocx.addEventListener("click", () => {
      sfx.glitchBoom();
      resetPos4Simulator();
      aiConsoleOutput.innerHTML = `
        <span style="color: var(--mecha-red-bright); font-weight: 800;">[EXECUTION TEST: cv_budi.docx]</span><br>
        > Step 1: Ingesting file 'cv_budi.docx' (MIME: application/vnd.openxmlformats...)<br>
        > Step 2: Testing Regex Pattern: /^.*\\.pdf$/i -> <strong style="color: #ff758f;">MATCH FAILED (FALSE)</strong><br>
        > Step 3: Text Extractor Aborted! Extracted Fields = { IPK: NULL, Prestasi: NULL }<br>
        > Result: Score = 0/100 -> Status: DISQUALIFIED BY RIGID ALGORITHM RULE!
      `;
    });
  }

  if (btnSimPdf) {
    btnSimPdf.addEventListener("click", () => {
      sfx.victoryFanfare();
      cardBudi.className = "candidate-hud-panel";
      cardBudi.style.borderColor = "var(--pixel-green)";
      stampBudi.className = "hud-stamp-badge stamp-pass";
      stampBudi.textContent = "LOLOS (PERINGKAT 1)";
      budiFileTag.textContent = "cv_budi.pdf";
      terminalBudi.style.borderColor = "rgba(0,255,136,0.3)";
      terminalBudi.style.color = "#86efac";
      terminalBudi.innerHTML = `<strong>[AI SCORE: 98% (TERTINGGI)]:</strong><br>Format .PDF terverifikasi. IPK 3.92 & Juara 1 Nasional berhasil diparsing -> Lolos Beasiswa Prioritas!`;

      aiConsoleOutput.innerHTML = `
        <span style="color: var(--pixel-green); font-weight: 800;">[SIMULASI FIX: JIKA BUDI MENGUNGGAH FORMAT .PDF]</span><br>
        > Step 1: Ingesting file 'cv_budi.pdf' (MIME: application/pdf)<br>
        > Step 2: Testing Regex Pattern: /^.*\\.pdf$/i -> <strong style="color: var(--pixel-green);">MATCH SUCCESS (TRUE)</strong><br>
        > Step 3: Text Extractor Success: { Nama: 'Budi Santoso', IPK: 3.92, Prestasi: 'Juara 1 Hackathon' }<br>
        > Result: Score = 98/100 -> Status: LOLOS SELEKSI UTAMA! Masalah terpecahkan!
      `;
    });
  }

  document.querySelectorAll(".btn-test-parse").forEach(btn => {
    btn.addEventListener("click", (e) => {
      sfx.blip();
      const cand = e.target.dataset.candidate;
      if (cand === "budi") {
        btnSimDocx.click();
      } else if (cand === "siti") {
        sfx.coinStart();
        aiConsoleOutput.innerHTML = `
          <span style="color: var(--pixel-cyan); font-weight: 800;">[EXECUTION TEST: berkas.pdf (Siti Rahma)]</span><br>
          > Regex Check: /^.*\\.pdf$/i -> MATCH SUCCESS.<br>
          > Parsed: IPK 3.45, Prestasi: Webinar.<br>
          > Result: Score 85% -> STATUS: LOLOS.
        `;
      } else if (cand === "dimas") {
        sfx.coinStart();
        aiConsoleOutput.innerHTML = `
          <span style="color: var(--pixel-cyan); font-weight: 800;">[EXECUTION TEST: cv_dimas.pdf (Dimas Pratama)]</span><br>
          > Regex Check: /^.*\\.pdf$/i -> MATCH SUCCESS.<br>
          > Parsed: IPK 3.50, Prestasi: Panitia.<br>
          > Result: Score 88% -> STATUS: LOLOS.
        `;
      }
    });
  });

  // ==========================================================================
  // 12. BOOTSTRAP & INITIAL ROUTE EXECUTION
  // ==========================================================================
  setPhase(1);
  if (mailSender) displayEmail(1);
  if (robotStepsList) renderRobotSteps();
  if (vaultsGrid) renderVaults();
  renderLeaderboard();
  initFirebaseDatabase();

  // Route Handling without overriding existing URL pathname
  const currentPath = window.location.pathname.toLowerCase();
  const currentHash = window.location.hash.toLowerCase();
  const currentSearch = window.location.search.toLowerCase();
  const initialRoute = `${currentPath} ${currentHash} ${currentSearch}`;

  if (initialRoute.includes("pos1") || initialRoute.includes("pos2") || initialRoute.includes("pos3") || initialRoute.includes("pos4") || initialRoute.includes("leaderboard")) {
    handleRouting();
  } else if (!window.location.hash) {
    window.location.hash = "#/adhigana";
  } else {
    handleRouting();
  }

  console.log("ADHIGANA 2026: Secure Engine, PIN Protection, AI Simulator & Leaderboard Sync Ready.");
});
