window.REPORT = {
  lastUpdate: "Ago/2026",

  justTrackIt: [
    {
      accent: true,
      title: "SU27 W31 (Bottoms Up) - units",
      text: "TOTAL: 7.17M | L4L 3.18M pcs  IMP 4M",
      check: true
    },
    {
      date: "31.Ago a 04.Set ",
      text: "Bookings Review",
      warn: true
    },
    {
      date: "01.Set",
      text: "1st bookings extract - ex Distro",
      warn: true
    },
    {
      date: "03.Set",
      text: "HO27 ZELUS Top Down Plan",
      warn: true
    },
    {
      date: "03.Set",
      text: "Early Buys Window",
      warn: true
    }
      ],

  timeline: [
    { side: "top",    date: "20/Jul", iso: "2026-07-20", color: "#E97132", boxType: "dark",  title: "X-MPU",        subtitle: "20-23 Abr",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "10/Ago", iso: "2026-08-10", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",       tooltip: "Primeira abertura de portal" },
    { side: "top",    date: "21/Ago", iso: "2026-08-21", color: "#22C55E", boxType: "light", title: "Bookings",    subtitle: "Alocados, Zelus, NBA e NOCTA", tooltip: "Digitação de bookings para early buys Alocados, NBA, Zelus e Nocta" },
    { side: "bottom", date: "31/Ago", iso: "2026-08-31", color: "#FACC15", boxType: "light", title: "Fechamento", subtitle: "Portal (ex-Distr)", tooltip: "Finalização de pedidos desconsiderando Distribuidores" },
    { side: "top",    date: "01/Set", iso: "2026-09-01", color: "#FB923C", boxType: "light", title: "Bookings",    subtitle: "Prévia (MPO)",      tooltip: "MPO gera os bookings prévio com o que tem no SAP" },
    { side: "bottom", date: "02/Set", iso: "2026-09-02", color: "#F472B6", boxType: "light", title: "Booking",      subtitle: "Review (Supply)",    tooltip: "Supply analisa, prepara e disponibiliza a base para Merch" },
    { side: "top",    date: "07/Set", iso: "2026-09-07", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",           tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "08/Set", iso: "2026-09-08", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "10/Set", iso: "2026-09-10", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",      tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "16/Set", iso: "2026-09-16", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",  tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
        {
      side: "right",
      label: "AGO.24",
      iso: "2026-08-24",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["24.8 Simulador Rev2","28.08 IBP Call"]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["26.8 BUYS Allocations/NBA","27.8 W31 Bottoms Up","28.8 SKIMS BUY"]
        }
      ]
    },
    {
      side: "left",
      label: "AGO.31",
      iso: "2026-08-31",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["31.8 Fechamento do Portal (exceto DISTRO)","01.9 Prévia BKGS MPO","02.9 Bookings Review Supply-Merch","03.9 5th Blind Buy Window","04.9 Fechamento Portal"]
        }
      ]
    },
     {
      side: "right",
      label: "SET.07",
      iso: "2026-09-07",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["08.9 Bookings FINAIS","10.9 Alinhamento BKGS Liderança"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["11.9 OTB REV 1 FA27"]
        }
      ]
    },
    {
      side: "left",
      label: "SET.14",
      iso: "2026-09-14",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["16.9 Envio BUYS Regular Process", "18.9 Bookings Review JR286 - DSM>Merch"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["17.9 W41 TOP DOWN PLAN"]
        }
      ]
    },
    {
      side: "right",
      label: "SET.21",
      iso: "2026-09-21",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["22.9 Bookings Review JR286 - Merch>DSM","24.9 Deadline ajustes ND JR286", "25.9 Extract MPO JR286"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["24.9 W40 BOTTOMS UP L4L"]
        }
        ]
    },
    {
      side: "left",
      label: "SET.28",
      iso: "2026-09-28",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["01.10 JR286 ORDERS"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["01.10 W39 BOTTOMS UP ZELUS"]
        },
        {
          tag: { text: "SP28", bg: "#4ea72eff", fg: "#111111" },
          items: ["01.10 SP28 W65 LONG RANGE PLAN - L4L"]
        }
        ]
    }
  ]
};
