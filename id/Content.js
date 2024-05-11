export default {
    footer: {
        help: `Ada yang tidak berfungsi? Tanyakan bantuan di 
        <a href="{0}">forum</a> atau <a href="{1}">email</a> atau
        <a href="{2}">chat</a>.`,
        credit: `{0}, dibuat oleh <a href="{1}">{2}</a>`,
    },
    welcome: {
        title: `Selamat datang di DOM Cloud! 🎉`,
        description: ` <p>Hai, {0}</p>
        <p>
          Terima kasih telah bergabung dengan armada DOM Cloud untuk mencapai kebebasan
          mencapai kesuksesan di Internet!
        </p>
        <p>
          Untuk melayani Anda secara optimal, kami perlu konfirmasi wilayah tempat Anda
          saat ini berada. Ini juga mempengaruhi opsi pembayaran dan lokasi server default 
          yang dapat Anda ubah nanti:
        </p>
        `,
        createWebsiteHint: `Siap? Mari buat website pertama Anda.`,
        createWebsiteBtn: `Buat website`,
        emailConfirmation: `
            Sepertinya Anda perlu memverifikasi email <strong>{0}</strong>
            sebelum melanjutkan.<br />
            Silakan cek inbox email Anda (dan spam).
        `,
        emailConfirmationHint: `Email belum sampai?`,
        emailConfirmationBtn: `Kirim Ulang Email Konfirmasi`,
        changeCountryBtn: `Ubah negara`,
    },
    purchaseConfirmation: {
        purchasedHint: "Terima kasih. Jika sistem kami telah memverifikasi pembayaran Anda, email konfirmasi akan dikirim ke email Anda.",
        purchaseCancel: "Pembayaran Anda telah dibatalkan.",
    },
    emailConfirmation: {
        hint: `PENTING! Anda perlu mengonfirmasi email Anda untuk mulai membuat website. Silakan cek inbox Anda (atau kotak spam) di {0}`,
        prompt: `Apakah Anda yakin ingin mengirim ulang email? Tindakan ini akan logout dari sesi Anda. Harap cek inbox Anda (dan kotak spam) setelah ini.`,
    },
    accountDeletion: {
        title: `Menghapus Akun Anda`,
        hint: `PERHATIAN! Penghapusan akun bersifat permanen dan kami tidak dapat mengembalikan tindakan tersebut. Jika Anda memiliki host atau domain terdaftar, Anda perlu menghapusnya terlebih dahulu. Hubungi kami jika Anda membutuhkan bantuan.`,
        prompt: `Silakan tulis "YA" untuk menyetujui penghapusan akun.`,
        disabled: `Anda tidak dapat menghapus akun ini jika masih ada hosting atau domain terdaftar.`,
    },
    hostCreate: {
        chooseTemplate: `Pilih template untuk memulai`,
        startFromScratch: `Tidak, saya ingin memulai dari awal`,
        uploadFileHint: `Unggah atau masukkan URL untuk menganalisis kontennya`,
        readingTheFile: `Membaca file...`,
        readingFiles: `Membaca {0} dari {1} file...`,
        readingZipFile: `Membaca file zip...`,
        compressingZipFile: `Mengompresi menjadi file zip...`,
        uploadingFiles: `Mengunggah file... ({0} dari {1})`,
        uploadCompleted: `Upload selesai ({0} file dengan ukuran total {1})`,
        uploadError: `Upload gagal dengan kode status {0}`,
        emptyZipFile: `Tidak ada file yang ditemukan dalam zip`,
        noFileSelected: `Tidak ada file yang dipilih`,
        exceededFileSizeLimit: `Ukuran file ini ({0}) melebihi batas ({1}), coba unggah nanti menggunakan Webmin.`,
        missingTemplate: `Gagal mengambil template data. Mungkin file masih hilang.`,
        checkingRepo: `Memeriksa repo ini...`,
        cloneWithDeployKey: `Repo akan di-clone dengan kunci deploy.`,
        uploadDirectory: `Unggah direktori`,
        uploadZipFile: `Unggah file zip`,
        dropDirectory: `Lepaskan direktori itu...`,
        dropZipFile: `Lepaskan file zip itu...`,
        dropWhatsThat: `Itu bukan file zip atau direktori...`,
        dropMultiple: `(Harap lepaskan hanya satu file atau direktori)`,
        readingDroppedDirectory: `Membaca direktori yang dijatuhkan...`,
        readingDroppedZipFile: `Membaca file zip yang dijatuhkan...`,
        orPasteUrl: "... atau tempelkan URL Git Repo/Zip",
        attachDeployKey: `Lampirkan kunci deploy`,
        selectFramework: `Beritahu kami kerangka kerja atau bahasa pemrograman`,
        applyFramework: `Terapkan template ini`,
        attachDeployKeyHint: `Jika repositori Anda diatur sebagai pribadi, Anda dapat menggunakan
            kunci deploy untuk mengaksesnya. Kami membuat kunci deploy asimetris
            untuk Anda, Anda perlu menambahkan kunci publik ini ke repositori Anda.`,
        attachDeployKeyLearnMore: `Pelajari lebih lanjut tentang integrasi GitHub
            dengan kunci deploy.`,
        attachDeployKeyOpenConfig: `Buka konfigurasi kunci deploy repositori`,
        attachDeployKeyConfirm: `Saya telah menambahkan kunci publik ini`,
    },
    hostConnection: {
        title: `Periksa Koneksi`,
        description: `
        <p>
            Halaman ini memeriksa apakah website ini dapat diakses dari
            internet.
        </p>
        <p>
            Ada tiga prasyarat agar website dapat diakses
            dari internet:
        </p>
        <ul>
            <li>Server DNS harus tersedia</li>
            <li>Alamat IP yang dikembalikan harus benar</li>
            <li>Konten server harus dapat diakses</li>
        </ul>
        <p>
            Jika salah satu prasyarat di atas gagal, website ini mungkin
            tidak dapat diakses dari internet.
        </p>`,
        dnsOffTitle: `Tidak ada server nama`,
        dnsOffContent: `Website ini tidak memiliki server nama. Mungkin dikonfigurasi eksternal.`,
        dnsManagedTitle: `DNS dikelola`,
        dnsManagedContent: `DNS website ini dikelola oleh DOM Cloud.`,
        dnsMixedTitle: `DNS bercampur`,
        dnsMixedContent: `DNS website ini memiliki konfigurasi yang bercampur
            Pastikan bahwa server nama
            dikonfigurasi dengan benar. Jangan mencampur
            catatan kami dengan catatan lain!`,
        dnsExternalTitle: `DNS dikelola secara eksternal`,
        dnsExternalContent: `DNS website ini ditangani oleh pihak ketiga.`,
        pingNoIpTitle: `Alamat IP tidak ditemukan`,
        pingNoIpContent: `Server DNS tidak mengembalikan alamat IP.`,
        pingNoIp6Title: `Tidak ada IPv6`,
        pingNoIp6Content: ` DNS website ini tidak memiliki alamat IPv6. Mungkin tidak tersedia untuk pengguna IPv6.`,
        pingWrongIpTitle: `Alamat IP Salah`,
        pingWrongIpContent: `Server DNS website ini mengembalikan alamat IP yang salah. 
            Mungkin tidak melayani konten yang benar, atau berada di belakang proxy.`,
        pingNoWwwTitle: `Alamat IP subdomain www.* tidak ditemukan`,
        pingNoWwwContent: ` 
            Beberapa orang mungkin tidak dapat mengakses ini
            website jika mereka menambahkan www. Pengaturan
            pengalihan subdomain www direkomendasikan.`,
        pingOkTitle: `Alamat IP OK`,
        pingOkContent: `Server DNS website ini mengembalikan alamat IP yang benar.`,
        webNoHttpTitle: `Website tidak dapat diakses`,
        webNoHttpContent: `Website ini tidak dapat diakses melalui HTTP.`,
        webNoHttpsTitle: `HTTPS tidak tersedia`,
        webNoHttpsContent: `Website ini mungkin tidak memiliki sertifikat HTTPS
            terinstal, atau sudah kedaluwarsa, atau tidak dikonfigurasi dengan benar.`,
        webBadHttpTitle: `Situs web mengembalikan kesalahan`,
        webBadHttpContent: `Situs web ini mengembalikan kesalahan 500 atau 403,
            mungkin tidak dikonfigurasi dengan benar (periksa pengaturan NGINX/Aplikasi!).`,
        webBadRedirectTitle: `Situs web memiliki pengalihan yang buruk`,
        webBadRedirectContent: `Situs web ini mengarahkan pengunjung ke luar domain,
            mungkin tidak dikonfigurasi dengan benar (periksa pengaturan URL Dasar!).`,
        webBadWwwTitle: `Subdomain www.* tidak dapat diakses`,
        webBadWwwContent: `Subdomain www website ini tidak dapat diakses atau mengembalikan kesalahan.`,
        webInsecureTitle: `Website tidak sepenuhnya aman`,
        webInsecureContent: ` Website ini tidak mengalihkan HTTP ke HTTPS,
            yang baik tetapi tidak dianjurkan.`,
        webOkTitle: `Website OK`,
        webOkContent: `Website ini dapat diakses melalui HTTP dan HTTPS.`,
    },
    hostFirewall: {
        title: `Periksa Firewall`,
        description: `
        <p>
            Firewall membantu website Anda tidak dieksploitasi dalam
            kejadian penyusupan oleh hacker dengan memblokir semua lalu lintas keluar kecuali yang ada di
            <a href="{0}" target="_blank" rel="noreferrer">whitelist</a>.
        </p>
        <p

>
            Bergantung pada penggunaan website Anda, Anda mungkin ingin mematikan
            firewall jika website Anda memerlukan API pihak ketiga atau bentuk komunikasi lain yang tidak terdaftar di whitelist.
        </p>
        <p>Firewall berlaku untuk domain dan semua subdomain di dalamnya.</p>
        <p><a href="{1}" target="_blank" rel="noreferrer">Baca lebih lanjut</a></p>
        `,
        offTitle: `Firewall dimatikan`,
        offContent: `
        <p>
            Kami tidak melarang Anda untuk mematikan Firewall untuk hosting Anda, selama
            Anda mengawasi keamanan website Anda secara teratur.
            <br/>
            Anda sekarang memiliki kontrol keamanan website Anda. Jika website
            terpengaruh, risiko ban permanen dapat terjadi kapan saja!
        </p>`,
        offBtn: `Hidupkan`,
        onTitle: `Firewall aktif`,
        onContent: `<p>Duduk dan bersantai. Website Anda aman dari eksploitasi.</p>`,
        onBtn: `Matikan`,
    },
    hostNginx: {
        title: `Konfigurator NGINX`,
        description: `Halaman ini membantu Anda membaca pengaturan NGINX saat ini dan menyimpan yang baru untuk website Anda.`,
        subdomain: `Subdomain`,
        helpText: `Bantuan pada konfigurasi`,
        error: `KESALAHAN: tidak ada konfigurasi untuk {0}`,
        errorFetch: "Ada kesalahan saat mengambil konfigurasi nginx",
        notExist: `KESALAHAN: tidak ada konfigurasi untuk {0}`,
    },
    hostManage: {
        title: `Kelola Akses Website`,
        description: `
        <p>
            Gunakan akses login berikut untuk mengunggah atau mengedit konten website Anda.
            <a href="{0}">Pelajari lebih lanjut</a>.
        </p>`,
        openPorts: `Buka Port`,
        openPortsDescription: `Buka port untuk mengedit server Anda`,
        onlineEditor: `Editor Online dan Alat`,
        webminInfo: `<p>
            Webmin digunakan untuk mengelola file server Anda dan
            konfigurasi menggunakan antarmuka web.
        </p>
        <p>Anda akan otomatis login.</p>`,
        filestashInfo: `<p>
            Filestash digunakan untuk mengelola file server Anda
            menggunakan antarmuka web dari koneksi SFTP.
            (untuk mengunggah file, gunakan drag-and-drop).
        </p>
        <p>Anda akan otomatis login.</p>`,
        phpMyAdminInfo: ` <p>
        phpMyAdmin digunakan untuk mengelola database MySQL Anda
        menggunakan antarmuka web.
        </p>
        <p class="mb-0">
            Anda perlu memasukkan kredensial secara manual.
        </p>`,
        phpPgAdminInfo: `  <p>
        phpPgAdmin digunakan untuk mengelola database PostgreSQL Anda
        menggunakan antarmuka web.
        </p>
        <p class="mb-0">
            Anda perlu memasukkan kredensial secara manual.
        </p>`,
        websshInfo: `<p>
            WebSSH digunakan untuk membuka koneksi SSH menggunakan web
            antarmuka.
            </p>
            <p class="mb-0">Anda akan otomatis login.</p>`,
        vscodeInfo: ` <p>
            Buka VS Code untuk mengedit file dan menjalankan perintah
            langsung di server Anda.<br />
            Pastikan Anda sudah menginstal VS Code dan
            Ekstensi SSH Jarak Jauh-nya.
        </p>
        <p>
            Jika Anda ingin membuka folder lain, masukkan di sini
            dan tekan enter:
        </p>`,
    },
    hostTransfer: {
        warn: `PERHATIAN! Transfer website berarti memindahkannya ke akun lain. Setelah Anda mentransfer, Anda akan kehilangan akses ke hosting ini karena telah berganti tangan!`,
        currentOwner: `Pemilik saat ini: {0}`,
        hint: `Silakan masukkan email akun yang ingin Anda terima:`,
        disabled: `Anda tidak dapat mentransfer hosting ini selama tidak aktif.`,
        action: `Transfer!`,
    },
    hostDelete: {
        warn: `PERHATIAN! Penghapusan host bersifat permanen dan kami tidak dapat membatalkan tindakan tersebut. Pastikan Anda yakin.`,
        hint: `Silakan masukkan nama pengguna hosting Anda untuk menyetujui penghapusan host.`,
        action: `Hapus!`,
    },
    hostCname: {
        disabled: `Pengubahan hosting Domain tidak tersedia jika belum dibayar atau sedang menggunakan paket Freedom.`,
        curHint: `Nama domain saat ini: `,
        hint: `Anda dapat mengubah nama domain utama hosting di sini. Masukkan nama domain baru:`,
        warn: `Pastikan Anda memiliki kepemilikan domain dan telah mengarahkan catatan DNS dengan benar.`,
        action: `Ubah nama domain!`,
    },
    hostRename: {
        disabled: `Pengubahan nama pengguna host tidak tersedia jika Anda belum membayar atau sedang menggunakan paket Freedom.`,
        hint: `Anda dapat mengubah nama pengguna hosting Anda di sini. Masukkan nama pengguna baru:`,
        warn: `Jika Anda mengubah nama pengguna saat menggunakan domain default, nama domain akan mengikuti.`,
        action: `Ganti nama!`,
    },
    hostCheck: {
        'title': `Pemeriksaan DNS Wajib`,
        'prompt': `Ini memeriksa apakah {0} dapat diresolusi melalui DNS Google sebelum ditambahkan ke server kami.`,
        'valid': `Domain ini dapat diresolusi`,
        'valid-note': `Domain ini akan dapat diresolusi setelah konfigurasi tambahan ditambahkan secara otomatis untuk Anda`,
        'incorrect': 'Rekam A/CNAME ke domain ini salah, harap konfigurasi terlebih dahulu sebelum melanjutkan.',
        'missing': 'Rekam A/CNAME ke domain ini tidak ada, harap konfigurasi terlebih dahulu sebelum melanjutkan.',
        'loading': '...',
        'retrying': '...',
    },
    domain: {
        createInfo: `Ingatlah bahwa Anda hanya mendaftarkan domain. Jika Anda ingin
            mengelola situs web, <a href="{0}">buat situs web di sini</a>`,
        transferInfo: `Pastikan Anda memiliki hak akses untuk mentransfer
            domain dari layanan lain. Kami akan menghubungi Anda jika
            transfer domain gagal setelah pembayaran, tetapi jika Anda gagal
            membuktikan kepemilikan domain melalui kode EPP atau dokumen
            yang ada, kami tidak dapat membantu Anda. Sesuai dengan ToS,
            Anda tidak akan mendapatkan pengembalian dana dalam pembelian
            domain dalam keadaan apapun.`,
        eppTransferInfo: `Anda dapat mentransfer domain Anda ke registrar lain dengan
            menggunakan kode EPP ini. Transfer berfungsi jika domain tidak terkunci`,
    },
    invoiceDescription: {
        domainPurchaseOf: "Pembelian Domain {0}",
        domainExtendOf: "Perpanjangan Domain {0}",
        domainTransferOf: "Transfer Domain {0}",
        hostPurchase: "Pembelian Host",
        hostRenew: "Perpanjangan Host",
        hostUpgrade: "Pembaruan Host",
        hostExtend: "Perpanjangan Host",
        withPlan: " dengan Rencana {0}",
        forMonths: " selama {0} bulan",
        forYears: " selama {0} tahun",
        forYearsAndMonths: " selama {0} tahun dan {1} bulan",
        dataTransferAddonsFor: "Transfer Data Tambahan untuk {0} GB",
    },
}
