const CharacterData = {
  hero: {
    elf: {
      name: "Elfo - Ranger",
      description: "Descrição do Elfo",
      hability: "Alcance: Precisão com arco e flecha.",
      precision: 3,
      hands: ['crossbow'],
      body: '',
      bag: ['', '', '', '', ''],
      element: 'none',
      hp: 4,
      xp: 0,
      level: 1,
      extraHabilities: {}
    },
    human: {
      name: "Humano - Espadachin",
      description: "Descrição do humano",
      hability: "Habilidade do humano",
      precision: 0,
      hands: ['dagger'],
      body: '',
      bag: ['', '', '', '', ''],
      element: 'none',
      hp: 4,
      xp: 0,
      level: 1,
      extraHabilities: {}
    },
    dwarf: {
      name: "Anão - Bárbaro",
      description: "Descrição do anão",
      hability: "Força: Precisão para usar machados de duas mãos.",
      precision: 2,
      hands: ['hammer'],
      body: '',
      bag: ['', '', '', '', ''],
      element: 'none',
      hp: 4,
      xp: 0,
      level: 1,
      extraHabilities: {}
    },
    mage: {
      name: "Mago",
      description: "Descrição do mago",
      hability: "Habilidade do mago",
      precision: 4,
      hands: ['staffNonElemental', 'shieldWeak'],
      body: 'armourLeather',
      bag: ['staffNonElemental', 'sword', 'armourMithril', 'shieldMid', 'axeTwoHands'],
      element: 'random',
      hp: 4,
      xp: 0,
      level: 1,
      extraHabilities: {}
    },
    archer: {
      name: "Arqueiro",
      description: "Descrição do Arqueiro",
      hability: "Habilidade do Arqueiro",
      precision: 3,
      hands: ['crossbow'],
      body: '',
      bag: ['', '', '', '', ''],
      element: 'none',
      hp: 4,
      xp: 0,
      level: 1,
      extraHabilities: {}
    },
    thief: {
      name: "Ladrão",
      description: "Descrição do ladrão",
      hability: "Habilidade do ladrão",
      precision: 0,
      hands: ['dagger'],
      body: '',
      bag: ['', '', '', '', ''],
      element: 'none',
      hp: 4,
      xp: 0,
      level: 1,
      extraHabilities: {}
    },
  },
  enemy: {
    orc: {
      name: "Orc",
      description:
        "Seres criados artificialmente co único objetivo de guerrear.",
      hability: "Habilidade do Orc",
      hp: 1,
      speed: 1,
      strength: 1,
      range: 2,
      dice: 4
    },
    skeleton: {
      name: "Esqueleto",
      description: "Esqueleto de um guerreiro caído reanimado por magia negra",
      hability: "Habilidade do Esqueleto",
      hp: 1,
      speed: 1,
      strength: 1,
      range: 1,
      dice: 3
    },
    zombie: {
      name: "Zumbi",
      description: "Morto-vivo",
      hability:
        "Infecção: Um personagem morto próximo a um zumbi se torna um zumbi, a não ser que já seja um zumbi ou um fantasma.",
      hp: 1,
      speed: 1,
      strength: 1,
      range: 1,
      dice: 3
    },
    beast: {
      name: "Homem-Fera",
      description:
        "Humano amaldiçoado. Não tem lembrança alguma de sua humanidade e tudo que lhe sobrou são os instintos animais.",
      hability: "Habilidade do homem-fera",
      hp: 1,
      speed: 2,
      strength: 1,
      range: 1,
      dice: 3
    },
    troll: {
      name: "Troll",
      description: "Brutamontes com inteligência muito reduzida.",
      hability:
        "Photofobia: Pode ser morto instantâneamente por magias de luz.",
      hp: 2,
      speed: 1,
      strength: 2,
      range: 1,
      dice: 3
    },
    ghost: {
      name: "Fantasma",
      description:
        "Alma presa ao mundo dos vivos rancorosa por não conseguir seguir em frente.",
      hability: "Intangibilidade: Pode atravessar paredes e portas fechadas.",
      hp: 1,
      speed: 1,
      strength: 1,
      range: 1,
      dice: 3
    },
    darkMage: {
      name: "Mago sombrio",
      description:
        "Mago cuja alma foi corrompida por magia sombria e agora é controlado por esta magia.",
      hability: "Invocação: Cria esqueletos cada turno em que não ataca.",
      hp: 1,
      speed: 1,
      strength: 1,
      range: 2,
      dice: 3
    },
  },
};

export default CharacterData;
