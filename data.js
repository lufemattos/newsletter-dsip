window.REPORT = {
  lastUpdate: "Mar/2026",

  justTrackIt: [
    {
      accent: true,
      title: "HO26 Total NIKE:",
      text: "Bookings: 6.9M units R$781.1M / Buys 6.82M R$774.8M",
      check: true
    },
    {
      accent: true,
      title: "SP27 TOP DOWN PLAN FORECAST (W41)",
      text: "TOTAL 5.93M units / L4L 2.79M IMP 3.14M / FTW 2.8M APP 2.6M EQP 0.53M",
      check: true
    },
    {
      date: "24.Mar",
      text: "Deadline de reenvio POs IDOC",
      warn: true
    },
    {
      date: "26.Mar",
      text: "SP27 L4L BOTTOMS UP (W40)",
      warn: true
    }
  ],

  timeline: [
    { side: "top",    date: "20/Jan", iso: "2026-01-20", color: "#E97132", boxType: "dark",  title: "X-MPU",       subtitle: "20-22 Jan",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "30/Jan", iso: "2026-01-30", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",           tooltip: "Primeira abertura de portal" },
    { side: "top",    date: "16/Fev", iso: "2026-02-16", color: "#22C55E", boxType: "light", title: "Carnaval",    subtitle: "16-18 Fev",    tooltip: "Feríado nacional" },
    { side: "bottom", date: "02/Mar", iso: "2026-03-02", color: "#FACC15", boxType: "light", title: "Fechamento", subtitle: "Portal (ex-Distr)", tooltip: "Finalização de pedidos desconsiderando Distribuidores" },
    { side: "top",    date: "03/Mar", iso: "2026-03-03", color: "#FB923C", boxType: "light", title: "Bookings",    subtitle: "Prévia (MPO)",      tooltip: "MPO gera os bookings prévio com o que tem no SAP" },
    { side: "bottom", date: "04/Mar", iso: "2026-03-04", color: "#F472B6", boxType: "light", title: "Booking",     subtitle: "Review (Supply)",   tooltip: "Supply analisa, prepara e disponibiliza a base para Merch" },
    { side: "top",    date: "05/Mar", iso: "2026-03-05", color: "#A855F7", boxType: "light", title: "Fechamento", subtitle: "Final",              tooltip: "Encerramento de colocação de pedidos da coleção" },
    { side: "bottom", date: "09/Mar", iso: "2026-03-09", color: "#2DD4BF", boxType: "light", title: "Bookings",    subtitle: "Finais (MPO)",      tooltip: "MPO gera os bookings finais, que serão a base de compra oficial" },
    { side: "top",    date: "12/Mar", iso: "2026-03-12", color: "#F87171", boxType: "light", title: "Alinhamento", subtitle: "Liderança",          tooltip: "Reunião de alinhamento com a liderança para fins de auditoria e transparência" },
    { side: "bottom", date: "18/Mar", iso: "2026-03-18", color: "#EAB308", boxType: "light", title: "POs Deadline", subtitle: "(Upload SAP)",      tooltip: "Envio via EDI dos pedidos para a Nike" }
  ],

  datesGates: [
    {
      side: "left",
      label: "MAR.16",
      iso: "2026-03-16",
      sections: [
        {
          tag: { text: "HO26 W28", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "18.3 – Regular Buys OED"
          ]
        },
        {
          tag: { text: "SP27 W41", bg: "#eab308", fg: "#111111" },
          items: [
            "16.3 – Hedge Momento 1 (50-70%)",
            "18.3 – Top Down Plan Forecast",
            "20.3 - OTB Review Gate I"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "16.3 – Simulado 2+10 (final)",
            "16.3 – Dispo semanal"
          ]
        }
      ]
    },
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
    }
  ]
};
