window.REPORT = {
  lastUpdate: "Abr/2026",

  justTrackIt: [
    {
      accent: true,
      title: "SP27 BOTTOMS UP (W37)",
      text: "TOTAL 5.59M units: 2.68M L4L 2.91M IMP / FTW 2.55M APP 2.58M EQP 0.46M",
      check: true
    },
    {
      date: "27.Abr",
      text: "SP27 Consensus L4L",
      warn: true
    },
    {
      date: "28.Abr",
      text: "Deadline forecast Allocation OTHERS",
      warn: true
     },
    {
      date: "30.Abr",
      text: "SP27 W35 Forecast ZELUS",
      warn: true
    },
    {
      date: "01.Mai",
      text: "Feriado - Dia do Trabalho",
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
      side: "right",
      label: "APR.20",
      iso: "2026-04-20",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["23.4 – S&OP 4+8 final"]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["24.4 - Deadline contas Allocations GATE III"]
        },
        {
          tag: { text: "3YLP", bg: "#E97132", fg: "#ffffff" },
          items: ["10.4 – Envio 3YLP (FA26 a SU29)", "22.4 IBP CALL"]
        }
      ]
    },
    {
      side: "left",
      label: "APR.27",
      iso: "2026-04-27",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["27.4 SP27 Consensus L4L", "28.4 - Allocations GATE III", "30.04 - W35 ZELUS forecast", "30.04 1st Blind Buy"]
        }
      ]
    },
     {
      side: "right",
      label: "MAI.04",
      iso: "2026-05-04",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["04.5 Fechamento de Abril"] 
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["07.5 W34 BOTTOMS UP Forecast"]
        }
      ]
    },
    {
      side: "left",
      label: "MAI.11",
      iso: "2026-05-11",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["11.5 Simulador 4+8 Prévia", "13.5 Reunião S&OP"]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["14.5 2nd Blind Buy"]
        },
        {
          tag: { text: "FA27", bg: "#E97132", fg: "#ffffff" },
          items: ["14.5 ZELUS W59 BOTTOMS UP Forecast"]
        }
      ]
    },
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
          items: ["22.5 Deadline digitação BKGS Allocations, NBA, NOCTA, ZELUS"]
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
          items: ["25.5 Base final de BKGS antecipados", "28.05 3rd Blind Buy & Allocations/NBA/NOCTA buy gate", "28.05 W31 Bottoms Up Optional Forecast", "29.05 Deadline BGKS SP27 (Nike+JR286) - ND, CNTO e MKT"]
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
          items: [""]
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
          items: [""]
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
          items: [""]
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
