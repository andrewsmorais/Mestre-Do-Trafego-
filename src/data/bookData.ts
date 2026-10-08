export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  hasInfographic?: boolean;
  infographicId?: string;
  sections: Section[];
}

export interface Section {
  id: string;
  title: string;
  content: string[]; // paragraphs
  subsections?: {
    title: string;
    paragraphs: string[];
    listItems?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    quote?: string;
    codeSnippet?: string;
    alert?: string;
    reflectionBox?: string[];
    goldenTip?: string;
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  listItems?: string[];
  quote?: string;
  codeSnippet?: string;
  alert?: string;
  reflectionBox?: string[];
  goldenTip?: string;
}

export const BOOK_METADATA = {
  title: "DOMINANDO O GOOGLE SEARCH 2026",
  subtitle: "O Guia Definitivo do SEO, AEO e GEO — Do Zero ao Avançado",
  author: "Andrews",
  version: "2026",
  targetAudience: "Empreendedores digitais, pequenas empresas e profissionais de marketing",
  objective: "Transformar busca orgânica em visibilidade, confiança e receita.",
  usageGuide: "Leia os módulos em ordem se você está começando. Se já possui um site, use o checklist final para diagnosticar gargalos, escolha três quick wins e implemente-os antes de partir para mudanças maiores."
};

export const CHAPTERS: Chapter[] = [
  {
    id: "introducao",
    number: "0",
    title: "Introdução — O fim do SEO tradicional",
    hasInfographic: true,
    infographicId: "trinity",
    sections: [
      {
        id: "intro-contexto",
        title: "A Transição dos 10 Links Azuis para o Ecossistema Multimodal",
        content: [
          "Durante muito tempo, SEO foi explicado como uma disputa por dez links azuis. A empresa escolhia uma palavra-chave, publicava um texto, conquistava backlinks e esperava subir. Esse modelo nunca foi tão simples quanto os tutoriais faziam parecer, mas ele tinha uma referência clara: aparecer na página de resultados.",
          "Em 2026, a busca é mais ampla. O Google continua sendo um mecanismo de descoberta, mas também apresenta respostas geradas por IA (AI Overviews), imagens, vídeos, mapas, produtos, fóruns e comparações. O usuário pode descobrir uma marca no TikTok, validar a reputação no Reddit, assistir a um tutorial no YouTube, comparar preços em um marketplace e só então pesquisar o nome da empresa no Google.",
          "A documentação oficial do Google afirma que SEO continua relevante nos recursos generativos porque esses recursos usam sistemas de busca, recuperação de páginas e sinais de qualidade para fundamentar as respostas. A mudança, portanto, não é 'SEO morreu'. A mudança é que SEO deixou de ser o trabalho inteiro."
        ],
        quote: "A mudança, portanto, não é 'SEO morreu'. A mudança é que SEO deixou de ser o trabalho inteiro.",
        subsections: [
          {
            title: "2.1 SEO, AEO e GEO: três objetivos diferentes",
            paragraphs: [
              "Para navegar com clareza nesse novo cenário, precisamos distinguir três disciplinas complementares:"
            ],
            listItems: [
              "SEO — Search Engine Optimization: tornar páginas, produtos, serviços e negócios descobríveis, rastreáveis, compreensíveis e competitivos na busca.",
              "AEO — Answer Engine Optimization: estruturar o conteúdo para responder perguntas de forma direta, clara e útil em snippets, caixas de resposta, assistentes e interfaces conversacionais.",
              "GEO — Generative Engine Optimization: aumentar a chance de uma marca, página ou especialista ser usado como fonte em respostas geradas por IA."
            ],
            alert: "Uma distinção importante: não existe uma técnica garantida para 'forçar' uma citação de IA. A melhor estratégia é criar conteúdo rastreável, original, verificável e fácil de extrair, além de construir sinais públicos de reputação."
          },
          {
            title: "2.2 A pergunta que orienta este livro",
            paragraphs: [
              "Não pergunte apenas: 'Como faço esta página rankear?'. Pergunte:",
              "'Se uma pessoa descobrir minha marca por esta página, ela terá informação suficiente, motivos para confiar e um próximo passo claro para comprar?'",
              "Essa pergunta evita duas armadilhas críticas: produzir tráfego sem conversão e produzir conteúdo otimizado para robôs que não resolve o problema do leitor."
            ],
            goldenTip: "Resultado antes da vaidade: posição, impressões e citações são sinais intermediários. O resultado final é uma ação de negócio: venda, lead qualificado, ligação, visita, agendamento, assinatura ou indicação."
          }
        ]
      }
    ]
  },
  {
    id: "modulo-1",
    number: "1",
    title: "Módulo 1 — A mentalidade da busca em 2026",
    hasInfographic: true,
    infographicId: "consumer",
    sections: [
      {
        id: "m1-trindade",
        title: "1.1 A Trindade da Busca como Sistema Integrado",
        content: [
          "A trindade funciona como um sistema integrado em três tempos:",
          "1. SEO cria acesso: A página precisa ser encontrada, rastreada, indexada e associada à intenção correta.",
          "2. AEO cria compreensão: A resposta precisa estar visível, bem organizada e formulada na linguagem da pergunta.",
          "3. GEO cria reutilização: O conteúdo precisa oferecer fatos, evidências, definições e exemplos que possam ser selecionados, resumidos e citados por sistemas generativos.",
          "Uma página de serviço, por exemplo, pode ter SEO forte e ainda falhar em AEO se o usuário não encontra preço, prazo, área de atendimento ou critérios de contratação. Pode ter uma boa resposta e ainda falhar em GEO se não apresenta autoria, fonte, experiência prática ou dados que diferenciem a empresa."
        ]
      },
      {
        id: "m1-everywhere",
        title: "1.2 Everywhere Optimization",
        content: [
          "A jornada raramente começa e termina no Google. 'Everywhere Optimization' é uma forma de planejar a presença nos ambientes em que o público descobre, valida, compara e decide."
        ],
        table: {
          headers: ["Etapa", "Pergunta do Usuário", "Canais Frequentes", "Ativo que a Empresa Precisa Ter"],
          rows: [
            ["Descoberta", "“Que solução existe?”", "Google, TikTok, YouTube", "Conteúdo explicativo e demonstrativo"],
            ["Validação", "“Essa marca é confiável?”", "Reviews, Reddit, comunidades, redes", "Provas, respostas e menções legítimas"],
            ["Comparação", "“Qual opção serve para mim?”", "Site, marketplace, comparadores", "Tabelas, casos, especificações e preço"],
            ["Decisão", "“Como compro ou falo com alguém?”", "Google Maps, site, WhatsApp, checkout", "CTA claro, disponibilidade e fricção baixa"],
            ["Pós-compra", "“Fiz uma boa escolha?”", "E-mail, suporte, comunidade", "Onboarding, suporte e pedido ético de avaliação"]
          ]
        },
        subsections: [
          {
            title: "A psicologia de cada plataforma",
            paragraphs: [
              "O mesmo argumento precisa ser adaptado ao ambiente. Não copie e cole o artigo do blog em todas as redes. O critério não é estar em vários canais. É estar nos canais que influenciam a decisão do seu público."
            ],
            table: {
              headers: ["Plataforma", "O que tende a funcionar", "Como adaptar a prova"],
              rows: [
                ["TikTok", "novidade, emoção e gancho visual", "demonstre o problema em poucos segundos"],
                ["YouTube", "retenção, profundidade e expertise", "tutorial, teste, comparação e caso completo"],
                ["Instagram", "identidade, inspiração e relacionamento", "Reels, bastidores, stories e prova social"],
                ["Reddit e fóruns", "autenticidade e experiência", "responda a pergunta sem transformar a comunidade em anúncio"],
                ["LinkedIn", "autoridade profissional e networking", "análise, dados, caso e ponto de vista assinado"],
                ["Amazon e Mercado Livre", "comparação e prova social", "ficha precisa, fotos reais, perguntas respondidas e avaliações legítimas"],
                ["Sistemas de IA", "clareza semântica e fontes verificáveis", "definições, fatos, autoria, contexto e referências"]
              ]
            }
          },
          {
            title: "KPIs além do ranking e o Framework de 7 Dias",
            paragraphs: [
              "Inclua no painel de marketing indicadores como: menções qualificadas e avaliações novas; consultas de marca e buscas navegacionais; tráfego de referência vindo de comunidades e ferramentas de IA; leads e vendas assistidos por conteúdo; taxa de conversão por página e por intenção; presença da marca em respostas de IA, medida por amostras documentadas.",
              "Parte do tráfego de IA aparece sem classificação perfeita no Analytics (referral, direct). Use UTMs quando controlar o link, pesquise 'como você nos encontrou?' e compare leads, não apenas sessões.",
              "O Framework de 7 dias para começar: Dia 1: dois canais prioritários e uma conversão; Dia 2: página-pilar com FAQ, prova e CTA; Dia 3: três conteúdos (erro comum, passo a passo, caso real); Dia 4: vídeos em cortes nativos; Dia 5: depoimentos autorizados e página Sobre; Dia 6: conecte conteúdos à página de decisão; Dia 7: registre métricas de referência e defina o próximo teste.",
              "O mito dos 27%: É comum a afirmação de que o Google representa exatamente 27% da decisão. Sem pesquisa específica no seu nicho, use esse número apenas como metáfora didática de que a jornada é distribuída."
            ]
          },
          {
            title: "1.3 Visibilidade versus validação",
            paragraphs: [
              "Visibilidade é ser visto. Validação é ser considerado confiável. Uma marca pode ter muitas impressões e ainda perder para um concorrente com menos alcance, mas mais avaliações, demonstrações, especialistas identificáveis e respostas a objeções.",
              "Backlinks continuam ajudando na descoberta, mas links artificiais entram em território de risco. Em 2026, a melhor estratégia é criar motivos legítimos para citação: pesquisa própria com metodologia explícita, ferramenta gratuita útil, benchmark do setor, estudo de caso com números autorizados, comentário técnico assinado e recurso visual que facilite a compreensão."
            ],
            alert: "Aviso — menção não é maquiagem: não crie perfis falsos, reviews compradas ou artigos genéricos em dezenas de sites. Reputação sustentável nasce de experiência verificável e relações editoriais legítimas.",
            reflectionBox: [
              "Minha marca está apenas tentando aparecer ou também está ajudando o cliente a decidir?",
              "Qual evidência eu tenho de que o mercado me considera uma fonte confiável?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "modulo-2",
    number: "2",
    title: "Módulo 2 — Inteligência e mineração de dados",
    sections: [
      {
        id: "m2-decisao",
        title: "2.1 Comece pela decisão, não pela palavra-chave",
        content: [
          "Palavra-chave é uma representação do que alguém digitou. Intenção é o problema ou decisão por trás da busca. A mesma expressão pode ter intenções distintas.",
          "Exemplo: 'software financeiro' pode significar curiosidade, busca por uma lista, comparação de fornecedores ou intenção imediata de demonstração. A página certa muda conforme o estágio."
        ],
        table: {
          headers: ["Intenção", "Exemplo", "Página Adequada", "CTA Recomendado"],
          rows: [
            ["Informacional", "“como controlar fluxo de caixa”", "Guia ou aula", "Baixar modelo"],
            ["Comercial", "“melhor software de fluxo de caixa”", "Comparativo ou categoria", "Ver demonstração"],
            ["Transacional", "“software fluxo de caixa preço”", "Página de produto", "Assinar ou falar com vendas"],
            ["Local", "“contador para pequenas empresas em Recife”", "Landing local + Perfil da Empresa", "Ligar ou agendar"],
            ["Navegacional", "“marca X login”", "Página oficial", "Entrar"]
          ]
        },
        subsections: [
          {
            title: "2.2 O Planejador de Palavras-chave do Google Ads e o Método das 4 Fontes",
            paragraphs: [
              "O Planejador pode gerar ideias e faixas de volume. O CPC não é um ranking de palavras melhores: é sinal de disputa entre anunciantes. Dica de Ouro: volume alto com intenção vaga pode valer menos que uma busca pequena feita por alguém pronto para comprar.",
              "O Método das 4 Fontes para ampliar o mapa sem depender de uma única ferramenta:",
              "1. Fonte 1 — Google Suggest e buscas relacionadas ('preço', 'perto de mim', 'vale a pena', 'como escolher').",
              "2. Fonte 2 — Anúncios e páginas patrocinadas (analise títulos, garantias, diferenciais e ofertas pagas).",
              "3. Fonte 3 — YouTube (títulos e comentários indicam dúvidas visuais e frustrações).",
              "4. Fonte 4 — Comunidades e perguntas públicas (Reddit, fóruns e grupos revelam a linguagem natural)."
            ],
            codeSnippet: `Prompt para IA:\n"Agrupe estas consultas por intenção informacional, comercial, investigacional, transacional, local e navegacional. Para cada grupo, sugira a página mais adequada, o estágio da jornada, uma pergunta de decisão e uma conversão mensurável. Não invente volume, CPC ou concorrência; sinalize o que precisa ser validado manualmente."`
          },
          {
            title: "2.4 Intenção de busca versus intenção de decisão",
            paragraphs: [
              "Para aproximar conteúdo de conversão, acrescente perguntas que o usuário faria antes de fechar:",
              "• Para quem isso não serve?",
              "• Quanto custa e o que está incluído?",
              "• Que prazo e esforço são necessários?",
              "• Que alternativas existem?",
              "• Que risco o comprador assume?",
              "• Como comparar duas opções?",
              "• Que resultado é realista?",
              "Exemplo prático de consultoria: Para 'consultoria de marketing para clínica', uma página fraca repete o termo em todo parágrafo. Uma página forte explica para quais clínicas serve, mostra o diagnóstico inicial, entregáveis, prazos, faixas de investimento, limitações, caso semelhante, FAQ e CTA de triagem."
            ],
            reflectionBox: [
              "Estou escrevendo para a consulta ou para a decisão que vem depois dela?",
              "Que objeção comercial meu conteúdo ainda está escondendo?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "modulo-3",
    number: "3",
    title: "Módulo 3 — Anatomia da página perfeita (On-Page e AEO)",
    hasInfographic: true,
    infographicId: "perfect_page",
    sections: [
      {
        id: "m3-hierarquia",
        title: "3.1 A hierarquia sagrada & Resposta direta",
        content: [
          "Cabeçalhos não são enfeites. Eles criam um mapa para leitores, leitores de tela e sistemas de IA.",
          "• H1: o assunto principal da página. Use um só, claro e alinhado ao título visível.",
          "• H2: grandes perguntas ou etapas. Em páginas de serviço, prefira perguntas reais: 'Para quem este serviço é indicado?'.",
          "• H3: subtemas que desenvolvem cada H2.",
          "• H4 a H6: use somente quando a complexidade técnica exigir.",
          "Resposta direta antes da expansão (AEO): Coloque uma resposta curta logo depois da pergunta. Depois aprofunde com contexto e limites. Exemplo: 'Pergunta: O que é GEO? Resposta citável: GEO, ou Generative Engine Optimization, é o conjunto de práticas para tornar uma marca e suas informações mais compreensíveis, verificáveis e reutilizáveis em respostas geradas por sistemas de IA.'",
          "Formatos que reduzem o esforço cognitivo: TL;DR (2 a 4 frases com a conclusão), Listas (para passos e requisitos), Tabelas (para comparar alternativas) e Definições explícitas."
        ],
        subsections: [
          {
            title: "Meta tags, URLs semânticas e Imagens",
            paragraphs: [
              "A meta description funciona como proposta de valor para o clique qualificado.",
              "Título fraco: SEO | SEO | SEO | Agência X",
              "Título melhor: SEO para clínicas: atraia pacientes com conteúdo e busca local",
              "URL fraca: /p=1847&cat=9",
              "URL melhor: /seo-local-para-clinicas",
              "Imagens e metadados: Renomear arquivo de IMG_3847.jpg para seo-local.jpg não transforma sozinho uma página. O valor vem de compressão, dimensões adequadas, alt text descritivo para acessibilidade, legenda e contexto ao redor."
            ]
          },
          {
            title: "3.6 Schema Markup sem exagero & Exemplo JSON-LD",
            paragraphs: [
              "Dados estruturados ajudam sistemas a interpretar entidades e relações. Eles não são atalho para ranking. O Google recomenda JSON-LD e exige que o markup represente o conteúdo visível na tela."
            ],
            codeSnippet: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Como criar um plano de SEO local",
  "author": {
    "@type": "Person",
    "name": "Nome da autora"
  },
  "datePublished": "2026-10-05",
  "dateModified": "2026-10-05",
  "mainEntityOfPage": "https://exemplo.com/seo-local"
}
</script>`,
            alert: "Não marque como FAQ, Review ou Product aquilo que não existe visivelmente na página. Dados enganosos perdem elegibilidade a rich results."
          },
          {
            title: "Estrutura operacional da página perfeita (Os 10 Passos)",
            paragraphs: [
              "1. Title tag clara e diferenciada;",
              "2. Meta description escrita como proposta de valor;",
              "3. H1 com assunto e benefício, sem promessa exagerada;",
              "4. Resumo inicial de aproximadamente 40 a 60 palavras;",
              "5. H2 formulados como perguntas reais;",
              "6. Parágrafos curtos, listas e tabelas;",
              "7. Imagens em formatos eficientes com alt descritivo;",
              "8. Links internos com âncoras descritivas (nunca 'clique aqui');",
              "9. Schema coerente com o conteúdo visível;",
              "10. CTA e prova próximos do ponto em que a objeção aparece."
            ],
            reflectionBox: [
              "Se o usuário lesse apenas o título, o resumo e a tabela, entenderia a oferta?",
              "Minha marca está usando schema para descrever a realidade ou para tentar parecer algo que não é?"
            ]
          },
          {
            title: "3.7 Os Arquivos Estruturais da Raiz (robots, sitemap, llms, ai, manifest, humans e 404)",
            paragraphs: [
              "Uma página perfeita não opera isolada. Ela precisa de arquivos de suporte técnico na raiz do domínio (public/) que comunicam regras aos robôs de busca, modelos de inteligência artificial e navegadores móveis.",
              "• robots.txt: Libera o Google e as IAs (GPTBot, Claude, Perplexity), mas bloqueia a página 404 para proteger o orçamento de rastreamento.",
              "• sitemap.xml: Mapa canônico do site para o Google rastrear e indexar suas URLs prioritárias sem atraso.",
              "• llms.txt e ai.txt: Os novos padrões internacionais para que IAs leiam seus arquivos de forma mastigada em Markdown e usem seu conteúdo como resposta em ferramentas como Perplexity, Claude e ChatGPT Search (GEO).",
              "• manifest.webmanifest: Configurações de PWA (permite que o site seja 'instalado' como app no celular com ícone próprio e tela cheia).",
              "• humans.txt: Arquivo de autoria e transparência, documentando que o site foi criado pela Escola de SEO e fortalecendo os sinais de E-E-A-T.",
              "• 404.html: Uma página de 'não encontrado' bonita com design elegante e a tag meta noindex para não sujar seu ranqueamento com erros acidentais.",
              "• index.html: O esqueleto HTML5 semântico com preconnect de fontes, tags OpenGraph e Schema JSON-LD."
            ],
            goldenTip: "Copie ou baixe o pacote pronto desses 8 arquivos na ferramenta interativa abaixo e suba na pasta raiz da sua hospedagem."
          }
        ]
      }
    ]
  },
  {
    id: "modulo-4",
    number: "4",
    title: "Módulo 4 — Ecossistema de conteúdo e autoridade",
    sections: [
      {
        id: "m4-silo",
        title: "4.1 O blog como máquina de autoridade tópica",
        content: [
          "Autoridade tópica não é publicar 100 textos sobre palavras parecidas. É cobrir um problema de forma útil, conectando conceitos, decisões, casos e páginas comerciais.",
          "Um silo saudável pode ter:",
          "• uma página-pilar sobre o tema central;",
          "• guias de fundamentos;",
          "• páginas de comparação;",
          "• artigos de implementação;",
          "• estudos de caso;",
          "• glossário ou explicações de termos;",
          "• página comercial conectada ao problema resolvido.",
          "Exemplo de silo (software para restaurantes): Pilar: gestão financeira; Apoio: fluxo de caixa, CMV, ficha técnica; Decisão: comparação de softwares e implantação; Prova: caso de redução de desperdício; Conversão: página com demonstração e critérios de adequação."
        ],
        subsections: [
          {
            title: "4.2 Content pruning: podar para fortalecer",
            paragraphs: [
              "Conteúdo desatualizado, duplicado ou sem propósito comercial dilui esforço e confiança. Podar não é deletar por volume; é alinhar o inventário ao negócio."
            ],
            table: {
              headers: ["Situação", "Sinal Observado", "Ação Recomendada"],
              rows: [
                ["Forte", "tráfego qualificado e conversão", "Atualizar e ampliar prova"],
                ["Potencial", "impressões, mas CTR ou posição baixa", "Melhorar intenção, título e resposta"],
                ["Duplicada", "várias páginas para a mesma intenção", "Consolidar e redirecionar"],
                ["Fraca", "pouco valor, sem links, sem demanda", "Reescrever, arquivar ou remover"],
                ["Estratégica", "baixa visita, mas apoia decisão", "Manter e conectar melhor"]
              ]
            }
          },
          {
            title: "4.3 Link building em 2026: Digital PR & Parasite SEO",
            paragraphs: [
              "A melhor campanha de links começa com uma história ou recurso digno de referência: dados originais com citação, entrevistas autorizadas, calculadora ou template útil, análise técnica de notícias, fonte para jornalistas e casos replicáveis.",
              "Sobre 'parasite SEO': Publicar no LinkedIn, Medium ou marketplaces amplia distribuição, mas não deve criar páginas artificiais para manipular resultados. Use como validação com autor e relação comercial explícitos."
            ]
          },
          {
            title: "4.4 IA na produção: acelerar sem terceirizar responsabilidade",
            paragraphs: [
              "O Google trata como abuso a produção em escala cujo propósito principal é manipular rankings, seja feita por IA ou por pessoas. Fluxo seguro:",
              "1. Especialista define tese e evidências;",
              "2. IA ajuda a organizar perguntas e alternativas;",
              "3. Autor acrescenta experiência, dados e exemplos reais;",
              "4. Editor verifica fatos, riscos e clareza;",
              "5. Página recebe autoria, fontes e data de atualização;",
              "6. Negócio mede utilidade e conversão."
            ],
            goldenTip: "A pergunta 'um modelo de IA poderia produzir isto apenas recombinando conteúdo público?' é um excelente teste para identificar páginas que precisam de experiência própria.",
            reflectionBox: [
              "Qual parte do meu conteúdo só a minha empresa consegue produzir?",
              "Minha estratégia de autoridade depende de comprar links ou de ser realmente útil?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "modulo-5",
    number: "5",
    title: "Módulo 5 — SEO técnico e Core Web Vitals",
    hasInfographic: true,
    infographicId: "technical",
    sections: [
      {
        id: "m5-rastreamento",
        title: "5.1 Rastreamento, indexação e elegibilidade",
        content: [
          "Antes de otimizar relevância, garanta que o Google consegue acessar e processar a página:",
          "• O servidor responde com status 200 correto?",
          "• A página não está bloqueada por robots.txt?",
          "• Existe noindex acidental no HTML?",
          "• O conteúdo principal aparece sem depender de cliques impossíveis?",
          "• A versão mobile contém o mesmo valor essencial?",
          "• A URL canônica é coerente?",
          "• Redirecionamentos 301 e links internos funcionam?",
          "• O sitemap lista URLs canônicas e indexáveis?",
          "Para recursos generativos do Google, conteúdo público e rastreável é condição básica inegociável."
        ],
        subsections: [
          {
            title: "5.2 Core Web Vitals: LCP, INP e CLS",
            paragraphs: [
              "Os três indicadores medem experiências essenciais:",
              "• LCP (Largest Contentful Paint): velocidade para o maior elemento visível carregar. Meta: até 2,5 segundos.",
              "• INP (Interaction to Next Paint): capacidade de responder a interações. Meta: abaixo de 200 ms.",
              "• CLS (Cumulative Layout Shift): estabilidade visual. Meta: abaixo de 0,1.",
              "Plano de correção:",
              "LCP alto: comprima e priorize a imagem principal, reduza scripts bloqueantes, melhore cache e CDN.",
              "INP alto: reduza JavaScript desnecessário, quebre tarefas longas e adie código de terceiros.",
              "CLS alto: reserve espaço explícito (width/height) para imagens, banners e anúncios dinâmicos."
            ]
          },
          {
            title: "5.3 Sitemap.xml e robots.txt & Schema",
            paragraphs: [
              "O robots.txt controla rastreamento, não remove URLs do índice. Para impedir indexação, use a meta tag noindex em páginas rastreáveis."
            ],
            codeSnippet: `User-agent: *\nDisallow: /admin/\nDisallow: /carrinho/\nSitemap: https://www.exemplo.com/sitemap.xml`,
            alert: "Aviso: schema não transforma opinião em prova, nem faz um produto inexistente aparecer como disponível. A camada técnica amplifica uma realidade bem descrita; não substitui a realidade."
          }
        ]
      }
    ]
  },
  {
    id: "modulo-6",
    number: "6",
    title: "Módulo 6 — SEO local e Perfil da Empresa no Google",
    sections: [
      {
        id: "m6-maps",
        title: "6.1 A tríade do Maps & Fundamentos",
        content: [
          "O Google explica que resultados locais dependem de três fatores: Relevância (o quanto o perfil corresponde ao buscado), Distância (proximidade física) e Destaque (reputação, links e avaliações).",
          "Fundamentos do Perfil da Empresa:",
          "1. Reivindique e verifique o perfil oficial;",
          "2. Escolha a categoria principal mais específica e verdadeira;",
          "3. Preencha serviços, descrição, atributos, telefone, site e áreas atendidas;",
          "4. Mantenha horários normais e especiais sempre atualizados;",
          "5. Publique fotos atuais do ambiente, equipe e produtos reais;",
          "6. Responda avaliações com contexto, respeito e solução;",
          "7. Garanta coerência de NAP (Nome, Endereço e Telefone) nas plataformas."
        ],
        subsections: [
          {
            title: "6.3 'Hacks' que precisam ser corrigidos",
            paragraphs: [
              "• Horário 24h: Não marque 24 horas se não atende 24 horas. Cria expectativa falsa e viola diretrizes.",
              "• Fotos renomeadas: Renomear foto não substitui uma imagem autêntica e de alta resolução.",
              "• Avaliações com palavras-chave forçadas: Peça avaliações honestas sobre a experiência real, sem roteirizar.",
              "E-E-A-T local: Equipe identificada, endereço verificável, licenças quando aplicável e páginas por bairro/serviço atendido."
            ],
            reflectionBox: [
              "Uma pessoa conseguiria visitar ou contatar minha empresa usando apenas as informações do perfil?",
              "Minhas avaliações refletem experiências reais ou uma tentativa de manipular palavras?"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "modulo-7",
    number: "7",
    title: "Módulo 7 — Ferramentas e Search Console: passo a passo",
    hasInfographic: true,
    infographicId: "quick_wins",
    sections: [
      {
        id: "m7-gsc",
        title: "7.1 Configurando o Search Console & Método dos Quick Wins",
        content: [
          "O Search Console é uma fonte de diagnóstico, não um painel de vaidade. Use dados para decidir o que melhorar e confirme o efeito após uma janela razoável.",
          "O método dos Quick Wins:",
          "Quick win não é qualquer palavra na página 2. É uma oportunidade em que pequena melhoria produz grande impacto porque já existe demanda comprovada, relevância e caminho de conversão.",
          "Filtro recomendado: priorize consultas com posição média entre 4 e 20, impressões consistentes, página que já atende parcialmente e CTR abaixo da média.",
          "Passo a passo: 1. Exporte consultas dos últimos 28 ou 90 dias; 2. Agrupe por URL e intenção; 3. Compare com título e H1; 4. Analise a SERP; 5. Melhore a resposta principal no início; 6. Acrescente prova e CTA; 7. Atualize snippets e solicite inspeção."
        ],
        goldenTip: "Cada relatório deve gerar uma decisão. Se você abre uma ferramenta diariamente, mas não altera uma prioridade, está colecionando dados em vez de operar SEO.",
        reflectionBox: [
          "Que mudança específica espero que meu próximo ciclo produza?",
          "Como vou distinguir aumento de tráfego de aumento de negócio?"
        ]
      }
    ]
  },
  {
    id: "modulo-8",
    number: "8",
    title: "Módulo 8 — Os 7 erros fatais",
    sections: [
      {
        id: "m8-erros",
        title: "Os 7 Gargalos que Destroem Resultados em 2026",
        content: [
          "1. Erro 1 — Keyword stuffing: Repetir termos de modo artificial piora leitura e pode ser considerado spam. Correção: cubra o assunto por significado, exemplos e critérios.",
          "2. Erro 2 — Thin content: Conteúdo raso não é apenas texto curto. Uma página longa também é fina se não acrescenta decisão ou solução. Correção: resolva a lacuna que faria o leitor abrir outra aba.",
          "3. Erro 3 — Canibalização: Duas páginas competindo pela mesma intenção dividem sinais. Correção: consolide em uma página-pilar ou diferencie por estágio.",
          "4. Erro 4 — Experiência hostil no mobile: Pop-ups invasivos, botões minúsculos e checkout lento reduzem conversão e confiança. Correção: teste tarefas em aparelho simples.",
          "5. Erro 5 — Comprar ou fabricar links: Redes artificiais e links comprados trazem alto risco. Correção: invista em dados, Digital PR e recursos que mereçam referência.",
          "6. Erro 6 — Gerar centenas de páginas com IA sem valor: Automação não é estratégia. Gera custo e risco de spam. Correção: aumente especificidade, revisão e prova.",
          "7. Erro 7 — Medir posição e esquecer receita: Posição 1 não garante venda se a oferta for ruim ou o snippet responder tudo. Correção: conecte GSC ao CRM, vendas e ligações."
        ]
      }
    ]
  },
  {
    id: "modulo-9",
    number: "9",
    title: "Módulo 9 — Checklist final e glossário 2026",
    sections: [
      {
        id: "m9-checklist",
        title: "9.1 Checklist de auditoria & Plano de 30 dias",
        content: [
          "Checklist por nível de maturidade:",
          "• Nível Iniciante: H1 único, URL semântica, HTTPS ativo, meta description específica, imagens com alt descritivo.",
          "• Nível Intermediário: H2/H3 organizando a jornada, resposta à intenção correta, FAQ real, sitemap verificado no GSC, prova própria.",
          "• Nível Avançado: Core Web Vitals monitorados, dados estruturados (Organization, Article, LocalBusiness), página de autor E-E-A-T, Digital PR documentado, content pruning regular.",
          "Plano de 30 dias: Dias 1-3: inventário de páginas e indexação; Dias 4-7: três quick wins; Semana 2: reescrever página comercial e apoio; Semana 3: Core Web Vitals e schema; Semana 4: perfil local e prova."
        ]
      }
    ]
  },
  {
    id: "modulo-10",
    number: "10",
    title: "Módulo 10 — Plano de execução de 90 dias",
    hasInfographic: true,
    infographicId: "execution",
    sections: [
      {
        id: "m10-plano",
        title: "Estruturação Operacional Trimestral",
        content: [
          "Estratégia só produz resultado quando vira rotina. Fases do plano:",
          "• Fase 1 (Dias 1 a 15) — Diagnóstico e priorização: inventário de URLs, métricas iniciais, definição de conversões comerciais, mapeamento na SERP e escolha de 3 prioridades de receita.",
          "• Fase 2 (Dias 16 a 30) — Implementação da base: correção de títulos, H1, resumos, canonicals, redirecionamentos, Core Web Vitals e Perfil da Empresa.",
          "• Fase 3 (Dias 31 a 60) — Produção de conteúdo e prova: página-pilar, guias de apoio, comparativo, estudo de caso e atualização da página Sobre.",
          "• Fase 4 (Dias 61 a 75) — Autoridade e distribuição: apresentação de dados a veículos de imprensa, versões nativas para redes e solicitação ética de avaliações.",
          "• Fase 5 (Dias 76 a 90) — Medição e otimização: comparação com linha de base, análise de receita assistida e plano para o próximo trimestre."
        ]
      }
    ]
  },
  {
    id: "modulo-11",
    number: "11",
    title: "Módulo 11 — Estudos de caso",
    sections: [
      {
        id: "m11-casos",
        title: "Método e Aprendizados em Cenários Reais",
        content: [
          "• Caso 1 (Clínica Odontológica Local): A clínica corrigiu dados do Maps, criou página específica com profissionais, etapas, limitações e FAQ, publicou fotos reais e obteve aumento consistente em contatos e agendamentos qualificados.",
          "• Caso 2 (Agência B2B de Automação): Artigos genéricos atraíam curiosidade sem fechamento. O conteúdo foi reorganizado em silo com comparativos, calculadora simples e estudo de caso com números autorizados, dobrando reuniões comerciais qualificadas.",
          "• Caso 3 (E-commerce de Corrida): Categorias com filtros desordenados geravam URLs duplicadas. Definiram categorias indexáveis, trouxeram avaliações autorizadas e guias de escolha, reduzindo devoluções e aumentando add-to-cart.",
          "Modelo de leitura de um caso: 1. Antes -> 2. Problema -> 3. Hipótese -> 4. Ação -> 5. Medição -> 6. Resultado com contexto -> 7. Aprendizado."
        ]
      }
    ]
  },
  {
    id: "modulo-12",
    number: "12",
    title: "Módulo 12 — Modelos prontos de páginas",
    sections: [
      {
        id: "m12-modelos",
        title: "Estruturas de Conteúdo de Alta Conversão",
        content: [
          "Modelos prontos para produção editorial e copywriting:",
          "1. Modelo de Página de Serviço: Title e H1 específicos; Resumo inicial (quem é, problema, próximo passo); H2s de escopo, etapas, inclusões, faixas de investimento, limitações e CTA claro.",
          "2. Modelo de Página Local: H1 com cidade/região; Endereço, horário real e como chegar; Equipe e credenciais; Casos autorizados e botão direto de contato.",
          "3. Modelo de Artigo de Comparação: H1 com 'A vs B'; TL;DR inicial; Tabela comparativa com critérios explícitos; Para quem A é melhor; Para quem B é melhor; Veredito por cenário.",
          "4. Modelo de Review de Produto: Contexto e como testamos; Prós e contras objetivos; Alternativas; Nota fundamentada sem patrocínio disfarçado.",
          "5. Modelo de Página Sobre: Qual problema decidimos resolver; Experiência prática; Equipe responsável; Credenciais externas e princípios éticos."
        ]
      }
    ]
  },
  {
    id: "modulo-13",
    number: "13",
    title: "Módulo 13 — Templates de briefing e auditoria",
    sections: [
      {
        id: "m13-templates",
        title: "Templates Operacionais e Matriz de Priorização",
        content: [
          "Matriz de Priorização: Dê notas de 1 a 5 para Impacto Comercial, Confiança na Hipótese e Facilidade Técnica. Multiplique os três valores (Pontuação de 1 a 125). Uma tarefa de pontuação alta entra antes de curiosidades técnicas sem retorno financeiro.",
          "Template de Briefing: Tema, Público, Problema, Consulta principal, Intenção, SERP observada, Tese própria, Fontes primárias, Links internos, CTA, Schema e Métrica de sucesso.",
          "Template de Auditoria de URL: Objetivo comercial, Intenção real, Canônica, Resposta direta, Prova, Mobile, Core Web Vitals e Hipótese de melhoria."
        ]
      }
    ]
  },
  {
    id: "modulo-14",
    number: "14",
    title: "Módulo 14 — Medição, conversão e atribuição",
    hasInfographic: true,
    infographicId: "click_revenue",
    sections: [
      {
        id: "m14-medicao",
        title: "14.1 Do clique à receita & GA4",
        content: [
          "O Search Console mostra impressões e cliques. O Analytics mostra engajamento e sessões. O CRM revela a qualidade dos leads e a receita real. Nenhum deles sozinho responde toda a equação.",
          "Eventos recomendados no GA4: generate_lead, form_submit, click_phone, whatsapp_start, schedule, purchase. Marque como conversão apenas passos de avanço real.",
          "Modelos de atribuição: Último clique (supervaloriza o contato final), Primeiro contato (mostra a descoberta), Baseado em posição (pondera início e fim) e Análise por coorte."
        ],
        codeSnippet: `Exemplo de UTM controlada:\nhttps://exemplo.com/guia?utm_source=linkedin&utm_medium=organic_social&utm_campaign=guia-seo-2026&utm_content=case-clinica`
      }
    ]
  },
  {
    id: "modulo-15",
    number: "15",
    title: "Módulo 15 — SEO para e-commerce e verticais",
    sections: [
      {
        id: "m15-ecommerce",
        title: "Diretrizes para Comércio Eletrônico e Serviços",
        content: [
          "E-commerce: Uma categoria precisa explicar a escolha com filtros e critérios de aplicação, não apenas listar fotos. Produto deve manter preço, estoque e schema Product perfeitamente sincronizados.",
          "Serviços sensíveis (Clínicas, Escritórios de Advocacia, B2B): Clareza de escopo, transparência e conformidade regulatória valem mais do que promessas exageradas de ranking."
        ]
      }
    ]
  },
  {
    id: "modulo-16",
    number: "16",
    title: "Módulo 16 — Riscos, ética e políticas",
    hasInfographic: true,
    infographicId: "ethical",
    sections: [
      {
        id: "m16-etica",
        title: "SEO Sustentável e Práticas Proibidas",
        content: [
          "• Conteúdo gerado em massa com IA sem revisão humana cria risco extremo de penalização por spam algorítmico.",
          "• Avaliações compradas ou falsificadas violam diretrizes e destroem credibilidade quando descobertas.",
          "• Links patrocinados devem receber rel='sponsored' ou rel='nofollow'.",
          "• Respeite privacidade: nunca exponha dados de clientes sem autorização explícita e termo formal de consentimento."
        ],
        goldenTip: "Regra de ouro: se a tática depende de esconder a intenção do usuário, do Google, da plataforma ou do cliente, ela não pertence a uma estratégia sustentável."
      }
    ]
  },
  {
    id: "modulo-17",
    number: "17",
    title: "Módulo 17 — SEO fora do Google",
    sections: [
      {
        id: "m17-foradogoogle",
        title: "YouTube, TikTok, Reddit, LinkedIn e IAs",
        content: [
          "Otimização em múltiplos canais:",
          "• YouTube: Pesquise a intenção visual, use capítulos, boa retenção e links coerentes para o site.",
          "• TikTok: Gancho claro em poucos segundos demonstrando a resolução do problema.",
          "• Reddit: Respostas técnicas autênticas sem tom publicitário. Crie autoridade genuína.",
          "• LinkedIn: Artigos com tese profissional assinada, dados e implicações de mercado.",
          "• Sistemas Generativos (ChatGPT, Perplexity): Amostre consultas reais de clientes e observe se sua marca é citada como fonte."
        ],
        table: {
          headers: ["Canal", "Adaptação do Ativo Central"],
          rows: [
            ["Blog", "contexto, método, dados e fontes completas"],
            ["YouTube", "demonstração e explicação visual detalhada"],
            ["TikTok", "erro, descoberta e prova rápida em vídeo"],
            ["LinkedIn", "decisão, aprendizado e implicação profissional"],
            ["Comunidade", "resposta direta, transparente e sem jabá"],
            ["Marketplace", "especificação, uso real e quebra de objeções"],
            ["IA Generativa", "definição precisa, entidade, fatos e dados verificáveis"]
          ]
        }
      }
    ]
  },
  {
    id: "prompts-ia",
    number: "18",
    title: "Biblioteca de prompts para IA",
    sections: [
      {
        id: "prompts-list",
        title: "Prompts Prontos para Uso Estratégico",
        content: [
          "Use estes modelos como ponto de partida. Forneça dados reais da sua empresa e exija que o modelo indique incertezas em vez de inventar dados."
        ],
        subsections: [
          {
            title: "Prompt 1: Agrupar palavras-chave",
            paragraphs: [],
            codeSnippet: `Agrupe a lista abaixo por intenção, estágio da jornada, entidade e produto. Não invente volume, CPC ou dificuldade. Para cada grupo, indique a URL ideal, uma pergunta de decisão, uma prova necessária e uma conversão mensurável. Marque termos ambíguos que exigem análise manual da SERP.`
          },
          {
            title: "Prompt 2: Criar briefing de página",
            paragraphs: [],
            codeSnippet: `Com base neste público, problema e produto, crie um briefing de página. Inclua consulta principal, intenção, perguntas H2, resposta TL;DR, evidências, objeções, CTA, links internos, fontes primárias, autoria, data de revisão e schema aplicável. Não use promessas de ranking ou dados sem fonte.`
          },
          {
            title: "Prompt 3: Revisar intenção de busca",
            paragraphs: [],
            codeSnippet: `Analise esta página e a consulta. Diga se a intenção é informacional, comercial, investigacional, transacional, local ou navegacional. Compare a promessa da página com a decisão seguinte do usuário e sugira no máximo cinco mudanças de alto impacto. Diferencie opinião de fato.`
          },
          {
            title: "Prompt 4: Encontrar lacunas de conversão",
            paragraphs: [],
            codeSnippet: `Compare esta página com as perguntas e objeções abaixo. Liste o que falta para um comprador decidir: preço, prazo, adequação, riscos, alternativas, provas, suporte ou próximos passos. Priorize por impacto comercial e não por quantidade de palavras.`
          },
          {
            title: "Prompt 5: Gerar perguntas de decisão",
            paragraphs: [],
            codeSnippet: `Para o produto [X] e o público [Y], gere perguntas que uma pessoa faria imediatamente antes de comprar. Separe por preço, adequação, risco, implementação, comparação, suporte e resultado. Para cada pergunta, sugira uma resposta honesta e a evidência necessária.`
          },
          {
            title: "Prompt 6: Revisar para AEO e GEO",
            paragraphs: [],
            codeSnippet: `Revise a página para clareza de resposta e citabilidade. Identifique definições, afirmações verificáveis, números sem fonte, entidades sem contexto, respostas longas demais e trechos que poderiam ser resumidos sem perder precisão. Sugira melhorias, mas não invente citações, reviews, autoria ou experiência.`
          },
          {
            title: "Prompt 7: Desdobrar estudo de caso",
            paragraphs: [],
            codeSnippet: `Transforme este estudo de caso autorizado em: um artigo técnico, um roteiro de YouTube, três vídeos curtos, um post de LinkedIn, uma resposta para comunidade e uma seção de página de venda. Preserve números, contexto, limitações e consentimento. Não crie resultados novos nem remova ressalvas importantes.`
          }
        ]
      }
    ]
  },
  {
    id: "glossario",
    number: "19",
    title: "Glossário expandido 2026",
    sections: [
      {
        id: "glossario-termos",
        title: "Dicionário Completo de Termos",
        content: [
          "Definições oficiais consolidadas na obra de Andrews para consulta rápida:"
        ],
        table: {
          headers: ["Termo", "Definição Oficial no E-book"],
          rows: [
            ["AEO", "Otimização para mecanismos e interfaces que entregam respostas diretas (Answer Engine Optimization)."],
            ["AI Overview", "Experiência de busca do Google que reúne resposta sintetizada por IA com links e resultados fundamentados."],
            ["Canibalização", "Sobreposição entre páginas do mesmo site que disputam a mesma intenção de busca sem diferenciação clara."],
            ["Citability", "Facilidade com que um trecho contém uma afirmação clara, verificável e contextualizada passível de citação."],
            ["CLS", "Cumulative Layout Shift: métrica de estabilidade visual que mede deslocamentos inesperados de layout."],
            ["Core Web Vitals", "Conjunto de métricas de experiência real do usuário no Chrome, incluindo LCP, INP e CLS."],
            ["CPC", "Custo por clique em publicidade; sinaliza disputa comercial, mas não prova intenção nem conversão."],
            ["Digital PR", "Relações públicas digitais baseadas em dados, pesquisas, histórias e fontes que merecem cobertura na imprensa."],
            ["E-E-A-T", "Experiência prática, Especialidade, Autoridade e Confiabilidade (Experience, Expertise, Authoritativeness, Trustworthiness)."],
            ["Everywhere Optimization", "Planejamento da presença da marca em todos os ambientes relevantes da jornada do consumidor."],
            ["GEO", "Generative Engine Optimization: práticas para que sistemas de IA compreendam e citem sua marca como fonte."],
            ["INP", "Interaction to Next Paint: métrica de responsividade a interações e cliques do usuário."],
            ["LCP", "Largest Contentful Paint: tempo de carregamento do maior elemento visual da página."],
            ["NAP", "Consistência de Nome, Endereço e Telefone (Name, Address, Phone) em citações locais."],
            ["Query fan-out", "Expansão de uma pergunta em buscas relacionadas para reunir contexto e evidências completas."],
            ["Rich result", "Resultado enriquecido na SERP com estrelas, FAQ, receitas ou preços condicionado a schema e elegibilidade."],
            ["Schema markup", "Vocabulário estruturado em formato JSON-LD que descreve entidades e propriedades para máquinas."],
            ["Search Console", "Ferramenta gratuita do Google para diagnosticar desempenho, indexação, experiência e rastreamento."],
            ["SERP", "Search Engine Results Page: a página de resultados do mecanismo de busca."],
            ["Silo de conteúdo", "Organização temática que conecta página-pilar, artigos de apoio, prova e páginas de conversão."],
            ["Thin content", "Conteúdo que oferece pouca utilidade, originalidade ou resolução para a intenção de busca."],
            ["Validação", "Sinais que reduzem o risco percebido do comprador (avaliações, dados, experiência e menções legítimas)."],
            ["ALT text", "Texto alternativo que descreve imagens para leitores de tela e acessibilidade; não é campo para encher keywords."],
            ["Backlink", "Link de outro site para o seu; o valor depende da legitimidade e relevância contextual do site emissor."],
            ["CDN", "Content Delivery Network: rede distribuída que reduz a latência ao entregar arquivos de servidores próximos ao usuário."],
            ["Entidade", "Pessoa, organização, produto, local ou conceito identificável por atributos e relações no Knowledge Graph."],
            ["Featured snippet", "Formato de resposta rápida destacado no topo dos resultados do Google."],
            ["LLM", "Large Language Model: modelo de linguagem em grande escala usado por ferramentas como ChatGPT e Gemini."],
            ["Zero-click search", "Busca em que o usuário obtém a resposta diretamente na interface sem precisar clicar em links externos."]
          ]
        }
      }
    ]
  },
  {
    id: "conclusao",
    number: "20",
    title: "Conclusão — O Futuro da Busca",
    sections: [
      {
        id: "conclusao-final",
        title: "A Síntese da Busca em 2026",
        content: [
          "Dominar a busca em 2026 não significa descobrir uma frase secreta para agradar ao Google ou a uma IA.",
          "Significa construir um sistema coerente em que a empresa:",
          "1. É encontrável;",
          "2. Responde com clareza;",
          "3. Demonstra experiência autêntica;",
          "4. É validada por sinais públicos reais;",
          "5. Oferece uma próxima ação simples;",
          "6. Mede o que acontece depois do clique.",
          "SEO traz o usuário até a porta. AEO ajuda a pessoa a entender. GEO aumenta a chance de a informação circular em respostas generativas. Conversão acontece quando a promessa, a prova e a experiência combinam com excelência."
        ],
        goldenTip: "Construa ativos digitais que o mercado teria motivo genuíno para referenciar mesmo se o algoritmo mudasse amanhã."
      }
    ]
  },
  {
    id: "modulo-ferramentas",
    number: "21",
    title: "Módulo Especial — Central de Ferramentas & Simuladores Práticos",
    subtitle: "Suíte interativa completa: Simulador GEO & AEO, Gerador de Schema JSON-LD, Matriz ICE, Calculadora de ROI e Checklist de Auditoria 2026",
    sections: [
      {
        id: "ferramentas-central",
        title: "Suíte Operacional de Ferramentas e Simuladores de Busca",
        content: [
          "Para colocar em prática os ensinamentos de Andrews e da Escola de SEO, reunimos neste módulo final todas as ferramentas algorítmicas e calculadoras interativas do guia.",
          "Utilize o Simulador de Citações para avaliar a citabilidade da sua marca em modelos de IA (Google AI Overview, Perplexity, ChatGPT Search), gere códigos Schema JSON-LD semânticos com validação instantânea, calcule o retorno financeiro com a Calculadora de ROI e priorize suas tarefas trimestrais usando a Matriz ICE."
        ],
        goldenTip: "Execute um teste completo no Simulador de Citações antes de publicar novas páginas e use o Checklist de Auditoria para certificar a conformidade técnica."
      }
    ]
  }
];

