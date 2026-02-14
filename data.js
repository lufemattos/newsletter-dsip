window.REPORT = {
  lastUpdate: "Fev/2026",

  justTrackIt: [
    {
      accent: true,
      title: "HO26 week 34 Forecast:",
      text: "6,82M TOTAL = 3,21M APP + 618K EQP + 3,00M FTW / 3,48M IMP + 3,34M L4L"
    },
    {
      date: "03.Mar",
      text: "DEADLINE BOOKINGS HO26 (prévia) – MPO",
      warn: true
    },
    {
      date: "05.Mar",
      text: "DEADLINE BOOKINGS REVIEW FEEDBACK – MERCH",
      warn: true
    },
    {
      date: "09.Mar",
      text: "DEADLINE BOOKINGS HO26 (final) – MPO",
      warn: true
    },
    {
      date: "03.Abr",
      text: "Demand Planning 3YLP Forecast"
    }
  ],

  timeline: [
  { side: "top",    date: "20/Jan", iso:"2026-01-20", color: "#E97132", boxType: "dark",    title: "X-MPU",        subtitle: "20-22 Jan" },
  { side: "bottom", date: "30/Jan", iso:"2026-01-30", color: "#60A5FA", boxType: "light",   title: "Abertura",     subtitle: "Portal" },
  { side: "top",    date: "16/Fev", iso:"2026-02-16", color: "#22C55E", boxType: "light",   title: "Carnaval",     subtitle: "16-18 Fev" },
  { side: "bottom", date: "02/Mar", iso:"2026-03-02", color: "#FACC15", boxType: "light",   title: "Fechamento",   subtitle: "Portal (ex-Distr)" },
  { side: "top",    date: "03/Mar", iso:"2026-03-03", color: "#FB923C", boxType: "light",   title: "Bookings",     subtitle: "Prévia (MPO)" },
  { side: "bottom", date: "04/Mar", iso:"2026-03-04", color: "#F472B6", boxType: "light",   title: "Booking",      subtitle: "Review (Supply)" },
  { side: "top",    date: "05/Mar", iso:"2026-03-05", color: "#A855F7", boxType: "light",   title: "Fechamento",   subtitle: "Final" },
  { side: "bottom", date: "09/Mar", iso:"2026-03-09", color: "#2DD4BF", boxType: "light",   title: "Bookings",     subtitle: "Finais (MPO)" },
  { side: "top",    date: "12/Mar", iso:"2026-03-12", color: "#F87171", boxType: "light",   title: "Alinhamento",  subtitle: "Liderança" },
  { side: "bottom", date: "18/Mar", iso:"2026-03-18", color: "#EAB308", boxType: "light",   title: "POs Deadline", subtitle: "(Upload SAP)" }
],

  datesGates: [
    // CARD 1: FEV.02 (left)
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

    // CARD 2: FEV.09 (right)
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

    // CARD 3: FEV.16 (left)
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

    // CARD 4: FEV.23 (right)
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

    // CARD 5: MAR.02 (left)
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

    // CARD 6: MAR.09 (right)
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

    // CARD 7: MAR.16 (left)
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

    // CARD 8: MAR.23 (right)
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

    // CARD 9: MAR.30 (left)
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
    },
    // CARD 10: ABR.23 (right)
    {
      side: "right",
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
