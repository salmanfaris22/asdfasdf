/* Easy Comfort: the eight mattresses, in one place.
   The home page (script.js) and each mattress's own page (mattress.html, product.js) read this.
   MODELS: the layers inside each mattress, for the 3D bed. PRODUCTS: the words, prices and photos for its page.
   Facts come from the product sheet (Mattress Writeups, 05.09.2026); prices and card lines from the range on index.html,
   so a price changed there must be changed here too. */
(() => {
  'use strict';

  /* ---------- What is inside each mattress, top to bottom ----------
     Layers and densities come from the product sheet (Mattress Writeups, 05.09.2026).
     The sheet gives no thickness per layer, so w is only a drawing weight. */
  const L = (name, sub, mat, w = 1, zones = false) => ({ name, sub, mat, w, zones });
  const F22 = L('Foam', '22 kg/m³', 'foam22'), F25 = L('Foam', '25 kg/m³', 'foam25'), F30 = L('Foam', '30 kg/m³', 'foam30');
  const REBOND = L('Rebond', '80 kg/m³', 'rebond', 1.05), MEMORY = L('Memory foam', '35 kg/m³', 'memory', 1.2);
  const F2225 = (mat) => L('Foam', '22–25 kg/m³', mat);

  const MODELS = {
    'camellia-euro-top': {
      label: 'Camellia', look: 'camellia-et', feel: 'Soft',
      layers: (t) => (t >= 12 ? [MEMORY, F25, F30, F25, REBOND, F30, F25, F30] : [MEMORY, F25, F30, REBOND, F30, F25]),
    },
    'camellia-pillow-top': {
      label: 'Camellia', look: 'camellia-pt', feel: 'Soft',
      layers: () => [L('Foam, pillow top', '25 kg/m³', 'foam25', .9), MEMORY, F30, F25, REBOND, F30, F25],
    },
    'prime-aura': {
      label: 'Prime Aura', look: 'aura', feel: 'Medium',
      layers: () => [F22, L('Foam', '25 kg/m³', 'foam25', 1.1), L('3-zone structure', '30 kg/m³', 'zones', 2.1, true)],
    },
    'emma-french-top': {
      label: 'Emma', look: 'emma', feel: 'Medium',
      layers: () => [L('Special PU foam', '26 density, breathable', 'pu', 1), L('Foam core', '', 'foam25', 2.4)],
    },
    imperio: {
      label: 'Imperio', look: (c) => (c === 'Blue' ? 'imperio-blue' : 'imperio-white'), feel: 'Hard',
      layers: (t) => {
        const top = L('Profile layer', '25 kg/m³', 'profile', 1.15);
        return t >= 10 ? [top, F25, F25, REBOND, F25, F25, F25] : [top, F25, REBOND, F25, F25];
      },
    },
    'hybrid-plush': {
      label: 'Hybrid Plush', look: 'plush', feel: 'Hard',
      layers: () => [L('Profile cut foam', 'top layer', 'profile'), REBOND, L('High density foam', 'bottom layer', 'hd', 1.1)],
    },
    'hybrid-eco': {
      label: 'Hybrid Eco', look: 'eco', feel: 'Hard',
      layers: () => [L('Foam layer', 'top', 'foam22'), L('Foam layer', 'bottom', 'foam25')],
    },
    vento: {
      label: 'Vento', look: 'vento', feel: 'Hard',
      layers: () => [F2225('foam22'), F2225('foam25'), REBOND, F2225('foam22')],
    },
  };
  const SWATCH = { foam22: '#f4f2ea', foam25: '#efe7d3', foam30: '#e4d8bb', hd: '#e3eaf1', memory: '#e8bf78', pu: '#e2efe4', profile: '#f3f1e9', rebond: '#a8a294', zones: '#e7dcc0' };

  function specFor(id, inches, colour) {
    const m = MODELS[id];
    const list = m.layers(inches);
    const inner = inches - (inches <= 5 ? .45 : .7);   // the cover and its quilting take the rest
    const sum = list.reduce((s, l) => s + l.w, 0);
    return {
      key: `${id}@${inches}`, label: m.label, feel: m.feel, inches,
      look: typeof m.look === 'function' ? m.look(colour) : m.look,
      layers: list.map((l) => ({ ...l, inches: inner * l.w / sum, mat: l.zones ? 'zones' : l.mat })),
    };
  }
  const PRODUCTS = {
    "camellia-euro-top": {
      "name": "Camellia Euro Top",
      "line": "Memory foam beneath a Tencel cover, for a surface that gives gently and holds you in place.",
      "tagline": "A surface that closes around you.",
      "price": "<small>From </small>Rs. 18,900",
      "tbc": false,
      "feel": "Soft",
      "lvl": 0,
      "feelPos": 0.12,
      "thick": [
        8,
        10,
        12
      ],
      "colours": [],
      "badge": null,
      "guarantee": "10-year guarantee",
      "photos": [
        {
          "src": "images/camellia-euro-top.webp",
          "w": 676,
          "h": 193,
          "alt": "Easy Comfort Camellia Euro Top mattress in a white Tencel cover",
          "colour": null
        }
      ],
      "chips": [
        "Memory-foam feel",
        "6 to 8 foam layers",
        "8″, 10″ or 12″",
        "10-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Side sleepers",
          "p": "Shoulder and hip settle in, so the spine is not asked to bend around a hard surface."
        },
        {
          "h": "Those who like to be held",
          "p": "If you love the feeling of sinking in and being cradled, this is that mattress."
        },
        {
          "h": "Anyone who wants it their way",
          "p": "The comfort level can be adjusted to your requirement, and tailor-made sizes are possible."
        }
      ],
      "story": [
        "A euro top is a cushion sewn into the surface itself — no ledge at the edge, no seam to find in the dark.",
        "Beneath it, six to eight layers of foam, each density chosen for its part in the work: comfort, support, resilience. Over it all, a fabric spun from eucalyptus and made in Belgium. Nothing here announces itself. It simply closes around you, slowly, the way memory foam does."
      ],
      "core": "Rebond layer of 80 kg/m³ · a memory-foam layer of 35 kg/m³ · foams of 25 and 30 kg/m³",
      "coreNote": "Different densities, chosen to raise both back support and comfort.",
      "cover": "Belgian-made Tencel, spun from eucalyptus yarn · 300 GSM",
      "spec": [
        [
          "Type",
          "Camellia Memory Foam Euro Top"
        ],
        [
          "Feeling",
          "Soft, with a memory foam feel. The comfort level can be adjusted to your requirement."
        ],
        [
          "Foam core",
          "8″ and 10″: 6 layers. 12″: 8 layers.<br>A rebond layer of 80&nbsp;kg/m³ density, a memory foam layer of 35&nbsp;kg/m³ density, and other foam layers of 25 and 30&nbsp;kg/m³ density, to enhance the back support as well as the comfort level."
        ],
        [
          "Fabric cover",
          "Wrapped in a luxurious, Belgium made Tencel fabric, made from eucalyptus yarns at 300 GSM, which adds an extra layer of comfort."
        ],
        [
          "Thicknesses",
          "8″, 10″ and 12″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 10-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "camellia-pillow-top": {
      "name": "Camellia Pillow Top",
      "line": "Seven layers of foam under a jacquard cover. The softest way to be held, and the most considered.",
      "tagline": "A second surface, laid on the first.",
      "price": "<small>From </small>Rs. 40,600",
      "tbc": false,
      "feel": "Soft",
      "lvl": 0,
      "feelPos": 0.14,
      "thick": [
        8,
        10
      ],
      "colours": [],
      "badge": null,
      "guarantee": "10-year guarantee",
      "photos": [
        {
          "src": "images/camellia-pillow-top.webp",
          "w": 555,
          "h": 207,
          "alt": "Easy Comfort Camellia Pillow Top mattress in white, with a quilted pillow top",
          "colour": null
        }
      ],
      "chips": [
        "Pillow-top cushion",
        "7 foam layers",
        "8″ or 10″",
        "10-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Side and combination sleepers",
          "p": "A cushioned surface that lets the body rest into it, whichever way it turns."
        },
        {
          "h": "Lovers of plush",
          "p": "For those who want the softness to be visible — a cushion you can see before you lie down."
        },
        {
          "h": "Made to measure",
          "p": "The softness can be tailored to your requirement, in standard or tailor-made sizes."
        }
      ],
      "story": [
        "A pillow top is a cushion stitched onto the mattress and left proud of it: you can see exactly where the softness begins.",
        "Seven layers of foam sit beneath — a memory foam among them, a dense rebond below — each measured in density so that softness never costs you support. It is for people who have decided that the last thing they do each day should be the gentlest."
      ],
      "core": "Rebond layer of 80 kg/m³ · a memory-foam layer of 35 kg/m³ · foams of 25 and 30 kg/m³",
      "coreNote": "Chosen for durability, pressure distribution, airflow and comfort turnover.",
      "cover": "Belgian-made, higher-GSM knitted jacquard",
      "spec": [
        [
          "Type",
          "Camellia Memory Foam Pillow Top"
        ],
        [
          "Feeling",
          "Soft. Tailor-made to your requirement."
        ],
        [
          "Foam core",
          "7 different foam layers: a rebond layer of 80&nbsp;kg/m³ density, a memory foam layer of 35&nbsp;kg/m³ density, and other foam layers of 25 and 30&nbsp;kg/m³ density, to enhance: <ul><li>Durability</li><li>Body pressure distribution</li><li>Air flow</li><li>Comfort when you turn over</li></ul>"
        ],
        [
          "Fabric cover",
          "Wrapped in a luxurious, Belgium made, higher GSM, knitted jacquard mattress ticking, which enhances the comfort and air flow."
        ],
        [
          "Thicknesses",
          "8″ and 10″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 10-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "prime-aura": {
      "name": "Prime Aura",
      "line": "A three-zone core that supports each part of the body differently, so the spine rests in line.",
      "tagline": "Three zones. One straight spine.",
      "price": "Pricing to be confirmed",
      "tbc": true,
      "feel": "Medium",
      "lvl": 0.5,
      "feelPos": 0.5,
      "thick": [
        7
      ],
      "colours": [],
      "badge": "Signature",
      "guarantee": "10-year guarantee",
      "photos": [
        {
          "src": "images/prime-aura.webp",
          "w": 688,
          "h": 308,
          "alt": "Easy Comfort Prime Aura mattress in a white jacquard cover with grey flowers",
          "colour": null
        }
      ],
      "chips": [
        "3-zone support",
        "Medium feel",
        "7″",
        "10-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Back and combination sleepers",
          "p": "Medium support that keeps the spine in line without feeling hard."
        },
        {
          "h": "Those who prefer to be supported, not swallowed",
          "p": "Enough give to be comfortable, enough structure to hold you up."
        },
        {
          "h": "Anyone who values engineering",
          "p": "A structure developed zone by zone, rather than one foam doing every job."
        }
      ],
      "story": [
        "The body is not one weight, and a mattress that treats it as one serves none of it well.",
        "Prime Aura is built in three zones, each specially developed to withstand the pressure it will meet and to keep the spine properly aligned. Under a breathable Belgian jacquard, foams of 22, 25 and 30 kg/m³ do their separate work. Medium in feel. Exact in intent."
      ],
      "core": "Foams of 22, 25 and 30 kg/m³ · a specially developed 3-zone structure",
      "coreNote": "Developed to withstand body pressure and weight, and to promote proper spinal alignment.",
      "cover": "Belgian-made, breathable knitted jacquard",
      "spec": [
        [
          "Type",
          "Prime Aura"
        ],
        [
          "Feeling",
          "Medium"
        ],
        [
          "Foam core",
          "Layers of 22, 25 and 30&nbsp;kg/m³ density. A specially developed 3-zone structure withstands body pressure and weight, to promote proper spinal alignment."
        ],
        [
          "Fabric cover",
          "Wrapped in a luxurious, breathable, Belgium made, knitted jacquard mattress ticking, which adds an extra layer of comfort and enhances the air flow."
        ],
        [
          "Thickness",
          "7″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 10-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "emma-french-top": {
      "name": "Emma French Top",
      "line": "A soft top layer over a balanced medium feel. Quietly refined, and easy to love.",
      "tagline": "Soft on top. Sure underneath.",
      "price": "<small>From </small>Rs. 25,500",
      "tbc": false,
      "feel": "Medium",
      "lvl": 0.5,
      "feelPos": 0.5,
      "thick": [
        6,
        8
      ],
      "colours": [],
      "badge": null,
      "guarantee": "10-year guarantee",
      "photos": [
        {
          "src": "images/emma-french-top.webp",
          "w": 896,
          "h": 297,
          "alt": "Easy Comfort Emma French Top mattress in a pale green cover with grey palm leaves",
          "colour": null
        }
      ],
      "chips": [
        "Ultra-soft breathable top",
        "Medium feel",
        "6″ or 8″",
        "10-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Combination sleepers",
          "p": "Soft enough for the shoulder, structured enough for the back — for people who turn through the night."
        },
        {
          "h": "Warm sleepers",
          "p": "A breathable top layer, designed to stimulate air circulation."
        },
        {
          "h": "Those who want a gentle finish",
          "p": "A soft touch on the surface, without the feeling of sinking."
        }
      ],
      "story": [
        "A French top is the gentlest kind of finish: a thin layer of ultra-soft, breathable foam laid across the surface — felt before it is noticed.",
        "Emma keeps its softness where you touch it and its structure where you rest, all under a higher-GSM Belgian jacquard. It is for people who want to feel looked after without feeling swallowed."
      ],
      "core": "An ultra-soft, breathable PU foam layer (26 density) across the top",
      "coreNote": "Designed to stimulate air circulation.",
      "cover": "Belgian-made, higher-GSM knitted jacquard",
      "spec": [
        [
          "Type",
          "Emma French Top"
        ],
        [
          "Feeling",
          "Medium"
        ],
        [
          "Foam core",
          "An ultra-soft, breathable, special PU foam layer (26 density) as the top layer, which greatly stimulates air circulation."
        ],
        [
          "Fabric cover",
          "Wrapped in a luxurious, Belgium made, higher GSM, knitted jacquard mattress ticking, which enhances the comfort and air flow."
        ],
        [
          "Thicknesses",
          "6″ and 8″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 10-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "imperio": {
      "name": "Imperio",
      "line": "Firm, steady support in white or blue, for those who rest best on a level, assured surface.",
      "tagline": "Firm, on purpose.",
      "price": "<small>From </small>Rs. 18,900",
      "tbc": false,
      "feel": "Hard",
      "lvl": 1,
      "feelPos": 0.78,
      "thick": [
        6,
        8,
        10
      ],
      "colours": [
        "White",
        "Blue"
      ],
      "badge": null,
      "guarantee": "10-year guarantee",
      "photos": [
        {
          "src": "images/imperio-white.webp",
          "w": 584,
          "h": 183,
          "alt": "Easy Comfort Imperio mattress in white, with a grey geometric border",
          "colour": "White"
        },
        {
          "src": "images/imperio-blue.webp",
          "w": 590,
          "h": 167,
          "alt": "Easy Comfort Imperio mattress in blue, with a geometric pattern",
          "colour": "Blue"
        }
      ],
      "chips": [
        "Firm feel",
        "5 to 7 layers",
        "White or blue",
        "10-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Back and stomach sleepers",
          "p": "A firmer surface helps keep the hips from sinking below the shoulders."
        },
        {
          "h": "Those who like a mattress that does not give",
          "p": "Support you can feel the moment you lie down."
        },
        {
          "h": "Anyone with a colour in mind",
          "p": "Available in white, and in blue."
        }
      ],
      "story": [
        "Some people do not want to be held by a mattress. They want to be held up.",
        "Imperio is firm on purpose: a specially designed profile layer across the top for back support and airflow, five layers in all — seven at ten inches — with a dense rebond layer of 80 kg/m³ among them. The knitted jacquard, made with Italian technology, softens the edge of the firmness without undoing it. Choose it in white, or in blue."
      ],
      "core": "A profile layer of 25 kg/m³ across the top · foams of 25 kg/m³ · a rebond layer of 80 kg/m³",
      "coreNote": "Five layers at 6″ and 8″; seven at 10″.",
      "cover": "Knitted jacquard made with Italian technology",
      "spec": [
        [
          "Type",
          "Imperio"
        ],
        [
          "Feeling",
          "Hard"
        ],
        [
          "Foam core",
          "6″ and 8″: 5 layers. 10″: 7 layers.<br>A specially designed 25&nbsp;kg/m³ density profile layer on top for back support and air flow. The other foam layers are 25&nbsp;kg/m³ density, with a rebond layer of 80&nbsp;kg/m³ density."
        ],
        [
          "Fabric cover",
          "The top fabric is a luxurious, breathable knitted jacquard made with Italian technology, which adds an extra layer of comfort and enhances the air flow. It lifts the moderately hard feel of the profile foam layer on top of the core."
        ],
        [
          "Colours",
          "White and Blue"
        ],
        [
          "Thicknesses",
          "6″, 8″ and 10″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 10-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "hybrid-plush": {
      "name": "Hybrid Plush",
      "line": "A plush surface with a firm lean beneath it, slim and softly supportive.",
      "tagline": "Plush to touch. Honest underneath.",
      "price": "Rs. 23,000",
      "tbc": false,
      "feel": "Firm-leaning plush",
      "lvl": 0.85,
      "feelPos": 0.74,
      "thick": [
        4.5
      ],
      "colours": [],
      "badge": null,
      "guarantee": "7-year guarantee",
      "photos": [
        {
          "src": "images/hybrid-plush.webp",
          "w": 482,
          "h": 140,
          "alt": "Easy Comfort Hybrid Plush mattress in a blue jacquard cover with a leaf pattern",
          "colour": null
        }
      ],
      "chips": [
        "3-layer core",
        "Italian jacquard cover",
        "4.5″",
        "7-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Anyone who wants a soft touch and a firm foundation",
          "p": "A plush comfort layer over a structure that stays honest."
        },
        {
          "h": "Everyday comfort, in any room",
          "p": "Bedrooms, guest rooms, growing households."
        },
        {
          "h": "Those who value breathability",
          "p": "The construction is designed to enhance airflow."
        }
      ],
      "story": [
        "Three layers, each doing one thing.",
        "A profile-cut foam on top to shape itself gently to you. A rebond layer of 80 kg/m³ in the middle to carry the weight. A high-density foam beneath to keep everything true. Over it all, an Italian-made knitted jacquard that lets the mattress breathe. Nothing extra. Nothing missing."
      ],
      "core": "Profile-cut foam on top · a rebond layer of 80 kg/m³ in the middle · high-density foam beneath",
      "coreNote": "Designed to enhance airflow, comfort and body-pressure distribution.",
      "cover": "Italian-made knitted jacquard mattress ticking",
      "spec": [
        [
          "Type",
          "Hybrid Plush"
        ],
        [
          "Feeling",
          "Hard"
        ],
        [
          "Foam core",
          "3 layers: <ul><li>Profile cut foam layer on top</li><li>Rebond layer of 80&nbsp;kg/m³ density in the middle of the core</li><li>High density foam layer at the bottom</li></ul> Specially designed to enhance the air flow, comfort and body pressure distribution."
        ],
        [
          "Fabric cover",
          "Wrapped in a luxurious, Italian made, knitted jacquard mattress ticking, which adds an extra layer of comfort and enhances the air flow."
        ],
        [
          "Thickness",
          "4.5″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 7-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "hybrid-eco": {
      "name": "Hybrid Eco",
      "line": "Slim, firm and simple, with a polyester cover that lifts away.",
      "tagline": "Everything a good night needs.",
      "price": "Rs. 18,000",
      "tbc": false,
      "feel": "Hard",
      "lvl": 1,
      "feelPos": 0.88,
      "thick": [
        4
      ],
      "colours": [],
      "badge": null,
      "guarantee": "5-year guarantee",
      "photos": [
        {
          "src": "images/hybrid-eco.webp",
          "w": 785,
          "h": 178,
          "alt": "Easy Comfort Hybrid Eco mattress in a blue patterned cover",
          "colour": null
        }
      ],
      "chips": [
        "2-layer foam core",
        "Removable cover",
        "4″",
        "5-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Guest rooms and first homes",
          "p": "A clean, firm, dependable mattress, without excess."
        },
        {
          "h": "Those who prefer a firm surface",
          "p": "Hard in feel, evenly supportive."
        },
        {
          "h": "Anyone who likes a cover that comes off",
          "p": "A removable polyester cover."
        }
      ],
      "story": [
        "Two layers of foam and a cover that comes off. That is the whole design, and it is deliberate.",
        "The Hybrid Eco does what a mattress must do — supports you evenly, holds its shape — and asks nothing of you in return. A good night, without the ceremony."
      ],
      "core": "A two-layer foam core",
      "coreNote": "The essentials, done well.",
      "cover": "Removable polyester fabric",
      "spec": [
        [
          "Type",
          "Hybrid Eco"
        ],
        [
          "Feeling",
          "Hard"
        ],
        [
          "Foam core",
          "2 layers"
        ],
        [
          "Fabric cover",
          "Removable polyester fabric"
        ],
        [
          "Thickness",
          "4″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 5-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    },
    "vento": {
      "name": "Vento",
      "line": "Clean, firm support, kept light and unfussy.",
      "tagline": "Four layers. No fuss.",
      "price": "Pricing to be confirmed",
      "tbc": true,
      "feel": "Hard",
      "lvl": 1,
      "feelPos": 0.85,
      "thick": [
        5
      ],
      "colours": [],
      "badge": null,
      "guarantee": "5-year guarantee",
      "photos": [
        {
          "src": "images/vento.webp",
          "w": 1000,
          "h": 459,
          "alt": "Easy Comfort Vento mattress in a tropical print cover with toucans and flowers",
          "colour": null
        }
      ],
      "chips": [
        "4-layer core",
        "Removable cover",
        "5″",
        "5-year foam-core guarantee"
      ],
      "forWho": [
        {
          "h": "Those who prefer a firm feel",
          "p": "Four layers give the structure of a firmer mattress."
        },
        {
          "h": "People who want one less thing to think about",
          "p": "Unfussy and dependable, with a cover that comes off."
        },
        {
          "h": "Everyday use, in any room",
          "p": "Standard and tailor-made sizes."
        }
      ],
      "story": [
        "Vento is the Essential range with more inside it: four layers where the Hybrid Eco has two — three foams of 22 to 25 kg/m³ and a dense rebond layer of 80.",
        "It is firm, unfussy and built to be depended on, under a cover that comes off. For people who would rather spend their attention on the rest of the day."
      ],
      "core": "Three foam layers of 22 to 25 kg/m³ · a rebond layer of 80 kg/m³",
      "coreNote": "Four layers where the Hybrid Eco has two.",
      "cover": "Removable polyester fabric",
      "spec": [
        [
          "Type",
          "Vento"
        ],
        [
          "Feeling",
          "Hard"
        ],
        [
          "Foam core",
          "4-layer structure: 3 foam layers of 22–25&nbsp;kg/m³ density and a rebond layer of 80&nbsp;kg/m³ density."
        ],
        [
          "Fabric cover",
          "Removable polyester fabric cover"
        ],
        [
          "Thickness",
          "5″"
        ],
        [
          "Sizes",
          "All standard sizes, and tailor-made sizes"
        ],
        [
          "Guarantee",
          "Rest easy with a 5-year guarantee on the foam core against manufacturing defects and sagging"
        ]
      ]
    }
  };

  window.ECP = { MODELS, SWATCH, specFor, PRODUCTS, ORDER: Object.keys(PRODUCTS) };
})();
