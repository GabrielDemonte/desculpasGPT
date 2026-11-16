/**
 * DesculpaGPT™ - Core Application Logic
 * "Porque a verdade é só uma versão sem otimização."
 */

// Banco de dados neural de fragmentos de desculpa
const excuseDatabase = {
  chefe: {
    atraso: [
      "Bom dia, chefe! Peço mil desculpas, tô chegando aí voando. O caminhão da Sabesp estourou a adutora principal na esquina da minha rua e a água começou a subir rápido. Tive que ajudar o síndico a isolar a garagem. Já estou no Uber, o motorista pegou a rota alternativa!",
      "Oi chefe, tô a caminho! Houve um princípio de incêndio no quadro de energia do condomínio e os bombeiros travaram o portão dos veículos por 25 minutos para vistoria. Acabei de ser liberado, chego em 20 min sem falta!",
      "Bom dia! Aconteceu um imprevisto bizarro: um caminhão guincho enroscou na fiação do poste e derrubou o cabo em cima do capô do meu carro. A CET acabou de desobstruir. Já peguei a avenida!"
    ],
    nao_entregue: [
      "Chefe, o documento estava 100% fechado ontem às 23h40, mas quando fui exportar o PDF hoje de manhã o arquivo deu corrupção de checksum no disco SSD. Já estou rodando uma ferramenta de recuperação de blocos para te mandar até o almoço sem falta!",
      "Oi chefe! O relatório já estava finalizado, mas na hora de rodar a macro de consolidação o Excel travou no cálculo matricial e o Windows forçou um dump de memória. Estou revalidando apenas as tabelas dinâmicas para você não receber número inconsistente.",
      "O documento está pronto, mas o servidor local do OneDrive entrou em loop de sincronização com conflito de versão depois da atualização da TI. Estou abrindo ticket emergencial e te envio assim que liberar."
    ],
    nao_vou: [
      "Chefe, acordei com um quadro febril súbito e enxaqueca com aura visual. O médico da telemedicina recomendou repouso total nas próximas 6 horas para descartar virose viral aguda. Fico de olho no Slack pelo celular conforme a vista permitir!",
      "Oi chefe, estou com uma intoxicação alimentar severa desde a madrugada (provavelmente a salada de ontem à noite). Já tomei a medicação, mas é prudente eu trabalhar remoto hoje para não contaminar a equipe."
    ],
    vacuo: [
      "Oi chefe! O Slack não me notificou dessa mensagem porque o celular entrou no modo 'Foco Noturno' e reteve os pushs até agora. Acabei de ver e já estou priorizando isso como emergência!",
      "Chefe, desculpa o atraso no retorno! Fiquei preso numa conferência técnica com fornecedor internacional e o aplicativo travou as notificações em segundo plano."
    ],
    sem_grana: [
      "Chefe, a prestação de contas do adiantamento já foi solicitada ao financeiro corporativo, mas como o lote de TEDs fechou às 17h, o setor me garantiu que entra no primeiro repasse bancário de amanhã."
    ]
  },
  sogra: {
    atraso: [
      "Oi sogra querida! A gente já tá saindo, é que o veterinário ligou dizendo que o exame do gatinho deu uma alteraçãozinha e tivemos que passar na farmácia 24h para comprar o colírio. Mas guarde o pudim que em 25 minutos chegamos!",
      "Dona Maria, estamos a caminho! Tivemos que esperar o técnico do gás que veio trocar a mangueira vencida por motivo de segurança da casa toda. Já entramos na marginal, tá andando bem!"
    ],
    nao_vou: [
      "Minha querida sogra, você não imagina a dor no coração que estou sentindo por não conseguir ir. Comecei a tossir seco e espirrar muito forte desde ontem, e meu maior pavor no mundo seria passar essa gripe forte para a senhora e para o sogro. A senhora é nosso maior patrimônio, não me perdoaria! Domingo que vem vou passar aí só para te ver.",
      "Oi sogra! Eu queria TANTO esse almoço, você sabe que sua lasanha é meu prato favorito no mundo. Mas fui escalado para um plantão de emergência surpresa no trabalho para cobrir um colega que teve bebê prematuro. Estou inconsolável, mas o dever chamou!"
    ],
    vacuo: [
      "Dona sogra linda! Meu WhatsApp deu bug depois da última atualização do sistema e jogou as conversas mais queridas para a pasta de 'Arquivadas' sem eu ver! Que susto quando vi sua mensagem hoje! Como a senhora está se sentindo daquela dor no joelho?",
      "Oi sogra! Eu li sua mensagem ontem na hora do almoço, mas bem na hora tocou o telefone da gerência e eu esqueci de dar 'enviar' no rascunho. Jamais deixaria a senhora esperando de propósito!"
    ],
    nao_entregue: [
      "Sogra, a encomenda que prometi levar está com o entregador atrasado na central de distribuição dos Correios da Lapa. Assim que liberarem eu levo pessoalmente até você!"
    ],
    sem_grana: [
      "Sogrinha, a cota do presente de família tá reservada, mas meu aplicativo do banco bloqueou transações atípicas de fim de semana por segurança anti-fraude. Segunda cedo sem falta já cai pra você!"
    ]
  },
  amigo: {
    atraso: [
      "Mano, tô saindo de casa agora! Tive que esperar a encomenda do Mercado Livre que precisava de código de 6 dígitos senão o entregador ia devolver pro centro de Cajamar. Já tô no elevador!",
      "Irmão, fechei a porta de casa aqui! O Uber cancelou duas vezes na minha cara, o terceiro agora aceitou e tá a 4 minutos. Pede a primeira porção que já chego rachando!",
      "Velho, deu um nó aqui na avenida principal: uma carreta tombou e a polícia tá desviando todo mundo por dentro do bairro. Tô chegando em 15 min!"
    ],
    nao_vou: [
      "Irmão, vou ter que ficar devendo essa hoje... Fui inventar de tomar aquele açaí suspeito ontem e meu estômago declarou guerra mundial. Não consigo sair de perto do banheiro nem 10 minutos. Vai sem mim e bebe uma por mim!",
      "Mano, tô destruído... Minha rinite virou uma sinusite cavalar de ontem pra hoje, tô com a cabeça parecendo um bloco de concreto. Se eu for com esse ar condicionado do bar vou piorar 100%. Semana que vem a primeira rodada é minha!"
    ],
    vacuo: [
      "Mano do céu! Abri seu áudio no trânsito, tive que frear porque um maluco me cortou e esqueci completamente de responder! Foi mal mesmo, tô vivo!",
      "Velho, jurava por Deus que tinha te respondido mentalmente! Só percebi agora quando entrei no chat. Bora marcar aquilo sim!"
    ],
    nao_entregue: [
      "Mano, o arquivo tá salvo no meu pendrive antigo que esqueci na casa da minha mãe. Tô passando lá amanhã cedo pra resgatar e te subo pelo Drive!"
    ],
    sem_grana: [
      "Mano, a fatura do cartão fechou no talo e meu salário só cai na quinta. Se eu sair hoje vou ter que passar vergonha no débito. Me dá uns dias aí que acerto a nossa conta!"
    ]
  },
  crush: {
    atraso: [
      "Oi! Desculpa mil vezes! Eu já estava pronta(o) saindo de casa, mas o zíper da minha jaqueta emperrou com tudo e tive que trocar de roupa no desespero. Já tô no carro a caminho!",
      "Oiee! O trânsito na saída do túnel parou completamente por causa de um semáforo que apagou. Mas não se preocupa que já tô chegando, não desiste de mim! ❤️"
    ],
    nao_vou: [
      "Oi! Não acredito que isso tá acontecendo bem hoje... Eu tava super empolgada(o) pra gente se ver, mas acabei de medir e tô com 38.3 de febre. Queria muito ir, mas não quero parecer um zumbi e nem te passar nada. Podemos remarcar para terça? Faço questão!",
      "Oie! Tive uma emergência com minha irmãzinha/sobrinha agora à tarde e vou precisar ficar de babá até tarde. Fiquei chateadíssima(o), vamos remarcar logo por favor?"
    ],
    vacuo: [
      "Oii! Me perdoa de verdade! Meu dia no trabalho foi um verdadeiro apocalipse zumbi hoje, não peguei no celular nem pra almoçar. Como você tá? Adorei sua foto!",
      "Oiee! Eu jurava que tinha clicado em enviar! Minha internet oscilou no metrô e ficou a exclamação vermelha até eu abrir agora. Tudo bem por aí?"
    ],
    nao_entregue: [
      "Oi! Aquele link do vídeo que te prometi ficou salvo nos favoritos do notebook que esqueci na empresa. Assim que chegar amanhã eu te mando!"
    ],
    sem_grana: [
      "Oi! Vamos fazer algo mais tranquilo tipo passear no parque ou um café? Esse mês gastei uma grana pesada com veterinário e tô economizando um pouquinho!"
    ]
  },
  pix: {
    sem_grana: [
      "Prezado, a transferência foi realizada pelo canal corporativo, porém o Banco Central colocou a liquidação em análise preventiva por se tratar de valor atípico entre instituições distintas. O suporte informou prazo de compensação de até 24 horas úteis.",
      "Opa, boa tarde! Tentei realizar o Pix agora há pouco, mas o app do banco deu 'Erro 503 - Instabilidade no SPI'. O gerente disse que os sistemas estão passando por manutenção programada. Tentarei novamente no início do próximo expediente bancário.",
      "Olá! Meu token físico de autenticação em duas etapas desregulou o relógio interno e tive que agendar liberação facial presencial na agência amanhã de manhã. Assim que liberar eu envio o comprovante consolidado."
    ],
    atraso: [
      "Prezado, os comprovantes fiscais estão sendo auditados pela controladoria antes do disparo das ordens bancárias das 16h."
    ],
    nao_entregue: [
      "O demonstrativo de cálculo dos juros está com nossa equipe contábil ajustando a tabela regressiva."
    ],
    nao_vou: [
      "Não foi possível comparecer à reunião de conciliação por incompatibilidade na agenda de custódia."
    ],
    vacuo: [
      "Mensagem recebida pelo setor financeiro. O processamento da fila de atendimento encontra-se sob protocolo #88219."
    ]
  },
  professor: {
    nao_entregue: [
      "Professor, peço vênia pelo envio com pequeno atraso. Concluí a redação do artigo ontem à noite, porém o conversor de bibliografia para as normas ABNT 2026 corrompeu as notas de rodapé no LaTeX. Estou regerando o compilador para enviar o PDF impecável.",
      "Prezado Professor, o trabalho de campo foi integralmente documentado, mas os arquivos brutos das entrevistas em áudio não subiram no Google Classroom por limite de quota institucional. Já compactei em arquivo único para avaliação."
    ],
    atraso: [
      "Professor, peço desculpas pelo atraso na aula. O transporte intermunicipal ficou retido devido a uma manifestação na rodovia que dá acesso ao campus. Já estou subindo para o bloco C!"
    ],
    nao_vou: [
      "Prezado docente, fui acometido por uma gastroenterite aguda e estou sob cuidados médicos. Anexarei o atestado oficial junto à secretaria acadêmica conforme as diretrizes do regimento."
    ],
    vacuo: [
      "Professor, o e-mail institucional acabou retendo a sua mensagem na pasta de Quarentena de SPAM. Localizei hoje e já estou providenciando o solicitado."
    ],
    sem_grana: [
      "A taxa referente à cópia reprográfica da apostila já foi solicitada ao centro acadêmico."
    ]
  }
};

// State do aplicativo
let state = {
  target: 'chefe',
  situation: 'atraso',
  dramaLevel: 2,
  guiltLevel: 7,
  modoSogra: false,
  donaNeide: true,
  carretaFrango: true,
  windowsUpdate: false,
  memoryLog: [],
  currentExcuse: "",
  trafficAudioActive: false,
  currentSlide: 1,
  totalSlides: 8
};

// Web Audio API Context para som de trânsito sintetizado
let audioCtx = null;
let noiseNode = null;
let hornInterval = null;

// Elementos DOM
const elements = {
  targetSelect: document.getElementById('targetSelect'),
  situationSelect: document.getElementById('situationSelect'),
  dramaSlider: document.getElementById('dramaSlider'),
  dramaLabel: document.getElementById('dramaLabel'),
  guiltSlider: document.getElementById('guiltSlider'),
  guiltLabel: document.getElementById('guiltLabel'),
  guiltContainer: document.getElementById('guiltContainer'),
  modoSograToggle: document.getElementById('modoSograToggle'),
  chkNeide: document.getElementById('chkNeide'),
  chkCarreta: document.getElementById('chkCarreta'),
  chkUpdate: document.getElementById('chkUpdate'),
  generateBtn: document.getElementById('generateBtn'),
  btnText: document.getElementById('btnText'),
  resultBox: document.getElementById('resultBox'),
  excuseOutputText: document.getElementById('excuseOutputText'),
  convScore: document.getElementById('convScore'),
  convBadge: document.getElementById('convBadge'),
  convSuggestion: document.getElementById('convSuggestion'),
  memoryAlertText: document.getElementById('memoryAlertText'),
  timestampOutput: document.getElementById('timestampOutput'),
  copyBtn: document.getElementById('copyBtn'),
  copyText: document.getElementById('copyText'),
  whatsappBtn: document.getElementById('whatsappBtn'),
  trafficAudioBtn: document.getElementById('trafficAudioBtn'),
  audioText: document.getElementById('audioText'),
  audioIcon: document.getElementById('audioIcon'),
  panicBtn: document.getElementById('panicBtn'),
  panicScreen: document.getElementById('panicScreen'),
  exitPanicBtn: document.getElementById('exitPanicBtn'),
  downloadFakeDocBtn: document.getElementById('downloadFakeDocBtn'),
  // Pitch Deck
  navPitchDeckBtn: document.getElementById('navPitchDeckBtn'),
  openPitchBtn: document.getElementById('openPitchBtn'),
  pitchDeckModal: document.getElementById('pitchDeckModal'),
  closePitchBtn: document.getElementById('closePitchBtn'),
  prevSlideBtn: document.getElementById('prevSlideBtn'),
  nextSlideBtn: document.getElementById('nextSlideBtn'),
  slideCounter: document.getElementById('slideCounter'),
  slideDots: document.getElementById('slideDots'),
  investNowBtn: document.getElementById('investNowBtn')
};

// Drama Labels Map
const dramaLabels = {
  1: "Nível 1: Sono leve / Imprevisto sutil",
  2: "Nível 2: Imprevisto Doméstico Verossímil",
  3: "Nível 3: Encanamento estourado / Caos Urbano",
  4: "Nível 4: Quase-tragédia sem vítimas",
  5: "Nível 5: Novela Mexicana / Calamidade Cósmica"
};

// Guilt Labels Map
function getGuiltLabel(val) {
  if (val <= 3) return `${val}/14 - Leve Desatenção`;
  if (val <= 7) return `${val}/14 - Vitimismo Moderado`;
  if (val <= 11) return `${val}/14 - Coração Partido & Mágoa`;
  return `${val}/14 - Chantagem Emocional Crítica`;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  initSlideDots();
  loadMemory();
  updateFormVisibility();
});

// Listener Setup
function initEventListeners() {
  // Selects & Sliders
  elements.targetSelect.addEventListener('change', (e) => {
    state.target = e.target.value;
    if (state.target === 'sogra') {
      elements.modoSograToggle.checked = true;
      state.modoSogra = true;
    }
    updateFormVisibility();
  });

  elements.situationSelect.addEventListener('change', (e) => {
    state.situation = e.target.value;
  });

  elements.dramaSlider.addEventListener('input', (e) => {
    state.dramaLevel = parseInt(e.target.value);
    elements.dramaLabel.textContent = dramaLabels[state.dramaLevel];
  });

  elements.guiltSlider.addEventListener('input', (e) => {
    state.guiltLevel = parseInt(e.target.value);
    elements.guiltLabel.textContent = getGuiltLabel(state.guiltLevel);
  });

  elements.modoSograToggle.addEventListener('change', (e) => {
    state.modoSogra = e.target.checked;
    updateFormVisibility();
  });

  elements.chkNeide.addEventListener('change', (e) => state.donaNeide = e.target.checked);
  elements.chkCarreta.addEventListener('change', (e) => state.carretaFrango = e.target.checked);
  elements.chkUpdate.addEventListener('change', (e) => state.windowsUpdate = e.target.checked);

  // Generate Button
  elements.generateBtn.addEventListener('click', generateExcuse);

  // Copy & Actions
  elements.copyBtn.addEventListener('click', copyExcuse);
  elements.whatsappBtn.addEventListener('click', shareWhatsApp);
  elements.trafficAudioBtn.addEventListener('click', toggleTrafficAudio);
  elements.downloadFakeDocBtn.addEventListener('click', downloadCorruptedFile);

  // Panic Button (Click & Key ESC)
  elements.panicBtn.addEventListener('click', triggerPanic);
  elements.exitPanicBtn.addEventListener('click', exitPanic);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.panicScreen.classList.contains('hidden')) {
        triggerPanic();
      } else {
        exitPanic();
      }
    }
  });

  // Pitch Deck Modal
  elements.navPitchDeckBtn.addEventListener('click', openPitchDeck);
  elements.openPitchBtn.addEventListener('click', openPitchDeck);
  elements.closePitchBtn.addEventListener('click', closePitchDeck);
  elements.prevSlideBtn.addEventListener('click', prevSlide);
  elements.nextSlideBtn.addEventListener('click', nextSlide);
  elements.investNowBtn.addEventListener('click', () => {
    alert("🎉 Parabéns! Sua intenção de aporte de R$ 5 Milhões foi registrada. Nossa equipe jurídica entrará em contato assim que o servidor voltar do almoço.");
  });

  document.addEventListener('keydown', (e) => {
    if (!elements.pitchDeckModal.classList.contains('hidden')) {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    }
  });
}

function updateFormVisibility() {
  if (state.modoSogra || state.target === 'sogra') {
    elements.guiltContainer.classList.remove('opacity-40', 'pointer-events-none');
  } else {
    elements.guiltContainer.classList.add('opacity-40', 'pointer-events-none');
  }
}

// Geração de desculpa com algoritmo e delay cômico
function generateExcuse() {
  elements.generateBtn.disabled = true;
  elements.btnText.textContent = "CONSULTANDO BANCO DE ÁLIBIS...";

  const funnySteps = [
    "Consultando banco de avós falecidos...",
    "Sincronizando álibis meteorológicos com a CET...",
    "Calibrando cara de pau e nível de drama...",
    "Injetando Dona Neide no argumento..."
  ];

  let step = 0;
  const interval = setInterval(() => {
    if (step < funnySteps.length) {
      elements.btnText.textContent = funnySteps[step];
      step++;
    } else {
      clearInterval(interval);
      finalizeExcuse();
    }
  }, 250);
}

function finalizeExcuse() {
  elements.generateBtn.disabled = false;
  elements.btnText.textContent = "GERAR OUTRA DESCULPA COM CONVINCÔMETRO™";

  // Obter pool base
  const targetPool = excuseDatabase[state.target] || excuseDatabase.chefe;
  const situationPool = targetPool[state.situation] || targetPool['atraso'] || excuseDatabase.chefe.atraso;
  
  let baseExcuse = situationPool[Math.floor(Math.random() * situationPool.length)];

  // Injeções de detalhes
  let addons = [];
  if (state.donaNeide && !baseExcuse.includes("Dona Neide")) {
    addons.push("Inclusive a Dona Neide do 302 presenciou tudo e tá de testemunha.");
  }
  if (state.carretaFrango && !baseExcuse.includes("carreta")) {
    addons.push("Pra piorar, uma carreta de frangos congelados deu L na pista e interditou 3 faixas.");
  }
  if (state.windowsUpdate && !baseExcuse.includes("Windows")) {
    addons.push("E bem na hora a máquina reiniciou sozinha dizendo 'Trabalhando nas atualizações (27%)'.");
  }

  // Modificadores de Drama
  if (state.dramaLevel >= 4) {
    baseExcuse = baseExcuse.replace(/!/g, "! Foi um desespero total!");
    baseExcuse += " Tive que tomar uma água com açúcar pra conseguir raciocinar.";
  } else if (state.dramaLevel === 1) {
    baseExcuse = baseExcuse.replace(/desespero|caos|bombeiros|adutora/g, "imprevisto pontual");
  }

  // Modo Sogra
  if (state.modoSogra || state.target === 'sogra') {
    if (state.guiltLevel > 10) {
      baseExcuse += " Sei que a senhora vai achar que é pouco caso meu, mas juro pela minha saúde que tentei de tudo. Não fique brava comigo, meu coração não aguenta.";
    } else {
      baseExcuse += " Jamais deixaria de priorizar a senhora se não fosse algo de força maior.";
    }
  }

  if (addons.length > 0) {
    baseExcuse += " " + addons.join(" ");
  }

  // Atualizar Estado
  state.currentExcuse = baseExcuse;
  elements.excuseOutputText.textContent = `"${baseExcuse}"`;

  // Calcular Convincômetro
  calculateConvincometro();

  // Memória de Longo Prazo
  updateMemory(state.target, state.situation);

  // Timestamp
  const now = new Date();
  const timeStr = `Hoje às ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  elements.timestampOutput.textContent = timeStr;

  // Feedback Visual
  elements.resultBox.classList.remove('border-brand-500/30');
  elements.resultBox.classList.add('border-brand-400', 'neon-glow');
  setTimeout(() => {
    elements.resultBox.classList.remove('neon-glow');
  }, 1000);
}

// Convincômetro
function calculateConvincometro() {
  let score = 7.0;

  if (state.donaNeide) score += 1.6;
  if (state.carretaFrango) score += 1.0;
  if (state.windowsUpdate) score += 0.8;

  // Penalidade de drama exagerado para atraso pequeno
  if (state.situation === 'atraso' && state.dramaLevel === 5) {
    score -= 2.0;
    elements.convBadge.textContent = "SUSPEITO (DRAMA EXCESSIVO)";
    elements.convBadge.className = "text-[11px] px-2 py-0.5 rounded font-bold bg-amber-500/20 text-amber-400";
    elements.convSuggestion.textContent = "💡 Sugestão da IA: Cuidado! Tragédia grega para um atraso de 15 min soa inventada. Baixe o drama para nível 2 para parecer natural.";
  } else if (score >= 9.0) {
    elements.convBadge.textContent = "ÁLIBI BLINDADO";
    elements.convBadge.className = "text-[11px] px-2 py-0.5 rounded font-bold bg-green-500/20 text-green-400";
    elements.convSuggestion.textContent = "💡 Sugestão da IA: Plausibilidade impecável. Detalhes periféricos e testemunhas anônimas garantem aprovação sumária.";
  } else {
    elements.convBadge.textContent = "PLAUSÍVEL";
    elements.convBadge.className = "text-[11px] px-2 py-0.5 rounded font-bold bg-blue-500/20 text-blue-400";
    elements.convSuggestion.textContent = "💡 Sugestão da IA: Credibilidade boa. Se o chefe for exigente, adicione que a síndica estava de roupão.";
  }

  score = Math.min(9.9, Math.max(4.2, score));
  elements.convScore.textContent = score.toFixed(1);
}

// Memória de Longo Prazo
function loadMemory() {
  try {
    const saved = localStorage.getItem('desculpaGPT_memory');
    if (saved) {
      state.memoryLog = JSON.parse(saved);
    }
  } catch (e) {
    state.memoryLog = [];
  }
}

function updateMemory(target, situation) {
  state.memoryLog.push({ target, situation, timestamp: Date.now() });
  if (state.memoryLog.length > 10) state.memoryLog.shift();
  
  try {
    localStorage.setItem('desculpaGPT_memory', JSON.stringify(state.memoryLog));
  } catch (e) {}

  const count = state.memoryLog.filter(m => m.situation === situation).length;
  if (count >= 3) {
    elements.memoryAlertText.textContent = `Atenção Crítica: Você já usou essa mesma desculpa ${count} vezes recentemente. A IA inseriu automaticamente novos elementos para que ninguém desconfie de padrão comportamental repetitivo!`;
  } else {
    elements.memoryAlertText.textContent = `Histórico limpo. Nenhum parente foi assassinado duas vezes no mesmo trimestre contábil. Sua ficha de credibilidade está 100% preservada.`;
  }
}

// Copiar Desculpa
function copyExcuse() {
  const text = state.currentExcuse || elements.excuseOutputText.textContent.replace(/"/g, '');
  navigator.clipboard.writeText(text).then(() => {
    elements.copyText.textContent = "Copiado com Sucesso!";
    elements.copyIcon.textContent = "✅";
    setTimeout(() => {
      elements.copyText.textContent = "Copiar Desculpa";
      elements.copyIcon.textContent = "📋";
    }, 2000);
  });
}

// WhatsApp Share
function shareWhatsApp() {
  const text = state.currentExcuse || elements.excuseOutputText.textContent.replace(/"/g, '');
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Botão de Pânico
function triggerPanic() {
  elements.panicScreen.classList.remove('hidden');
}

function exitPanic() {
  elements.panicScreen.classList.add('hidden');
}

// Baixar arquivo corrompido
function downloadCorruptedFile() {
  // Cria um arquivo binário com header de DOCX ou XLSX, porém propositalmente corrompido
  const fakeCorruptedContent = new Uint8Array([
    0x50, 0x4B, 0x03, 0x04, 0x14, 0x00, 0x06, 0x00, // Zip Header simulado
    0xDE, 0xAD, 0xBE, 0xEF, 0x00, 0x00, 0x00, 0x00, // Corrupted CRC & Offset
    0xFF, 0xFF, 0xFF, 0xFF, 0x43, 0x4F, 0x52, 0x52,
    0x55, 0x50, 0x54, 0x45, 0x44, 0x5F, 0x42, 0x59,
    0x5F, 0x44, 0x45, 0x53, 0x43, 0x55, 0x4C, 0x50,
    0x41, 0x47, 0x50, 0x54, 0x5F, 0x56, 0x32, 0x34
  ]);

  const blob = new Blob([fakeCorruptedContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "Relatorio_Consolidado_Auditoria_Q3_FINAL_ASSINADO.docx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("📁 Arquivo DOCX corrompido baixado com sucesso!\n\nQuando o chefe tentar abrir no Word, aparecerá o erro nativo:\n'O Word encontrou conteúdo ilegível em Relatorio_Consolidado... Deseja tentar recuperar?'.\n\nIsso compra no mínimo mais 4 horas de prazo!");
}

// Barulho de Trânsito Sintetizado (Web Audio API)
function toggleTrafficAudio() {
  if (state.trafficAudioActive) {
    stopTrafficAudio();
  } else {
    startTrafficAudio();
  }
}

function startTrafficAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // Gerador de ruído branco (ruído de motor e atrito de pneu no asfalto)
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filtro Passa-Baixa para soar como motor e rua
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, audioCtx.currentTime);

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.18, audioCtx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    whiteNoise.start();
    noiseNode = whiteNoise;

    // Buzinas ocasionais (BEEP BEEP)
    hornInterval = setInterval(() => {
      playHornSound();
    }, 3500);

    state.trafficAudioActive = true;
    elements.audioText.textContent = "Parar Trânsito Falso";
    elements.audioIcon.textContent = "🛑";
    elements.trafficAudioBtn.classList.add('bg-red-500/20', 'text-red-400', 'border-red-500/40');
  } catch (e) {
    console.error("Audio API error:", e);
  }
}

function playHornSound() {
  if (!audioCtx || audioCtx.state !== 'running') return;
  const osc = audioCtx.createOscillator();
  const hornGain = audioCtx.createGain();
  
  // Frequência de buzina urbana típica (combinação de ~440Hz / 490Hz)
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(440, audioCtx.currentTime);
  
  hornGain.gain.setValueAtTime(0.06, audioCtx.currentTime);
  hornGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

  osc.connect(hornGain);
  hornGain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.35);
}

function stopTrafficAudio() {
  if (noiseNode) {
    try { noiseNode.stop(); } catch(e) {}
    noiseNode = null;
  }
  if (hornInterval) {
    clearInterval(hornInterval);
    hornInterval = null;
  }
  if (audioCtx) {
    try { audioCtx.close(); } catch(e) {}
    audioCtx = null;
  }
  state.trafficAudioActive = false;
  elements.audioText.textContent = "Tocar Barulho de Trânsito";
  elements.audioIcon.textContent = "🔊";
  elements.trafficAudioBtn.classList.remove('bg-red-500/20', 'text-red-400', 'border-red-500/40');
}

// Pitch Deck Controller
function openPitchDeck() {
  elements.pitchDeckModal.classList.remove('hidden');
  showSlide(state.currentSlide);
}

function closePitchDeck() {
  elements.pitchDeckModal.classList.add('hidden');
}

function initSlideDots() {
  elements.slideDots.innerHTML = '';
  for (let i = 1; i <= state.totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = `w-2.5 h-2.5 rounded-full transition-all ${i === 1 ? 'bg-brand-500 w-6' : 'bg-gray-700'}`;
    dot.addEventListener('click', () => showSlide(i));
    elements.slideDots.appendChild(dot);
  }
}

function showSlide(index) {
  state.currentSlide = index;
  const slides = document.querySelectorAll('.pitch-slide');
  slides.forEach((slide) => {
    if (parseInt(slide.dataset.slide) === index) {
      slide.classList.remove('hidden');
    } else {
      slide.classList.add('hidden');
    }
  });

  elements.slideCounter.textContent = `Slide ${index} / ${state.totalSlides}`;

  // Update dots
  const dots = elements.slideDots.querySelectorAll('button');
  dots.forEach((dot, idx) => {
    if (idx + 1 === index) {
      dot.className = 'w-6 h-2.5 rounded-full bg-brand-500 transition-all';
    } else {
      dot.className = 'w-2.5 h-2.5 rounded-full bg-gray-700 transition-all';
    }
  });

  // Toggle prev/next states
  elements.prevSlideBtn.style.visibility = index === 1 ? 'hidden' : 'visible';
  if (index === state.totalSlides) {
    elements.nextSlideBtn.textContent = "Concluir Pitch 🚀";
  } else {
    elements.nextSlideBtn.textContent = "Próximo →";
  }
}

function nextSlide() {
  if (state.currentSlide < state.totalSlides) {
    showSlide(state.currentSlide + 1);
  } else {
    closePitchDeck();
  }
}

function prevSlide() {
  if (state.currentSlide > 1) {
    showSlide(state.currentSlide - 1);
  }
}
