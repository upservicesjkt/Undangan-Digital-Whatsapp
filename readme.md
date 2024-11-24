# 📋 Automasi Pengiriman Undangan Pernikahan dengan Node.js  
Program ini dirancang untuk membantu mengirimkan undangan pernikahan secara otomatis melalui WhatsApp. Dengan membaca data dari file Excel, Anda dapat menghemat waktu dan tenaga dalam proses distribusi undangan.  

## 🛠️ Fitur  
- **Autentikasi Otomatis**: Menggunakan library `whatsapp-web.js` dengan metode autentikasi lokal (QR Code).  
- **Integrasi Excel**: Membaca data undangan dari file Excel menggunakan `xlsx`.  
- **Pengiriman Pesan**: Mengirimkan pesan undangan secara otomatis kepada kontak di file Excel.  
- **Pesan yang Dipersonalisasi**: Menyesuaikan isi pesan berdasarkan nama penerima dan informasi lainnya.  
- **Jeda Pengiriman Acak**: Menghindari deteksi spam dengan jeda waktu pengiriman pesan yang bervariasi.  

## 📦 Dependencies  
Program ini membutuhkan library berikut:  
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)  
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)  
- [xlsx](https://github.com/SheetJS/sheetjs)  

## 🚀 Cara Menggunakan  

### 1. **Kloning repositori**  
Jalankan perintah berikut untuk mengunduh program:  
```bash
git clone https://github.com/upservicesjkt/Undangan-Digital-Whatsapp && cd Undangan-Digital-Whatsapp
```
### 2. **Install dependencies**
Install semua library yang dibutuhkan:
```bash
npm install
```
### 3. **Siapkan file Excel**
Buat file `undangan.xlsx` dengan format berikut:

- Kolom A: Nama (Wajib)
- Kolom B: Nama Pasangan (Opsional)
- Kolom C: Link undangan
- Kolom D: Nomor WhatsApp (dengan kode negara, contoh: 6281234567890)

### 4. **Jalankan program**
Jalankan program dengan perintah:
```bash
node whatsapp.js
```
### 5. **Scan QR Code**
Scan QR Code yang muncul di terminal menggunakan aplikasi WhatsApp untuk login.

### 6. **Proses Pengiriman**
Program akan secara otomatis mengirimkan pesan ke semua kontak yang ada di file Excel.

## ⚠️ Catatan Penting
*Pastikan nomor telepon penerima aktif dan formatnya benar.*
*Jangan mengirim terlalu banyak pesan dalam waktu singkat untuk menghindari pemblokiran akun WhatsApp Anda.*
## 💡 Lisensi
<<<<<<< HEAD
Program ini menggunakan lisensi MIT. Silakan gunakan sesuai kebutuhan.
=======
Program ini menggunakan lisensi MIT. Silakan gunakan sesuai kebutuhan.
>>>>>>> 2601766 (Initial commit)
