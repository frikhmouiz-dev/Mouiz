import { Player } from "../types/game";

export const PRIORITY_STARS_SET = new Set<string>(["Raphinha","Lamine Yamal","Jude Bellingham","Michael Olise","Vitinha","Florian Wirtz","Erling Haaland","Kylian Mbappé","Vinícius Júnior","Ousmane Dembélé","Rodri","Rafael Leão","Lautaro Martínez","Jamal Musiala","Pedri","Bukayo Saka","Cole Palmer","Julián Álvarez","Khvicha Kvaratskhelia","Achraf Hakimi"]);

export const PLAYERS_DATA: Player[] = [
  {
    "id": "raphinha",
    "nameAr": "رافينيا",
    "nameEn": "Raphinha",
    "aliases": [
      "رافينيا",
      "رافينها",
      "Raphinha"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "جناح أيمن",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "avai",
        "year": "2015",
        "fromClub": "أفاي",
        "toClub": "فيتوريا غيماريش",
        "type": "permanent"
      },
      {
        "clubId": "vitoria-guimaraes",
        "year": "2016",
        "fromClub": "فيتوريا غيماريش",
        "toClub": "سبورتينغ لشبونة",
        "type": "permanent"
      },
      {
        "clubId": "sporting-cp",
        "year": "2018",
        "fromClub": "سبورتينغ لشبونة",
        "toClub": "رين",
        "type": "permanent"
      },
      {
        "clubId": "rennes",
        "year": "2019",
        "fromClub": "رين",
        "toClub": "ليدز يونايتد",
        "type": "permanent"
      },
      {
        "clubId": "leeds",
        "year": "2020",
        "fromClub": "ليدز يونايتد",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2022",
        "fromClub": "برشلونة",
        "toClub": "برشلونة",
        "type": "permanent"
      }
    ],
    "playerId": "raphinha",
    "currentClubId": "barcelona",
    "currentClub": "برشلونة",
    "currentLogo": "/logos/barcelona.png",
    "isPriorityStar": true
  },
  {
    "id": "lamine-yamal",
    "nameAr": "لامين يامال",
    "nameEn": "Lamine Yamal",
    "aliases": [
      "يامال",
      "لامين",
      "الجوهرة",
      "Yamal",
      "Lamine Yamal"
    ],
    "nationalityAr": "إسبانيا 🇪🇸",
    "positionAr": "جناح أيمن",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "barcelona",
        "year": "2023",
        "fromClub": "لاماسيا",
        "toClub": "برشلونة",
        "type": "permanent"
      }
    ],
    "playerId": "lamine-yamal",
    "currentClubId": "barcelona",
    "currentClub": "برشلونة",
    "currentLogo": "/logos/barcelona.png",
    "isPriorityStar": true
  },
  {
    "id": "jude-bellingham",
    "nameAr": "جود بيلينغهام",
    "nameEn": "Jude Bellingham",
    "aliases": [
      "بيلينغهام",
      "بيلينجهام",
      "جود",
      "Bellingham",
      "Jude Bellingham"
    ],
    "nationalityAr": "إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "positionAr": "وسط هجومي",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "birmingham",
        "year": "2019",
        "fromClub": "برمنغهام سيتي",
        "toClub": "بوروسيا دورتموند",
        "type": "permanent"
      },
      {
        "clubId": "borussia-dortmund",
        "year": "2020",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2023",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "jude-bellingham",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": true
  },
  {
    "id": "michael-olise",
    "nameAr": "مايكل أوليسي",
    "nameEn": "Michael Olise",
    "aliases": [
      "أوليسي",
      "اوليسي",
      "اوليز",
      "Olise",
      "Michael Olise"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "جناح أيمن / صانع ألعاب",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "reading",
        "year": "2019",
        "fromClub": "ريدينغ",
        "toClub": "كريستال بالاس",
        "type": "permanent"
      },
      {
        "clubId": "crystal-palace",
        "year": "2021",
        "fromClub": "كريستال بالاس",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      },
      {
        "clubId": "bayern-munich",
        "year": "2024",
        "fromClub": "بايرن ميونخ",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      }
    ],
    "playerId": "michael-olise",
    "currentClubId": "bayern-munich",
    "currentClub": "بايرن ميونخ",
    "currentLogo": "/logos/bayern-munich.png",
    "isPriorityStar": true
  },
  {
    "id": "vitinha",
    "nameAr": "فيتينيا",
    "nameEn": "Vitinha",
    "aliases": [
      "فيتينيا",
      "فيتينها",
      "Vitinha"
    ],
    "nationalityAr": "البرتغال 🇵🇹",
    "positionAr": "وسط ميدان",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "porto",
        "year": "2020",
        "fromClub": "بورتو",
        "toClub": "وولفرهامبتون",
        "type": "loan"
      },
      {
        "clubId": "wolves",
        "year": "2020",
        "fromClub": "وولفرهامبتون",
        "toClub": "بورتو",
        "type": "permanent"
      },
      {
        "clubId": "porto",
        "year": "2021",
        "fromClub": "بورتو",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2022",
        "fromClub": "باريس سان جيرمان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      }
    ],
    "playerId": "vitinha",
    "currentClubId": "paris-saint-germain",
    "currentClub": "باريس سان جيرمان",
    "currentLogo": "/logos/paris-saint-germain.png",
    "isPriorityStar": true
  },
  {
    "id": "florian-wirtz",
    "nameAr": "فلوريان فيرتز",
    "nameEn": "Florian Wirtz",
    "aliases": [
      "فيرتز",
      "فلوريان",
      "Wirtz",
      "Florian Wirtz"
    ],
    "nationalityAr": "ألمانيا 🇩🇪",
    "positionAr": "صانع ألعاب",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "koln",
        "year": "2020",
        "fromClub": "كولن",
        "toClub": "باير ليفركوزن",
        "type": "permanent"
      },
      {
        "clubId": "bayer-leverkusen",
        "year": "2020",
        "fromClub": "باير ليفركوزن",
        "toClub": "ليفربول",
        "type": "permanent"
      },
      {
        "clubId": "liverpool",
        "year": "2026",
        "fromClub": "ليفربول",
        "toClub": "ليفربول",
        "type": "permanent"
      }
    ],
    "playerId": "florian-wirtz",
    "currentClubId": "liverpool",
    "currentClub": "ليفربول",
    "currentLogo": "/logos/liverpool.png",
    "isPriorityStar": true
  },
  {
    "id": "alexander-isak",
    "nameAr": "ألكسندر إيزاك",
    "nameEn": "Alexander Isak",
    "aliases": [
      "إيزاك",
      "ايزاك",
      "Isak",
      "Alexander Isak"
    ],
    "nationalityAr": "السويد 🇸🇪",
    "positionAr": "مهاجم",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "aik",
        "year": "2016",
        "fromClub": "أيك سولنا",
        "toClub": "بوروسيا دورتموند",
        "type": "permanent"
      },
      {
        "clubId": "borussia-dortmund",
        "year": "2017",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "ريال سوسيداد",
        "type": "permanent"
      },
      {
        "clubId": "real-sociedad",
        "year": "2019",
        "fromClub": "ريال سوسيداد",
        "toClub": "نيوكاسل يونايتد",
        "type": "permanent"
      },
      {
        "clubId": "newcastle",
        "year": "2022",
        "fromClub": "نيوكاسل يونايتد",
        "toClub": "ليفربول",
        "type": "permanent"
      },
      {
        "clubId": "liverpool",
        "year": "2026",
        "fromClub": "ليفربول",
        "toClub": "ليفربول",
        "type": "permanent"
      }
    ],
    "playerId": "alexander-isak",
    "currentClubId": "liverpool",
    "currentClub": "ليفربول",
    "currentLogo": "/logos/liverpool.png",
    "isPriorityStar": false
  },
  {
    "id": "khvicha-kvaratskhelia",
    "nameAr": "خفيتشا كفاراتسخيليا",
    "nameEn": "Khvicha Kvaratskhelia",
    "aliases": [
      "كفاراتسخيليا",
      "كفارا",
      "كفارادونا",
      "Kvara",
      "Kvaratskhelia"
    ],
    "nationalityAr": "جورجيا 🇬🇪",
    "positionAr": "جناح أيسر",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "dinamo-tbilisi",
        "year": "2017",
        "fromClub": "دينامو تبليسي",
        "toClub": "روستافي",
        "type": "permanent"
      },
      {
        "clubId": "rostavi",
        "year": "2018",
        "fromClub": "روستافي",
        "toClub": "روبين كازان",
        "type": "permanent"
      },
      {
        "clubId": "rubin-kazan",
        "year": "2019",
        "fromClub": "روبين كازان",
        "toClub": "دينامو باتومي",
        "type": "permanent"
      },
      {
        "clubId": "dinamo-batumi",
        "year": "2022",
        "fromClub": "دينامو باتومي",
        "toClub": "نابولي",
        "type": "permanent"
      },
      {
        "clubId": "napoli",
        "year": "2022",
        "fromClub": "نابولي",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2025",
        "fromClub": "باريس سان جيرمان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      }
    ],
    "playerId": "khvicha-kvaratskhelia",
    "currentClubId": "paris-saint-germain",
    "currentClub": "باريس سان جيرمان",
    "currentLogo": "/logos/paris-saint-germain.png",
    "isPriorityStar": true
  },
  {
    "id": "cole-palmer",
    "nameAr": "كول بالمر",
    "nameEn": "Cole Palmer",
    "aliases": [
      "بالمر",
      "كول",
      "كولد بالمر",
      "Palmer",
      "Cole Palmer",
      "Cold Palmer"
    ],
    "nationalityAr": "إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "positionAr": "صانع ألعاب / جناح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "manchester-city",
        "year": "2020",
        "fromClub": "مانشستر سيتي",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2023",
        "fromClub": "تشيلسي",
        "toClub": "تشيلسي",
        "type": "permanent"
      }
    ],
    "playerId": "cole-palmer",
    "currentClubId": "chelsea",
    "currentClub": "تشيلسي",
    "currentLogo": "/logos/chelsea.png",
    "isPriorityStar": true
  },
  {
    "id": "bukayo-saka",
    "nameAr": "بوكايو ساكا",
    "nameEn": "Bukayo Saka",
    "aliases": [
      "ساكا",
      "بوكايو",
      "ستاربوي",
      "Saka",
      "Bukayo Saka",
      "Starboy"
    ],
    "nationalityAr": "إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "positionAr": "جناح أيمن",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "arsenal",
        "year": "2018",
        "fromClub": "أكاديمية أرسنال",
        "toClub": "أرسنال",
        "type": "permanent"
      }
    ],
    "playerId": "bukayo-saka",
    "currentClubId": "arsenal",
    "currentClub": "أرسنال",
    "currentLogo": "/logos/arsenal.png",
    "isPriorityStar": true
  },
  {
    "id": "phil-foden",
    "nameAr": "فيل فودين",
    "nameEn": "Phil Foden",
    "aliases": [
      "فودين",
      "فيل",
      "فتى ستوكبورت",
      "Foden",
      "Phil Foden"
    ],
    "nationalityAr": "إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "positionAr": "جناح / صانع ألعاب",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "manchester-city",
        "year": "2017",
        "fromClub": "أكاديمية السيتي",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      }
    ],
    "playerId": "phil-foden",
    "currentClubId": "manchester-city",
    "currentClub": "مانشستر سيتي",
    "currentLogo": "/logos/manchester-city.png",
    "isPriorityStar": false
  },
  {
    "id": "julian-alvarez",
    "nameAr": "جوليان ألفاريز",
    "nameEn": "Julián Álvarez",
    "aliases": [
      "ألفاريز",
      "العنكبوت",
      "الفاريز",
      "جوليان",
      "Alvarez",
      "Julian Alvarez",
      "La Arana"
    ],
    "nationalityAr": "الأرجنتين 🇦🇷",
    "positionAr": "مهاجم",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "river-plate",
        "year": "2018",
        "fromClub": "ريفر بليت",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2022",
        "fromClub": "مانشستر سيتي",
        "toClub": "أتلتيكو مدريد",
        "type": "permanent"
      },
      {
        "clubId": "atletico-madrid",
        "year": "2024",
        "fromClub": "أتلتيكو مدريد",
        "toClub": "أتلتيكو مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "julian-alvarez",
    "currentClubId": "atletico-madrid",
    "currentClub": "أتلتيكو مدريد",
    "currentLogo": "/logos/atletico-madrid.png",
    "isPriorityStar": true
  },
  {
    "id": "joao-neves",
    "nameAr": "جواو نيفيز",
    "nameEn": "João Neves",
    "aliases": [
      "نيفيز",
      "جواو نيفيز",
      "Neves",
      "Joao Neves"
    ],
    "nationalityAr": "البرتغال 🇵🇹",
    "positionAr": "وسط ارتكاز",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "benfica",
        "year": "2022",
        "fromClub": "بنفيكا",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2024",
        "fromClub": "باريس سان جيرمان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      }
    ],
    "playerId": "joao-neves",
    "currentClubId": "paris-saint-germain",
    "currentClub": "باريس سان جيرمان",
    "currentLogo": "/logos/paris-saint-germain.png",
    "isPriorityStar": false
  },
  {
    "id": "desire-doue",
    "nameAr": "ديزيري دوي",
    "nameEn": "Désiré Doué",
    "aliases": [
      "دوي",
      "ديزيري دوي",
      "Doue",
      "Desire Doue"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "جناح / وسط هجومي",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "rennes",
        "year": "2022",
        "fromClub": "رين",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2024",
        "fromClub": "باريس سان جيرمان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      }
    ],
    "playerId": "desire-doue",
    "currentClubId": "paris-saint-germain",
    "currentClub": "باريس سان جيرمان",
    "currentLogo": "/logos/paris-saint-germain.png",
    "isPriorityStar": false
  },
  {
    "id": "nico-williams",
    "nameAr": "نيكو ويليامز",
    "nameEn": "Nico Williams",
    "aliases": [
      "نيكو ويليامز",
      "نيكو",
      "Williams",
      "Nico Williams"
    ],
    "nationalityAr": "إسبانيا 🇪🇸",
    "positionAr": "جناح أيسر",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "athletic-bilbao",
        "year": "2021",
        "fromClub": "أتلتيك بلباو",
        "toClub": "أتلتيك بلباو",
        "type": "permanent"
      }
    ],
    "playerId": "nico-williams",
    "currentClubId": "athletic-bilbao",
    "currentClub": "أتلتيك بلباو",
    "currentLogo": "/logos/athletic-bilbao.png",
    "isPriorityStar": false
  },
  {
    "id": "ousmane-dembele",
    "nameAr": "عثمان ديمبيلي",
    "nameEn": "Ousmane Dembélé",
    "aliases": [
      "ديمبيلي",
      "ديمبلي",
      "عثمان",
      "Dembele",
      "Ousmane Dembele"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "جناح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "rennes",
        "year": "2015",
        "fromClub": "رين",
        "toClub": "بوروسيا دورتموند",
        "type": "permanent"
      },
      {
        "clubId": "borussia-dortmund",
        "year": "2016",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2017",
        "fromClub": "برشلونة",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2023",
        "fromClub": "باريس سان جيرمان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      }
    ],
    "playerId": "ousmane-dembele",
    "currentClubId": "paris-saint-germain",
    "currentClub": "باريس سان جيرمان",
    "currentLogo": "/logos/paris-saint-germain.png",
    "isPriorityStar": true
  },
  {
    "id": "rodrygo",
    "nameAr": "رودريغو سيلفا",
    "nameEn": "Rodrygo",
    "aliases": [
      "رودريغو",
      "رودريجو",
      "Rodrygo",
      "Rodrygo Goes"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "جناح / مهاجم",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "santos",
        "year": "2017",
        "fromClub": "سانتوس",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2019",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "rodrygo",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "rodri",
    "nameAr": "رودريغو هيرنانديز (رودري)",
    "nameEn": "Rodri",
    "aliases": [
      "رودري",
      "رودريغو",
      "رودريجو",
      "Rodri",
      "Rodrigo"
    ],
    "nationalityAr": "إسبانيا 🇪🇸",
    "positionAr": "وسط ارتكاز",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "villarreal",
        "year": "2015",
        "fromClub": "فياريال",
        "toClub": "أتلتيكو مدريد",
        "type": "permanent"
      },
      {
        "clubId": "atletico-madrid",
        "year": "2018",
        "fromClub": "أتلتيكو مدريد",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2019",
        "fromClub": "مانشستر سيتي",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2026",
        "fromClub": "برشلونة",
        "toClub": "برشلونة",
        "type": "permanent"
      }
    ],
    "playerId": "rodri",
    "currentClubId": "barcelona",
    "currentClub": "برشلونة",
    "currentLogo": "/logos/barcelona.png",
    "isPriorityStar": true
  },
  {
    "id": "rafael-leao",
    "nameAr": "رافائيل لياو",
    "nameEn": "Rafael Leão",
    "aliases": [
      "لياو",
      "رافائيل لياو",
      "رافايل لياو",
      "Leao",
      "Rafael Leao"
    ],
    "nationalityAr": "البرتغال 🇵🇹",
    "positionAr": "جناح أيسر",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "sporting-cp",
        "year": "2017",
        "fromClub": "سبورتينغ لشبونة",
        "toClub": "ليل",
        "type": "permanent"
      },
      {
        "clubId": "lille",
        "year": "2018",
        "fromClub": "ليل",
        "toClub": "ميلان",
        "type": "permanent"
      },
      {
        "clubId": "ac-milan",
        "year": "2019",
        "fromClub": "ميلان",
        "toClub": "ميلان",
        "type": "permanent"
      }
    ],
    "playerId": "rafael-leao",
    "currentClubId": "ac-milan",
    "currentClub": "ميلان",
    "currentLogo": "/logos/ac-milan.png",
    "isPriorityStar": true
  },
  {
    "id": "lautaro-martinez",
    "nameAr": "لاوتارو مارتينيز",
    "nameEn": "Lautaro Martínez",
    "aliases": [
      "لاوتارو",
      "التورو",
      "الثور",
      "Lautaro",
      "Lautaro Martinez",
      "El Toro"
    ],
    "nationalityAr": "الأرجنتين 🇦🇷",
    "positionAr": "مهاجم",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "racing-club",
        "year": "2015",
        "fromClub": "راسينغ كلوب",
        "toClub": "إنتر ميلان",
        "type": "permanent"
      },
      {
        "clubId": "inter-milan",
        "year": "2018",
        "fromClub": "إنتر ميلان",
        "toClub": "إنتر ميلان",
        "type": "permanent"
      }
    ],
    "playerId": "lautaro-martinez",
    "currentClubId": "inter-milan",
    "currentClub": "إنتر ميلان",
    "currentLogo": "/logos/inter-milan.png",
    "isPriorityStar": true
  },
  {
    "id": "vinicius-jr",
    "nameAr": "فينيسيوس جونيور",
    "nameEn": "Vinícius Júnior",
    "aliases": [
      "فينيسيوس",
      "فيني",
      "فيني جونيور",
      "Vinicius",
      "Vini",
      "Vini Jr",
      "Vinicius Junior"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "جناح أيسر",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "flamengo",
        "year": "2017",
        "fromClub": "فلامينغو",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2018",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "vinicius-jr",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": true
  },
  {
    "id": "jamal-musiala",
    "nameAr": "جمال موسيالا",
    "nameEn": "Jamal Musiala",
    "aliases": [
      "موسيالا",
      "جمال",
      "بامبي",
      "Musiala",
      "Jamal Musiala"
    ],
    "nationalityAr": "ألمانيا 🇩🇪",
    "positionAr": "صانع ألعاب / جناح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "chelsea",
        "year": "2019",
        "fromClub": "تشيلسي",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      },
      {
        "clubId": "bayern-munich",
        "year": "2020",
        "fromClub": "بايرن ميونخ",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      }
    ],
    "playerId": "jamal-musiala",
    "currentClubId": "bayern-munich",
    "currentClub": "بايرن ميونخ",
    "currentLogo": "/logos/bayern-munich.png",
    "isPriorityStar": true
  },
  {
    "id": "martin-odegaard",
    "nameAr": "مارتن أوديغارد",
    "nameEn": "Martin Ødegaard",
    "aliases": [
      "أوديغارد",
      "اوديغارد",
      "اوديجارد",
      "Odegaard",
      "Martin Odegaard"
    ],
    "nationalityAr": "النرويج 🇳🇴",
    "positionAr": "صانع ألعاب",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "stromsgodset",
        "year": "2014",
        "fromClub": "سترومسغودست",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2015",
        "fromClub": "ريال مدريد",
        "toClub": "هيرينفين",
        "type": "loan"
      },
      {
        "clubId": "heerenveen",
        "year": "2017",
        "fromClub": "هيرينفين",
        "toClub": "فيتيسه",
        "type": "loan"
      },
      {
        "clubId": "vitesse",
        "year": "2018",
        "fromClub": "فيتيسه",
        "toClub": "ريال سوسيداد",
        "type": "loan"
      },
      {
        "clubId": "real-sociedad",
        "year": "2019",
        "fromClub": "ريال سوسيداد",
        "toClub": "أرسنال",
        "type": "permanent"
      },
      {
        "clubId": "arsenal",
        "year": "2021",
        "fromClub": "أرسنال",
        "toClub": "أرسنال",
        "type": "permanent"
      }
    ],
    "playerId": "martin-odegaard",
    "currentClubId": "arsenal",
    "currentClub": "أرسنال",
    "currentLogo": "/logos/arsenal.png",
    "isPriorityStar": false
  },
  {
    "id": "brahim-diaz",
    "nameAr": "إبراهيم دياز",
    "nameEn": "Brahim Díaz",
    "aliases": [
      "إبراهيم دياز",
      "ابراهيم دياز",
      "دياز",
      "Brahim Diaz",
      "Brahim"
    ],
    "nationalityAr": "المغرب 🇲🇦",
    "positionAr": "صانع ألعاب / جناح",
    "era": "arab",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "manchester-city",
        "year": "2016",
        "fromClub": "مانشستر سيتي",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2019",
        "fromClub": "ريال مدريد",
        "toClub": "ميلان",
        "type": "loan"
      },
      {
        "clubId": "ac-milan",
        "year": "2020",
        "fromClub": "ميلان",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2023",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "brahim-diaz",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "achraf-hakimi",
    "nameAr": "أشرف حكيمي",
    "nameEn": "Achraf Hakimi",
    "aliases": [
      "حكيمي",
      "أشرف",
      "اشرف حكيمي",
      "Hakimi",
      "Achraf Hakimi"
    ],
    "nationalityAr": "المغرب 🇲🇦",
    "positionAr": "ظهير أيمن",
    "era": "arab",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "real-madrid",
        "year": "2017",
        "fromClub": "ريال مدريد",
        "toClub": "بوروسيا دورتموند",
        "type": "loan"
      },
      {
        "clubId": "borussia-dortmund",
        "year": "2018",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "إنتر ميلان",
        "type": "permanent"
      },
      {
        "clubId": "inter-milan",
        "year": "2020",
        "fromClub": "إنتر ميلان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2021",
        "fromClub": "باريس سان جيرمان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      }
    ],
    "playerId": "achraf-hakimi",
    "currentClubId": "paris-saint-germain",
    "currentClub": "باريس سان جيرمان",
    "currentLogo": "/logos/paris-saint-germain.png",
    "isPriorityStar": true
  },
  {
    "id": "theo-hernandez",
    "nameAr": "ثيو هيرنانديز",
    "nameEn": "Theo Hernández",
    "aliases": [
      "ثيو",
      "هيرنانديز",
      "ثيو هيرنانديز",
      "Theo Hernandez",
      "Theo"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "ظهير أيسر",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "atletico-madrid",
        "year": "2015",
        "fromClub": "أتلتيكو مدريد",
        "toClub": "ديبورتيفو ألافيس",
        "type": "loan"
      },
      {
        "clubId": "alaves",
        "year": "2016",
        "fromClub": "ديبورتيفو ألافيس",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2017",
        "fromClub": "ريال مدريد",
        "toClub": "ميلان",
        "type": "permanent"
      },
      {
        "clubId": "ac-milan",
        "year": "2019",
        "fromClub": "ميلان",
        "toClub": "الهلال",
        "type": "permanent"
      },
      {
        "clubId": "al-hilal",
        "year": "2026",
        "fromClub": "الهلال",
        "toClub": "الهلال",
        "type": "permanent"
      }
    ],
    "playerId": "theo-hernandez",
    "currentClubId": "al-hilal",
    "currentClub": "الهلال",
    "currentLogo": "/logos/al-hilal.png",
    "isPriorityStar": false
  },
  {
    "id": "joao-pedro",
    "nameAr": "جواو بيدرو",
    "nameEn": "João Pedro",
    "aliases": [
      "جواو بيدرو",
      "بيدرو",
      "Joao Pedro"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "مهاجم",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "fluminense",
        "year": "2019",
        "fromClub": "فلومينينسي",
        "toClub": "واتفورد",
        "type": "permanent"
      },
      {
        "clubId": "watford",
        "year": "2020",
        "fromClub": "واتفورد",
        "toClub": "برايتون",
        "type": "permanent"
      },
      {
        "clubId": "brighton",
        "year": "2023",
        "fromClub": "برايتون",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2026",
        "fromClub": "تشيلسي",
        "toClub": "تشيلسي",
        "type": "permanent"
      }
    ],
    "playerId": "joao-pedro",
    "currentClubId": "chelsea",
    "currentClub": "تشيلسي",
    "currentLogo": "/logos/chelsea.png",
    "isPriorityStar": false
  },
  {
    "id": "dani-olmo",
    "nameAr": "داني أولمو",
    "nameEn": "Dani Olmo",
    "aliases": [
      "أولمو",
      "اولمو",
      "داني اولمو",
      "Olmo",
      "Dani Olmo"
    ],
    "nationalityAr": "إسبانيا 🇪🇸",
    "positionAr": "صانع ألعاب / جناح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "dinamo-zagreb",
        "year": "2014",
        "fromClub": "دينامو زغرب",
        "toClub": "لايبزيغ",
        "type": "permanent"
      },
      {
        "clubId": "leipzig",
        "year": "2020",
        "fromClub": "لايبزيغ",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2024",
        "fromClub": "برشلونة",
        "toClub": "برشلونة",
        "type": "permanent"
      }
    ],
    "playerId": "dani-olmo",
    "currentClubId": "barcelona",
    "currentClub": "برشلونة",
    "currentLogo": "/logos/barcelona.png",
    "isPriorityStar": false
  },
  {
    "id": "pedri",
    "nameAr": "بيدري غونزاليس",
    "nameEn": "Pedri",
    "aliases": [
      "بيدري",
      "بيدرو",
      "Pedri",
      "Pedro Gonzalez"
    ],
    "nationalityAr": "إسبانيا 🇪🇸",
    "positionAr": "وسط ميدان",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "las-palmas",
        "year": "2019",
        "fromClub": "لاس بالماس",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2020",
        "fromClub": "برشلونة",
        "toClub": "برشلونة",
        "type": "permanent"
      }
    ],
    "playerId": "pedri",
    "currentClubId": "barcelona",
    "currentClub": "برشلونة",
    "currentLogo": "/logos/barcelona.png",
    "isPriorityStar": true
  },
  {
    "id": "eduardo-camavinga",
    "nameAr": "إدواردو كامافينغا",
    "nameEn": "Eduardo Camavinga",
    "aliases": [
      "كامافينغا",
      "كامافينجا",
      "Camavinga",
      "Eduardo Camavinga"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "وسط / ظهير",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "rennes",
        "year": "2019",
        "fromClub": "رين",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2021",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "eduardo-camavinga",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "kylian-mbappe",
    "nameAr": "كيليان مبابي",
    "nameEn": "Kylian Mbappé",
    "aliases": [
      "مبابي",
      "كيليان",
      "امبابي",
      "Mbappe",
      "Kylian Mbappe"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "مهاجم / جناح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "monaco",
        "year": "2015",
        "fromClub": "موناكو",
        "toClub": "باريس سان جيرمان",
        "type": "loan"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2017",
        "fromClub": "باريس سان جيرمان",
        "toClub": "ريال مدريد",
        "type": "free_transfer"
      },
      {
        "clubId": "real-madrid",
        "year": "2024",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "kylian-mbappe",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": true
  },
  {
    "id": "erling-haaland",
    "nameAr": "إيرلينغ هالاند",
    "nameEn": "Erling Haaland",
    "aliases": [
      "هالاند",
      "ايرلينغ",
      "الغول",
      "الوحش",
      "Haaland",
      "Erling Haaland"
    ],
    "nationalityAr": "النرويج 🇳🇴",
    "positionAr": "مهاجم صريح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "borussia-dortmund",
        "year": "2020",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2022",
        "fromClub": "مانشستر سيتي",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      }
    ],
    "playerId": "erling-haaland",
    "currentClubId": "manchester-city",
    "currentClub": "مانشستر سيتي",
    "currentLogo": "/logos/manchester-city.png",
    "isPriorityStar": true
  },
  {
    "id": "cristiano-ronaldo",
    "nameAr": "كريستيانو رونالدو",
    "nameEn": "Cristiano Ronaldo",
    "aliases": [
      "رونالدو",
      "الدون",
      "كريستيانو",
      "CR7",
      "Cristiano Ronaldo"
    ],
    "nationalityAr": "البرتغال 🇵🇹",
    "positionAr": "مهاجم / جناح",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "sporting-cp",
        "year": "2002",
        "fromClub": "سبورتينغ لشبونة",
        "toClub": "مانشستر يونايتد",
        "type": "permanent"
      },
      {
        "clubId": "manchester-united",
        "year": "2003",
        "fromClub": "مانشستر يونايتد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2009",
        "fromClub": "ريال مدريد",
        "toClub": "يوفنتوس",
        "type": "permanent"
      },
      {
        "clubId": "juventus",
        "year": "2018",
        "fromClub": "يوفنتوس",
        "toClub": "مانشستر يونايتد",
        "type": "permanent"
      },
      {
        "clubId": "manchester-united",
        "year": "2021",
        "fromClub": "مانشستر يونايتد",
        "toClub": "النصر السعودي",
        "type": "free_transfer"
      },
      {
        "clubId": "al-nassr",
        "year": "2023",
        "fromClub": "النصر السعودي",
        "toClub": "النصر السعودي",
        "type": "permanent"
      }
    ],
    "playerId": "cristiano-ronaldo",
    "currentClubId": "al-nassr",
    "currentClub": "النصر السعودي",
    "currentLogo": "/logos/al-nassr.png",
    "isPriorityStar": false
  },
  {
    "id": "lionel-messi",
    "nameAr": "ليونيل ميسي",
    "nameEn": "Lionel Messi",
    "aliases": [
      "ميسي",
      "ليو ميسي",
      "ليو",
      "البرغوث",
      "Messi",
      "Lionel Messi",
      "LM10"
    ],
    "nationalityAr": "الأرجنتين 🇦🇷",
    "positionAr": "صانع ألعاب / مهاجم",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "barcelona",
        "year": "2004",
        "fromClub": "برشلونة",
        "toClub": "باريس سان جيرمان",
        "type": "free_transfer"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2021",
        "fromClub": "باريس سان جيرمان",
        "toClub": "إنتر ميامي",
        "type": "free_transfer"
      },
      {
        "clubId": "inter-miami",
        "year": "2023",
        "fromClub": "إنتر ميامي",
        "toClub": "إنتر ميامي",
        "type": "permanent"
      }
    ],
    "playerId": "lionel-messi",
    "currentClubId": "inter-miami",
    "currentClub": "إنتر ميامي",
    "currentLogo": "/logos/inter-miami.png",
    "isPriorityStar": false
  },
  {
    "id": "neymar-jr",
    "nameAr": "نيمار دا سيلفا",
    "nameEn": "Neymar Jr",
    "aliases": [
      "نيمار",
      "الساحر البرازيلي",
      "Neymar",
      "Neymar Jr",
      "NJR"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "جناح أيسر / صانع ألعاب",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "santos",
        "year": "2009",
        "fromClub": "سانتوس",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2013",
        "fromClub": "برشلونة",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2017",
        "fromClub": "باريس سان جيرمان",
        "toClub": "الهلال السعودي",
        "type": "permanent"
      },
      {
        "clubId": "al-hilal",
        "year": "2023",
        "fromClub": "الهلال السعودي",
        "toClub": "الهلال السعودي",
        "type": "permanent"
      }
    ],
    "playerId": "neymar-jr",
    "currentClubId": "al-hilal",
    "currentClub": "الهلال السعودي",
    "currentLogo": "/logos/al-hilal.png",
    "isPriorityStar": false
  },
  {
    "id": "mohamed-salah",
    "nameAr": "محمد صلاح",
    "nameEn": "Mohamed Salah",
    "aliases": [
      "صلاح",
      "محمد صلاح",
      "فخر العرب",
      "الملك المصري",
      "Salah",
      "Mo Salah"
    ],
    "nationalityAr": "مصر 🇪🇬",
    "positionAr": "جناح أيمن",
    "era": "arab",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "basel",
        "year": "2012",
        "fromClub": "بازل",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2014",
        "fromClub": "تشيلسي",
        "toClub": "فيورنتينا",
        "type": "loan"
      },
      {
        "clubId": "fiorentina",
        "year": "2015",
        "fromClub": "فيورنتينا",
        "toClub": "روما",
        "type": "loan"
      },
      {
        "clubId": "roma",
        "year": "2015",
        "fromClub": "روما",
        "toClub": "ليفربول",
        "type": "permanent"
      },
      {
        "clubId": "liverpool",
        "year": "2017",
        "fromClub": "ليفربول",
        "toClub": "ليفربول",
        "type": "permanent"
      }
    ],
    "playerId": "mohamed-salah",
    "currentClubId": "liverpool",
    "currentClub": "ليفربول",
    "currentLogo": "/logos/liverpool.png",
    "isPriorityStar": false
  },
  {
    "id": "karim-benzema",
    "nameAr": "كريم بنزيما",
    "nameEn": "Karim Benzema",
    "aliases": [
      "بنزيما",
      "الحكومة",
      "كريم",
      "Benzema",
      "Karim Benzema",
      "KB9"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "مهاجم",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "lyon",
        "year": "2004",
        "fromClub": "ليون",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2009",
        "fromClub": "ريال مدريد",
        "toClub": "الاتحاد السعودي",
        "type": "free_transfer"
      },
      {
        "clubId": "al-ittihad",
        "year": "2023",
        "fromClub": "الاتحاد السعودي",
        "toClub": "الاتحاد السعودي",
        "type": "permanent"
      }
    ],
    "playerId": "karim-benzema",
    "currentClubId": "al-ittihad",
    "currentClub": "الاتحاد السعودي",
    "currentLogo": "/logos/al-ittihad.png",
    "isPriorityStar": false
  },
  {
    "id": "robert-lewandowski",
    "nameAr": "روبرت ليفاندوفسكي",
    "nameEn": "Robert Lewandowski",
    "aliases": [
      "ليفاندوفسكي",
      "ليفاندوفسكي",
      "ليفا",
      "Lewandowski",
      "Lewa"
    ],
    "nationalityAr": "بولندا 🇵🇱",
    "positionAr": "مهاجم صريح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "borussia-dortmund",
        "year": "2010",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "بايرن ميونخ",
        "type": "free_transfer"
      },
      {
        "clubId": "bayern-munich",
        "year": "2014",
        "fromClub": "بايرن ميونخ",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2022",
        "fromClub": "برشلونة",
        "toClub": "برشلونة",
        "type": "permanent"
      }
    ],
    "playerId": "robert-lewandowski",
    "currentClubId": "barcelona",
    "currentClub": "برشلونة",
    "currentLogo": "/logos/barcelona.png",
    "isPriorityStar": false
  },
  {
    "id": "kevin-de-bruyne",
    "nameAr": "كيفين دي بروين",
    "nameEn": "Kevin De Bruyne",
    "aliases": [
      "دي بروين",
      "كيفين",
      "المهندس",
      "De Bruyne",
      "KDB"
    ],
    "nationalityAr": "بلجيكا 🇧🇪",
    "positionAr": "صانع ألعاب",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "genk",
        "year": "2008",
        "fromClub": "جينك",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2012",
        "fromClub": "تشيلسي",
        "toClub": "فيردر بريمن",
        "type": "loan"
      },
      {
        "clubId": "wolfsburg",
        "year": "2014",
        "fromClub": "فولفسبورغ",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2015",
        "fromClub": "مانشستر سيتي",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      }
    ],
    "playerId": "kevin-de-bruyne",
    "currentClubId": "manchester-city",
    "currentClub": "مانشستر سيتي",
    "currentLogo": "/logos/manchester-city.png",
    "isPriorityStar": false
  },
  {
    "id": "luka-modric",
    "nameAr": "لوكا مودريتش",
    "nameEn": "Luka Modrić",
    "aliases": [
      "مودريتش",
      "لوكا",
      "المايسترو",
      "Modric",
      "Luka Modric"
    ],
    "nationalityAr": "كرواتيا 🇭🇷",
    "positionAr": "صانع ألعاب",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "dinamo-zagreb",
        "year": "2003",
        "fromClub": "دينامو زغرب",
        "toClub": "توتنهام هوتسبير",
        "type": "permanent"
      },
      {
        "clubId": "tottenham",
        "year": "2008",
        "fromClub": "توتنهام هوتسبير",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2012",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "luka-modric",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "toni-kroos",
    "nameAr": "توني كروس",
    "nameEn": "Toni Kroos",
    "aliases": [
      "كروس",
      "توني كروس",
      "المهندس الألماني",
      "Kroos",
      "Toni Kroos"
    ],
    "nationalityAr": "ألمانيا 🇩🇪",
    "positionAr": "لاعب وسط",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "bayern-munich",
        "year": "2007",
        "fromClub": "بايرن ميونخ",
        "toClub": "باير ليفركوزن",
        "type": "loan"
      },
      {
        "clubId": "bayer-leverkusen",
        "year": "2009",
        "fromClub": "باير ليفركوزن",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      },
      {
        "clubId": "bayern-munich",
        "year": "2010",
        "fromClub": "بايرن ميونخ",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2014",
        "fromClub": "ريال مدريد",
        "toClub": "اعتزال",
        "type": "permanent"
      }
    ],
    "playerId": "toni-kroos",
    "currentClubId": "real-madrid",
    "currentClub": "اعتزال",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "harry-kane",
    "nameAr": "هاري كين",
    "nameEn": "Harry Kane",
    "aliases": [
      "كين",
      "هاري كين",
      "الهدّاف",
      "Kane",
      "Harry Kane"
    ],
    "nationalityAr": "إنجلترا 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "positionAr": "مهاجم صريح",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "tottenham",
        "year": "2009",
        "fromClub": "توتنهام هوتسبير",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      },
      {
        "clubId": "bayern-munich",
        "year": "2023",
        "fromClub": "بايرن ميونخ",
        "toClub": "بايرن ميونخ",
        "type": "permanent"
      }
    ],
    "playerId": "harry-kane",
    "currentClubId": "bayern-munich",
    "currentClub": "بايرن ميونخ",
    "currentLogo": "/logos/bayern-munich.png",
    "isPriorityStar": false
  },
  {
    "id": "riyad-mahrez",
    "nameAr": "رياض محرز",
    "nameEn": "Riyad Mahrez",
    "aliases": [
      "محرز",
      "رياض محرز",
      "حروز",
      "فخر العرب",
      "Mahrez",
      "Riyad Mahrez"
    ],
    "nationalityAr": "الجزائر 🇩🇿",
    "positionAr": "جناح أيمن",
    "era": "arab",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "le-havre",
        "year": "2010",
        "fromClub": "لوهافر",
        "toClub": "ليستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "leicester-city",
        "year": "2014",
        "fromClub": "ليستر سيتي",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2018",
        "fromClub": "مانشستر سيتي",
        "toClub": "الأهلي السعودي",
        "type": "permanent"
      },
      {
        "clubId": "al-ahli-saudi",
        "year": "2023",
        "fromClub": "الأهلي السعودي",
        "toClub": "الأهلي السعودي",
        "type": "permanent"
      }
    ],
    "playerId": "riyad-mahrez",
    "currentClubId": "al-ahli-saudi",
    "currentClub": "الأهلي السعودي",
    "currentLogo": "/logos/al-ahli-saudi.png",
    "isPriorityStar": false
  },
  {
    "id": "zlatan-ibrahimovic",
    "nameAr": "زلاتان إبراهيموفيتش",
    "nameEn": "Zlatan Ibrahimović",
    "aliases": [
      "إبراهيموفيتش",
      "زلاتان",
      "السلطان",
      "Ibrahimovic",
      "Zlatan"
    ],
    "nationalityAr": "السويد 🇸🇪",
    "positionAr": "مهاجم صريح",
    "era": "legend",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "ajax",
        "year": "2001",
        "fromClub": "أياكس",
        "toClub": "يوفنتوس",
        "type": "permanent"
      },
      {
        "clubId": "juventus",
        "year": "2004",
        "fromClub": "يوفنتوس",
        "toClub": "إنتر ميلان",
        "type": "permanent"
      },
      {
        "clubId": "inter-milan",
        "year": "2006",
        "fromClub": "إنتر ميلان",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2009",
        "fromClub": "برشلونة",
        "toClub": "ميلان",
        "type": "loan"
      },
      {
        "clubId": "ac-milan",
        "year": "2010",
        "fromClub": "ميلان",
        "toClub": "باريس سان جيرمان",
        "type": "permanent"
      },
      {
        "clubId": "paris-saint-germain",
        "year": "2012",
        "fromClub": "باريس سان جيرمان",
        "toClub": "مانشستر يونايتد",
        "type": "free_transfer"
      },
      {
        "clubId": "manchester-united",
        "year": "2016",
        "fromClub": "مانشستر يونايتد",
        "toClub": "ميلان",
        "type": "free_transfer"
      },
      {
        "clubId": "ac-milan",
        "year": "2020",
        "fromClub": "ميلان",
        "toClub": "اعتزال",
        "type": "permanent"
      }
    ],
    "playerId": "zlatan-ibrahimovic",
    "currentClubId": "ac-milan",
    "currentClub": "اعتزال",
    "currentLogo": "/logos/ac-milan.png",
    "isPriorityStar": false
  },
  {
    "id": "yassine-bounou",
    "nameAr": "ياسين بونو",
    "nameEn": "Yassine Bounou",
    "aliases": [
      "بونو",
      "ياسين بونو",
      "Bono",
      "Bounou",
      "Yassine Bounou"
    ],
    "nationalityAr": "المغرب 🇲🇦",
    "positionAr": "حارس مرمى",
    "era": "arab",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "wydad",
        "year": "2010",
        "fromClub": "الوداد الرياضي",
        "toClub": "أتلتيكو مدريد",
        "type": "permanent"
      },
      {
        "clubId": "atletico-madrid",
        "year": "2012",
        "fromClub": "أتلتيكو مدريد",
        "toClub": "جيرونا",
        "type": "loan"
      },
      {
        "clubId": "girona",
        "year": "2016",
        "fromClub": "جيرونا",
        "toClub": "إشبيلية",
        "type": "permanent"
      },
      {
        "clubId": "sevilla",
        "year": "2019",
        "fromClub": "إشبيلية",
        "toClub": "الهلال السعودي",
        "type": "permanent"
      },
      {
        "clubId": "al-hilal",
        "year": "2023",
        "fromClub": "الهلال السعودي",
        "toClub": "الهلال السعودي",
        "type": "permanent"
      }
    ],
    "playerId": "yassine-bounou",
    "currentClubId": "al-hilal",
    "currentClub": "الهلال السعودي",
    "currentLogo": "/logos/al-hilal.png",
    "isPriorityStar": false
  },
  {
    "id": "salem-al-dawsari",
    "nameAr": "سالم الدوسري",
    "nameEn": "Salem Al-Dawsari",
    "aliases": [
      "سالم",
      "الدوسري",
      "التورنادو",
      "Salem",
      "Salem Al Dawsari"
    ],
    "nationalityAr": "السعودية 🇸🇦",
    "positionAr": "جناح أيسر",
    "era": "arab",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "al-hilal",
        "year": "2011",
        "fromClub": "الهلال السعودي",
        "toClub": "فياريال",
        "type": "loan"
      },
      {
        "clubId": "villarreal",
        "year": "2018",
        "fromClub": "فياريال",
        "toClub": "الهلال السعودي",
        "type": "permanent"
      },
      {
        "clubId": "al-hilal",
        "year": "2018",
        "fromClub": "الهلال السعودي",
        "toClub": "الهلال السعودي",
        "type": "permanent"
      }
    ],
    "playerId": "salem-al-dawsari",
    "currentClubId": "al-hilal",
    "currentClub": "الهلال السعودي",
    "currentLogo": "/logos/al-hilal.png",
    "isPriorityStar": false
  },
  {
    "id": "hakim-ziyech",
    "nameAr": "حكيم زياش",
    "nameEn": "Hakim Ziyech",
    "aliases": [
      "زياش",
      "حكيم",
      "ساحر أطلس",
      "Ziyech",
      "Hakim Ziyech"
    ],
    "nationalityAr": "المغرب 🇲🇦",
    "positionAr": "صانع ألعاب / جناح",
    "era": "arab",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "heerenveen",
        "year": "2012",
        "fromClub": "هيرينفين",
        "toClub": "أياكس",
        "type": "permanent"
      },
      {
        "clubId": "ajax",
        "year": "2016",
        "fromClub": "أياكس",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2020",
        "fromClub": "تشيلسي",
        "toClub": "غلطة سراي",
        "type": "loan"
      },
      {
        "clubId": "galatasaray",
        "year": "2023",
        "fromClub": "غلطة سراي",
        "toClub": "غلطة سراي",
        "type": "permanent"
      }
    ],
    "playerId": "hakim-ziyech",
    "currentClubId": "galatasaray",
    "currentClub": "غلطة سراي",
    "currentLogo": "/logos/galatasaray.png",
    "isPriorityStar": false
  },
  {
    "id": "sofyan-amrabat",
    "nameAr": "سفيان أمرابط",
    "nameEn": "Sofyan Amrabat",
    "aliases": [
      "أمرابط",
      "امرابط",
      "سفيان",
      "Amrabat",
      "Sofyan Amrabat"
    ],
    "nationalityAr": "المغرب 🇲🇦",
    "positionAr": "وسط ارتكاز",
    "era": "arab",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "feyenoord",
        "year": "2017",
        "fromClub": "فاينورد",
        "toClub": "فيورنتينا",
        "type": "permanent"
      },
      {
        "clubId": "fiorentina",
        "year": "2020",
        "fromClub": "فيورنتينا",
        "toClub": "مانشستر يونايتد",
        "type": "loan"
      },
      {
        "clubId": "manchester-united",
        "year": "2023",
        "fromClub": "مانشستر يونايتد",
        "toClub": "فنربخشة",
        "type": "loan"
      },
      {
        "clubId": "fenerbahce",
        "year": "2024",
        "fromClub": "فنربخشة",
        "toClub": "فنربخشة",
        "type": "permanent"
      }
    ],
    "playerId": "sofyan-amrabat",
    "currentClubId": "fenerbahce",
    "currentClub": "فنربخشة",
    "currentLogo": "/logos/fenerbahce.png",
    "isPriorityStar": false
  },
  {
    "id": "thibaut-courtois",
    "nameAr": "تيبو كورتوا",
    "nameEn": "Thibaut Courtois",
    "aliases": [
      "كورتوا",
      "الجدار",
      "Courtois",
      "Thibaut Courtois"
    ],
    "nationalityAr": "بلجيكا 🇧🇪",
    "positionAr": "حارس مرمى",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "genk",
        "year": "2009",
        "fromClub": "جينك",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2011",
        "fromClub": "تشيلسي",
        "toClub": "أتلتيكو مدريد",
        "type": "loan"
      },
      {
        "clubId": "atletico-madrid",
        "year": "2011",
        "fromClub": "أتلتيكو مدريد",
        "toClub": "تشيلسي",
        "type": "loan"
      },
      {
        "clubId": "chelsea",
        "year": "2014",
        "fromClub": "تشيلسي",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2018",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "thibaut-courtois",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "virgil-van-dijk",
    "nameAr": "فيرجيل فان دايك",
    "nameEn": "Virgil van Dijk",
    "aliases": [
      "فان دايك",
      "فاندايك",
      "Van Dijk",
      "Virgil van Dijk"
    ],
    "nationalityAr": "هولندا 🇳🇱",
    "positionAr": "قلب دفاع",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "celtic",
        "year": "2013",
        "fromClub": "سيلتيك",
        "toClub": "ساوثهامبتون",
        "type": "permanent"
      },
      {
        "clubId": "southampton",
        "year": "2015",
        "fromClub": "ساوثهامبتون",
        "toClub": "ليفربول",
        "type": "permanent"
      },
      {
        "clubId": "liverpool",
        "year": "2018",
        "fromClub": "ليفربول",
        "toClub": "ليفربول",
        "type": "permanent"
      }
    ],
    "playerId": "virgil-van-dijk",
    "currentClubId": "liverpool",
    "currentClub": "ليفربول",
    "currentLogo": "/logos/liverpool.png",
    "isPriorityStar": false
  },
  {
    "id": "antonio-rudiger",
    "nameAr": "أنتونيو روديغر",
    "nameEn": "Antonio Rüdiger",
    "aliases": [
      "روديغر",
      "روديجر",
      "Rudiger",
      "Antonio Rudiger"
    ],
    "nationalityAr": "ألمانيا 🇩🇪",
    "positionAr": "قلب دفاع",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "stuttgart",
        "year": "2012",
        "fromClub": "شتوتغارت",
        "toClub": "روما",
        "type": "permanent"
      },
      {
        "clubId": "roma",
        "year": "2015",
        "fromClub": "روما",
        "toClub": "تشيلسي",
        "type": "permanent"
      },
      {
        "clubId": "chelsea",
        "year": "2017",
        "fromClub": "تشيلسي",
        "toClub": "ريال مدريد",
        "type": "free_transfer"
      },
      {
        "clubId": "real-madrid",
        "year": "2022",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "antonio-rudiger",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "alexis-mac-allister",
    "nameAr": "أليكسيس ماك أليستير",
    "nameEn": "Alexis Mac Allister",
    "aliases": [
      "ماك اليستير",
      "ماك أليستر",
      "اليكسيس",
      "Mac Allister",
      "Alexis Mac Allister"
    ],
    "nationalityAr": "الأرجنتين 🇦🇷",
    "positionAr": "وسط ميدان",
    "era": "modern",
    "difficulty": "medium",
    "transfers": [
      {
        "clubId": "boca-juniors",
        "year": "2019",
        "fromClub": "بوكا جونيورز",
        "toClub": "برايتون",
        "type": "loan"
      },
      {
        "clubId": "brighton",
        "year": "2020",
        "fromClub": "برايتون",
        "toClub": "ليفربول",
        "type": "permanent"
      },
      {
        "clubId": "liverpool",
        "year": "2023",
        "fromClub": "ليفربول",
        "toClub": "ليفربول",
        "type": "permanent"
      }
    ],
    "playerId": "alexis-mac-allister",
    "currentClubId": "liverpool",
    "currentClub": "ليفربول",
    "currentLogo": "/logos/liverpool.png",
    "isPriorityStar": false
  },
  {
    "id": "victor-osimhen",
    "nameAr": "فيكتور أوسيمين",
    "nameEn": "Victor Osimhen",
    "aliases": [
      "أوسيمين",
      "اوسيمين",
      "Osimhen",
      "Victor Osimhen"
    ],
    "nationalityAr": "نيجيريا 🇳🇬",
    "positionAr": "مهاجم",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "lille",
        "year": "2019",
        "fromClub": "ليل",
        "toClub": "نابولي",
        "type": "permanent"
      },
      {
        "clubId": "napoli",
        "year": "2020",
        "fromClub": "نابولي",
        "toClub": "غلطة سراي",
        "type": "loan"
      },
      {
        "clubId": "galatasaray",
        "year": "2024",
        "fromClub": "غلطة سراي",
        "toClub": "غلطة سراي",
        "type": "permanent"
      }
    ],
    "playerId": "victor-osimhen",
    "currentClubId": "galatasaray",
    "currentClub": "غلطة سراي",
    "currentLogo": "/logos/galatasaray.png",
    "isPriorityStar": false
  },
  {
    "id": "bruno-fernandes",
    "nameAr": "برونو فيرنانديز",
    "nameEn": "Bruno Fernandes",
    "aliases": [
      "برونو",
      "فيرنانديز",
      "Bruno Fernandes",
      "Bruno"
    ],
    "nationalityAr": "البرتغال 🇵🇹",
    "positionAr": "صانع ألعاب",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "sporting-cp",
        "year": "2017",
        "fromClub": "سبورتينغ لشبونة",
        "toClub": "مانشستر يونايتد",
        "type": "permanent"
      },
      {
        "clubId": "manchester-united",
        "year": "2020",
        "fromClub": "مانشستر يونايتد",
        "toClub": "مانشستر يونايتد",
        "type": "permanent"
      }
    ],
    "playerId": "bruno-fernandes",
    "currentClubId": "manchester-united",
    "currentClub": "مانشستر يونايتد",
    "currentLogo": "/logos/manchester-united.png",
    "isPriorityStar": false
  },
  {
    "id": "federico-valverde",
    "nameAr": "فيديريكو فالفيردي",
    "nameEn": "Federico Valverde",
    "aliases": [
      "فالفيردي",
      "الصقر",
      "فيدي",
      "فيدي فالفيردي",
      "Valverde",
      "Fede Valverde"
    ],
    "nationalityAr": "أوروغواي 🇺🇾",
    "positionAr": "وسط ميدان",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "alaves",
        "year": "2017",
        "fromClub": "ديبورتيفو لاكورونيا",
        "toClub": "ريال مدريد",
        "type": "loan"
      },
      {
        "clubId": "real-madrid",
        "year": "2018",
        "fromClub": "ريال مدريد",
        "toClub": "ريال مدريد",
        "type": "permanent"
      }
    ],
    "playerId": "federico-valverde",
    "currentClubId": "real-madrid",
    "currentClub": "ريال مدريد",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "bernardo-silva",
    "nameAr": "برناردو سيلفا",
    "nameEn": "Bernardo Silva",
    "aliases": [
      "برناردو",
      "سيلفا",
      "الساحر البرتغالي",
      "Bernardo Silva",
      "Bernardo"
    ],
    "nationalityAr": "البرتغال 🇵🇹",
    "positionAr": "صانع ألعاب / وسط",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "benfica",
        "year": "2013",
        "fromClub": "بنفيكا",
        "toClub": "موناكو",
        "type": "permanent"
      },
      {
        "clubId": "monaco",
        "year": "2014",
        "fromClub": "موناكو",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2017",
        "fromClub": "مانشستر سيتي",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      }
    ],
    "playerId": "bernardo-silva",
    "currentClubId": "manchester-city",
    "currentClub": "مانشستر سيتي",
    "currentLogo": "/logos/manchester-city.png",
    "isPriorityStar": false
  },
  {
    "id": "ilkay-gundogan",
    "nameAr": "إيلكاي غوندوغان",
    "nameEn": "İlkay Gündoğan",
    "aliases": [
      "غوندوغان",
      "جوندوجان",
      "ايلكاي",
      "Gundogan",
      "Ilkay Gundogan"
    ],
    "nationalityAr": "ألمانيا 🇩🇪",
    "positionAr": "لاعب وسط",
    "era": "modern",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "borussia-dortmund",
        "year": "2011",
        "fromClub": "بوروسيا دورتموند",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      },
      {
        "clubId": "manchester-city",
        "year": "2016",
        "fromClub": "مانشستر سيتي",
        "toClub": "برشلونة",
        "type": "free_transfer"
      },
      {
        "clubId": "barcelona",
        "year": "2023",
        "fromClub": "برشلونة",
        "toClub": "مانشستر سيتي",
        "type": "free_transfer"
      },
      {
        "clubId": "manchester-city",
        "year": "2024",
        "fromClub": "مانشستر سيتي",
        "toClub": "مانشستر سيتي",
        "type": "permanent"
      }
    ],
    "playerId": "ilkay-gundogan",
    "currentClubId": "manchester-city",
    "currentClub": "مانشستر سيتي",
    "currentLogo": "/logos/manchester-city.png",
    "isPriorityStar": false
  },
  {
    "id": "ronaldinho",
    "nameAr": "رونالدينيو غاوتشو",
    "nameEn": "Ronaldinho",
    "aliases": [
      "رونالدينيو",
      "الساحر",
      "رونالدينهو",
      "Ronaldinho",
      "R10"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "صانع ألعاب / جناح",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "paris-saint-germain",
        "year": "2001",
        "fromClub": "باريس سان جيرمان",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "2003",
        "fromClub": "برشلونة",
        "toClub": "ميلان",
        "type": "permanent"
      },
      {
        "clubId": "ac-milan",
        "year": "2008",
        "fromClub": "ميلان",
        "toClub": "فلامينغو",
        "type": "permanent"
      }
    ],
    "playerId": "ronaldinho",
    "currentClubId": "ac-milan",
    "currentClub": "فلامينغو",
    "currentLogo": "/logos/ac-milan.png",
    "isPriorityStar": false
  },
  {
    "id": "zinedine-zidane",
    "nameAr": "زين الدين زيدان",
    "nameEn": "Zinedine Zidane",
    "aliases": [
      "زيدان",
      "زيزو",
      "Zidane",
      "Zizou"
    ],
    "nationalityAr": "فرنسا 🇫🇷",
    "positionAr": "صانع ألعاب أسطوري",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "bordeaux",
        "year": "1992",
        "fromClub": "بوردو",
        "toClub": "يوفنتوس",
        "type": "permanent"
      },
      {
        "clubId": "juventus",
        "year": "1996",
        "fromClub": "يوفنتوس",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2001",
        "fromClub": "ريال مدريد",
        "toClub": "اعتزال",
        "type": "permanent"
      }
    ],
    "playerId": "zinedine-zidane",
    "currentClubId": "real-madrid",
    "currentClub": "اعتزال",
    "currentLogo": "/logos/real-madrid.png",
    "isPriorityStar": false
  },
  {
    "id": "ronaldo-nazario",
    "nameAr": "رونالدو نازاريو (الظاهرة)",
    "nameEn": "Ronaldo Nazário",
    "aliases": [
      "الظاهرة رونالدو",
      "الظاهرة",
      "رونالدو البرازيلي",
      "رونالدو داليما",
      "R9",
      "Ronaldo Nazario",
      "El Fenomeno"
    ],
    "nationalityAr": "البرازيل 🇧🇷",
    "positionAr": "مهاجم أسطوري",
    "era": "legend",
    "difficulty": "easy",
    "transfers": [
      {
        "clubId": "psv",
        "year": "1994",
        "fromClub": "آيندهوفن",
        "toClub": "برشلونة",
        "type": "permanent"
      },
      {
        "clubId": "barcelona",
        "year": "1996",
        "fromClub": "برشلونة",
        "toClub": "إنتر ميلان",
        "type": "permanent"
      },
      {
        "clubId": "inter-milan",
        "year": "1997",
        "fromClub": "إنتر ميلان",
        "toClub": "ريال مدريد",
        "type": "permanent"
      },
      {
        "clubId": "real-madrid",
        "year": "2002",
        "fromClub": "ريال مدريد",
        "toClub": "ميلان",
        "type": "permanent"
      },
      {
        "clubId": "ac-milan",
        "year": "2007",
        "fromClub": "ميلان",
        "toClub": "كورينثيانز",
        "type": "permanent"
      }
    ],
    "playerId": "ronaldo-nazario",
    "currentClubId": "ac-milan",
    "currentClub": "كورينثيانز",
    "currentLogo": "/logos/ac-milan.png",
    "isPriorityStar": false
  }
];
