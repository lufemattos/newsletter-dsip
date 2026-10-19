window.REPORT = {
  lastUpdate: "Oct/2026",

  justTrackIt: [
    {
      accent: true,
      title: "FA27 WK37 Forecast - units",
      text: "TOTAL: 7.8M | L4L 3.4M / IMP 4.4M",
      check: true
    },
    {
      date: "21.Oct",
      text: "MBR",
      warn: true
    },
    {
      date: "21.Oct",
      text: "1st Blind Buy",
      warn: true
    },
    {
      date: "20 a 23.Oct",
      text: "XMPU FA27",
      warn: true
    }
      ],

  timeline: [
    { side: "top",    date: "20/Out", iso: "2026-10-20", color: "#E97132", boxType: "dark",  title: "X-MPU",        subtitle: "20-23 Oct",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "09/Nov", iso: "2026-11-09", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",       tooltip: "Primeira abertura de portal" },
    { side: "top",    date: "15/Nov", iso: "2026-11-15", color: "#22C55E", boxType: "light", title: "Bookings",    subtitle: "NBA, NOCTA e SKIMS", tooltip: "Digitação de bookings para early buys NBA, Nocta e SKIMS" },
    { side: "top",    date: "22/Nov", iso: "2026-11-22", color: "#22C55E", boxType: "light", title: "Bookings",    subtitle: "ALLOCATIONS e ZELUS", tooltip: "Digitação de bookings para early buys de Alocados e ZELUS" },
    { side: "bottom", date: "30/Nov", iso: "2026-11-30", color: "#FACC15", boxType: "light", title: "Fechamento", subtitle: "Portal (ex-Distr)", tooltip: "Finalização de pedidos desconsiderando Distribuidores" },
    { side: "top",    date: "01/Dez", iso: "2026-12-01", color: "#FB923C", boxType: "light", title: "Bookings",    subtitle: "Prévia (MPO)",      tooltip: "MPO gera os bookings prévio com o que tem no SAP" },
    { side: "bottom", date: "02/Dez", iso: "2026-12-02", color: "#F472B6", boxType: "light", title: "Booking",     subtitle: "Review (Supply)",    tooltip: "Supply analisa, prepara e disponibiliza a base para Merch" },
    { side: "top",    date: "06/Dez", iso: "2026-12-06", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",           tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "07/Dez", iso: "2026-12-07", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "11/Dez", iso: "2026-12-11", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",      tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "16/Dez", iso: "2026-12-16", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",  tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
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
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["13.10 Demand&Buy Review Meeting"]
        },
        {
          tag: { text: "FA27", bg: "#eab308", fg: "#111111" },
          items: ["14.10 Deadline Channels GATE II - BIG 3"," 16.10 W37 BOTTOMS UP",]
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
          items: ["26.10 Deadline Channels Allocations GATE III - Others","27.10 CONSENSUS L4L","28.10 Allocations Gate III","29.10 W35 Zelus Bottoms Up","30.10 OTB Extract 3", "30.10 JR286 Forecast"]
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
          items: ["12.11 Allocations Approval File","13.11 Deadline BOOKINGS NOCTA, NBA e SKIMS","09.11 HAF"]
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
          items: ["16.11 Extract NOCTA, NBA e SKIMS","18.11 3rd Blind Buy + NOCTA/NBA","19.11 Buys SKIMS", "19.11 Deadline BOOKINGS ZELUS/Allocations","19.11 OTB Extract 4"]
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
          items: ["26.11 W31 Bottoms Up","23.11 Extract MPO Zelus/Allocations","25.11 Allocations Buy","25.11 Zelus BKGS adjustments","26.11 Zelus MPO Extract"]
        }
        ]
        }
  ]
};
