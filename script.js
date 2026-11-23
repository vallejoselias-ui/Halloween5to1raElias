// Ilustraciones SVG temáticas de alta nitidez (funcionan offline y en GitHub Pages)
const ARTWORKS = {
  annabelle: `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="#2a1226"/>
      <path d="M36 90 Q32 45 80 36 Q128 45 124 90 L132 135 L28 135 Z" fill="#5c2d16"/>
      <circle cx="42" cy="115" r="14" fill="#5c2d16"/>
      <circle cx="118" cy="115" r="14" fill="#5c2d16"/>
      <ellipse cx="80" cy="84" rx="34" ry="40" fill="#f7e3d4"/>
      <path d="M48 72 Q80 48 112 72" fill="none" stroke="#4a220f" stroke-width="8"/>
      <circle cx="66" cy="80" r="7" fill="#1e1b24"/>
      <circle cx="94" cy="80" r="7" fill="#1e1b24"/>
      <circle cx="64" cy="78" r="2" fill="#fff"/>
      <circle cx="92" cy="78" r="2" fill="#fff"/>
      <circle cx="58" cy="94" r="6" fill="#e11d48" opacity="0.65"/>
      <circle cx="102" cy="94" r="6" fill="#e11d48" opacity="0.65"/>
      <path d="M68 106 Q80 117 92 106" fill="none" stroke="#be123c" stroke-width="3.5" stroke-linecap="round"/>
      <polygon points="80,126 64,118 64,134" fill="#e11d48"/>
      <polygon points="80,126 96,118 96,134" fill="#e11d48"/>
    </svg>`,
  pennywise: `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="#1f1024"/>
      <circle cx="42" cy="58" r="22" fill="#dc2626"/>
      <circle cx="118" cy="58" r="22" fill="#dc2626"/>
      <circle cx="52" cy="42" r="16" fill="#b91c1c"/>
      <circle cx="108" cy="42" r="16" fill="#b91c1c"/>
      <ellipse cx="80" cy="88" rx="36" ry="44" fill="#f8fafc"/>
      <ellipse cx="66" cy="82" rx="7" ry="8" fill="#fbbf24"/>
      <ellipse cx="94" cy="82" rx="7" ry="8" fill="#fbbf24"/>
      <circle cx="66" cy="82" r="3" fill="#09090b"/>
      <circle cx="94" cy="82" r="3" fill="#09090b"/>
      <circle cx="80" cy="96" r="8" fill="#dc2626"/>
      <path d="M58 106 Q80 128 102 106" fill="none" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
      <path d="M66 90 L60 107 M94 90 L100 107" stroke="#dc2626" stroke-width="2.5"/>
    </svg>`,
  exorcista: `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="#0f1f18"/>
      <path d="M35 135 Q30 50 80 35 Q130 50 125 135 Z" fill="#29211d"/>
      <ellipse cx="80" cy="86" rx="32" ry="39" fill="#c7d2c0"/>
      <circle cx="66" cy="80" r="8" fill="#18221c"/>
      <circle cx="94" cy="80" r="8" fill="#18221c"/>
      <circle cx="66" cy="80" r="4" fill="#a3e635"/>
      <circle cx="94" cy="80" r="4" fill="#a3e635"/>
      <path d="M64 108 Q80 96 96 108" fill="none" stroke="#3f4d3c" stroke-width="4"/>
      <path d="M58 64 L74 71 M102 64 L86 71" stroke="#364234" stroke-width="3"/>
      <path d="M62 94 L68 100 M95 92 L89 99" stroke="#65a30d" stroke-width="2"/>
    </svg>`,
  valak: `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="#14131c"/>
      <path d="M30 142 L44 45 L80 28 L116 45 L130 142 Z" fill="#09090b"/>
      <path d="M48 56 L80 42 L112 56 L106 118 L54 118 Z" fill="#e2e8f0"/>
      <ellipse cx="80" cy="86" rx="26" ry="33" fill="#cbd5e1"/>
      <circle cx="69" cy="82" r="7" fill="#0f172a"/>
      <circle cx="91" cy="82" r="7" fill="#0f172a"/>
      <circle cx="69" cy="82" r="2.8" fill="#facc15"/>
      <circle cx="91" cy="82" r="2.8" fill="#facc15"/>
      <path d="M70 105 Q80 99 90 105" fill="none" stroke="#1e293b" stroke-width="3"/>
    </svg>`,
  freddy: `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="#24110e"/>
      <ellipse cx="80" cy="92" rx="31" ry="37" fill="#b45309"/>
      <ellipse cx="80" cy="54" rx="54" ry="12" fill="#3b2314"/>
      <path d="M52 54 L58 30 L102 30 L108 54 Z" fill="#452715"/>
      <circle cx="67" cy="86" r="6" fill="#1c1917"/>
      <circle cx="93" cy="86" r="6" fill="#1c1917"/>
      <circle cx="67" cy="86" r="2.5" fill="#ef4444"/>
      <circle cx="93" cy="86" r="2.5" fill="#ef4444"/>
      <path d="M64 110 Q80 118 96 110" fill="none" stroke="#450a0a" stroke-width="3.5"/>
      <path d="M58 95 L68 102 M92 98 L102 104" stroke="#7f1d1d" stroke-width="2.5"/>
    </svg>`,
  samara: `
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="#0c1921"/>
      <circle cx="80" cy="84" r="34" fill="#cbd5e1"/>
      <path d="M44 82 Q44 36 80 36 Q116 36 116 82 L122 138 L38 138 Z" fill="#090d12"/>
      <path d="M56 46 L52 132 M68 42 L64 136 M80 40 L80 136 M92 42 L96 136 M104 46 L108 132" stroke="#1e293b" stroke-width="3"/>
      <circle cx="71" cy="86" r="4" fill="#e2e8f0"/>
    </svg>`
};

// Expedientes completos de los personajes
const CHARACTERS = [
  {
    id: "annabelle",
    category: "posesion",
    tag: "Posesión & Objetos",
    name: "Annabelle",
    year: "Caso real: 1970 • Museo de los Warren",
    summary: "Una muñeca aparentemente inofensiva que escondía una entidad capaz de moverse sola y dejar mensajes escritos.",
    story: "En 1970, una estudiante de enfermería recibió una muñeca de trapo Raggedy Ann (adaptada luego como muñeca de porcelana en el cine). Pronto comenzó a aparecer en habitaciones distintas, adoptar posturas humanas y dejar notas en papel pergamino pidiendo ayuda. Los investigadores Ed y Lorraine Warren concluyeron que no estaba poseída por el espíritu de una niña, sino manipulada por una entidad inhumana que buscaba un huésped.",
    fact: "Actualmente permanece encerrada en una vitrina de madera y vidrio bendecida con advertencias explícitas de no abrirla.",
    art: ARTWORKS.annabelle
  },
  {
    id: "pennywise",
    category: "entidad",
    tag: "Entidad Cósmica",
    name: "It (Pennywise)",
    year: "Derry, Maine • Ciclo de cada 27 años",
    summary: "Una criatura ancestral que adopta la forma de un payaso bailarín para atraer a sus víctimas y alimentarse del miedo.",
    story: "Conocido simplemente como 'Eso', es una entidad milenaria llegada desde fuera del universo conocido que hiberna bajo las alcantarillas de Derry. Cada 27 años despierta para sembrar el pánico, tomando la forma de los peores temores de cada persona, aunque su disfraz favorito es Pennywise el Payaso Bailarín.",
    fact: "Su verdadero poder disminuye cuando sus víctimas enfrentan sus miedos juntas y dejan de creer en sus ilusiones.",
    art: ARTWORKS.pennywise
  },
  {
    id: "exorcista",
    category: "posesion",
    tag: "Posesión Demoníaca",
    name: "El Exorcista (Regan)",
    year: "Georgetown, 1973 • Inspirado en caso de 1949",
    summary: "La historia de una niña de 12 años cuya personalidad cambia drásticamente tras jugar con un tablero ouija.",
    story: "Regan MacNeil comienza a sufrir fenómenos inexplicables: voces guturales, fuerza sobrehumana, descenso brusco de temperatura en su cuarto y levitación. Tras descartar causas médicas, dos sacerdotes —el padre Karras y el padre Merrin— enfrentan al demonio Pazuzu en uno de los rituales más recordados de la historia del terror.",
    fact: "Para lograr el aliento helado real en la habitación de Regan, el equipo de filmación refrigeró el set a temperaturas bajo cero.",
    art: ARTWORKS.exorcista
  },
  {
    id: "valak",
    category: "posesion",
    tag: "Entidad Profana",
    name: "Valak (La Monja)",
    year: "Abadía de Carta, Rumania • 1952",
    summary: "Un demonio antiguo que profana una abadía aislada adoptando la silueta de una monja de mirada amarilla.",
    story: "Valak se manifiesta en los pasillos oscuros de un monasterio rumano tras abrirse una grieta antigua. Su apariencia religiosa funciona como una burla hacia la fe de quienes investigan el lugar, atacando la mente con visiones y sombras que cobran vida.",
    fact: "En los grimorios antiguos de demonología, Valak es descrito originalmente como un espíritu que cabalga sobre un dragón de dos cabezas.",
    art: ARTWORKS.valak
  },
  {
    id: "freddy",
    category: "entidad",
    tag: "Terror Onírico",
    name: "Freddy Krueger",
    year: "Calle Elm • El reino de los sueños",
    summary: "Un espectro con sombrero gastado, suéter a rayas y un guante con cuchillas que ataca cuando te quedás dormido.",
    story: "A diferencia de otros monstruos que acechan en la oscuridad física, Freddy invade el mundo de los sueños. Todo lo que ocurre dentro de la pesadilla se refleja en el mundo real, convirtiendo el simple acto de cerrar los ojos en una trampa mortal.",
    fact: "La combinación de rojo y verde de su suéter fue elegida porque el ojo humano procesa esos dos colores juntos con mayor tensión visual.",
    art: ARTWORKS.freddy
  },
  {
    id: "samara",
    category: "entidad",
    tag: "Maldición Viral",
    name: "Samara Morgan (El Aro)",
    year: "Cinta maldita • Cuenta regresiva de 7 días",
    summary: "Una grabación sin título que condena a quien la mira con una llamada telefónica y un plazo exacto de siete días.",
    story: "Quien reproduce la cinta observa una secuencia de imágenes perturbadoras seguidas por el sonido del teléfono anunciando 'Siete días'. Al cumplirse el plazo, Samara emerge literalmente desde la pantalla del televisor tras salir de un pozo de piedra.",
    fact: "La única forma conocida de romper la maldición es hacer una copia de la cinta y lograr que otra persona la vea.",
    art: ARTWORKS.samara
  }
];

// Historias, leyendas y curiosidades de Halloween
const LORE_ITEMS = [
  {
    icon: "🕯️",
    type: "Historia de Halloween",
    title: "Samhain y la noche entre dos mundos",
    text: "Hace más de 2.000 años, los pueblos celtas celebraban el fin de la cosecha el 31 de octubre. Creían que esa noche los espíritus regresaban a la Tierra y dejaban comida en las puertas para apaciguarlos."
  },
  {
    icon: "🎃",
    type: "Leyenda Urbana",
    title: "Stingy Jack y la linterna eterna",
    text: "Cuenta la leyenda irlandesa que un herrero astuto engañó al diablo dos veces. Al morir, no fue aceptado ni en el cielo ni en el infierno, quedando condenado a vagar alumbrándose con una brasa dentro de un nabo hueco."
  },
  {
    icon: "🦇",
    type: "Curiosidad",
    title: "¿Por qué los murciélagos acompañan a las brujas?",
    text: "Las grandes fogatas de Halloween atraían cientos de insectos nocturnos, y detrás de ellos llegaban bandadas de murciélagos a cazar, creando la asociación visual con la noche de brujas."
  },
  {
    icon: "🐈‍⬛",
    type: "Curiosidad",
    title: "El mito de los gatos negros",
    text: "En la Edad Media se creía que las brujas podían transformarse en gatos negros para pasar desapercibidas de noche. Hoy, en cambio, en muchos países simbolizan protección y buena suerte."
  }
];

// Renderizado de tarjetas de personajes
const charactersGrid = document.getElementById("characters-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("dossier-modal");

function renderCharacters(filter = "all") {
  const list = filter === "all"
    ? CHARACTERS
    : CHARACTERS.filter((c) => c.category === filter);

  charactersGrid.innerHTML = list.map((char) => `
    <article class="horror-card">
      <div class="art-frame">${char.art}</div>
      <div class="card-body">
        <span class="pill mono">${char.tag}</span>
        <h3>${char.name}</h3>
        <p>${char.summary}</p>
        <button class="secondary-cta open-dossier" data-id="${char.id}" type="button">
          Leer Historia Completa
        </button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".open-dossier").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = CHARACTERS.find((c) => c.id === btn.dataset.id);
      if (!item) return;
      document.getElementById("m-category").textContent = item.tag;
      document.getElementById("m-art").innerHTML = item.art;
      document.getElementById("m-title").textContent = item.name;
      document.getElementById("m-year").textContent = item.year;
      document.getElementById("m-story").textContent = item.story;
      document.getElementById("m-fact").textContent = item.fact;
      modal.showModal();
      playSpookySound(260, 0.25, "sine");
    });
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCharacters(btn.dataset.filter);
    playSpookySound(340, 0.12, "triangle");
  });
});

document.getElementById("m-close").addEventListener("click", () => modal.close());
renderCharacters();

// Renderizado de leyendas y curiosidades
const loreGrid = document.getElementById("lore-grid");
loreGrid.innerHTML = LORE_ITEMS.map((item) => `
  <article class="lore-card">
    <div class="lore-icon">${item.icon}</div>
    <span class="pill mono">${item.type}</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join("");

// Cursor fantasma + linterna dinámica
const ghostCursor = document.getElementById("ghost-cursor");
const flashlight = document.getElementById("flashlight");

window.addEventListener("mousemove", (e) => {
  ghostCursor.style.left = `${e.clientX}px`;
  ghostCursor.style.top = `${e.clientY}px`;
  flashlight.style.setProperty("--mx", `${e.clientX}px`);
  flashlight.style.setProperty("--my", `${e.clientY}px`);
});

document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a, button, .horror-card")) {
    document.body.classList.add("hovering");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest("a, button, .horror-card")) {
    document.body.classList.remove("hovering");
  }
});

// Audio sintetizado con Web Audio API (sin archivos externos)
let audioCtx = null;
let audioOn = false;
let droneOsc = null;

function initAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playSpookySound(freq = 180, duration = 0.25, type = "sawtooth") {
  if (!audioOn) return;
  initAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(45, freq * 0.45), audioCtx.currentTime + duration);

  gain.gain.setValueAtTime(0.09, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

const btnAudio = document.getElementById("btn-audio");
btnAudio.addEventListener("click", () => {
  audioOn = !audioOn;
  btnAudio.textContent = audioOn ? "🔊 Ambiente: ON" : "🔊 Ambiente: OFF";

  if (audioOn) {
    initAudio();
    droneOsc = audioCtx.createOscillator();
    const droneGain = audioCtx.createGain();
    droneOsc.type = "triangle";
    droneOsc.frequency.value = 62;
    droneGain.gain.value = 0.03;
    droneOsc.connect(droneGain);
    droneGain.connect(audioCtx.destination);
    droneOsc.start();
    playSpookySound(420, 0.2, "sine");
  } else if (droneOsc) {
    droneOsc.stop();
    droneOsc = null;
  }
});

// Efecto susto rápido
const btnScare = document.getElementById("btn-scare");
const scareOverlay = document.getElementById("scare-overlay");

btnScare.addEventListener("click", () => {
  scareOverlay.hidden = false;
  playSpookySound(110, 0.55, "sawtooth");
  setTimeout(() => {
    scareOverlay.hidden = true;
  }, 850);
});

// Fondo animado: murciélagos volando y luciérnagas espectrales
const nightCanvas = document.getElementById("night-canvas");
const nCtx = nightCanvas.getContext("2d");
let bats = [];
let wisps = [];

function setupSky() {
  nightCanvas.width = window.innerWidth;
  nightCanvas.height = window.innerHeight;

  bats = Array.from({ length: 8 }, () => ({
    x: Math.random() * nightCanvas.width,
    y: 40 + Math.random() * (nightCanvas.height * 0.45),
    vx: 1.2 + Math.random() * 1.6,
    flap: Math.random() * Math.PI * 2,
    size: 10 + Math.random() * 6
  }));

  wisps = Array.from({ length: 35 }, () => ({
    x: Math.random() * nightCanvas.width,
    y: Math.random() * nightCanvas.height,
    r: 1 + Math.random() * 2,
    vy: 0.25 + Math.random() * 0.5,
    alpha: 0.2 + Math.random() * 0.5
  }));
}

function drawBat(b) {
  const wingY = Math.sin(b.flap) * (b.size * 0.65);
  nCtx.strokeStyle = "#090611";
  nCtx.lineWidth = 2.6;
  nCtx.beginPath();
  nCtx.moveTo(b.x - b.size, b.y + wingY);
  nCtx.quadraticCurveTo(b.x - b.size * 0.4, b.y - b.size * 0.5, b.x, b.y);
  nCtx.quadraticCurveTo(b.x + b.size * 0.4, b.y - b.size * 0.5, b.x + b.size, b.y + wingY);
  nCtx.stroke();
}

function animateSky() {
  nCtx.clearRect(0, 0, nightCanvas.width, nightCanvas.height);

  for (const w of wisps) {
    w.y -= w.vy;
    if (w.y < 0) w.y = nightCanvas.height;
    nCtx.beginPath();
    nCtx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
    nCtx.fillStyle = `rgba(255, 120, 50, ${w.alpha})`;
    nCtx.fill();
  }

  for (const b of bats) {
    b.x += b.vx;
    b.flap += 0.18;
    if (b.x > nightCanvas.width + 30) {
      b.x = -30;
      b.y = 40 + Math.random() * (nightCanvas.height * 0.45);
    }
    drawBat(b);
  }

  requestAnimationFrame(animateSky);
}

window.addEventListener("resize", setupSky);
setupSky();
animateSky();

// Minijuego: Cacería en el Cementerio
const arena = document.getElementById("graveyard-arena");
const btnStartHunt = document.getElementById("btn-start-hunt");
const gScoreEl = document.getElementById("g-score");
const gTimeEl = document.getElementById("g-time");
const gBestEl = document.getElementById("g-best");

const SPOOKS = ["👻", "🎃", "🤡", "💀", "🕷️", "🦇"];
let huntScore = 0;
let huntTime = 25;
let huntBest = Number(localStorage.getItem("cripta_best") || 0);
let huntRunning = false;
let spawnTimer = null;
let clockTimer = null;

gBestEl.textContent = huntBest;

function spawnEntity() {
  if (!huntRunning) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "entity-btn";
  btn.textContent = SPOOKS[Math.floor(Math.random() * SPOOKS.length)];

  const maxX = Math.max(12, arena.clientWidth - 70);
  const maxY = Math.max(12, arena.clientHeight - 70);
  btn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  btn.style.top = `${Math.floor(Math.random() * maxY)}px`;

  btn.addEventListener("click", () => {
    if (!huntRunning) return;
    huntScore += 10;
    gScoreEl.textContent = huntScore;
    playSpookySound(560, 0.1, "sine");
    btn.remove();
  });

  arena.appendChild(btn);
  setTimeout(() => btn.remove(), 1150);
}

function finishHunt() {
  huntRunning = false;
  clearInterval(spawnTimer);
  clearInterval(clockTimer);
  arena.querySelectorAll(".entity-btn").forEach((el) => el.remove());

  if (huntScore > huntBest) {
    huntBest = huntScore;
    localStorage.setItem("cripta_best", String(huntBest));
    gBestEl.textContent = huntBest;
  }

  btnStartHunt.style.display = "inline-flex";
  btnStartHunt.textContent = `Cacería finalizada (${huntScore} pts) — Jugar de nuevo`;
  playSpookySound(150, 0.35, "sawtooth");
}

btnStartHunt.addEventListener("click", () => {
  if (huntRunning) return;
  huntRunning = true;
  huntScore = 0;
  huntTime = 25;
  gScoreEl.textContent = huntScore;
  gTimeEl.textContent = huntTime;
  btnStartHunt.style.display = "none";
  arena.querySelectorAll(".entity-btn").forEach((el) => el.remove());

  spawnEntity();
  spawnTimer = setInterval(spawnEntity, 620);
  clockTimer = setInterval(() => {
    huntTime -= 1;
    gTimeEl.textContent = huntTime;
    if (huntTime <= 0) finishHunt();
  }, 1000);
});