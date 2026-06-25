window.REPORT = {
  lastUpdate: "Jun/2026",

  justTrackIt: [
    {
      accent: true,
      title: "SP27 BOOKINGS NIKE",
      text: "TOTAL R$ 637.2M CMV (+5% YoY) e 6.23M units (+15% YoY), sendo 57% IMP e 43% L4L",
      check: true
    },
    {
      accent: true,
      title: "SU27 W41 - units",
      text: "TOTAL 7.4M pcs | IMP 4.1M e L4L 3.2M pcs",
      check: true
    },
    {
      date: "23.Jun",
      text: "IBP CALL",
      warn: true
    },
    {
      date: "24.Jun",
      text: "SU27 W40 BOTTOMS UP L4L",
      warn: true
    },
    {
      date: "24.Jun",
      text: "VAI BRASIL! JOGO ÀS 19H00 BRASIL X ESCÓCIA",
      warn: true
    },
    {
      date: "26.Jun",
      text: "SP27 envio de POs HAF",
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
    { side: "top",    date: "04/Set", iso: "2026-09-04", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",           tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "08/Set", iso: "2026-09-08", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "10/Set", iso: "2026-09-10", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",      tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "16/Set", iso: "2026-09-16", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",  tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
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
    },
    {
      side: "left",
      label: "JUN.22",
      iso: "2026-06-22",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["26.6 BUYS HAF SP27"]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["25.6 W40 SU27 BOTTOMS UP L4L"]
        }
      ]
    },
    {
      side: "right",
      label: "JUN.29",
      iso: "2026-06-29",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: ["01.7 Fechamento Inventário"]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["02.7 W39 SU27 ZELUS BOTTOMS UP"]
        },
        {
          tag: { text: "HO27", bg: "#eab308", fg: "#111111" },
          items: ["02.7 HO27 W65 LONG RANGE PLAN - L4L "]
        }
      ]
    },
    {
      side: "left",
      label: "JUL.06",
      iso: "2026-07-06",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [""]
        },
        {
          tag: { text: "SP27", bg: "#eab308", fg: "#111111" },
          items: ["08.7 Global Top Up Meeting"]
        },
        {
          tag: { text: "SU27", bg: "#E97132", fg: "#ffffff" },
          items: ["10.7 SU27 OTB Revisão 2"]
        }
      ]
    }
  ]
};
