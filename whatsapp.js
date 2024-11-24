const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const XLSX = require('xlsx');
const randomDelay = () => Math.floor(Math.random() * (60000 - 5000 + 1) + 5000);  // Random delay between 5 to 60 seconds

// Buat instance client dengan autentikasi lokal dan menampilkan browser
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false,  // Menonaktifkan mode headless untuk menampilkan browser
        args: ['--no-sandbox', '--disable-setuid-sandbox']  // Opsi tambahan untuk stabilitas
    }
});

// Fungsi untuk membaca file Excel dan mengambil data dari A, B, C, D
const readExcelData = () => {
    // Membaca file Excel
    const workbook = XLSX.readFile('undangan.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];  // Ambil sheet pertama
    const data = [];

    let row = 2; // Mulai dari baris pertama yang ada datanya
    while (sheet[`A${row}`]) {
        const A = sheet[`A${row}`] ? sheet[`A${row}`].v : '';
        const B = sheet[`B${row}`] ? sheet[`B${row}`].v : '';
        const C = sheet[`C${row}`] ? sheet[`C${row}`].v : '';
        const D = sheet[`D${row}`] ? sheet[`D${row}`].v : '';

        // Jika ada data di A, B, C, D maka tambahkan ke array data
        if (A && B && C && D) {
            data.push({ A, B, C, D });
        }

        row++;
    }
    return data;
}

// Ketika client siap
client.on('ready', () => {
    console.log('Client is ready!');
    
    // Membaca data dari Excel
    const data = readExcelData();
    
    // Kirim pesan otomatis ke setiap nomor yang ada dalam data
    let sendMessageInterval = async () => {
        for (const { A, B, C, D } of data) {
            // Format pesan yang akan dikirim
            const formattedC1 = C.replace(/ /g, '%20');
            const message = `
Bismillahirrahmanirrahim
Assalamu'alaikum Wr. Wb. 

Kepada Yth, Bpk/Ibu/Sdr/i \n*${A}* & *${B}*

Dengan segala hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

*Mela Milani* 
& 
*Agusti Dwinanda*


yang InsyaAllah akan dilaksanakan pada:

Akad Nikah
🗓️ : Sabtu, 07 Desember 2024
🕖 : 15.30 WIB - 17.00 WIB
📍 : Sovereign Plaza Lt. 23, Jl. TB Simatupang No.Kav 36, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430

Resepsi
🗓️ : Sabtu, 07 Desember 2024
🕖 : 19.00 WIB - 21.00 WIB
📍 : Sovereign Plaza Lt. 23, Jl. TB Simatupang No.Kav 36, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430

Untuk informasi detail mengenai undangan kami, silahkan kunjungi link dibawah ini:
${formattedC1}

Merupakan suatu kehormatan dan kebahagiaan tersendiri apabila berkenan hadir dan memberikan doa restu kepada kami berdua.

Atas perhatiannya kami ucapkan banyak terima kasih.  

Salam hangat,
*Mela & Agusti*
`; // Pesan yang akan dikirim

            const phoneNumber = D; // Nomor tujuan diambil dari D
            
            // Format nomor sesuai dengan WhatsApp Web (masukkan kode negara tanpa tanda '+')
            const formattedNumber = `${phoneNumber}@c.us`;

            // Kirim pesan
            try {
                await client.sendMessage(formattedNumber, message);
                console.log(`Pesan berhasil dikirim ke ${phoneNumber}`);
            } catch (error) {
                console.log('Gagal mengirim pesan:', error);
            }

            // Jeda pengiriman pesan dengan waktu acak antara 5 - 60 detik
            const delay = randomDelay();
            console.log(`Menunggu ${delay / 1000} detik sebelum mengirim pesan berikutnya...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        console.log('Selesai mengirim pesan ke semua nomor!');
    };

    // Mulai mengirim pesan
    sendMessageInterval();
});

// Ketika QR code diperlukan untuk login
client.on('qr', (qr) => {
    // Cetak QR code di terminal
    qrcode.generate(qr, { small: true });
    console.log('Scan QR Code di atas untuk login.');
});

// Ketika client terdisconnect
client.on('disconnected', (reason) => {
    console.log('Client disconnected:', reason);
});

// Mulai client
client.initialize();
