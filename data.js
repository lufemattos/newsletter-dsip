window.REPORT = {
  lastUpdate: "Mar/2026",

  justTrackIt: [
    {
      accent: true,
      title: "SP27 L4L BOTTOMS UP (W40)",
      text: "TOTAL L4L 2.79M units / FTW 1.41M APP 1.39M / IMP 3.14M",
      check: true
    },
    {
      date: "01.Abr",
      text: "Inventário - fechamento do mês",
      warn: true
    },
    {
      date: "01.Abr",
      text: "SP27 ALLOCATIONS GATE I - deadline forecast contas",
      warn: true
    },
    {
      date: "02.Abr",
      text: "SP27 W39 ZELUS",
      warn: true
    },
    {
      date: "02.Abr",
      text: "FA27 W65 LONG RANGE PLAN & Wishlist",
      warn: true
    },
    {
      date: "03.Abr",
      text: "FERIADO - Paixão de Cristo",
      warn: true
    }
  ],

  timeline: [
    { side: "top",    date: "14/Abr", iso: "2026-04-14", color: "#E97132", boxType: "dark",  title: "X-MPU",       subtitle: "14-17 Abr",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "04/Mai", iso: "2026-05-04", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",           tooltip: "Primeira abertura de portal" },
    { side: "top",    date: "22/Mai", iso: "2026-05-22", color: "#22C55E", boxType: "light", title: "Bookings",    subtitle: "Alocados, Zelus, NBA e NOCTA",    tooltip: "Digitação de bookings para early buys Alocados, NBA, Zelus e Nocta" },
    { side: "bottom", date: "01/Jun", iso: "2026-06-01", color: "#FACC15", boxType: "light", title: "Fechamento", subtitle: "Portal (ex-Distr)", tooltip: "Finalização de pedidos desconsiderando Distribuidores" },
    { side: "top",    date: "02/Jun", iso: "2026-06-02", color: "#FB923C", boxType: "light", title: "Bookings",    subtitle: "Prévia (MPO)",      tooltip: "MPO gera os bookings prévio com o que tem no SAP" },
    { side: "bottom", date: "03/Jun", iso: "2026-06-03", color: "#F472B6", boxType: "light", title: "Booking",      subtitle: "Review (Supply)",   tooltip: "Supply analisa, prepara e disponibiliza a base para Merch" },
    { side: "top",    date: "07/Jun", iso: "2026-06-07", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",              tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "08/Jun", iso: "2026-06-09", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "10/Jun", iso: "2026-06-10", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",          tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "17/Jun", iso: "2026-06-17", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",      tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
    {
      side: "right",
      label: "MAR.23",
      iso: "2026-03-23",
      sections: [
        {
          tag: { text: "SP27 W40", bg: "#eab308", fg: "#111111" },
          items: [
            "24.3 – Deadline reenvio pedidos IDOC",
            "26.3 – L4L Development Forecast"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "24.3 – Envio plano S&OP - MBR"
          ]
        }
      ]
    },
    {
      side: "left",
      label: "MAR.30",
      iso: "2026-03-30",
      sections: [
        {
          tag: { text: "SU26 W0", bg: "#E97132", fg: "#ffffff" },
          items: [
            "1.4 – Season Start"
          ]
        },
        {
          tag: { text: "FA26 W13", bg: "#c2410c", fg: "#ffffff" },
          items: [
            "3.4 – Upload Confirmed FOB L4L"
          ]
        },
        {
          tag: { text: "SP27 W39", bg: "#eab308", fg: "#111111" },
          items: [
            "01.4 – Channels Allocated Gate 1 - Early FK & HH",
            "02.4 - W39 ZELUS bottoms up forecast"
          ]
        },
        {
          tag: { text: "FA27 W65", bg: "#0081E2", fg: "#111111" },
          items: [
            "02.4 – W65 Long Range Plan FTW L4L"
          ]
        }
      ]
    },
    {
      side: "right",
      label: "APR.06",
      iso: "2026-04-06",
      sections: [
        {
          tag: { text: "HO26 W25", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "8.4 – Top Up Meeting"
          ]
        },
        {
          tag: { text: "SP27 W38", bg: "#eab308", fg: "#111111" },
          items: [
            "6.4 – Allocated Gate 1 - Early FK & HH",
            "10.4 - OTB Review Gate II"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "10.4 – S&OP 4+8 prévia"
          ]
        },
        {
          tag: { text: "3YLP", bg: "#E97132", fg: "#ffffff" },
          items: [
            "10.4 –Envio 3YLP (FA26 a SU29)"
          ]
        }
      ]
    },
    {
      side: "left",
      label: "APR.13",
      iso: "2026-04-13",
      sections: [
        {
          tag: { text: "SP27 W37", bg: "#eab308", fg: "#111111" },
          items: [
            "14.4 - Abertura XMPU (14/abr a 17/abr)",
            "15.4 – Allocated Gate 2 - BIG 3",
            "16.4 - Bottoms Up Forecast"
          ]
        }
      ]
    },
    {
      side: "right",
      label: "APR.20",
      iso: "2026-04-20",
      sections: [
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "23.4 – S&OP 4+8 final"
          ]
        },
        {
          tag: { text: "SP27 W37", bg: "#eab308", fg: "#111111" },
          items: [
            "24.4 - Deadline contas Allocations GATE III - Others"
          ]
        }
      ]
    },
    {
      side: "left",
      label
