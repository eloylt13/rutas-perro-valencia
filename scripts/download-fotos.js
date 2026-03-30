const fs = require("node:fs");
const path = require("node:path");
const https = require("node:https");
const sharp = require("sharp");

const fotos = [
  { slug: "puentes-colgantes-chulilla", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chulilla%2C%20Valencia%2C%20Espa%C3%B1a%2C%202022-12-27%2C%20DD%2013-15%20HDR.jpg" },
  { slug: "ruta-del-agua-chelva", url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Ruta_del_agua_-_Chelva.jpg" },
  { slug: "acueducto-romano-pena-cortada", url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/2015-08-17-Aqu%C3%A4dukt.jpg" },
  { slug: "ruta-pantaneros-loriguilla", url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Embalse_de_Loriguilla.jpg" },
  { slug: "parque-fluvial-turia-masia-traver", url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Riba-roja._Pont_vell_2.jpg" },
  { slug: "cruz-montepicayo", url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Vista_general_desde_Sierra_Calderona.jpg" },
  { slug: "gatova-pico-aguila-molino-ceja", url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Serra_calderona_bosc.jpg" },
  { slug: "bunol-molino-luz-alborache", url: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Alborache._R%C3%ADo_Bu%C3%B1ol_y_molino_Zanones.jpg" },
  { slug: "embalse-bellus", url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Presa_Bellus_Vista_Antic_Balneari.JPG" },
  { slug: "ontinyent-senda-enginyers", url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pou_Clar_Tetric_%2820941263%29.jpeg" },
  { slug: "sierra-aledua-pico-besori", url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Restes_de_l%27Ermita_de_Santa_B%C3%A0rbara.jpg" },
  { slug: "canones-jucar-jalance", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/CA%C3%91ONES_DEL_J%C3%9ACAR_25_-_WLE_Spain_2015.jpg" },
  { slug: "senda-portalet-gandia", url: "https://commons.wikimedia.org/wiki/Special:FilePath/0.3.%20El%20Mond%C3%BAber%20i%20la%20serra%20Falconera%20des%20del%20pla%20de%20Marxuquera%20%28Safor%2C%20Pa%C3%ADs%20Valenci%C3%A0%29.jpg" },
  { slug: "cueva-turche", url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cueva_Turche_de_Bu%C3%B1ol.jpg" },
  { slug: "gorgo-escalera-anna", url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Gorgo_Catal%C3%A1n_d%27Anna%2C_cascada.JPG" },
  { slug: "salto-novia-navajas", url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/El_Salt_de_la_Novia_de_Navaixes.JPG" },
  { slug: "descenso-rio-fraile", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/R%C3%ADo_Fraile%2C_Bicorp_01.JPG" },
  { slug: "ruta-chera", url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fotos%20de%20Sot%20de%20Chera%20agosto%202024%2016.jpg" },
  { slug: "ruta-albufera-saler", url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Devesa_4.JPG" },
  { slug: "xativa-cova-negra-bellus", url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Entorno_de_la_Cova_Negra.jpg" },
  { slug: "rio-turia-manises-vilamarxant", url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sender_al_Parc_Natural_del_T%C3%BAria.jpg" },
  { slug: "rio-sellent-bolbaite", url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Bolbaite_y_sus_2_puentes_sobre_el_r%C3%ADo_Sellent.jpg" },
  { slug: "ruta-caves-requena", url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Bodega_de_la_Calle_Postes_15.jpg" },
  { slug: "barranco-agua-negra", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/201902-K5_18511a_F_-_Barranco_del_Agua_Negra.jpg" }
];

const outputDir = path.join(process.cwd(), "public", "img", "rutas");
const requestHeaders = {
  "User-Agent": "rutas-perro-valencia/1.0 (contacto local)",
  Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8"
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFallbackUrl(url) {
  const fileName = decodeURIComponent(url.split("/").pop() ?? "");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

function download(url, options = {}) {
  const { triedFallback = false, retryCount = 0 } = options;

  return new Promise((resolve, reject) => {
    const request = https.request(
      url,
      {
        headers: requestHeaders
      },
      async (response) => {
        if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          response.resume();
          try {
            resolve(await download(response.headers.location, { triedFallback, retryCount }));
          } catch (error) {
            reject(error);
          }
          return;
        }

        if (response.statusCode === 404 && !triedFallback) {
          response.resume();
          try {
            resolve(await download(getFallbackUrl(url), { triedFallback: true, retryCount }));
          } catch (error) {
            reject(error);
          }
          return;
        }

        if (response.statusCode === 429 && retryCount < 6) {
          response.resume();
          const retryAfterSeconds = Number.parseInt(response.headers["retry-after"] ?? "60", 10);
          const waitMs = Number.isFinite(retryAfterSeconds) ? retryAfterSeconds * 1000 : 60000;
          await sleep(waitMs);

          try {
            resolve(await download(url, { triedFallback, retryCount: retryCount + 1 }));
          } catch (error) {
            reject(error);
          }
          return;
        }

        if (response.statusCode !== 200) {
          response.resume();
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        const chunks = [];

        response.on("data", (chunk) => chunks.push(chunk));
        response.on("end", () => resolve(Buffer.concat(chunks)));
        response.on("error", reject);
      }
    );

    request.on("error", reject);
    request.end();
  });
}

async function processFoto({ slug, url }) {
  const destination = path.join(outputDir, `${slug}.jpg`);

  if (fs.existsSync(destination)) {
    console.log(`✓ ${slug} descargado`);
    return;
  }

  const buffer = await download(url);

  await sharp(buffer)
    .rotate()
    .resize({ width: 800, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(destination);

  console.log(`✓ ${slug} descargado`);
}

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  for (const foto of fotos) {
    try {
      await processFoto(foto);
      await sleep(1200);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error desconocido";
      console.error(`✗ ${foto.slug} ${message}`);
    }
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : "Error desconocido";
  console.error(message);
  process.exitCode = 1;
});


