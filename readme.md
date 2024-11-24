📋 Automasi Pengiriman Undangan Pernikahan dengan Node.js
Program ini dirancang untuk membantu mengirimkan undangan pernikahan secara otomatis melalui WhatsApp. Dengan membaca data dari file Excel, Anda dapat menghemat waktu dan tenaga dalam proses distribusi undangan.

🛠️ Fitur
Autentikasi Otomatis: Menggunakan library whatsapp-web.js dengan metode autentikasi lokal (QR Code).
Integrasi Excel: Membaca data undangan dari file Excel menggunakan xlsx.
Pengiriman Pesan: Mengirimkan pesan undangan secara otomatis kepada kontak di file Excel.
Pesan yang Dipersonalisasi: Menyesuaikan isi pesan berdasarkan nama penerima dan informasi lainnya.
Jeda Pengiriman Acak: Menghindari deteksi spam dengan jeda waktu pengiriman pesan yang bervariasi.
📦 Dependencies
whatsapp-web.js
qrcode-terminal
xlsx
🚀 Cara Menggunakan
Kloning repositori

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install dependencies

bash
Copy code
npm install
Siapkan file Excel

Buat file undangan.xlsx dengan format berikut:
Kolom A: Nama (Wajib)
Kolom B: Nama Pasangan (Opsional)
Kolom C: Link undangan
Kolom D: Nomor WhatsApp (dengan kode negara, contoh: 6281234567890)
Jalankan program

bash
Copy code
node <script-name>.js
Scan QR Code

Scan QR Code yang muncul di terminal menggunakan aplikasi WhatsApp untuk login.
Proses Pengiriman

Program akan mengirim pesan otomatis ke semua kontak yang ada di file Excel.
⚠️ Catatan Penting
Pastikan nomor telepon penerima aktif dan formatnya benar.
Jangan mengirim terlalu banyak pesan dalam waktu singkat untuk menghindari pemblokiran akun WhatsApp Anda.
💡 Lisensi
Program ini menggunakan lisensi MIT. Silakan gunakan sesuai kebutuhan.
