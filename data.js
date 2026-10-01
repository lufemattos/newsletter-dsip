window.REPORT = {
  lastUpdate: "Oct/2026",

  justTrackIt: [
    {
      accent: true,
      title: "TOTAL SU27 BUYS",
      text: "TOTAL: 7.2M",
      check: true
    },
    {
      date: "01.Oct",
      text: "JR286 ORDERS",
      warn: true
    },
    {
      date: "01.Oct",
      text: "WK65 SP28 Long Range Plan APP L4L",
      warn: true
    }
      ],

  timeline: [
    { side: "top",    date: "20/Jul", iso: "2026-07-20", color: "#E97132", boxType: "dark",  title: "X-MPU",        subtitle: "20-23 Abr",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "10/Ago", iso: "2026-08-10", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",       tooltip: "Primeira abertura de portal" },
    { side: "top",    date: "21/Ago", iso: "2026-08-21", color: "#22C55E", boxType: "light", title: "Bookings",    subtitle: "Alocados, Zelus, NBA e NOCTA", tooltip: "Digitação de bookings para early buys Alocados, NBA, Zelus e Nocta" },
    { side: "bottom", date: "31/Ago", iso: "2026-08-31", color: "#FACC15", boxType: "light", title: "Fechamento", subtitle: "Portal (ex-Distr)", tooltip: "Finalização de pedidos desconsiderando Distribuidores" },
    { side: "top",    date: "01/Set", iso: "2026-09-01", color: "#FB923C", boxType: "light", title: "Bookings",    subtitle: "Prévia (MPO)",      tooltip: "MPO gera os bookings prévio com o que tem no SAP" },
    { side: "bottom", date: "02/Set", iso: "2026-09-02", color: "#F472B6", boxType: "light", title: "Booking",     subtitle: "Review (Supply)",    tooltip: "Supply analisa, prepara e disponibiliza a base para Merch" },
    { side: "top",    date: "07/Set", iso: "2026-09-07", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",           tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "08/Set", iso: "2026-09-08", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "11/Set", iso: "2026-09-11", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",      tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "16/Set", iso: "2026-09-16", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",  tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
    {
      side: "right",
      label: "SET.21",
      iso: "2026-09-21",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["21.09 Update Channels V2 S&OP 9+3"]
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
          items: ["01.10 Fechamento Setembro"]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["30.09 HAF ORDERS","01.10 JR286 ORDERS"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["01.10 W39 BOTTOMS UP ZELUS - postponed"]
        },
        {
          tag: { text: "SP28", bg: "#4ea72eff", fg: "#111111" },
          items: ["01.10 SP28 W65 LONG RANGE PLAN - APP L4L"]
        }
        ]
    },
    {
      side: "right",
      label: "OCT.05",
      iso: "2026-10-05",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["05.10 Fechamento Setembro"]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["07.10 Global Top Up Meeting"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["06.10 Deadline Channels GATE I - FK", "07.10 Allocations FK forecast","08.10 W39 BOTTOMS UP ZELUS","09.10 OTB Extract 2"]
        },
        {
          tag: { text: "SP28", bg: "#4ea72eff", fg: "#111111" },
          items: ["01.10 SP28 W65 LONG RANGE PLAN - FTW L4L","09.10 3YLP L4L"]
        }
        ]
    },
    {
      side: "left",
      label: "OCT.12",
      iso: "2026-10-12",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["13.10 S&OP 1st version"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["13.10 Deadline Channels GATE II - BIG 3", "15.10 Allocations BIG 3 template"," 16.10 W37 BOTTOMS UP",]
        }
        ]
        },
      {
      side: "right",
      label: "OCT.19",
      iso: "2026-10-19",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["21.10 MBR"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["21.10 Confirmation GATE I - FK", "21.10 1st Blind Buy","20 a 23.10 XMPU"]
        }
        ]
        },
    {
      side: "left",
      label: "OCT.26",
      iso: "2026-10-26",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["26.10 S&OP 2nd version"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["26.10 Deadline Channels Allocations GATE III - Others","27.10 CONSENSUS L4L","28.10 Allocations Gate III","29.10 W35 Zelus Bottoms Up","30.10 OTB Extract 3"]
        }
        ]
        },
    {
      side: "right",
      label: "NOV.02",
      iso: "2026-11-02",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["02.11 Fechamento Outubro"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["04.11 2nd Blind Buys","06.11 Allocations GATE IV - Running", "06.11 W34 Bottoms Up"]
        }
        ]
        },
    {
      side: "left",
      label: "NOV.09",
      iso: "2026-11-09",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["10.11 S&OP 1st version"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["12.11 Allocations Approval File","13.11 Deadline BOOKINGS NOCTA"]
        }
        ]
        },
    {
      side: "right",
      label: "NOV.16",
      iso: "2026-11-16",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["19.11 MBR"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["16.11 Extract NOCTA","18.11 3rd Blind Buy","19.11 Deadline BOOKINGS NBA/ZELUS/Allocations","19.11 OTB Extract 4"]
        }
        ]
        },
    {
      side: "left",
      label: "NOV.23",
      iso: "2026-11-23",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["24.11 S&OP 2nd version"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["26.11 W31 Bottoms Up","25.11 Allocations Buy"]
        }
        ]
        }
  ]
};
