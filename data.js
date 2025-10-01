const characters = [
  {
    name: "Zeus",
    culture: "Yunani",
    description:
      "Penguasa Olympus, dewa langit dan petir yang mengguncang dunia dengan kilat perkasa.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/zeus.png",
    unlocked: false
  },
  {
    name: "Odin",
    culture: "Nordik",
    description:
      "Bapak Segala Asgard, mata bijak yang menembus takdir seluruh alam.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/odin.png",
    unlocked: false
  },
  {
    name: "Shiva",
    culture: "Hindu",
    description:
      "Sang Penghancur kosmik, menari di atas kehancuran untuk mencipta ulang semesta.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/shiva.png",
    unlocked: false
  },
  {
    name: "Vishnu",
    culture: "Hindu",
    description:
      "Sang Pemelihara semesta, penjaga keseimbangan kosmik tanpa akhir.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/vishnu.png",
    unlocked: true
  },
  {
    name: "Amaterasu",
    culture: "Jepang",
    description:
      "Dewi matahari Shinto, sinarnya menyingkirkan kegelapan dan menyalakan semangat.",
    tier: "SSR",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ssr/amaterasu.png",
    unlocked: true
  },
  {
    name: "Tiamat",
    culture: "Akkadia (Babilonia)",
    description:
      "Naga purba Mesopotamia, Samudra Primal yang melahirkan kosmos dan ancaman yang membara.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/tiamat.png",
    unlocked: false
  },
  {
    name: "Chaos",
    culture: "Yunani",
    description:
      "Kekosongan abadi Yunani, kehampaan tak berbatas yang darinya semua semesta lahir.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/chaos.png",
    unlocked: false
  },
  {
    name: "Cthulhu",
    culture: "Lovecraftian Horror",
    description:
      "Entitas kosmik tidur di dasar samudra, menunggu bangkit membawa kehancuran.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/cthulhu.png",
    unlocked: false
  },
  {
    name: "Nyai Roro Kidul",
    culture: "Jawa/Sunda",
    description: "Ratu Laut Selatan, penguasa ombak dan jiwa yang tersesat.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/nr_kidul.png",
    unlocked: false
  },
  {
    name: "Poseidon",
    culture: "Yunani",
    description:
      "Penguasa samudra, dewa laut dan gempa dengan trisula legendaris.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/poseidon.png",
    unlocked: false
  },
  {
    name: "Hades",
    culture: "Yunani",
    description:
      "Penguasa dunia bawah, pengendali kematian dan jiwa tak terhitung.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/hades.png",
    unlocked: false
  },
  {
    name: "Susanoo",
    culture: "Jepang",
    description: "Dewa badai Jepang, pembawa perang dan penghancur naga.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/susanoo.png",
    unlocked: false
  },
  {
    name: "Anubis",
    culture: "Mesir",
    description:
      "Penjaga Dunia Bawah Mesir, pengawas Timbangan Jiwa dan pemandu arwah.",
    tier: "SS",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/ss/anubis.png",
    unlocked: true
  },
  {
    name: "Ra",
    culture: "Mesir",
    description: "Matahari Mesir, pencipta dan penguasa cahaya abadi.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/ra.png",
    unlocked: false
  },
  {
    name: "Thor",
    culture: "Nordik",
    description: "Dewa petir Nordik, pelindung manusia dengan palu Mjolnir.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/thor.png",
    unlocked: false
  },
  {
    name: "Athena",
    culture: "Yunani",
    description:
      "Dewi kebijaksanaan dan strategi perang, pemimpin para pejuang cerdas.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/athena.png",
    unlocked: true
  },
  {
    name: "Quetzalcoatl",
    culture: "Aztek",
    description:
      "Ular berbulu Aztek, dewa pencipta dan penguasa angin serta hujan.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/quetzalcoatl.png",
    unlocked: false
  },
  {
    name: "Kukulkan",
    culture: "Maya",
    description:
      "Versi Maya dari dewa ular berbulu, pengendali angin dan kesuburan bumi.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/kukulkan.png",
    unlocked: false
  },
  {
    name: "Fenrir",
    culture: "Nordik",
    description:
      "Serigala raksasa Ragnarok, ancaman yang menghantui para dewa.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/fenrir.png",
    unlocked: false
  },
  {
    name: "Garuda",
    culture: "Hindu",
    description: "Burung raksasa suci, Vahana (Tunggangan) Dewa Wisnu yang menembus langit.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/garuda.png",
    unlocked: false
  },
  {
    name: "Izanagi",
    culture: "Jepang",
    description: "Dewa pencipta Shinto, penggali awal dunia dan kehidupan.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/izanagi.png",
    unlocked: false
  },
  {
    name: "Osiris",
    culture: "Mesir",
    description: "Penguasa kematian Mesir, simbol kebangkitan dan keadilan.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/osiris.png",
    unlocked: false
  },
  {
    name: "Set",
    culture: "Mesir",
    description: "Dewa kekacauan dan gurun, pembawa badai dan konflik.",
    tier: "S",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/s/set.png",
    unlocked: false
  },
  {
    name: "Freyja",
    culture: "Nordik",
    description:
      "Dewi cinta dan sihir, penggoda sekaligus pelindung para pejuang.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/freyja.png",
    unlocked: false
  },
  {
    name: "Ganesha",
    culture: "Hindu",
    description: "Dewa kebijaksanaan berkepala gajah, penghalang rintangan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/ganesha.png",
    unlocked: false
  },
  {
    name: "Morrigan",
    culture: "Keltik",
    description: "Dewi perang dan nasib, pengendali takdir peperangan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/morrigan.png",
    unlocked: true
  },
  {
    name: "Tezcatlipoca",
    culture: "Aztek",
    description: "Dewa malam dan takdir, pengintai misteri kosmik.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/tezcatlipoca.png",
    unlocked: false
  },
  {
    name: "Inti",
    culture: "Inka",
    description:
      "Dewa matahari utama, menyinari kerajaan Inka dengan kekuatan cahaya.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/inti.png",
    unlocked: false
  },
  {
    name: "Ixchel",
    culture: "Maya",
    description: "Dewi bulan dan kesuburan, pengatur ritme alam dan kehidupan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/ixchel.png",
    unlocked: false
  },
  {
    name: "Barong",
    culture: "Indonesia (Bali)",
    description: "Penjaga Bali, simbol kebaikan yang menentang kegelapan.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/barong.png",
    unlocked: false
  },
  {
    name: "Dewi Sri",
    culture: "Indonesia (Jawa)",
    description: "Dewi padi dan kesuburan, penguasa panen dan kemakmuran.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/dewi_sri.png",
    unlocked: false
  },
  {
    name: "Tlazolteotl",
    culture: "Aztek",
    description: "Dewi pembersih dosa, penguasa rahasia gelap manusia.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/tlazolteotl.png",
    unlocked: false
  },
  {
    name: "Ammit",
    culture: "Mesir",
    description: "Pemakan jiwa orang berdosa, ancaman bagi mereka yang lalim.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/ammit.png",
    unlocked: false
  },
  {
    name: "Hachiman",
    culture: "Jepang",
    description:
      "Dewa perang dan pelindung samurai, pengendali keberanian dan taktik.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/hachiman.png",
    unlocked: false
  },
  {
    name: "Bai Ze",
    culture: "Tiongkok",
    description: "Makhluk bijak ensiklopedia roh, pengetahuan tanpa batas.",
    tier: "A",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/a/bai_ze.png",
    unlocked: false
  },
  {
    name: "Cerberus",
    culture: "Yunani",
    description: "Anjing penjaga gerbang Hades, penjaga jiwa-jiwa terkutuk.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/cerberus.png",
    unlocked: false
  },
  {
    name: "Hydra",
    culture: "Yunani",
    description:
      "Ular banyak kepala yang sulit ditundukkan, simbol kekuatan regeneratif.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/hydra.png",
    unlocked: true
  },
  {
    name: "Minotaur",
    culture: "Yunani",
    description: "Monster manusia berkepala banteng, penguasa labirin gelap.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/minotaur.png",
    unlocked: false
  },
  {
    name: "Sphinx",
    culture: "Mesir",
    description: "Penjaga teka-teki, penguji jiwa dengan misteri abadi.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/sphinx.png",
    unlocked: false
  },
  {
    name: "Chimera",
    culture: "Yunani",
    description:
      "Monster singa-kambing-ular, ancaman mengerikan bagi petualang.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/chimera.png",
    unlocked: false
  },
  {
    name: "Kraken",
    culture: "Nordik",
    description:
      "Monster laut raksasa, pengguncang samudra yang menelan kapal.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/kraken.png",
    unlocked: false
  },
  {
    name: "Thunderbird",
    culture: "Amerika Utara",
    description: "Burung raksasa petir, pencipta badai dan kehancuran.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/thunderbird.png",
    unlocked: false
  },
  {
    name: "Roc",
    culture: "Arab-Persia",
    description:
      "Burung raksasa legenda, pengendali angin dan kekuatan langit.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/roc.png",
    unlocked: false
  },
  {
    name: "Griffin",
    culture: "Eropa",
    description: "Singa berkepala elang, simbol kekuatan dan kewaspadaan.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/griffin.png",
    unlocked: false
  },
  {
    name: "Basilisk",
    culture: "Eropa",
    description: "Raja ular mematikan, tatapan yang membeku lawan.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/basilisk.png",
    unlocked: false
  },
  {
    name: "Cyclops",
    culture: "Yunani",
    description:
      "Raksasa bermata satu, penggali tambang dan kekuatan luar biasa.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/cyclops.png",
    unlocked: false
  },
  {
    name: "Ifrit",
    culture: "Arab",
    description: "Jin api kuat dan berbahaya, pembawa kobaran neraka.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/ifrit.png",
    unlocked: true
  },
  {
    name: "Yeti",
    culture: "Himalaya",
    description: "Manusia salju legenda, penguasa gunung es dan salju.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/yeti.png",
    unlocked: false
  },
  {
    name: "Naga Eropa",
    culture: "Eropa",
    description: "Dragon klasik, penguasa langit dan legenda kekuatan.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/naga_eropa.png",
    unlocked: false
  },
  {
    name: "Rangda",
    culture: "Indonesia (Bali)",
    description: "Ratu sihir pemakan manusia, pengacau malam dan teror.",
    tier: "B",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/b/rangda.png",
    unlocked: false
  },
  {
    name: "Kitsune",
    culture: "Jepang",
    description: "Rubah berekor sembilan, penipu licik yang memanipulasi jiwa.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/kitsune.png",
    unlocked: false
  },
  {
    name: "Kappa",
    culture: "Jepang",
    description: "Monster sungai nakal, pengintai manusia di tepi air.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/kappa.png",
    unlocked: false
  },
  {
    name: "Nekomata",
    culture: "Jepang",
    description: "Kucing berekor dua, pengendali roh dan ilusi.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/nekomata.png",
    unlocked: false
  },
  {
    name: "Draugr",
    culture: "Nordik",
    description: "Prajurit mayat hidup, penjaga makam kuno.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/draugr.png",
    unlocked: false
  },
  {
    name: "Huldra",
    culture: "Nordik",
    description:
      "Wanita hutan berekor sapi, penggoda sekaligus pemburu manusia.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/huldra.png",
    unlocked: false
  },
  {
    name: "Valkyrie",
    culture: "Nordik",
    description:
      "Pembawa jiwa pejuang, penentu siapa yang layak surga pertempuran.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/valkyrie.png",
    unlocked: false
  },
  {
    name: "Charybdis",
    culture: "Yunani",
    description: "Pusaran laut raksasa, menelan kapal tanpa ampun.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/charybdis.png",
    unlocked: false
  },
  {
    name: "Pegasus",
    culture: "Yunani",
    description: "Kuda bersayap, lambang kecepatan dan kebebasan langit.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/pegasus.png",
    unlocked: false
  },
  {
    name: "Harpy",
    culture: "Yunani",
    description: "Wanita bersayap penculik, pembawa malapetaka dari langit.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/harpy.png",
    unlocked: false
  },
  {
    name: "Jiangshi",
    culture: "Tiongkok",
    description: "Mayat hidup melompat, pemburu jiwa di malam hari.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/jiangshi.png",
    unlocked: false
  },
  {
    name: "Qilin",
    culture: "Tiongkok",
    description: "Makhluk pembawa keberuntungan, penjaga keseimbangan dunia.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/qilin.png",
    unlocked: false
  },
  {
    name: "Wendigo",
    culture: "Amerika Utara",
    description: "Roh kanibal kelaparan, penjelajah hutan gelap.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/wendigo.png",
    unlocked: false
  },
  {
    name: "Selkie",
    culture: "Skotlandia",
    description:
      "Wanita laut shapeshifter, penyelamat nelayan atau pembawa malapetaka.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/selkie.png",
    unlocked: false
  },
  {
    name: "Encantado",
    culture: "Brasil",
    description: "Lumba-lumba shapeshifter, perayu yang muncul dari sungai.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/encantado.png",
    unlocked: false
  },
  {
    name: "Polong",
    culture: "Melayu",
    description: "Roh kecil pemujaan darah, pengganggu rahasia manusia.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/polong.png",
    unlocked: false
  },
  {
    name: "Banaspati",
    culture: "Jawa",
    description: "Api gaib berwujud roh, penebar ketakutan malam hari.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/banaspati.png",
    unlocked: true
  },
  {
    name: "Aswang",
    culture: "Filipina",
    description: "Monster penghisap darah, pengintai malam di desa.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/aswang.png",
    unlocked: false
  },
  {
    name: "La Llorona",
    culture: "Meksiko",
    description: "Hantu wanita menangis, pencari anak-anak hilang.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/la_llorona.png",
    unlocked: false
  },
  {
    name: "Phi Pop",
    culture: "Thailand",
    description: "Roh pemakan organ, pengintai mayat di malam hari.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/phi_pop.png",
    unlocked: false
  },
  {
    name: "Golem",
    culture: "Yahudi",
    description: "Makhluk tanah liat hidup, pelindung komunitas dari bahaya.",
    tier: "C",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/c/golem.png",
    unlocked: false
  },
  {
    name: "Kuntilanak",
    culture: "Indonesia",
    description: "Hantu wanita baju putih panjang, rambut panjang menakutkan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kuntilanak.png",
    unlocked: false
  },
  {
    name: "Genderuwo",
    culture: "Indonesia",
    description: "Raksasa berbulu hutan, penguasa malam dan kegelapan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/genderuwo.png",
    unlocked: false
  },
  {
    name: "Palasik",
    culture: "Indonesia",
    description:
      "Roh kepala terbang pemakan janin, penyebar teror dan malapetaka di malam hari.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/palasik.png",
    unlocked: false
  },
  {
    name: "Penanggalan",
    culture: "Melayu",
    description:
      "Roh wanita terbang dengan organ tubuh menggantung, pembawa penyakit.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/penanggalan.png",
    unlocked: false
  },
  {
    name: "Jenglot",
    culture: "Indonesia",
    description: "Jasad mistis kecil, menghisap energi kehidupan manusia.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/jenglot.png",
    unlocked: false
  },
  {
    name: "Goblin",
    culture: "Eropa",
    description:
      "Makhluk kerdil pembawa sial, penggoda manusia dengan janji palsu dan pembuat onar di kegelapan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/goblin.png",
    unlocked: false
  },
  {
    name: "Amaru",
    culture: "Peru",
    description: "Dragon ular kosmik, penguasa langit dan bumi.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/amaru.png",
    unlocked: false
  },
  {
    name: "Bakunawa",
    culture: "Filipina",
    description: "Naga laut menelan bulan, ancaman gelap dari laut dalam.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/bakunawa.png",
    unlocked: false
  },
  {
    name: "Baku",
    culture: "Jepang",
    description: "Roh pemakan mimpi buruk, pelindung tidur manusia.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/baku.png",
    unlocked: false
  },
  {
    name: "Basan",
    culture: "Jepang",
    description: "Ayam api legendaris, membakar musuh dengan semburan api.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/basan.png",
    unlocked: false
  },
  {
    name: "Camazotz",
    culture: "Aztek",
    description: "Manusia-kelawar dewa malam, pengintai kegelapan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/camazotz.png",
    unlocked: false
  },
  {
    name: "Cernunnos",
    culture: "Keltik",
    description: "Dewa rusa hutan, pengendali alam liar.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/cernunnos.png",
    unlocked: false
  },
  {
    name: "Chullachaqui",
    culture: "Peru",
    description: "Roh hutan dengan kaki satu, penipu pejalan hutan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/chullachaqui.png",
    unlocked: false
  },
  {
    name: "Cu Sith",
    culture: "Skotlandia",
    description: "Rubah besar hijau legendaris, penjaga hutan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/cu_sith.png",
    unlocked: false
  },
  {
    name: "Dakuwaqa",
    culture: "Fiji",
    description: "Naga laut pelindung pesisir, penjaga nelayan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/dakuwaqa.png",
    unlocked: false
  },
  {
    name: "Dziwożona",
    culture: "Polandia",
    description: "Roh wanita hutan, penyesat yang menarik manusia ke dalam bahaya.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/dziwozona.png",
    unlocked: false
  },
  {
    name: "Fenja & Menja",
    culture: "Nordik",
    description: "Raksasa penggiling, pembawa kekuatan dan bencana.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/fenja_menja.png",
    unlocked: false
  },
  {
    name: "Ghillie Dhu",
    culture: "Skotlandia",
    description: "Roh hutan kecil berbulu, pelindung pepohonan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/ghillie_dhu.png",
    unlocked: false
  },
  {
    name: "Hatuibwari",
    culture: "Melanesia (Solomon)",
    description: "Naga berkepala banyak, penjaga harta dan rimba.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/hatuibwari.png",
    unlocked: false
  },
  {
    name: "Hraesvelgr",
    culture: "Nordik",
    description: "Raksasa burung pemakan angin, pengendali badai langit.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/hraesvelgr.png",
    unlocked: false
  },
  {
    name: "Iku-Turso",
    culture: "Finlandia",
    description: "Monster laut, penguasa perairan gelap.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/iku_turso.png",
    unlocked: true
  },
  {
    name: "Jormungandr",
    culture: "Nordik",
    description: "Ular dunia, pengikat samudra dan bumi.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/jormungandr.png",
    unlocked: false
  },
  {
    name: "Kamaitachi",
    culture: "Jepang",
    description: "Weasel pemotong angin, pembawa luka misterius.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kamaitachi.png",
    unlocked: false
  },
  {
    name: "Kishi",
    culture: "Angola",
    description: "Manusia-hewan dua wajah, predator air dan darat.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kishi.png",
    unlocked: false
  },
  {
    name: "Makara",
    culture: "Hindu",
    description: "Monster laut hibrida, penjaga sungai dan laut.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/makara.png",
    unlocked: false
  },
  {
    name: "Manticore",
    culture: "Persia",
    description: "Lion-man-monster ekor duri, pemburu yang mematikan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/manticore.png",
    unlocked: false
  },
  {
    name: "Kelpie",
    culture: "Skotlandia",
    description:
      "Kuda air shapeshifter Skotlandia, memikat dan menarik korbannya ke dasar danau.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/kelpie.png",
    unlocked: false
  },
  {
    name: "Oshun",
    culture: "Nigeria",
    description: "Dewi sungai dan cinta, pelindung air dan kesuburan.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/oshun.png",
    unlocked: false
  },
  {
    name: "Piasa",
    culture: "Amerika Utara",
    description: "Naga berkepala elang, penjaga langit dan legenda suku.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/piasa.png",
    unlocked: false
  },
  {
    name: "Simurgh",
    culture: "Persia",
    description:
      "Burung besar bijak, lambang kebijaksanaan dan pelindung dunia.",
    tier: "D",
    file: "https://raw.githubusercontent.com/anandadavidsaputra/mythclaw-characters/main/d/simurgh.png",
    unlocked: false
  },
];
