window.REPORT = {
  lastUpdate: "Fev/2026",

  justTrackIt: [
    {
      accent: true,
      title: "OTB 02/mar:",
      text: "6.6M units = 2.88M FTW + 3.15M APP + 0.59M EQP / 3.2M L4L + 3.42 IMP",
      check: true
    },
    {
      accent: true,
      title: "Early Buys 05/mar:",
      text: "49.5K units",
      check: true
    },
    {
      date: "09.Mar",
      text: "EXTRACT BOOKINGS HO26 (final) – MPO",
      warn: true
    },
    {
      date: "12.Mar",
      text: "Alinhamento e aprovação de Buys com Diretoria",
      warn: true
    },
    {
      date: "18.Mar",
      text: "Finalização do Processo de Buys",
      warn: true
    } // <-- Adicionei a chave de fechamento do último objeto
  ], // <-- Adicionei o colchete de fechamento do array

  timeline: [
    { side: "top",    date: "20/Jan", iso: "2026-01-20", color: "#E97132", boxType: "dark",  title: "X-MPU",       subtitle: "20-22 Jan",    tooltip: "Reunião de Merch para fazer o download da coleção" },
    { side: "bottom", date: "30/Jan", iso: "2026-01-30", color: "#60A5FA", boxType: "light", title: "Abertura",    subtitle: "Portal",            tooltip: "Primeira abertura de portal" },
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
      label: "FEV.02",
      iso: "2026-02-02",
      sections: [
        {
          tag: { text: "HO26 W34", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "2.2 – Hedge Momento 2 (70-90%)",
            "5.2 – Bottoms Up Forecast"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "2.2 – Fechamento JAN.26 (DISPO + Curva)"
          ]
        }
      ]
    },
    {
      side: "right",
      label: "FEV.09",
      iso: "2026-02-09",
      sections: [
        {
          tag: { text: "SU26 W7", bg: "#E97132", fg: "#ffffff" },
          items: [
            "13.2 – Unplanned Clean Up IMP"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "9.2 – Simulado 1+1 (prévia)",
            "9.2 – Dispo semanal"
          ]
        }
      ]
    },
    {
      side: "left",
      label: "FEV.16",
      iso: "2026-02-16",
      sections: [
        {
          tag: { text: "SU26 W6", bg: "#E97132", fg: "#ffffff" },
          items: [
            "16.2 – Hedge Momento 5 (95-100%)"
          ]
        },
        {
          tag: { text: "FA26 W25", bg: "#c2410c", fg: "#ffffff" },
          items: [
            "16.2 – Hedge Momento 4 (90-95%)"
          ]
        },
        {
          tag: { text: "HO26 W32", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "19.2 – 3rd Blind Buys + FK Alloc. OED",
            "20.2 – L4L Consensus"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "16.2 – Simulado 1+1 (final)",
            "16.2 – Dispo semanal"
          ]
        }
      ]
    },
    {
      side: "right",
      label: "FEV.23",
      iso: "2026-02-23",
      sections: [
        {
          tag: { text: "SU26 W5", bg: "#E97132", fg: "#ffffff" },
          items: [
            "27.2 – PR-PO Conversion"
          ]
        },
        {
          tag: { text: "HO26 W31", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "25.2 – Allocated Buys: Others",
            "25.2 – NBA Buys OED",
            "26.2 – Bottoms Up - Forecast (opt)"
          ]
        }
      ]
    },
    {
      side: "left",
      label: "MAR.02",
      iso: "2026-03-02",
      sections: [
        {
          tag: { text: "HO26 W30", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "2.3 – Fechamento Portal (s/ Distr.)",
            "3.3 – Prévia Bookings (MPO)",
            "4.3 – Bookings Review (prévia)",
            "5.3 – Fechamento Portal (todos)",
            "5.3 – Early Buys + FK Alloc. OED"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "2.3 – Fechamento FEV.26"
          ]
        }
      ]
    },
    {
      side: "right",
      label: "MAR.09",
      iso: "2026-03-09",
      sections: [
        {
          tag: { text: "SU26 W3", bg: "#E97132", fg: "#ffffff" },
          items: [
            "15.3 – Unplanned Clean Up L4L"
          ]
        },
        {
          tag: { text: "HO26 W29", bg: "#16a34a", fg: "#ffffff" },
          items: [
            "9.3 – Bookings Finais (MPO)",
            "9.3 – Hedge Momento 3 (70-90%)",
            "10.3 – Bookings Review (final)"
          ]
        },
        {
          tag: { text: "INVENTORY", bg: "#6d28d9", fg: "#ffffff" },
          items: [
            "9.3 – Simulado 2+10 (prévia)",
            "9.3 – Dispo semanal"
          ]
        }
      ]
    },
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
            "18.3 – Top Down Plan Forecast"
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
            "26.3 – L4L Development Forecast"
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
            "3.4 – Allocated Gate 1 - Early FK & HH"
          ]
        }
      ]
    }
  ]
};
