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
    { id: "meta", name: "Meta", ip: "Nanda", color: "#b05cfb", label: "[TEAM META]" },
    { id: "gemini", name: "Gemini", ip: "Tania", color: "#00ff88", label: "[TEAM GEMINI]" },
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
      story: "Insiden keamanan siber melanda kampus! Salah satu mahasiswa baru menerima pesan darurat. Sebagai agen penyelidik digital, teliti 3 email di bawah dan temukan ancaman siber yang sedang berlangsung!",
      physicalClue: "Sembunyikan Amplop Merah di bawah meja panitia pos bertuliskan: 'CATATAN FORENSIK: Domain resmi lembaga pemerintah selalu berakhiran .go.id dan kampus berakhiran .ac.id. Waspadai domain bebas berakhiran .xyz!'",
      questions: [
        { no: 1, text: "Berdasarkan 3 email di terminal, tentukan <strong>email mana yang merupakan Phishing / Penipuan</strong>!" },
        { no: 2, text: "Sebutkan minimal <strong>2 kejanggalan logis</strong> dari email tersebut (alamat pengirim, psikologi panik 59 menit, atau tautan palsu)!" },
        { no: 3, text: "Jika akun mahasiswa terlanjur memasukkan data di tautan tersebut, langkah mitigasi darurat apa yang harus diambil?" }
      ],
      kunci: `
        <strong>Kunci & Poin Penilaian Pos 1:</strong><br>
        • <strong>Email Phishing:</strong> Email ke-2 ("[URGENT] KEMENDIKBUD PUSAT: BEASISWA 10 JUTA SEGERA HANGUS!").<br>
        • <strong>Kejanggalan Logis:</strong><br>
          1. <em>Domain Pengirim Palsu:</em> Menggunakan domain liar <code>xyz-domain.com</code>, bukan domain resmi kementerian (<code>.go.id</code>) atau kampus (<code>.ac.id</code>).<br>
          2. <em>Tautan Tidak Sinkron:</em> Tombol mengarah ke alamat berbahaya <code>http://beasiswa-cair-10jt.xyz/login-akun</code> untuk mencuri password.<br>
          3. <em>Psikologi Panik (Social Engineering):</em> Memberi batas waktu palsu "59 Menit" agar korban tergesa-gesa tanpa berpikir kritis.<br>
        • <strong>Mitigasi Darurat:</strong> Segera ganti password SIAKAD, aktifkan 2FA, hubungi helpdesk IT kampus, dan tandai email sebagai phishing.
      `
    },
    2: {
      route: "adhigana/pos2",
      tag: "POS 02 / 04",
      title: "Pos 2: Robot Barista Glitch (Logika Algoritma Dasar)",
      subTitle: "ALGORITHMIC THINKING & SEQUENCE DEBUGGING",
      objective: "Perbaiki 6 baris instruksi robot peracik kopi yang terbalik agar tidak tumpah.",
      threat: "SYSTEM DEADLOCK // HARDWARE FAULT",
      story: "Robot pembuat kopi di kantin mengalami kekacauan alur instruksi! Robot menuangkan kopi ke lantai dan mesinnya overheating. Bantu perbaiki urutan algoritma robot sebelum pelanggan komplain!",
      physicalClue: "Sembunyikan Kertas Biru di balik sandaran kursi pos bertuliskan: 'LOGIKA SEKUANSI: Penampung (cangkir) harus selalu siap di tatakan sebelum zat cair atau bubuk dituangkan!'",
      questions: [
        { no: 1, text: "Susun kembali <strong>6 langkah robot</strong> ke urutan eksekusi yang paling logis (gunakan tombol panah untuk menguji)!" },
        { no: 2, text: "Secara logika, apa yang terjadi jika langkah <em>'Tuangkan air panas mendidih'</em> dieksekusi sebelum <em>'Taruh cangkir di tatakan'</em>?" },
        { no: 3, text: "Mengapa di dunia pemrograman, <strong>urutan eksekusi instruksi (algoritma sekuensial)</strong> tidak boleh terbalik?" }
      ],
      kunci: `
        <strong>Kunci & Poin Penilaian Pos 2:</strong><br>
        • <strong>Urutan Instruksi yang Benar:</strong><br>
          1. Nyalakan pemanas air.<br>
          2. Taruh cangkir kosong di tatakan mesin.<br>
          3. Masukkan bubuk kopi ke cangkir.<br>
          4. Tuangkan air panas mendidih.<br>
          5. Aduk larutan kopi hingga rata.<br>
          6. Sajikan cangkir kopi ke pelanggan.<br>
        • <strong>Analisis Kesalahan Urutan:</strong> Jika air/kopi dituang sebelum cangkir ditaruh di tatakan, cairan panas akan tumpah ke meja/lantai.<br>
        • <strong>Konsep Informatika:</strong> Mesin komputer mengeksekusi instruksi secara harfiah tanpa akal sehat; jika urutan logikanya salah, akan memicu crash/bug fatal.
      `
    },
    3: {
      route: "adhigana/pos3",
      tag: "POS 03 / 04",
      title: "Pos 3: Brankas Dokumen Hilang (Logika Pola & Eliminasi)",
      subTitle: "DATA PATTERN RECOGNITION & ELIMINATION",
      objective: "Saring 8 brankas digital menggunakan 3 petunjuk logika untuk menemukan arsip rahasia.",
      threat: "DATA ISOLATION // RECOVERY OPERATION",
      story: "Sebuah file arsip proyek rahasia kampus tersimpan di salah satu dari 8 brankas digital. Petugas arsip meninggalkan 3 petunjuk logika. Gunakan teknik eliminasi untuk menemukan brankas yang tepat!",
      physicalClue: "Sembunyikan 3 Kertas Petunjuk di sudut area pos: Clue 1 (Bukan Genap), Clue 2 (Ukuran > 50MB), Clue 3 (Hari Akhir Pekan).",
      questions: [
        { no: 1, text: "Gunakan 3 petunjuk di samping untuk mengeliminasi brankas. <strong>Brankas nomor berapakah yang berisi dokumen rahasia tersebut?</strong>" },
        { no: 2, text: "Jelaskan langkah demi langkah bagaimana kelompok kalian <strong>mengeliminasi brankas lainnya</strong> secara bertahap!" },
        { no: 3, text: "Metode pemecahan masalah dengan menyaring kemungkinan ini mencerminkan algoritma apa dalam komputasi?" }
      ],
      kunci: `
        <strong>Kunci & Poin Penilaian Pos 3:</strong><br>
        • <strong>Brankas yang Benar:</strong> <strong>BRANKAS 03 (Vault 03)</strong>.<br>
        • <strong>Alur Eliminasi Bertahap:</strong><br>
          1. <em>Clue 1 (Bukan nomor genap):</em> Mengeliminasi Vault 02, 04, 06, 08. Tersisa: 01, 03, 05, 07.<br>
          2. <em>Clue 2 (Ukuran > 50 MB):</em> Cek sisa brankas: Vault 01 (15MB) & Vault 05 (35MB) gugur karena < 50MB. Tersisa: Vault 03 (85MB) dan Vault 07 (95MB).<br>
          3. <em>Clue 3 (Hari akhir pekan: Sabtu/Minggu):</em> Vault 07 dibuat hari Kamis (gugur). Vault 03 dibuat hari Minggu (LOLOS!).<br>
        • <strong>Konsep Komputasi:</strong> Decision Tree, Filtering Data, dan metode Branch Pruning (Eliminasi).
      `
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
        { no: 1, text: "Mengapa Kandidat Budi Santoso (IPK 3.92, Juara 1 Nasional) <strong>bisa didiskualifikasi oleh sistem AI</strong>?" },
        { no: 2, text: "Apakah keputusan sistem AI tersebut adil? Mengapa sebuah mesin pintar bisa berbuat kekeliruan konyol seperti itu?" },
        { no: 3, text: "Sebagai calon sarjana Informatika masa depan, <strong>solusi logis apa yang kalian usulkan</strong> agar sistem otomatisasi ini adil?" }
      ],
      kunci: `
        <strong>Kunci & Poin Penilaian Pos 4:</strong><br>
        • <strong>Penyebab Kesalahan AI:</strong> Sistem parser regex hanya diprogram mengenali ekstensi <code>.pdf</code>. Ketika Budi mengunggah <code>.docx</code>, sistem gagal mengekstrak teks lalu secara otomatis memberi skor 0.<br>
        • <strong>Analisis Kritis:</strong> Sangat tidak adil. Sistem AI tidak memiliki pertimbangan akal sehat; ia hanya menjalankan aturan sempit yang dikoding oleh pembuatnya (*Garbage in, Garbage out*).<br>
        • <strong>Solusi Logis yang Diharapkan:</strong><br>
          1. <em>Otomatisasi Converter:</em> Tambahkan sistem konverter otomatis di server atau tolak upload dengan pesan peringatan di awal.<br>
          2. <em>Human-in-the-Loop:</em> Wajib ada verifikasi manusia sebelum keputusan diskualifikasi final dijatuhkan.<br>
          3. <em>Mekanisme Banding:</em> Menyediakan jalur klarifikasi bagi peserta jika terjadi malafungsi sistem.
      `
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
  }

  const sfx = new ChiptuneSynth();

  // ==========================================================================
  // 3. APPLICATION STATE & STORAGE
  // ==========================================================================
  let currentPos = 1;
  let currentTeam = "meta";
  let phase = 1; // 1: Exploration, 2: Input, 3: Locked
  let secondsLeft = 300;
  const PHASE_DURATION = 300;
  let timerInterval = null;
  let isRunning = false;
  let robotSteps = JSON.parse(JSON.stringify(INITIAL_STEPS));
  let eliminatedVaults = new Set();

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

  // Admin Elements
  const leaderboardTbody = document.getElementById("leaderboardTbody");
  const verifikasiTbody = document.getElementById("verifikasiTbody");
  const btnExportCSV = document.getElementById("btnExportCSV");
  const btnResetAllData = document.getElementById("btnResetAllData");

  // Storage Helpers
  function getSubmissions() {
    const raw = localStorage.getItem("adhigana_submissions");
    return raw ? JSON.parse(raw) : [];
  }

  function saveSubmissions(list) {
    localStorage.setItem("adhigana_submissions", JSON.stringify(list));
    renderLeaderboard();
    renderVerifikasiTable();
  }

  function generateUniqueCode(teamId, posId) {
    const now = new Date();
    const mmdd = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const hash = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${teamId.toUpperCase()}-P${posId}-${mmdd}-${hash}`;
  }

  // ==========================================================================
  // 4. ROUTING ENGINE & INTRO CUTSCENE MANAGER
  // ==========================================================================

  function showIntroCutscene(posNum) {
    const config = POS_CONFIG[posNum];
    introMissionTag.textContent = `MISSION INITIATION // POS 0${posNum}`;
    introRouteUrl.textContent = config.route;
    introRouteText.textContent = config.route;
    introPosTitle.textContent = config.title;
    introPosSubtitle.textContent = config.subTitle;
    introObjectiveText.textContent = config.objective;

    introCutsceneOverlay.classList.remove("hidden");
    sfx.coinStart();
  }

  function hideIntroCutscene() {
    introCutsceneOverlay.classList.add("hidden");
    sfx.blip();
  }

  btnEnterConsole.addEventListener("click", () => {
    sfx.coinStart();
    hideIntroCutscene();
  });

  btnReturnToHub.addEventListener("click", () => {
    sfx.blip();
    hideIntroCutscene();
    window.location.hash = "#/adhigana";
  });

  brandLogoHome.addEventListener("click", () => {
    sfx.blip();
    window.location.hash = "#/adhigana";
  });

  function handleRouting() {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();
    const routeFull = `${hash} ${search} ${pathname}`;

    // Check for specific Pos routes: adhigana/pos1, pos1, etc.
    let targetPos = null;
    if (routeFull.includes("pos1") || routeFull.includes("pos=1")) targetPos = 1;
    else if (routeFull.includes("pos2") || routeFull.includes("pos=2")) targetPos = 2;
    else if (routeFull.includes("pos3") || routeFull.includes("pos=3")) targetPos = 3;
    else if (routeFull.includes("pos4") || routeFull.includes("pos=4")) targetPos = 4;
    else if (routeFull.includes("leaderboard")) {
      renderLeaderboard();
      renderVerifikasiTable();
      adminModal.classList.add("open");
      return;
    }

    if (targetPos) {
      // Pos View
      arcadePortalHub.style.display = "none";
      activePosWorkArea.style.display = "block";
      renderPos(targetPos);
      showIntroCutscene(targetPos);
    } else {
      // Main Arcade Hub View
      activePosWorkArea.style.display = "none";
      arcadePortalHub.style.display = "flex";
      hideIntroCutscene();
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

    if (phase === 1) {
      phaseBadge.className = "pixel-tag-phase";
      phaseBadgeText.textContent = "PHASE 01: EKSPLORASI (5 MIN)";
      phaseTitle.textContent = "Pencarian Petunjuk Fisik";
      phaseInstruction.textContent = "Peserta mencari petunjuk tersembunyi di sekitar pos. Panitia mengawasi waktu.";
      challengeBox.classList.remove("active-glow");
      operatorInputSection.style.display = "none";
      lockedCodeSection.style.display = "none";
      btnFinishExploration.style.display = isRunning ? "inline-flex" : "none";
    } else if (phase === 2) {
      phaseBadge.className = "pixel-tag-phase phase-2";
      phaseBadgeText.textContent = "PHASE 02: INPUT JAWABAN (5 MIN)";
      phaseTitle.textContent = "Pengisian Jawaban Peserta";
      phaseInstruction.textContent = "Peserta menyampaikan jawaban logika & menulis di lembar kertas. Panitia menginput di form bawah.";
      challengeBox.classList.add("active-glow");
      renderOperatorInputForm();
      operatorInputSection.style.display = "flex";
      lockedCodeSection.style.display = "none";
      btnFinishExploration.style.display = "none";
    } else {
      phaseBadge.className = "pixel-tag-phase phase-end";
      phaseBadgeText.textContent = "PHASE 03: DATA TERKUNCI";
      phaseTitle.textContent = "Sesi Selesai - Kode Diterbitkan";
      phaseInstruction.textContent = "Salin Kode Unik ke lembar jawaban kertas peserta sebelum rotasi kelompok.";
      operatorInputSection.style.display = "none";
      lockedCodeSection.style.display = "flex";
      btnFinishExploration.style.display = "none";
    }
  }

  function startTimer() {
    if (isRunning) return;
    sfx.coinStart();
    isRunning = true;
    btnStartTimer.style.display = "none";
    btnPauseTimer.style.display = "inline-flex";
    btnFinishExploration.style.display = "inline-flex";

    glitchAlertBanner.style.display = "flex";
    sfx.glitchBoom();

    timerInterval = setInterval(() => {
      if (secondsLeft > 0) {
        secondsLeft--;
        updateTimerUI();

        if (secondsLeft <= 5 && secondsLeft > 0) {
          sfx.tickDanger();
        } else if (secondsLeft <= 10 && secondsLeft % 2 === 0) {
          sfx.tick();
        }
      } else {
        if (phase === 1) {
          sfx.phaseAlert();
          setPhase(2);
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          btnPauseTimer.style.display = "none";
          sfx.phaseAlert();
          alert("WAKTU POS HABIS! Segera submit jawaban peserta.");
        }
      }
    }, 1000);
  }

  function pauseTimer() {
    sfx.blip();
    clearInterval(timerInterval);
    isRunning = false;
    btnStartTimer.style.display = "inline-flex";
    btnPauseTimer.style.display = "none";
  }

  function resetTimer() {
    sfx.blip();
    pauseTimer();
    setPhase(1);
    glitchAlertBanner.style.display = "none";
    updateTimerUI();
  }

  btnStartTimer.addEventListener("click", startTimer);
  btnPauseTimer.addEventListener("click", pauseTimer);
  btnResetTimer.addEventListener("click", resetTimer);
  btnDismissGlitch.addEventListener("click", () => {
    sfx.blip();
    glitchAlertBanner.style.display = "none";
  });
  btnFinishExploration.addEventListener("click", () => {
    sfx.phaseAlert();
    setPhase(2);
  });

  // ==========================================================================
  // 6. OPERATOR INPUT FORM & SUBMISSION
  // ==========================================================================

  function renderOperatorInputForm() {
    let html = "";
    if (currentPos === 1) {
      html = `
        <div class="answer-input-field">
          <label>1. EMAIL MANA YANG MERUPAKAN PHISHING?</label>
          <select id="inputPos1Target">
            <option value="1">Email 1: Akademik UBHI (Jadwal KRS)</option>
            <option value="2" selected>Email 2: Kemendikbud (Beasiswa 10 Juta Mendesak)</option>
            <option value="3">Email 3: Perpustakaan UBHI</option>
          </select>
        </div>
        <div class="answer-input-field">
          <label>2. KEJANGGALAN LOGIS YANG DISEBUTKAN PESERTA (CENTANG):</label>
          <div style="font-family: var(--font-pixel); font-size: 0.75rem; display: flex; flex-direction: column; gap: 4px;">
            <label><input type="checkbox" id="chkPos1A" checked> Domain email mencurigakan (xyz-domain.com, bukan .go.id / .ac.id)</label>
            <label><input type="checkbox" id="chkPos1B" checked> Desakan panik / Social Engineering (Batas 59 Menit)</label>
            <label><input type="checkbox" id="chkPos1C" checked> Tautan mengarah ke web login palsu pencuri akun</label>
          </div>
        </div>
        <div class="answer-input-field">
          <label>3. TINDAKAN MITIGASI LOGIS:</label>
          <input type="text" id="inputPos1Mitigasi" value="Ganti password SIAKAD & laporkan phishing ke panitia IT" placeholder="Tindakan mitigasi...">
        </div>
      `;
    } else if (currentPos === 2) {
      html = `
        <div class="answer-input-field">
          <label>1. HASIL UJI EKSEKUSI ROBOT:</label>
          <select id="inputPos2Result">
            <option value="success" selected>SUKSES 200 OK (Urutan langkah benar)</option>
            <option value="fail">GAGAL / GLITCH (Masih ada urutan terbalik)</option>
          </select>
        </div>
        <div class="answer-input-field">
          <label>2. PENJELASAN LOGIKA URUTAN OLEH PESERTA:</label>
          <input type="text" id="inputPos2Logika" value="Cangkir harus ditaruh sebelum bubuk dan air panas dituangkan agar tidak tumpah" placeholder="Catatan logika peserta...">
        </div>
      `;
    } else if (currentPos === 3) {
      html = `
        <div class="answer-input-field">
          <label>1. BRANKAS YANG BERISI DOKUMEN RAHASIA:</label>
          <select id="inputPos3Vault">
            <option value="Vault 01">Vault 01</option>
            <option value="Vault 02">Vault 02</option>
            <option value="Vault 03" selected>Vault 03 (BENAR)</option>
            <option value="Vault 04">Vault 04</option>
            <option value="Vault 05">Vault 05</option>
            <option value="Vault 06">Vault 06</option>
            <option value="Vault 07">Vault 07</option>
            <option value="Vault 08">Vault 08</option>
          </select>
        </div>
        <div class="answer-input-field">
          <label>2. TAHAPAN ELIMINASI YANG BERHASIL DIJELASKAN:</label>
          <div style="font-family: var(--font-pixel); font-size: 0.75rem; display: flex; flex-direction: column; gap: 4px;">
            <label><input type="checkbox" id="chkPos3A" checked> Clue 1: Vault Genap tereliminasi (02, 04, 06, 08)</label>
            <label><input type="checkbox" id="chkPos3B" checked> Clue 2: Vault < 50MB tereliminasi (01, 05)</label>
            <label><input type="checkbox" id="chkPos3C" checked> Clue 3: Hari bukan akhir pekan tereliminasi (07 Kamis)</label>
          </div>
        </div>
      `;
    } else if (currentPos === 4) {
      html = `
        <div class="answer-input-field">
          <label>1. AKAR KESALAHAN SISTEM AI:</label>
          <select id="inputPos4Akar">
            <option value="regex_docx" selected>Parser Regex hanya diprogram membaca .PDF (.DOCX diberi nilai 0)</option>
            <option value="data_salah">Data IPK peserta salah input</option>
          </select>
        </div>
        <div class="answer-input-field">
          <label>2. SOLUSI LOGIS YANG DIUSULKAN KELOMPOK:</label>
          <input type="text" id="inputPos4Solusi" value="Konverter format otomatis di sistem + Verifikasi manusia (Human in the loop)" placeholder="Solusi yang diusulkan...">
        </div>
      `;
    }
    dynamicInputFields.innerHTML = html;
  }

  btnSubmitOperatorAnswer.addEventListener("click", () => {
    sfx.coinStart();

    let webScore = 80;
    if (currentPos === 1) {
      const target = document.getElementById("inputPos1Target").value;
      if (target === "2") webScore += 20;
    } else if (currentPos === 2) {
      const res = document.getElementById("inputPos2Result").value;
      if (res === "success") webScore = 100;
    } else if (currentPos === 3) {
      const v = document.getElementById("inputPos3Vault").value;
      if (v === "Vault 03") webScore = 100;
    } else if (currentPos === 4) {
      webScore = 100;
    }

    const uniqueCode = generateUniqueCode(currentTeam, currentPos);
    displayGeneratedCode.textContent = uniqueCode;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newSub = {
      id: `${currentTeam}_pos${currentPos}`,
      team: currentTeam,
      teamName: TEAMS.find(t => t.id === currentTeam)?.name || currentTeam,
      pos: currentPos,
      time: timeStr,
      code: uniqueCode,
      webScore: webScore,
      paperScore: 4,
      totalScore: webScore + (4 * 5)
    };

    const subs = getSubmissions().filter(s => s.id !== newSub.id);
    subs.push(newSub);
    saveSubmissions(subs);

    setPhase(3);
    sfx.victoryFanfare();
  });

  btnCompletePos.addEventListener("click", () => {
    sfx.blip();
    resetTimer();
  });

  // ==========================================================================
  // 7. POS RENDERING LOGIC
  // ==========================================================================

  function renderPos(posNum) {
    currentPos = posNum;
    const config = POS_CONFIG[posNum];

    if (stationTitleMain) {
      stationTitleMain.textContent = config.title.toUpperCase();
    }
    if (stationRoutePill) {
      stationRoutePill.textContent = config.route;
    }

    missionTabBtns.forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.dataset.pos) === posNum);
    });

    Object.keys(posContainers).forEach(key => {
      posContainers[key].style.display = parseInt(key) === posNum ? "block" : "none";
    });

    casePosTag.textContent = config.tag;
    caseHeading.textContent = config.title;
    caseStory.innerHTML = config.story;
    challengePosLabel.textContent = `TANTANGAN ${config.tag}`;

    questionsContainer.innerHTML = config.questions.map(q => `
      <div class="pixel-q-row">
        <div class="pixel-q-badge">${q.no}</div>
        <div class="pixel-q-text">${q.text}</div>
      </div>
    `).join("");

    modalKunciJawaban.innerHTML = config.kunci;
    modalPhysicalClues.innerHTML = `<strong>LOKASI &amp; INSTRUKSI:</strong> ${config.physicalClue}`;

    if (posNum === 2) renderRobotSteps();
    if (posNum === 3) renderVaults();

    if (phase === 2) renderOperatorInputForm();
  }

  teamSelect.addEventListener("change", (e) => {
    sfx.blip();
    currentTeam = e.target.value;
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
      mailActionCard.style.display = "flex";
    } else {
      mailActionCard.style.display = "none";
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
  const robotStepsList = document.getElementById("robotStepsList");
  const robotAvatar = document.getElementById("robotAvatar");
  const robotStatusText = document.getElementById("robotStatusText");
  const robotConsole = document.getElementById("robotConsole");
  const btnRunRobot = document.getElementById("btnRunRobot");
  const btnResetSteps = document.getElementById("btnResetSteps");

  function renderRobotSteps() {
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

    const ICON_ROBOT_CHIP = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 16.5V21m3.75-18v1.5m0 16.5V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 19.5Z" /></svg>`;
    const ICON_ROBOT_SUCCESS = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;
    const ICON_ROBOT_CRASH = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`;

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

  btnRunRobot.addEventListener("click", simulateRobotRun);
  btnResetSteps.addEventListener("click", () => {
    sfx.blip();
    const ICON_ROBOT_CHIP = `<svg class="h-icon h-icon-hero" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 16.5V21m3.75-18v1.5m0 16.5V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 19.5Z" /></svg>`;
    robotSteps = JSON.parse(JSON.stringify(INITIAL_STEPS));
    robotAvatar.innerHTML = ICON_ROBOT_CHIP;
    robotStatusText.textContent = "WAITING_SEQUENCE";
    robotStatusText.style.color = "var(--pixel-yellow)";
    robotConsole.textContent = "> Sistem di-reset. Susun 6 baris logika di bawah, lalu tekan tombol TEST EXECUTION.";
    renderRobotSteps();
  });

  // ==========================================================================
  // 10. POS 3: DIGITAL VAULTS LOGIC
  // ==========================================================================
  const vaultsGrid = document.getElementById("vaultsGrid");
  const btnResetVaults = document.getElementById("btnResetVaults");

  const ICON_ARCHIVE = `<svg class="h-icon h-icon-sm" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`;

  function renderVaults() {
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
        alert(`ARSIP METADATA [${vault.label}]:\n- Ukuran File: ${vault.size} MB\n- Hari Pembuatan: ${vault.day}\n- Format: ${vault.type}\n- Keterangan: ${vault.desc}`);
      });
    });
  }

  btnResetVaults.addEventListener("click", () => {
    sfx.blip();
    eliminatedVaults.clear();
    renderVaults();
  });

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

    leaderboardTbody.innerHTML = teamStats.map((st, idx) => {
      let badge = `<span class="rank-badge">${idx + 1}</span>`;
      if (idx === 0) badge = `<span class="rank-badge rank-1">#1</span>`;
      if (idx === 1) badge = `<span class="rank-badge rank-2">#2</span>`;
      if (idx === 2) badge = `<span class="rank-badge rank-3">#3</span>`;

      return `
        <tr>
          <td>${badge}</td>
          <td><strong style="color: ${st.color};">${st.name}</strong></td>
          <td>${st.webTotal} Pts</td>
          <td>${st.paperTotal} Pts</td>
          <td><strong style="color: var(--pixel-yellow); font-size: 1.05rem;">${st.totalCombined}</strong></td>
          <td>${st.posDone} / 4 Pos</td>
        </tr>
      `;
    }).join("");
  }

  function renderVerifikasiTable() {
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
          <td style="padding: 6px;">${s.webScore}</td>
          <td style="padding: 6px;">
            <select class="select-paper-score" data-id="${s.id}" style="background: #000; color: #fff; border: 1px solid var(--pixel-cyan); font-family: var(--font-pixel);">
              <option value="5" ${s.paperScore === 5 ? 'selected' : ''}>5 (Sangat Logis)</option>
              <option value="4" ${s.paperScore === 4 ? 'selected' : ''}>4 (Logis & Jelas)</option>
              <option value="3" ${s.paperScore === 3 ? 'selected' : ''}>3 (Standar)</option>
              <option value="2" ${s.paperScore === 2 ? 'selected' : ''}>2 (Kurang Jelas)</option>
              <option value="1" ${s.paperScore === 1 ? 'selected' : ''}>1 (Asal-asalan)</option>
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
        const newScore = parseInt(select.value);

        const subs = getSubmissions();
        const target = subs.find(s => s.id === subId);
        if (target) {
          target.paperScore = newScore;
          target.totalScore = target.webScore + (newScore * 5);
          saveSubmissions(subs);
          sfx.coinStart();
          alert(`SUKSES: Nilai kertas untuk ${target.teamName} (Pos ${target.pos}) berhasil diperbarui!`);
        }
      });
    });
  }

  // Export CSV
  btnExportCSV.addEventListener("click", () => {
    sfx.coinStart();
    const subs = getSubmissions();
    if (subs.length === 0) {
      alert("Belum ada data submit untuk diekspor!");
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

  btnResetAllData.addEventListener("click", () => {
    sfx.glitchBoom();
    if (confirm("PERINGATAN: Apakah Anda yakin ingin mereset SEMUA data penilaian dan leaderboard? Data yang dihapus tidak dapat dikembalikan!")) {
      localStorage.removeItem("adhigana_submissions");
      saveSubmissions([]);
      alert("Seluruh data telah di-reset.");
    }
  });

  // Modal open/close
  btnOpenRubrik.addEventListener("click", () => {
    sfx.blip();
    rubrikModal.classList.add("open");
  });
  btnCloseRubrik.addEventListener("click", () => {
    sfx.blip();
    rubrikModal.classList.remove("open");
  });
  rubrikModal.addEventListener("click", (e) => {
    if (e.target === rubrikModal) rubrikModal.classList.remove("open");
  });

  btnOpenAdmin.addEventListener("click", () => {
    sfx.blip();
    renderLeaderboard();
    renderVerifikasiTable();
    adminModal.classList.add("open");
  });
  btnCloseAdmin.addEventListener("click", () => {
    sfx.blip();
    adminModal.classList.remove("open");
  });
  adminModal.addEventListener("click", (e) => {
    if (e.target === adminModal) adminModal.classList.remove("open");
  });

  // ==========================================================================
  // 12. BOOTSTRAP & INITIAL ROUTE EXECUTION
  // ==========================================================================
  setPhase(1);
  displayEmail(1);
  renderRobotSteps();
  renderVaults();
  renderLeaderboard();

  // If no hash present, default to portal hub or pos 1 if hash specified
  if (!window.location.hash) {
    window.location.hash = "#/adhigana";
  } else {
    handleRouting();
  }

  console.log("ADHIGANA 2026: Route Engine & Cinematic Intro Ready.");
});
