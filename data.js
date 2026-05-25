window.REPORT = {
  lastUpdate: "Mai/2026",

  justTrackIt: [
    {
      accent: true,
      title: "SP27 BOTTOMS UP (W31) - PRE SEASON BKGS",
      text: "TOTAL 5.35M units: FTW 2.57M APP 2.34M EQP 0.4OM",
      check: true
    },
    {
      accent: true,
      title: "ZELUS TOP DOWN PLAN - units",
      text: "SP27 115.8M / SU27 252.9M / FA27 147.8M",
      check: true
    },
    {
      date: "25.Mai",
      text: "Bookings Review Allocations/NOCTA/NBA",
      warn: true
    },
    {
      date:"26.Mai",
      text: "Buy Review SP27",
      warn: true
    },
    {
      date: "27.Mai",
      text: "3rd Blind Buy & Allocations/NBA/NOCTA buy gate",
      warn: true
     },
    {
      date: "28.Mai",
      text: "W31 Bottoms Up Forecast",
      warn: true
     },
    {
      date: "29.Mai",
      text: "Deadline BGKS SP27 (Nike+JR286) - ND, CNTO e MKT",
      warn: true
     }
  ],

  timeline: [
    { side: "top",    date: "14/Abr", iso: "2026-04-14", color: "#E97132", boxType: "dark",  title: "X-MPU",       subtitle: "14-17 Abr",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "04/Mai", iso: "2026-05-04", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",       tooltip: "Primeira abertura de portal" },
    { side: "top",    date: "22/Mai", iso: "2026-05-22", color: "#22C55E", boxType: "light", title: "Bookings",    subtitle: "Alocados, Zelus, NBA e NOCTA", tooltip: "Digitação de bookings para early buys Alocados, NBA, Zelus e Nocta" },
    { side: "bottom", date: "01/Jun", iso: "2026-06-01", color: "#FACC15", boxType: "light", title: "Fechamento", subtitle: "Portal (ex-Distr)", tooltip: "Finalização de pedidos desconsiderando Distribuidores" },
    { side: "top",    date: "02/Jun", iso: "2026-06-02", color: "#FB923C", boxType: "light", title: "Bookings",    subtitle: "Prévia (MPO)",      tooltip: "MPO gera os bookings prévio com o que tem no SAP" },
    { side: "bottom", date: "03/Jun", iso: "2026-06-03", color: "#F472B6", boxType: "light", title: "Booking",      subtitle: "Review (Supply)",   tooltip: "Supply analisa, prepara e disponibiliza a base para Merch" },
    { side: "top",    date: "07/Jun", iso: "2026-06-07", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",          tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "08/Jun", iso: "2026-06-09", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "11/Jun", iso: "2026-06-11", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",      tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "17/Jun", iso: "2026-06-17", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",  tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
      {
      side: "left",
      label: "MAI.11",
      iso: "2026-05-11",
      sections: [
    {
      side: "right",
      label: "MAI.18",
      iso: "2026-05-18",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["22.5 Simulador 4+8 - Final"]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["22.5 Deadline digitação BKGS Allocations, NBA, NOCTA, ZELUS","18.5 Buy Review NDDC","20.5 Buy Review NDS"]
        }
      ]
    },
    {
      side: "left",
      label: "MAI.25",
      iso: "2026-05-25",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["25.5 Base final de BKGS antecipados", "28.05 3rd Blind Buy & Allocations/NBA/NOCTA buy gate", "28.05 W31 Bottoms Up Forecast", "29.05 Deadline BGKS SP27 (Nike+JR286) - ND, CNTO e MKT"]
        }
      ]
    },
    {
      side: "right",
      label: "JUN.01",
      iso: "2026-06-01",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["01.6 Fechamento de Maio"]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["01.6 Deadline BGKS SP27 (Nike+JR286) - WHSL exceto Distro", "02.6 Base BKGS Prévia", "04.6 FERIADO PROLONGADO - Corpus Christie" ]
        }
      ]
    },
    {
      side: "left",
      label: "JUN.08",
      iso: "2026-06-08",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["10.6 Simulador 5+7 Prévia"]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["08.6 Base BKGS FINAL", "11.6 BKGS Review Leadership"]
        }
      ]
    },
    {
      side: "right",
      label: "JUN.15",
      iso: "2026-06-15",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["15.6 Reunião S&OP"]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["17.6 BUYS SP27"]
        },
         {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["18.6 W41 SU27 TOP DOWN PLAN"]
        }
      ]
    }
  ]
};
