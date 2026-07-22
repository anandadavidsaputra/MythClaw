const characters = [
  {
    name: "Zeus",
    culture: "Yunani",
    description:
      "Penguasa Olympus, dewa langit dan petir yang mengguncang dunia dengan kilat perkasa.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/zeus.webp",
    unlocked: false
  },
  {
    name: "Odin",
    culture: "Nordik",
    description:
      "Bapak Segala Asgard, mata bijak yang menembus takdir seluruh alam.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/odin.webp",
    unlocked: false
  },
  {
    name: "Shiva",
    culture: "Hindu",
    description:
      "Sang Penghancur kosmik, menari di atas kehancuran untuk mencipta ulang semesta.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/shiva.webp",
    unlocked: false
  },
  {
    name: "Vishnu",
    culture: "Hindu",
    description:
      "Sang Pemelihara semesta, penjaga keseimbangan kosmik tanpa akhir.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/vishnu.webp",
    unlocked: false
  },
  {
    name: "Amaterasu",
    culture: "Jepang",
    description:
      "Dewi matahari Shinto, sinarnya menyingkirkan kegelapan dan menyalakan semangat.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/amaterasu.webp",
    unlocked: false
  },
  {
    name: "Tiamat",
    culture: "Akkadia (Babilonia)",
    description:
      "Naga purba Mesopotamia, Samudra Primal yang melahirkan kosmos dan ancaman yang membara.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/tiamat.webp",
    unlocked: false
  },
  {
    name: "Chaos",
    culture: "Yunani",
    description:
      "Kekosongan abadi Yunani, kehampaan tak berbatas yang darinya semua semesta lahir.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/chaos.webp",
    unlocked: false
  },
  {
    name: "Cthulhu",
    culture: "Lovecraftian Horror",
    description:
      "Entitas kosmik tidur di dasar samudra, menunggu bangkit membawa kehancuran.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/cthulhu.webp",
    unlocked: false
  },
  {
    name: "Nyai Roro Kidul",
    culture: "Jawa/Sunda",
    description: "Ratu Laut Selatan, penguasa ombak dan jiwa yang tersesat.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/nr_kidul.webp",
    unlocked: false
  },
  {
    name: "Poseidon",
    culture: "Yunani",
    description:
      "Penguasa samudra, dewa laut dan gempa dengan trisula legendaris.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/poseidon.webp",
    unlocked: false
  },
  {
    name: "Hades",
    culture: "Yunani",
    description:
      "Penguasa dunia bawah, pengendali kematian dan jiwa tak terhitung.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/hades.webp",
    unlocked: false
  },
  {
    name: "Susanoo",
    culture: "Jepang",
    description: "Dewa badai Jepang, pembawa perang dan penghancur naga.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/susanoo.webp",
    unlocked: false
  },
  {
    name: "Anubis",
    culture: "Mesir",
    description:
      "Penjaga Dunia Bawah Mesir, pengawas Timbangan Jiwa dan pemandu arwah.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/anubis.webp",
    unlocked: false
  },
  {
    name: "Ra",
    culture: "Mesir",
    description: "Matahari Mesir, pencipta dan penguasa cahaya abadi.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/ra.webp",
    unlocked: false
  },
  {
    name: "Thor",
    culture: "Nordik",
    description: "Dewa petir Nordik, pelindung manusia dengan palu Mjolnir.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/thor.webp",
    unlocked: false
  },
  {
    name: "Athena",
    culture: "Yunani",
    description:
      "Dewi kebijaksanaan dan strategi perang, pemimpin para pejuang cerdas.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/athena.webp",
    unlocked: false
  },
  {
    name: "Quetzalcoatl",
    culture: "Aztek",
    description:
      "Ular berbulu Aztek, dewa pencipta dan penguasa angin serta hujan.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/quetzalcoatl.webp",
    unlocked: false
  },
  {
    name: "Kukulkan",
    culture: "Maya",
    description:
      "Versi Maya dari dewa ular berbulu, pengendali angin dan kesuburan bumi.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/kukulkan.webp",
    unlocked: false
  },
  {
    name: "Fenrir",
    culture: "Nordik",
    description:
      "Serigala raksasa Ragnarok, ancaman yang menghantui para dewa.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/fenrir.webp",
    unlocked: false
  },
  {
    name: "Garuda",
    culture: "Hindu",
    description: "Burung raksasa suci, Vahana (Tunggangan) Dewa Wisnu yang menembus langit.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/garuda.webp",
    unlocked: false
  },
  {
    name: "Izanagi",
    culture: "Jepang",
    description: "Dewa pencipta Shinto, penggali awal dunia dan kehidupan.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/izanagi.webp",
    unlocked: false
  },
  {
    name: "Osiris",
    culture: "Mesir",
    description: "Penguasa kematian Mesir, simbol kebangkitan dan keadilan.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/osiris.webp",
    unlocked: false
  },
  {
    name: "Set",
    culture: "Mesir",
    description: "Dewa kekacauan dan gurun, pembawa badai dan konflik.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/set.webp",
    unlocked: false
  },
  {
    name: "Freyja",
    culture: "Nordik",
    description:
      "Dewi cinta dan sihir, penggoda sekaligus pelindung para pejuang.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/freyja.webp",
    unlocked: false
  },
  {
    name: "Ganesha",
    culture: "Hindu",
    description: "Dewa kebijaksanaan berkepala gajah, penghalang rintangan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/ganesha.webp",
    unlocked: false
  },
  {
    name: "Morrigan",
    culture: "Keltik",
    description: "Dewi perang dan nasib, pengendali takdir peperangan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/morrigan.webp",
    unlocked: false
  },
  {
    name: "Tezcatlipoca",
    culture: "Aztek",
    description: "Dewa malam dan takdir, pengintai misteri kosmik.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/tezcatlipoca.webp",
    unlocked: false
  },
  {
    name: "Inti",
    culture: "Inka",
    description:
      "Dewa matahari utama, menyinari kerajaan Inka dengan kekuatan cahaya.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/inti.webp",
    unlocked: false
  },
  {
    name: "Ixchel",
    culture: "Maya",
    description: "Dewi bulan dan kesuburan, pengatur ritme alam dan kehidupan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/ixchel.webp",
    unlocked: false
  },
  {
    name: "Barong",
    culture: "Indonesia (Bali)",
    description: "Penjaga Bali, simbol kebaikan yang menentang kegelapan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/barong.webp",
    unlocked: false
  },
  {
    name: "Dewi Sri",
    culture: "Indonesia (Jawa)",
    description: "Dewi padi dan kesuburan, penguasa panen dan kemakmuran.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/dewi_sri.webp",
    unlocked: false
  },
  {
    name: "Tlazolteotl",
    culture: "Aztek",
    description: "Dewi pembersih dosa, penguasa rahasia gelap manusia.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/tlazolteotl.webp",
    unlocked: false
  },
  {
    name: "Ammit",
    culture: "Mesir",
    description: "Pemakan jiwa orang berdosa, ancaman bagi mereka yang lalim.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/ammit.webp",
    unlocked: false
  },
  {
    name: "Hachiman",
    culture: "Jepang",
    description:
      "Dewa perang dan pelindung samurai, pengendali keberanian dan taktik.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/hachiman.webp",
    unlocked: false
  },
  {
    name: "Bai Ze",
    culture: "Tiongkok",
    description: "Makhluk bijak ensiklopedia roh, pengetahuan tanpa batas.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/bai_ze.webp",
    unlocked: false
  },
  {
    name: "Cerberus",
    culture: "Yunani",
    description: "Anjing penjaga gerbang Hades, penjaga jiwa-jiwa terkutuk.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/cerberus.webp",
    unlocked: false
  },
  {
    name: "Hydra",
    culture: "Yunani",
    description:
      "Ular banyak kepala yang sulit ditundukkan, simbol kekuatan regeneratif.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/hydra.webp",
    unlocked: false
  },
  {
    name: "Minotaur",
    culture: "Yunani",
    description: "Monster manusia berkepala banteng, penguasa labirin gelap.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/minotaur.webp",
    unlocked: false
  },
  {
    name: "Sphinx",
    culture: "Mesir",
    description: "Penjaga teka-teki, penguji jiwa dengan misteri abadi.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/sphinx.webp",
    unlocked: false
  },
  {
    name: "Chimera",
    culture: "Yunani",
    description:
      "Monster singa-kambing-ular, ancaman mengerikan bagi petualang.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/chimera.webp",
    unlocked: false
  },
  {
    name: "Kraken",
    culture: "Nordik",
    description:
      "Monster laut raksasa, pengguncang samudra yang menelan kapal.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/kraken.webp",
    unlocked: false
  },
  {
    name: "Thunderbird",
    culture: "Amerika Utara",
    description: "Burung raksasa petir, pencipta badai dan kehancuran.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/thunderbird.webp",
    unlocked: false
  },
  {
    name: "Roc",
    culture: "Arab-Persia",
    description:
      "Burung raksasa legenda, pengendali angin dan kekuatan langit.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/roc.webp",
    unlocked: false
  },
  {
    name: "Griffin",
    culture: "Eropa",
    description: "Singa berkepala elang, simbol kekuatan dan kewaspadaan.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/griffin.webp",
    unlocked: false
  },
  {
    name: "Basilisk",
    culture: "Eropa",
    description: "Raja ular mematikan, tatapan yang membeku lawan.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/basilisk.webp",
    unlocked: false
  },
  {
    name: "Cyclops",
    culture: "Yunani",
    description:
      "Raksasa bermata satu, penggali tambang dan kekuatan luar biasa.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/cyclops.webp",
    unlocked: false
  },
  {
    name: "Ifrit",
    culture: "Arab",
    description: "Jin api kuat dan berbahaya, pembawa kobaran neraka.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/ifrit.webp",
    unlocked: false
  },
  {
    name: "Yeti",
    culture: "Himalaya",
    description: "Manusia salju legenda, penguasa gunung es dan salju.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/yeti.webp",
    unlocked: false
  },
  {
    name: "Naga Eropa",
    culture: "Eropa",
    description: "Dragon klasik, penguasa langit dan legenda kekuatan.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/naga_eropa.webp",
    unlocked: false
  },
  {
    name: "Rangda",
    culture: "Indonesia (Bali)",
    description: "Ratu sihir pemakan manusia, pengacau malam dan teror.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/rangda.webp",
    unlocked: false
  },
  {
    name: "Kitsune",
    culture: "Jepang",
    description: "Rubah berekor sembilan, penipu licik yang memanipulasi jiwa.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/kitsune.webp",
    unlocked: false
  },
  {
    name: "Kappa",
    culture: "Jepang",
    description: "Monster sungai nakal, pengintai manusia di tepi air.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/kappa.webp",
    unlocked: false
  },
  {
    name: "Nekomata",
    culture: "Jepang",
    description: "Kucing berekor dua, pengendali roh dan ilusi.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/nekomata.webp",
    unlocked: false
  },
  {
    name: "Draugr",
    culture: "Nordik",
    description: "Prajurit mayat hidup, penjaga makam kuno.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/draugr.webp",
    unlocked: false
  },
  {
    name: "Huldra",
    culture: "Nordik",
    description:
      "Wanita hutan berekor sapi, penggoda sekaligus pemburu manusia.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/huldra.webp",
    unlocked: false
  },
  {
    name: "Valkyrie",
    culture: "Nordik",
    description:
      "Pembawa jiwa pejuang, penentu siapa yang layak surga pertempuran.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/valkyrie.webp",
    unlocked: false
  },
  {
    name: "Charybdis",
    culture: "Yunani",
    description: "Pusaran laut raksasa, menelan kapal tanpa ampun.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/charybdis.webp",
    unlocked: false
  },
  {
    name: "Pegasus",
    culture: "Yunani",
    description: "Kuda bersayap, lambang kecepatan dan kebebasan langit.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/pegasus.webp",
    unlocked: false
  },
  {
    name: "Harpy",
    culture: "Yunani",
    description: "Wanita bersayap penculik, pembawa malapetaka dari langit.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/harpy.webp",
    unlocked: false
  },
  {
    name: "Jiangshi",
    culture: "Tiongkok",
    description: "Mayat hidup melompat, pemburu jiwa di malam hari.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/jiangshi.webp",
    unlocked: false
  },
  {
    name: "Qilin",
    culture: "Tiongkok",
    description: "Makhluk pembawa keberuntungan, penjaga keseimbangan dunia.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/qilin.webp",
    unlocked: false
  },
  {
    name: "Wendigo",
    culture: "Amerika Utara",
    description: "Roh kanibal kelaparan, penjelajah hutan gelap.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/wendigo.webp",
    unlocked: false
  },
  {
    name: "Selkie",
    culture: "Skotlandia",
    description:
      "Wanita laut shapeshifter, penyelamat nelayan atau pembawa malapetaka.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/selkie.webp",
    unlocked: false
  },
  {
    name: "Encantado",
    culture: "Brasil",
    description: "Lumba-lumba shapeshifter, perayu yang muncul dari sungai.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/encantado.webp",
    unlocked: false
  },
  {
    name: "Polong",
    culture: "Melayu",
    description: "Roh kecil pemujaan darah, pengganggu rahasia manusia.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/polong.webp",
    unlocked: false
  },
  {
    name: "Banaspati",
    culture: "Jawa",
    description: "Api gaib berwujud roh, penebar ketakutan malam hari.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/banaspati.webp",
    unlocked: false
  },
  {
    name: "Aswang",
    culture: "Filipina",
    description: "Monster penghisap darah, pengintai malam di desa.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/aswang.webp",
    unlocked: false
  },
  {
    name: "La Llorona",
    culture: "Meksiko",
    description: "Hantu wanita menangis, pencari anak-anak hilang.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/la_llorona.webp",
    unlocked: false
  },
  {
    name: "Phi Pop",
    culture: "Thailand",
    description: "Roh pemakan organ, pengintai mayat di malam hari.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/phi_pop.webp",
    unlocked: false
  },
  {
    name: "Golem",
    culture: "Yahudi",
    description: "Makhluk tanah liat hidup, pelindung komunitas dari bahaya.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/golem.webp",
    unlocked: false
  },
  {
    name: "Kuntilanak",
    culture: "Indonesia",
    description: "Hantu wanita baju putih panjang, rambut panjang menakutkan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kuntilanak.webp",
    unlocked: false
  },
  {
    name: "Genderuwo",
    culture: "Indonesia",
    description: "Raksasa berbulu hutan, penguasa malam dan kegelapan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/genderuwo.webp",
    unlocked: false
  },
  {
    name: "Palasik",
    culture: "Indonesia",
    description:
      "Roh kepala terbang pemakan janin, penyebar teror dan malapetaka di malam hari.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/palasik.webp",
    unlocked: false
  },
  {
    name: "Penanggalan",
    culture: "Melayu",
    description:
      "Roh wanita terbang dengan organ tubuh menggantung, pembawa penyakit.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/penanggalan.webp",
    unlocked: false
  },
  {
    name: "Jenglot",
    culture: "Indonesia",
    description: "Jasad mistis kecil, menghisap energi kehidupan manusia.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/jenglot.webp",
    unlocked: false
  },
  {
    name: "Goblin",
    culture: "Eropa",
    description:
      "Makhluk kerdil pembawa sial, penggoda manusia dengan janji palsu dan pembuat onar di kegelapan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/goblin.webp",
    unlocked: false
  },
  {
    name: "Amaru",
    culture: "Peru",
    description: "Dragon ular kosmik, penguasa langit dan bumi.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/amaru.webp",
    unlocked: false
  },
  {
    name: "Bakunawa",
    culture: "Filipina",
    description: "Naga laut menelan bulan, ancaman gelap dari laut dalam.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/bakunawa.webp",
    unlocked: false
  },
  {
    name: "Baku",
    culture: "Jepang",
    description: "Roh pemakan mimpi buruk, pelindung tidur manusia.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/baku.webp",
    unlocked: false
  },
  {
    name: "Basan",
    culture: "Jepang",
    description: "Ayam api legendaris, membakar musuh dengan semburan api.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/basan.webp",
    unlocked: false
  },
  {
    name: "Camazotz",
    culture: "Aztek",
    description: "Manusia-kelawar dewa malam, pengintai kegelapan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/camazotz.webp",
    unlocked: false
  },
  {
    name: "Cernunnos",
    culture: "Keltik",
    description: "Dewa rusa hutan, pengendali alam liar.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/cernunnos.webp",
    unlocked: false
  },
  {
    name: "Chullachaqui",
    culture: "Peru",
    description: "Roh hutan dengan kaki satu, penipu pejalan hutan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/chullachaqui.webp",
    unlocked: false
  },
  {
    name: "Cu Sith",
    culture: "Skotlandia",
    description: "Rubah besar hijau legendaris, penjaga hutan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/cu_sith.webp",
    unlocked: false
  },
  {
    name: "Dakuwaqa",
    culture: "Fiji",
    description: "Naga laut pelindung pesisir, penjaga nelayan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/dakuwaqa.webp",
    unlocked: false
  },
  {
    name: "Dziwożona",
    culture: "Polandia",
    description: "Roh wanita hutan, penyesat yang menarik manusia ke dalam bahaya.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/dziwozona.webp",
    unlocked: false
  },
  {
    name: "Fenja & Menja",
    culture: "Nordik",
    description: "Raksasa penggiling, pembawa kekuatan dan bencana.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/fenja_menja.webp",
    unlocked: false
  },
  {
    name: "Ghillie Dhu",
    culture: "Skotlandia",
    description: "Roh hutan kecil berbulu, pelindung pepohonan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/ghillie_dhu.webp",
    unlocked: false
  },
  {
    name: "Hatuibwari",
    culture: "Melanesia (Solomon)",
    description: "Naga berkepala banyak, penjaga harta dan rimba.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/hatuibwari.webp",
    unlocked: false
  },
  {
    name: "Hraesvelgr",
    culture: "Nordik",
    description: "Raksasa burung pemakan angin, pengendali badai langit.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/hraesvelgr.webp",
    unlocked: false
  },
  {
    name: "Iku-Turso",
    culture: "Finlandia",
    description: "Monster laut, penguasa perairan gelap.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/iku_turso.webp",
    unlocked: false
  },
  {
    name: "Jormungandr",
    culture: "Nordik",
    description: "Ular dunia, pengikat samudra dan bumi.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/jormungandr.webp",
    unlocked: false
  },
  {
    name: "Kamaitachi",
    culture: "Jepang",
    description: "Weasel pemotong angin, pembawa luka misterius.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kamaitachi.webp",
    unlocked: false
  },
  {
    name: "Kishi",
    culture: "Angola",
    description: "Manusia-hewan dua wajah, predator air dan darat.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kishi.webp",
    unlocked: false
  },
  {
    name: "Makara",
    culture: "Hindu",
    description: "Monster laut hibrida, penjaga sungai dan laut.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/makara.webp",
    unlocked: false
  },
  {
    name: "Manticore",
    culture: "Persia",
    description: "Lion-man-monster ekor duri, pemburu yang mematikan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/manticore.webp",
    unlocked: false
  },
  {
    name: "Kelpie",
    culture: "Skotlandia",
    description:
      "Kuda air shapeshifter Skotlandia, memikat dan menarik korbannya ke dasar danau.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kelpie.webp",
    unlocked: false
  },
  {
    name: "Oshun",
    culture: "Nigeria",
    description: "Dewi sungai dan cinta, pelindung air dan kesuburan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/oshun.webp",
    unlocked: false
  },
  {
    name: "Piasa",
    culture: "Amerika Utara",
    description: "Naga berkepala elang, penjaga langit dan legenda suku.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/piasa.webp",
    unlocked: false
  },
  {
    name: "Simurgh",
    culture: "Persia",
    description:
      "Burung besar bijak, lambang kebijaksanaan dan pelindung dunia.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/simurgh.webp",
    unlocked: false
  },
];
