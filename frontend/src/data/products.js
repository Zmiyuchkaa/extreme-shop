const items = [
  {
    sku: "sku_H6gYJj5EjeP3gq", 
    quantity: 1, 
    price: 17900, 
    type: "Маршрутизатор",
    name: "D-Link DES-1005C",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    sku: "sku_H6gXRtLz4AY2R8", 
    quantity: 1, 
    price: 75900, 
    type: "Маршрутизатор",
    name: "TP-LINK TL-SF1016DS",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    sku: "sku_H6gWjkmAjRWQ3L", 
    quantity: 1, 
    price: 46700, 
    type: "Маршрутизатор",
    name: "TP-LINK TL-SG105",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gVqnb7bsbnFu", 
    quantity: 1, 
    price: 76900, 
    type: "Маршрутизатор",
    name: "TP-LINK TL-SG108E",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gU15YsH3cpuh", 
    quantity: 1, 
    price: 65900, 
    type: "Маршрутизатор",
    name: "Zyxel GS-108B v3",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gTCz0msaMfWZ", 
    quantity: 1, 
    price: 17900, 
    type: "Маршрутизатор",
    name: "Mercusys MS108",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gMYhx1TG5IHp", 
    quantity: 1, 
    price: 148800, 
    type: "Коммутатор",
    name: "MikroTik RB260GSP",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gLriBVsBXZvJ", 
    quantity: 1, 
    price: 35400, 
    type: "Коммутатор",
    name: "D-Link DGS-1005A",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gKlxVOgWoxKp", 
    quantity: 1, 
    price: 34900, 
    type: "Коммутатор",
    name: "Netis ST3105GS",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gJvsa0rT2Uxx", 
    quantity: 1, 
    price: 1168900, 
    type: "Коммутатор",
    name: "Zyxel GS1300-26HP",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gIlW2peJnngD", 
    quantity: 1, 
    price: 301900, 
    type: "Коммутатор",
    name: "D-Link DGS-1100-16",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gHuIbdKXR0xu", 
    quantity: 1, 
    price: 44900, 
    type: "Коммутатор",
    name: "Mercusys MS108G",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gCqEetiq12Yz", 
    quantity: 1, 
    price: 80900, 
    type: "Коммутатор",
    name: "Netis PE6109H",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gAeTrLHF2hiS", 
    quantity: 1, 
    price: 17900, 
    type: "Коммутатор",
    name: "TP-LINK TL-SF1005D",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6gAeTrLHF2hiS", 
    quantity: 1, 
    price: 117500, 
    type: "Маршрутизатор",
    name: "Strong 1200",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6g6ekzcUMPpm1", 
    quantity: 1, 
    price: 89900, 
    type: "Маршрутизатор",
    name: "TP-LINK Archer C50",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6g4FxSok0G9H4", 
    quantity: 1, 
    price: 34700, 
    type: "Маршрутизатор",
    name: "Strong 300",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6g3BPFOGpB1rD", 
    quantity: 1, 
    price: 699900, 
    type: "Маршрутизатор",
    name: "TP-LINK Deco P7",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6g2dD76m8C0ho", 
    quantity: 1, 
    price: 59900, 
    type: "Маршрутизатор",
    name: "TP-LINK TL-WR845N",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6g1eVhB32hoB7", 
    quantity: 1, 
    price: 109900, 
    type: "Маршрутизатор",
    name: "Keenetic 4G",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6g0pJUH2JPx79", 
    quantity: 1, 
    price: 40900, 
    type: "Маршрутизатор",
    name: "Mercusys MW325R",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fzQXrpkvRVaO", 
    quantity: 1, 
    price: 399900, 
    type: "Маршрутизатор",
    name: "TP-LINK Deco E4",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fy1NEo1AwqXm", 
    quantity: 1, 
    price: 74800, 
    type: "Маршрутизатор",
    name: "Keenetic Start",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fxayQww1rryT", 
    quantity: 1, 
    price: 133200, 
    type: "Маршрутизатор",
    name: "MikroTik cAP",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fwkDPs12nENn", 
    quantity: 1, 
    price: 299900, 
    type: "Маршрутизатор",
    name: "TP-LINK Archer C9",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fve1AvaOE9TD", 
    quantity: 1, 
    price: 25900, 
    type: "Маршрутизатор",
    name: "Totolink N100RE-V3",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fuUtVgHBeCeu", 
    quantity: 1, 
    price: 119900, 
    type: "Маршрутизатор",
    name: "Keenetic Omni",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fuUtVgHBeCeu", 
    quantity: 1, 
    price: 249900, 
    type: "Маршрутизатор",
    name: "TP-LINK Deco E3",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fuUtVgHBeCeu", 
    quantity: 1, 
    price: 215900, 
    type: "Маршрутизатор",
    name: "Keenetic Speedster",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    sku: "sku_H6fqWL5PSWlRFP", 
    quantity: 1, 
    price: 99900, 
    type: "Маршрутизатор",
    name: "Xiaomi Mi WiFi Router 4A R4A",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]


export default items