export type Language = 'pt' | 'en' | 'es';

export interface TranslationDictionary {
  appName: string;
  bookTitle: string;
  bookSubtitle: string;
  authorLabel: string;
  modules: string;
  fontSize: string;
  decreaseFont: string;
  increaseFont: string;
  normalFont: string;
  fontScaleLabel: string;
  notebook: string;
  notesTitle: string;
  pdfDownload: string;
  toolsCatalog: string;
  kiwifyGuide: string;
  lightMode: string;
  darkMode: string;
  themeToggle: string;
  languageSelect: string;
  
  // Sidebar
  tableOfContents: string;
  searchPlaceholder: string;
  readingProgress: string;
  allChapters: string;
  infographicsFilter: string;
  toolsFilter: string;
  chaptersCount: string;
  
  // Chapter viewer
  generalIntro: string;
  moduleLabel: string;
  markAsRead: string;
  chapterRead: string;
  downloadPdfBtn: string;
  embeddedInfographic: string;
  goldenTip: string;
  reflectionBox: string;
  prevChapter: string;
  nextChapter: string;
  copyPrompt: string;
  copied: string;
  
  // Apple Notebook
  notebookTitle: string;
  savedLocally: string;
  currentChapterTab: string;
  allNotesTab: string;
  selectChapterNote: string;
  checklistBtn: string;
  bulletBtn: string;
  timestampBtn: string;
  clearNotes: string;
  notesPlaceholder: string;
  charactersCount: string;
  downloadMarkdown: string;
  printNotes: string;
  copyNotes: string;
  emptyNotebookTitle: string;
  emptyNotebookDesc: string;
  editNote: string;
  
  // PDF Export
  pdfModalTitle: string;
  pdfModalSubtitle: string;
  selectedChapterLabel: string;
  colorOptionTitle: string;
  colorOptionDesc: string;
  bwOptionTitle: string;
  bwOptionDesc: string;
  infographicOptionTitle: string;
  infographicOptionDesc: string;
  generatingPdf: string;
  downloadPdfAction: string;
  cancelBtn: string;
  closeBtn: string;
  
  // Highlighter
  highlightTitle: string;
  sendToNotesBtn: string;
  yellowHighlight: string;
  greenHighlight: string;
  blueHighlight: string;

  // Chapter translated titles mapping
  chapterTitles: Record<string, { title: string; subtitle?: string }>;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  pt: {
    appName: "Dominando o Google Search 2026",
    bookTitle: "DOMINANDO O GOOGLE SEARCH 2026",
    bookSubtitle: "O Guia Definitivo do SEO, AEO e GEO — Do Zero ao Avançado",
    authorLabel: "Guia Definitivo · Andrews",
    modules: "Módulos",
    fontSize: "Tamanho da Fonte",
    decreaseFont: "Diminuir Fonte",
    increaseFont: "Aumentar Fonte",
    normalFont: "Tamanho Padrão",
    fontScaleLabel: "Tamanho do Texto",
    notebook: "Caderno",
    notesTitle: "Anotações",
    pdfDownload: "Baixar PDF",
    toolsCatalog: "Ferramentas",
    kiwifyGuide: "Guia Kiwify",
    lightMode: "Modo Claro",
    darkMode: "Modo Noturno",
    themeToggle: "Alternar Tema Noturno/Claro",
    languageSelect: "Selecionar Idioma",
    
    tableOfContents: "Sumário do Livro",
    searchPlaceholder: "Buscar no texto do livro...",
    readingProgress: "Progresso de Leitura:",
    allChapters: "Todos",
    infographicsFilter: "Infográficos",
    toolsFilter: "Ferramentas",
    chaptersCount: "Capítulos",
    
    generalIntro: "INTRODUÇÃO GERAL",
    moduleLabel: "MÓDULO",
    markAsRead: "Marcar Lido",
    chapterRead: "Capítulo Lido",
    downloadPdfBtn: "Baixar em PDF",
    embeddedInfographic: "Infográfico Oficial em Código Web deste Módulo:",
    goldenTip: "Dica de Ouro",
    reflectionBox: "Caixa de Reflexão",
    prevChapter: "Capítulo Anterior",
    nextChapter: "Próximo Capítulo",
    copyPrompt: "Copiar",
    copied: "Copiado!",
    
    notebookTitle: "Caderno de Notas",
    savedLocally: "Salvo no dispositivo",
    currentChapterTab: "Capítulo Atual",
    allNotesTab: "Ver Todas",
    selectChapterNote: "Capítulo:",
    checklistBtn: "Checklist",
    bulletBtn: "Tópico",
    timestampBtn: "Data/Hora",
    clearNotes: "Limpar anotações deste capítulo",
    notesPlaceholder: "Escreva aqui suas ideias, planos de ação ou dúvidas sobre este módulo...\n\n💡 Como grifar textos:\n1. Selecione qualquer frase no livro.\n2. Escolha a cor do marca-texto (Amarelo, Verde ou Azul).\n3. Clique em \"📝 Caderno\" para colar o trecho aqui automaticamente!",
    charactersCount: "caracteres no capítulo",
    downloadMarkdown: "Baixar em Markdown (.md)",
    printNotes: "Imprimir / Salvar em PDF",
    copyNotes: "Copiar texto",
    emptyNotebookTitle: "Seu caderno ainda está vazio",
    emptyNotebookDesc: "Selecione trechos no livro para grifar ou escreva suas notas no modo 'Capítulo Atual'.",
    editNote: "Editar",
    
    pdfModalTitle: "Baixar Parte Atual em PDF",
    pdfModalSubtitle: "EXPORTAÇÃO INTELIGENTE EM PDF",
    selectedChapterLabel: "Capítulo Selecionado:",
    colorOptionTitle: "1. Colorido (Padrão Editorial)",
    colorOptionDesc: "Preserva todas as cores nobres (Azul Marinho, Dourado e Esmeralda), caixas de destaque e infográficos. Ideal para ler em tablets, celular ou computador.",
    bwOptionTitle: "2. Preto e Branco (Econômico / Alto Contraste)",
    bwOptionDesc: "Converte o conteúdo e os diagramas para tons de cinza de alto contraste. Ideal para impressão em impressoras laser/tinta com economia de suprimentos.",
    infographicOptionTitle: "3. Apenas Infográfico (Pôster do Módulo)",
    infographicOptionDesc: "Imprime exclusivamente o pôster do infográfico deste capítulo em página única, ocultando o texto corrido. Ideal para quadros, resumos visuais ou cheatsheets.",
    generatingPdf: "Preparando impressão...",
    downloadPdfAction: "Gerar & Baixar PDF",
    cancelBtn: "Cancelar",
    closeBtn: "Fechar janela",
    
    highlightTitle: "Grifar:",
    sendToNotesBtn: "📝 Caderno",
    yellowHighlight: "Grifar com Amarelo Dourado",
    greenHighlight: "Grifar com Verde Esmeralda",
    blueHighlight: "Grifar com Azul Céu",

    chapterTitles: {
      "introducao": {
        title: "Introdução — O fim do SEO tradicional",
        subtitle: "A Transição dos 10 Links Azuis para o Ecossistema Multimodal"
      },
      "modulo-1": {
        title: "Módulo 1 — A mentalidade da busca em 2026",
        subtitle: "Entendendo o comportamento do usuário e a jornada não-linear"
      },
      "modulo-2": {
        title: "Módulo 2 — Como o Google funciona hoje",
        subtitle: "Rastreamento, indexação, sistemas de classificação e IA"
      },
      "modulo-3": {
        title: "Módulo 3 — Anatomia da página perfeita",
        subtitle: "Clareza, estrutura e prova social para humanos e robôs"
      },
      "modulo-4": {
        title: "Módulo 4 — SEO Técnico essencial",
        subtitle: "Desempenho mobile, Core Web Vitals e indexabilidade sem complicação"
      },
      "modulo-5": {
        title: "Módulo 5 — SEO Local em 2026",
        subtitle: "Perfil da Empresa, relevância geográfica e reputação no mapa"
      },
      "modulo-6": {
        title: "Módulo 6 — Search Console descomplicado",
        subtitle: "Quick wins, termos de busca e diagnósticos que geram receita rápida"
      },
      "modulo-7": {
        title: "Módulo 7 — O manual definitivo de AEO",
        subtitle: "Estruturando respostas para o topo e para assistentes virtuais"
      },
      "modulo-8": {
        title: "Módulo 8 — O manual definitivo de GEO",
        subtitle: "Como se tornar a fonte citada pelo Google AI Overviews e ChatGPT"
      },
      "modulo-9": {
        title: "Módulo 9 — Auditoria completa da sua página",
        subtitle: "Checklist funcional de 4 fases para validar antes de publicar"
      },
      "modulo-10": {
        title: "Módulo 10 — Plano de ação para os primeiros 90 dias",
        subtitle: "Do diagnóstico à autoridade: calendário de execução prática"
      },
      "modulo-11": {
        title: "Módulo 11 — Erros comuns que destroem resultados",
        subtitle: "Armadilhas de conteúdo, automações perigosas e como evitá-las"
      },
      "modulo-12": {
        title: "Módulo 12 — Medição: do clique à receita",
        subtitle: "Métricas reais de negócio além de impressões e rankings de vaidade"
      },
      "modulo-13": {
        title: "Módulo 13 — Ferramental recomendado",
        subtitle: "Stack estratégico de ferramentas gratuitas e essenciais para 2026"
      },
      "prompts-ia": {
        title: "Módulo Bônus 1 — Templates de Prompts para IA",
        subtitle: "Prompts profissionais para criação, auditoria e estruturação de AEO/GEO"
      },
      "glossario": {
        title: "Módulo Bônus 2 — Glossário Essencial",
        subtitle: "Conceitos técnicos e estratégicos explicados de forma direta"
      },
      "modulo-ferramentas": {
        title: "Módulo 21 — Central de Ferramentas & Simuladores Práticos",
        subtitle: "Simulador GEO, Gerador de Schema JSON-LD, Matriz ICE, Calculadora de ROI e Checklist"
      }
    }
  },

  en: {
    appName: "Mastering Google Search 2026",
    bookTitle: "MASTERING GOOGLE SEARCH 2026",
    bookSubtitle: "The Definitive Guide to SEO, AEO, and GEO — From Zero to Advanced",
    authorLabel: "Definitive Guide · Andrews",
    modules: "Modules",
    fontSize: "Font Size",
    decreaseFont: "Decrease Font",
    increaseFont: "Increase Font",
    normalFont: "Default Font Size",
    fontScaleLabel: "Text Size",
    notebook: "Notebook",
    notesTitle: "Notes",
    pdfDownload: "Download PDF",
    toolsCatalog: "Tools",
    kiwifyGuide: "Kiwify Guide",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    themeToggle: "Toggle Dark/Light Mode",
    languageSelect: "Select Language",
    
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search book content...",
    readingProgress: "Reading Progress:",
    allChapters: "All",
    infographicsFilter: "Infographics",
    toolsFilter: "Tools",
    chaptersCount: "Chapters",
    
    generalIntro: "GENERAL INTRODUCTION",
    moduleLabel: "MODULE",
    markAsRead: "Mark as Read",
    chapterRead: "Chapter Read",
    downloadPdfBtn: "Download PDF",
    embeddedInfographic: "Official Web Code Infographic for this Module:",
    goldenTip: "Golden Rule",
    reflectionBox: "Reflection Box",
    prevChapter: "Previous Chapter",
    nextChapter: "Next Chapter",
    copyPrompt: "Copy",
    copied: "Copied!",
    
    notebookTitle: "Notes Notebook",
    savedLocally: "Saved to device",
    currentChapterTab: "Current Chapter",
    allNotesTab: "View All",
    selectChapterNote: "Chapter:",
    checklistBtn: "Checklist",
    bulletBtn: "Bullet",
    timestampBtn: "Date/Time",
    clearNotes: "Clear notes for this chapter",
    notesPlaceholder: "Write your ideas, action plans, or questions regarding this module here...\n\n💡 How to highlight text:\n1. Select any sentence in the book.\n2. Pick a highlighter color (Yellow, Green, or Blue).\n3. Click \"📝 Notebook\" to paste the excerpt here automatically!",
    charactersCount: "characters in chapter",
    downloadMarkdown: "Download as Markdown (.md)",
    printNotes: "Print / Save as PDF",
    copyNotes: "Copy text",
    emptyNotebookTitle: "Your notebook is still empty",
    emptyNotebookDesc: "Select passages in the book to highlight or write your thoughts in 'Current Chapter' mode.",
    editNote: "Edit",
    
    pdfModalTitle: "Download Current Section in PDF",
    pdfModalSubtitle: "SMART PDF EXPORT",
    selectedChapterLabel: "Selected Chapter:",
    colorOptionTitle: "1. Full Color (Editorial Standard)",
    colorOptionDesc: "Preserves royal navy, gold, and emerald highlights, feature callouts, and infographics. Perfect for reading on tablets, mobile, or desktop screens.",
    bwOptionTitle: "2. Black & White (Eco / High Contrast)",
    bwOptionDesc: "Converts text and diagrams into crisp high-contrast grayscale. Recommended for laser/inkjet printers to save toner.",
    infographicOptionTitle: "3. Infographic Only (Module Poster)",
    infographicOptionDesc: "Prints strictly this module's visual infographic poster on a single clean page, hiding regular prose. Perfect for cheat sheets and office boards.",
    generatingPdf: "Preparing print preview...",
    downloadPdfAction: "Generate & Download PDF",
    cancelBtn: "Cancel",
    closeBtn: "Close window",
    
    highlightTitle: "Highlight:",
    sendToNotesBtn: "📝 Notebook",
    yellowHighlight: "Highlight with Golden Yellow",
    greenHighlight: "Highlight with Emerald Green",
    blueHighlight: "Highlight with Sky Blue",

    chapterTitles: {
      "introducao": {
        title: "Introduction — The End of Traditional SEO",
        subtitle: "The Shift from 10 Blue Links to the Multimodal Ecosystem"
      },
      "modulo-1": {
        title: "Module 1 — The 2026 Search Mindset",
        subtitle: "Understanding user behavior and non-linear buyer journeys"
      },
      "modulo-2": {
        title: "Module 2 — How Google Works Today",
        subtitle: "Crawling, indexing, ranking systems, and AI Overviews"
      },
      "modulo-3": {
        title: "Module 3 — Anatomy of the Perfect Page",
        subtitle: "Clarity, structure, and proof for both humans and AI bots"
      },
      "modulo-4": {
        title: "Module 4 — Essential Technical SEO",
        subtitle: "Mobile speed, Core Web Vitals, and straightforward indexability"
      },
      "modulo-5": {
        title: "Module 5 — Local SEO in 2026",
        subtitle: "Google Business Profile, geographic relevance, and map trust"
      },
      "modulo-6": {
        title: "Module 6 — Search Console Simplified",
        subtitle: "Quick wins, search queries, and diagnostics that unlock revenue fast"
      },
      "modulo-7": {
        title: "Module 7 — The Definitive AEO Manual",
        subtitle: "Structuring direct answers for top position and AI assistants"
      },
      "modulo-8": {
        title: "Module 8 — The Definitive GEO Manual",
        subtitle: "How to become the primary cited source in Google AI & ChatGPT"
      },
      "modulo-9": {
        title: "Module 9 — Complete Page Audit Checklist",
        subtitle: "A 4-phase interactive checklist to validate before publishing"
      },
      "modulo-10": {
        title: "Module 10 — 90-Day Execution Plan",
        subtitle: "From diagnosis to authority: a practical roadmap"
      },
      "modulo-11": {
        title: "Module 11 — Costly Mistakes That Hurt Results",
        subtitle: "Content traps, risky automation, and how to stay safe"
      },
      "modulo-12": {
        title: "Module 12 — Measurement: From Click to Revenue",
        subtitle: "Real business metrics over vanity rankings and impression counts"
      },
      "modulo-13": {
        title: "Module 13 — Recommended Toolkit",
        subtitle: "Essential free and strategic tools for modern 2026 search"
      },
      "prompts-ia": {
        title: "Bonus Module 1 — AI Prompt Templates",
        subtitle: "Battle-tested prompts for content audit, AEO extraction, and GEO citations"
      },
      "glossario": {
        title: "Bonus Module 2 — Essential Glossary",
        subtitle: "Key technical and strategic definitions explained straight to the point"
      },
      "modulo-ferramentas": {
        title: "Module 21 — Interactive Tools & Simulators Center",
        subtitle: "GEO Simulator, Schema JSON-LD Generator, ICE Matrix, ROI and Checklist"
      }
    }
  },

  es: {
    appName: "Dominando Google Search 2026",
    bookTitle: "DOMINANDO GOOGLE SEARCH 2026",
    bookSubtitle: "La Guía Definitiva de SEO, AEO y GEO — De Cero a Avanzado",
    authorLabel: "Guía Definitiva · Andrews",
    modules: "Módulos",
    fontSize: "Tamaño de Fuente",
    decreaseFont: "Disminuir Fuente",
    increaseFont: "Aumentar Fuente",
    normalFont: "Tamaño Predeterminado",
    fontScaleLabel: "Tamaño del Texto",
    notebook: "Cuaderno",
    notesTitle: "Notas",
    pdfDownload: "Descargar PDF",
    toolsCatalog: "Herramientas",
    kiwifyGuide: "Guía Kiwify",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    themeToggle: "Alternar Modo Oscuro/Claro",
    languageSelect: "Seleccionar Idioma",
    
    tableOfContents: "Índice del Libro",
    searchPlaceholder: "Buscar en el texto del libro...",
    readingProgress: "Progreso de Lectura:",
    allChapters: "Todos",
    infographicsFilter: "Infografías",
    toolsFilter: "Herramientas",
    chaptersCount: "Capítulos",
    
    generalIntro: "INTRODUCCIÓN GENERAL",
    moduleLabel: "MÓDULO",
    markAsRead: "Marcar como Leído",
    chapterRead: "Capítulo Leído",
    downloadPdfBtn: "Descargar en PDF",
    embeddedInfographic: "Infografía Oficial en Código Web de este Módulo:",
    goldenTip: "Consejo de Oro",
    reflectionBox: "Caja de Reflexión",
    prevChapter: "Capítulo Anterior",
    nextChapter: "Próximo Capítulo",
    copyPrompt: "Copiar",
    copied: "¡Copiado!",
    
    notebookTitle: "Cuaderno de Notas",
    savedLocally: "Guardado en el dispositivo",
    currentChapterTab: "Capítulo Actual",
    allNotesTab: "Ver Todas",
    selectChapterNote: "Capítulo:",
    checklistBtn: "Checklist",
    bulletBtn: "Punto",
    timestampBtn: "Fecha/Hora",
    clearNotes: "Borrar notas de este capítulo",
    notesPlaceholder: "Escribe aquí tus ideas, planes de acción o dudas sobre este módulo...\n\n💡 Cómo resaltar textos:\n1. Selecciona cualquier frase del libro.\n2. Elige el color del resaltador (Amarillo, Verde o Azul).\n3. Haz clic en \"📝 Cuaderno\" para pegar el fragmento aquí automáticamente.",
    charactersCount: "caracteres en el capítulo",
    downloadMarkdown: "Descargar en Markdown (.md)",
    printNotes: "Imprimir / Guardar en PDF",
    copyNotes: "Copiar texto",
    emptyNotebookTitle: "Tu cuaderno aún está vacío",
    emptyNotebookDesc: "Selecciona fragmentos en el libro para resaltar o escribe tus notas en el modo 'Capítulo Actual'.",
    editNote: "Editar",
    
    pdfModalTitle: "Descargar Sección Actual en PDF",
    pdfModalSubtitle: "EXPORTACIÓN INTELIGENTE EN PDF",
    selectedChapterLabel: "Capítulo Seleccionado:",
    colorOptionTitle: "1. A Todo Color (Estándar Editorial)",
    colorOptionDesc: "Conserva todos los colores nobles (Azul Marino, Dorado y Esmeralda), cuadros destacados e infografías. Ideal para leer en tabletas, móviles o computadoras.",
    bwOptionTitle: "2. Blanco y Negro (Económico / Alto Contraste)",
    bwOptionDesc: "Convierte textos y diagramas en escala de grises de alto contraste. Recomendado para impresoras láser o de tinta con ahorro de tóner.",
    infographicOptionTitle: "3. Solo Infografía (Póster del Módulo)",
    infographicOptionDesc: "Imprime exclusivamente el póster visual de la infografía de este capítulo en una página limpia, ocultando el texto corrido. Ideal para cuadros y resúmenes.",
    generatingPdf: "Preparando vista de impresión...",
    downloadPdfAction: "Generar y Descargar PDF",
    cancelBtn: "Cancelar",
    closeBtn: "Cerrar ventana",
    
    highlightTitle: "Resaltar:",
    sendToNotesBtn: "📝 Cuaderno",
    yellowHighlight: "Resaltar con Amarillo Dorado",
    greenHighlight: "Resaltar con Verde Esmeralda",
    blueHighlight: "Resaltar con Azul Cielo",

    chapterTitles: {
      "introducao": {
        title: "Introducción — El fin del SEO tradicional",
        subtitle: "La transición de los 10 enlaces azules al ecosistema multimodal"
      },
      "modulo-1": {
        title: "Módulo 1 — La mentalidad de búsqueda en 2026",
        subtitle: "Comprender el comportamiento del usuario y el viaje no lineal"
      },
      "modulo-2": {
        title: "Módulo 2 — Cómo funciona Google hoy",
        subtitle: "Rastreo, indexación, sistemas de clasificación e inteligencia artificial"
      },
      "modulo-3": {
        title: "Módulo 3 — Anatomía de la página perfecta",
        subtitle: "Claridad, estructura y prueba social para humanos y robots"
      },
      "modulo-4": {
        title: "Módulo 4 — SEO Técnico esencial",
        subtitle: "Rendimiento móvil, Core Web Vitals e indexabilidad sin complicaciones"
      },
      "modulo-5": {
        title: "Módulo 5 — SEO Local en 2026",
        subtitle: "Perfil de Empresa, relevancia geográfica y reputación en mapas"
      },
      "modulo-6": {
        title: "Módulo 6 — Search Console simplificado",
        subtitle: "Quick wins, términos de búsqueda y diagnósticos que generan ingresos rápidos"
      },
      "modulo-7": {
        title: "Módulo 7 — El manual definitivo de AEO",
        subtitle: "Estructurando respuestas directas para la cima y asistentes virtuales"
      },
      "modulo-8": {
        title: "Módulo 8 — El manual definitivo de GEO",
        subtitle: "Cómo convertirse en la fuente citada por Google AI Overviews y ChatGPT"
      },
      "modulo-9": {
        title: "Módulo 9 — Auditoría completa de su página",
        subtitle: "Checklist funcional de 4 fases para validar antes de publicar"
      },
      "modulo-10": {
        title: "Módulo 10 — Plan de acción para los primeros 90 días",
        subtitle: "Del diagnóstico a la autoridad: calendario de ejecución práctica"
      },
      "modulo-11": {
        title: "Módulo 11 — Errores comunes que arruinan resultados",
        subtitle: "Trampas de contenido, automatizaciones riesgosas y cómo evitarlas"
      },
      "modulo-12": {
        title: "Módulo 12 — Medición: del clic a los ingresos",
        subtitle: "Métricas reales de negocio más allá de rankings e impresiones de vanidad"
      },
      "modulo-13": {
        title: "Módulo 13 — Herramientas recomendadas",
        subtitle: "Stack estratégico de herramientas gratuitas y esenciales para 2026"
      },
      "prompts-ia": {
        title: "Módulo Extra 1 — Plantillas de Prompts para IA",
        subtitle: "Prompts profesionales para auditoría, síntesis de AEO y citas en GEO"
      },
      "glossario": {
        title: "Módulo Extra 2 — Glosario Esencial",
        subtitle: "Conceptos técnicos y estratégicos explicados de forma directa y clara"
      },
      "modulo-ferramentas": {
        title: "Módulo 21 — Central de Herramientas y Simuladores Prácticos",
        subtitle: "Simulador GEO, Generador de Schema JSON-LD, Matriz ICE, ROI y Checklist"
      }
    }
  }
};
