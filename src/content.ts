/**
 * Conteúdo centralizado do site Estúdio Cota
 * ÚNICO local para textos e caminhos de imagens.
 * Respeita a regra de não inventar dados verificáveis usando marcadores entre colchetes.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface ProjectItem {
  id: string;
  titulo: string;
  tipo: 'Residencial' | 'Comercial' | 'Interiores';
  local: string;
  area: string;
  ano: string;
  imagem: ImageAsset;
  descricao: string;
  programa: string;
  sistemaEstrutural: string;
}

export interface StepItem {
  numero: string;
  nome: string;
  texto: string;
}

export interface ContactChannel {
  label: string;
  href: string;
  tipo: string;
  marcador: string;
  instrucao: string;
}

export interface SiteContent {
  header: {
    enabled: boolean;
    marca: string;
    nav: NavItem[];
    primaryAction: {
      label: string;
      href: string;
    };
  };
  hero: {
    enabled: boolean;
    kicker: string;
    coordenadas: string;
    title: string;
    description: string;
    cotaHorizontal: string;
    cotaVertical: string;
    imagem: ImageAsset;
    actionLabel: string;
    actionHref: string;
  };
  projetos: {
    enabled: boolean;
    kicker: string;
    titulo: string;
    descricao: string;
    filtros: string[];
    itens: ProjectItem[];
  };
  processo: {
    enabled: boolean;
    kicker: string;
    titulo: string;
    descricao: string;
    etapas: StepItem[];
  };
  destaque: {
    enabled: boolean;
    kicker: string;
    titulo: string;
    descricao: string;
    rotuloAntes: string;
    rotuloDepois: string;
    cotaLargura: string;
    cotaAltura: string;
    antes: {
      imagem: ImageAsset;
      observacao: string;
    };
    depois: {
      imagem: ImageAsset;
      observacao: string;
    };
  };
  sobre: {
    enabled: boolean;
    kicker: string;
    titulo: string;
    paragrafos: string[];
    equipe: string;
    declaracao: string;
  };
  contato: {
    enabled: boolean;
    kicker: string;
    titulo: string;
    descricao: string;
    endereco: string;
    horario: string;
    canais: ContactChannel[];
  };
  rodape: {
    enabled: boolean;
    marca: string;
    registroProfissional: string;
    links: NavItem[];
    direitos: string;
    rotuloReduzirAnimacoes: string;
    rotuloAtivarAnimacoes: string;
  };
  depoimentos: {
    enabled: boolean;
    items: unknown[];
  };
}

export const siteContent: SiteContent = {
  header: {
    enabled: true,
    marca: 'Estúdio Cota',
    nav: [
      { label: 'Projetos', href: '#projetos' },
      { label: 'Processo', href: '#processo' },
      { label: 'Destaque', href: '#destaque' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Contato', href: '#contato' },
    ],
    primaryAction: {
      label: 'Fale com o estúdio',
      href: '[link do WhatsApp]',
    },
  },
  hero: {
    enabled: true,
    kicker: '[cidade] / [ano]',
    coordenadas: '[latitude, longitude]',
    title: 'Arquitetura rigorosa pensada a partir da estrutura e da luz.',
    description: 'Projetamos espaços a partir da modulação estrutural e da matéria aparente. Cada linha responde a um vetor de carga, cada vão organiza a iluminação natural.',
    cotaHorizontal: '[medida]',
    cotaVertical: '[medida]',
    imagem: {
      src: '/src/assets/images/fachada-concreto.jpg',
      alt: 'Fachada angular em concreto aparente com aberturas precisas e luz rasante',
      objectPosition: 'center center',
    },
    actionLabel: 'Ver projetos selecionados',
    actionHref: '#projetos',
  },
  projetos: {
    enabled: true,
    kicker: '01 / Catálogo de obras',
    titulo: 'Projetos selecionados',
    descricao: 'Exercício de disciplina construtiva: plantas ortogonais, formas contínuas e transições milimétricas entre materiais.',
    filtros: ['Todos', 'Residencial', 'Comercial', 'Interiores'],
    itens: [
      {
        id: 'casa-do-patio',
        titulo: 'Casa do Pátio',
        tipo: 'Residencial',
        local: '[bairro, cidade]',
        area: '[m²]',
        ano: '[ano]',
        imagem: {
          src: '/src/assets/images/patio-interno.jpg',
          alt: 'Pátio interno de concreto com espelho d água e luz natural',
          objectPosition: 'center 40%',
        },
        descricao: 'Residência unifamiliar orientada em torno de um vazio central de concreto que filtra os ventos dominantes.',
        programa: 'Habitação unifamiliar em lote de [m²]',
        sistemaEstrutural: 'Concreto armado aparente moldado in loco',
      },
      {
        id: 'edificio-prisma',
        titulo: 'Edifício Prisma',
        tipo: 'Comercial',
        local: '[bairro, cidade]',
        area: '[m²]',
        ano: '[ano]',
        imagem: {
          src: '/src/assets/images/fachada-concreto.jpg',
          alt: 'Fachada comercial monolítica com planos angulares de concreto',
          objectPosition: 'right 30%',
        },
        descricao: 'Volume comercial com brises de concreto que regulam o ganho térmico nas fachadas norte e oeste.',
        programa: 'Lajes corporativas modulares e térreo permeável',
        sistemaEstrutural: 'Pilares perimetrais e lajes protendidas',
      },
      {
        id: 'residencia-escada-monolitica',
        titulo: 'Residência Monolítica',
        tipo: 'Residencial',
        local: '[bairro, cidade]',
        area: '[m²]',
        ano: '[ano]',
        imagem: {
          src: '/src/assets/images/escada-concreto.jpg',
          alt: 'Escada escultórica de concreto sob iluminação zenital',
          objectPosition: 'center 50%',
        },
        descricao: 'Articulação vertical entre pavimentos por meio de uma escada autoportante em concreto maciço.',
        programa: 'Residência em dois níveis com pé-direito duplo',
        sistemaEstrutural: 'Paredes estruturais de concreto pigmentado',
      },
      {
        id: 'interiores-linear',
        titulo: 'Apartamento Linear',
        tipo: 'Interiores',
        local: '[bairro, cidade]',
        area: '[m²]',
        ano: '[ano]',
        imagem: {
          src: '/src/assets/images/interiores-madeira.jpg',
          alt: 'Espaço interno integrado com pilar de concreto e marcenaria em carvalho',
          objectPosition: 'center 60%',
        },
        descricao: 'Reforma de interiores que despiu as paredes divisórias, integrando marcenaria sob medida e laje exposta.',
        programa: 'Requalificação completa de apartamento de [m²]',
        sistemaEstrutural: 'Estrutura existente descascada e tratada',
      },
      {
        id: 'pavilhao-tectonico',
        titulo: 'Pavilhão Tectônico',
        tipo: 'Comercial',
        local: '[bairro, cidade]',
        area: '[m²]',
        ano: '[ano]',
        imagem: {
          src: '/src/assets/images/detalhe-estrutural.jpg',
          alt: 'Encontro técnico milimétrico entre viga metálica e pilar de concreto',
          objectPosition: 'center center',
        },
        descricao: 'Galeria e espaço de trabalho estruturado por nós de aço e superfícies contínuas de concreto.',
        programa: 'Espaço multifuncional e ateliê técnico',
        sistemaEstrutural: 'Estrutura mista em perfis metálicos e concreto',
      },
      {
        id: 'estudio-vao-livre',
        titulo: 'Estúdio Vão Livre',
        tipo: 'Interiores',
        local: '[bairro, cidade]',
        area: '[m²]',
        ano: '[ano]',
        imagem: {
          src: '/src/assets/images/fachada-concreto.jpg',
          alt: 'Plano fechado com fresta de luz zenital em corte arquitetônico',
          objectPosition: 'left 80%',
        },
        descricao: 'Ambiente de trabalho de [m²] concebido como uma prancha contínua, sem pilares centrais intermediários.',
        programa: 'Espaço de produção e desenho técnico',
        sistemaEstrutural: 'Viga-calha superior que vence vão de [medida]',
      },
    ],
  },
  processo: {
    enabled: true,
    kicker: '02 / Metodologia',
    titulo: 'Processo projetual',
    descricao: 'Do estudo preliminar ao canteiro de obras, cada fase obedece a um protocolo de verificação rigoroso.',
    etapas: [
      {
        numero: '01',
        nome: 'Briefing',
        texto: 'Levantamento topográfico, análise solar e mapeamento das condicionantes estruturais do lote.',
      },
      {
        numero: '02',
        nome: 'Estudo',
        texto: 'Definição do partido estrutural, diagramas de circulação e maquetes volumétricas de ensaio.',
      },
      {
        numero: '03',
        nome: 'Projeto',
        texto: 'Detalhamento executivo rigoroso, modulação de formas de concreto e compatibilização milimétrica.',
      },
      {
        numero: '04',
        nome: 'Obra',
        texto: 'Acompanhamento técnico periódico no canteiro para assegurar fidelidade geométrica da fôrma.',
      },
    ],
  },
  destaque: {
    enabled: true,
    kicker: '03 / Estudo de caso',
    titulo: 'Requalificação espacial com manutenção estrutural',
    descricao: 'Intervenção que removeu divisórias não estruturais para recuperar o vão contínuo de [m²], revelando a estrutura original e direcionando a luz natural.',
    rotuloAntes: 'Antes',
    rotuloDepois: 'Depois',
    cotaLargura: '[medida]',
    cotaAltura: '[medida]',
    antes: {
      imagem: {
        src: '/src/assets/images/escada-concreto.jpg',
        alt: 'Estado anterior com circulação confinada e planos opacos',
        objectPosition: 'left center',
      },
      observacao: 'Planta compartimentada, pouca entrada de luz e vigas obstruídas por alvenaria de vedação.',
    },
    depois: {
      imagem: {
        src: '/src/assets/images/interiores-madeira.jpg',
        alt: 'Estado posterior com vão aberto, concreto evidente e madeira',
        objectPosition: 'right center',
      },
      observacao: 'Vão livre restabelecido com diálogo entre a textura do concreto e marcenaria funcional.',
    },
  },
  sobre: {
    enabled: true,
    kicker: '04 / Filosofia de projeto',
    titulo: 'A geometria como disciplina da construção',
    paragrafos: [
      'Trabalhamos na confluência entre a clareza estrutural e a economia material. Acreditamos que a arquitetura não decorre da adição de adornos, mas da exatidão das proporções e da honestidade dos elementos portantes.',
      'Cada intervenção é desenvolvida sob rigor técnico intransigente: formas limpas, planos contínuos de concreto armado, esquadrias niveladas e transições sem rodapés aparentes.',
    ],
    equipe: '[nome da equipe]',
    declaracao: 'Estrutura, matéria e luz em equilíbrio estrito.',
  },
  contato: {
    enabled: true,
    kicker: '05 / Diálogo técnico',
    titulo: 'Inicie uma conversa técnica',
    descricao: 'Atendemos consultas para novos projetos e reformas estruturais. Envie as diretrizes do terreno ou as plantas cadastrais preliminares.',
    endereco: '[endereço do estúdio]',
    horario: '[horário de funcionamento]',
    canais: [
      {
        label: 'Conversa no WhatsApp',
        href: '[link do WhatsApp]',
        tipo: 'WhatsApp',
        marcador: '[link do WhatsApp]',
        instrucao: 'Contato direto para alinhamento inicial e agendamento',
      },
      {
        label: 'Envio de material por e-mail',
        href: '[e-mail]',
        tipo: 'E-mail',
        marcador: '[e-mail]',
        instrucao: 'Envio de arquivos DWG, PDF, memoriais e fotografias',
      },
      {
        label: 'Linha telefônica direta',
        href: '[telefone]',
        tipo: 'Telefone',
        marcador: '[telefone]',
        instrucao: 'Atendimento telefônico do escritório em [horário de funcionamento]',
      },
    ],
  },
  rodape: {
    enabled: true,
    marca: 'Estúdio Cota',
    registroProfissional: '[CAU / registro profissional]',
    links: [
      { label: 'Projetos', href: '#projetos' },
      { label: 'Processo', href: '#processo' },
      { label: 'Destaque', href: '#destaque' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Contato', href: '#contato' },
    ],
    direitos: '[ano] Estúdio Cota. Prancha técnica e portfólio de arquitetura.',
    rotuloReduzirAnimacoes: 'Reduzir animações',
    rotuloAtivarAnimacoes: 'Ativar animações',
  },
  depoimentos: {
    enabled: false,
    items: [],
  },
};
