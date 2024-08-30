
const productos = [
    {
      nombre: "Tradicional",
      precio: 75,
      imagen: "ramen_01",
      categoriaId: 1,
      id: 1
    },
    {
        nombre: "Chiken",
        precio: 85,
        imagen: "ramen_02",
        categoriaId: 1,
        id: 2
    },
    {
        nombre: "Vegano",
        precio: 85,
        imagen: "ramen_03",
        categoriaId: 1,
        id: 3
    },
    {
        nombre: "Ribu",
        precio: 95,
        imagen: "ramen_04",
        categoriaId: 1,
        id:4
    },
    {
        nombre: "Niku",
        precio: 100,
        imagen: "ramen_05",
        categoriaId: 1,
        id: 5
    },
    {
        nombre: "Sopporo",
        precio: 100,
        imagen: "ramen_06",
        categoriaId: 1,
        id: 6
    },
    {
        nombre: "Chikin",
        precio: 110,
        imagen: "ramen_07",
        categoriaId: 1,
        id: 7
    },
    {
        nombre: "Shio",
        precio: 100,
        imagen: "ramen_08",
        categoriaId: 1,
        id: 8
    },
    {
        nombre: "Ika",
        precio: 125,
        imagen: "ramen_09",
        categoriaId: 1,
        id: 9
    },
    {
        nombre: "Rayito",
        precio: 125,
        imagen: "ramen_10",
        categoriaId: 1,
        id: 10
    },
    {
        nombre: "Daco",
        precio: 155,
        imagen: "ramen_11",
        categoriaId: 1,
        id: 11
    },
    {
        nombre: "Nikkis",
        precio: 140,
        imagen: "ramen_12",
        categoriaId: 1,
        id: 12
    },
    {
        nombre: "Kuro",
        precio: 150,
        imagen: "ramen_13",
        categoriaId: 1,
        id: 13
    },
    {
        nombre: "Haku",
        precio: 170,
        imagen: "ramen_14",
        categoriaId: 1,
        id: 14
    },
    {
        nombre: "Yakisoba",
        precio: 90,
        imagen: "yakisoba_01",
        categoriaId: 2,
        id: 15
    },
    {
        nombre: "Shoya",
        precio: 100,
        imagen: "yakisoba_02",
        categoriaId: 2,
        id: 16
    },
    {
        nombre: "Rayito soba",
        precio: 125,
        imagen: "yakisoba_03",
        categoriaId: 2,
        id: 17
    },
    {
        nombre: "Chizzu soba",
        precio: 125,
        imagen: "yakisoba_04",
        categoriaId: 2,
        id: 18
    },
    {
        nombre: "Bacon soba",
        precio: 105,
        imagen: "yakisoba_05",
        categoriaId: 2,
        id: 19
    },
    {
        nombre: "Vegano",
        precio: 85,
        imagen: "yakisoba_06",
        categoriaId: 2,
        id: 20
    },
    {
        nombre: "Pinky soba",
        precio: 105,
        imagen: "yakisoba_07",
        categoriaId: 2,
        id: 21
    },
    {
        nombre: "Tamago",
        precio: 100,
        imagen: "yakisoba_08",
        categoriaId: 2,
        id: 22
    },
    {
        nombre: "Carbonara",
        precio: 100,
        imagen: "yakisoba_09",
        categoriaId: 2,
        id: 23
    },
    {
        nombre: "Chessake frio de tortuga",
        precio: 60,
        imagen: "postres_01",
        categoriaId: 3,
        id: 24
    },
    {
        nombre: "Chessake frio de zarzamora",
        precio: 60,
        imagen: "postres_02",
        categoriaId: 3
    },
    {
        nombre: "Flan napolitano de queso crema",
        precio: 55,
        imagen: "postres_03",
        categoriaId: 3,
        id: 25
    },
    {
        nombre: "Tiramisu",
        precio: 60,
        imagen: "postres_04",
        categoriaId: 3,
        id: 26
    },
    {
        nombre: "Charola familiar",
        precio: 250,
        imagen: "charola_01",
        categoriaId: 4,
        id: 27
    },
    {
        nombre: "Kumo charola",
        precio: 280,
        imagen: "charola_02",
        categoriaId: 4,
        id: 28
    },
    {
        nombre: "Tokoshuna",
        precio: 250,
        imagen: "charola_03",
        categoriaId: 4,
        id: 29
    },
    {
        nombre: "Supreme",
        precio: 420,
        imagen: "charola_04",
        categoriaId: 4,
        id: 30
    },
    {
        nombre: "Inari",
        precio: 700,
        imagen: "charola_05",
        categoriaId: 4,
        id: 31
    },
    {
        nombre: "Balls",
        precio: 20,
        imagen: "aperitivo_01",
        categoriaId: 5,
        id: 32
    },
    {
        nombre: "Orden de balls",
        precio: 75,
        imagen: "aperitivo_02",
        categoriaId: 5,
        id: 33
    },
    {
        nombre: "Orden de takoyakis",
        precio: 80,
        imagen: "aperitivo_03",
        categoriaId: 5,
        id: 34
    },
    {
        nombre: "Oniguiri",
        precio: 30,
        imagen: "aperitivo_04",
        categoriaId: 5,
        id: 35
    },
    {
        nombre: "Oniguiri empanizado",
        precio: 40,
        imagen: "aperitivo_05",
        categoriaId: 5,
        id: 36
    },
    {
        nombre: "Orden de temari sushi",
        precio: 90,
        imagen: "aperitivo_06",
        categoriaId: 5,
        id: 37
    },
    {
        nombre: "Onigaratzu",
        precio: 65,
        imagen: "aperitivo_07",
        categoriaId: 5,
        id: 38
    },
    {
        nombre: "Okonomiyaki",
        precio: 65,
        imagen: "aperitivo_08",
        categoriaId: 5,
        id: 39
    },
    {
        nombre: "Yakimeshi",
        precio: 60,
        imagen: "aperitivo_09",
        categoriaId: 5,
        id: 40
    },
    {
        nombre: "Kushiagues",
        precio: 20,
        imagen: "aperitivo_10",
        categoriaId: 5,
        id: 41
    },
    {
        nombre: "Agua Horchata (Vaso)",
        precio: 25,
        imagen: "bebida_01",
        categoriaId: 6,
        id: 42
    },
    {
        nombre: "Agua Jamaica (Vaso)",
        precio: 25,
        imagen: "bebida_02",
        categoriaId: 6,
        id: 43
    },
    {
        nombre: "Agua Tamarindo (Vaso)",
        precio: 25,
        imagen: "bebida_03",
        categoriaId: 6,
        id: 44
    },
    {
        nombre: "Agua Horchata (jarra)",
        precio: 25,
        imagen: "bebida_04",
        categoriaId: 6,
        id: 45
    },
    {
        nombre: "Agua Jamaica (jarra)",
        precio: 25,
        imagen: "bebida_05",
        categoriaId: 6,
        id: 46
    },
    
    {
        nombre: "Agua Tamarindo (jarra)",
        precio: 25,
        imagen: "bebida_06",
        categoriaId: 6, 
        id: 47
    },
    {
        nombre: "Oreo",
        precio: 45,
        imagen: "frappes_01",
        categoriaId: 7,
         id: 48
    },
    {
        nombre: "Medias de seda",
        precio: 45,
        imagen: "frappes_02",
        categoriaId: 7,
         id: 49
    },
    {
        nombre: "Cajeta",
        precio: 45,
        imagen: "frappes_03",
        categoriaId: 7,
         id: 50
    },
    {
        nombre: "Kahlua",
        precio: 45,
        imagen: "frappes_04",
        categoriaId: 7,
        id: 51
    },
    {
        nombre: "Rompope",
        precio: 45,
        imagen: "frappes_05",
        categoriaId: 7,
        id: 52
    },
    {
        nombre: "Chocolate",
        precio: 45,
        imagen: "frappes_06",
        categoriaId: 7,
        id: 53
    },
    {
        nombre: "M&N",
        precio: 50,
        imagen: "frappes_07",
        categoriaId: 7,
        id: 54
    },
    {
        nombre: "Chocoreta",
        precio: 50,
        imagen: "frappes_08",
        categoriaId: 7,
        id: 55
    },
    {
       nombre: "Soya",
       precio: 10,
       imagen: "extras_01",
       categoriaId: 8,
        id: 56
    },
    {
        nombre: "Tampico",
        precio: 10,
        imagen: "extras_02",
        categoriaId: 8,
        id: 57
    },
    {
        nombre: "Chiles toreados",
        precio: 15,
        imagen: "extras_03",
        categoriaId: 8,
        id: 58
    },
    {
        nombre: "Sriracha",
        precio: 15,
        imagen: "extras_04",
        categoriaId: 8,
        id: 59
    },
    {
        nombre: "Aderezo de chipotle",
        precio: 10,
        imagen: "extras_05",
        categoriaId: 8,
        id: 60
    },
    {
        nombre: "Teriyaki",
        precio: 10,
        imagen: "extras_06",
        categoriaId: 8,
        id: 61
    },
    {
        nombre: "Empanizado",
        precio: 75,
        imagen: "calientes_01",
        categoriaId: 9,
        id: 62
    },
    {
        nombre: "Empanizado",
        precio: 75,
        imagen: "calientes_01",
        categoriaId: 9,
        id: 63
    },
    {
        nombre: "Mar y tierra",
        precio: 90,
        imagen: "calientes_02",
        categoriaId: 9,
        id: 64
    },
    {
        nombre: "Apachito",
        precio: 90,
        imagen: "calientes_03",
        categoriaId: 9,
        id: 65
    },
    {
        nombre: "Karamaki",
        precio: 85,
        imagen: "calientes_04",
        categoriaId: 9,
        id: 66
    },
    {
        nombre: "Chuky",
        precio: 90,
        imagen: "calientes_05",
        categoriaId: 9,
        id: 67
    },
    {
        nombre: "Acapulco",
        precio: 105,
        imagen: "calientes_06",
        categoriaId: 9,
         id: 68
    },
    {
        nombre: "Pig",
        precio: 90,
        imagen: "calientes_07",
        categoriaId: 9,
        id: 69
    },
    {
        nombre: "Alika",
        precio: 105,
        imagen: "calientes_08",
        categoriaId: 9,
         id: 70
    },
    {
        nombre: "Mexican",
        precio: 100,
        imagen: "calientes_09",
        categoriaId: 9
    },
    {
        nombre: "Quiquin",
        precio: 100,
        imagen: "calientes_10",
        categoriaId: 9,
         id: 71
    },
    {
        nombre: "Spoody",
        precio: 100,
        imagen: "calientes_11",
        categoriaId: 9,
        id: 72
    },
    {
        nombre: "Saru",
        precio: 90,
        imagen: "calientes_12",
        categoriaId: 9,
         id: 73
    },
    {
        nombre: "Bacon",
        precio: 105,
        imagen: "calientes_13",
        categoriaId: 9,
        id: 74
    },
    {
        nombre: "Oppa",
        precio: 105,
        imagen: "calientes_14",
        categoriaId: 9,
        id: 75
    },
    {
        nombre: "Uzz",
        precio: 140,
        imagen: "calientes_15",
        categoriaId: 9,
        id: 76
    },
    {
        nombre: "Tempura",
        precio: 105,
        imagen: "calientes_16",
        categoriaId: 9, 
        id: 77
    },
    {
        nombre: "Kumo",
        precio: 150,
        imagen: "calientes_17",
        categoriaId: 9,
        id:78
    },
    {
        nombre: "León",
        precio: 140,
        imagen: "calientes_18",
        categoriaId: 9,
         id: 79
    },
    {
        nombre: "Trompo",
        precio: 110,
        imagen: "calientes_19",
        categoriaId: 9,
         id: 80
    },
    {
        nombre: "Xalapeño Pepper",
        precio: 110,
        imagen: "calientes_20",
        categoriaId: 9,
        id: 81
    },
    {
        nombre: "Augusto",
        precio: 150,
        imagen: "calientes_21",
        categoriaId: 9,
        id: 82
    },
    {
        nombre: "Metztli",
        precio: 165,
        imagen: "calientes_22",
        categoriaId: 9,
        id: 83
    },
    {
        nombre: "Tradicional",
        precio: 75,
        imagen: "frios_01",
        categoriaId: 10,
         id: 84
    },
    {
        nombre: "Aguacate",
        precio: 75,
        imagen: "frios_02",
        categoriaId: 10,
        id: 85
    },
    {
        nombre: "Platano",
        precio: 75,
        imagen: "frios_03",
        categoriaId: 10,
        id: 86
    },
    {
        nombre: "California maki",
        precio: 70,
        imagen: "frios_04",
        categoriaId: 10,
        id: 87
    },
    {
        nombre: "Atún",
        precio: 85,
        imagen: "frios_05",
        categoriaId: 10,
        id: 88
    },
    {
        nombre: "Laika",
        precio: 95,
        imagen: "frios_06",
        categoriaId: 10,
        id: 89
    },
    {
        nombre: "Momo",
        precio: 105,
        imagen: "frios_07",
        categoriaId: 10,
        id: 90
    },
    {
        nombre: "Mousy",
        precio: 100,
        imagen: "frios_08",
        categoriaId: 10,
        id: 91
    },
    {
        nombre: "Futomaki",
        precio: 90,
        imagen: "frios_09",
        categoriaId: 10,
        id: 92
    },
    {
        nombre: "King",
        precio: 85,
        imagen: "frios_10",
        categoriaId: 10,
        id: 93
    },
    {
        nombre: "Amargadita",
        precio: 90,
        imagen: "frios_11",
        categoriaId: 10,
        id: 94
    },
    {
        nombre: "Sakura",
        precio: 105,
        imagen: "frios_12",
        categoriaId: 10,
        id: 95
    },
    {
        nombre: "Loki",
        precio: 105,
        imagen: "frios_13",
        categoriaId: 10,
        id: 96
    },
    {
        nombre: "Cuba",
        precio: 100,
        imagen: "frios_14",
        categoriaId: 10,
        id: 97
    },
    {
        nombre: "Panchito",
        precio: 80,
        imagen: "frios_15",
        categoriaId: 10,
        id: 98
    },
    {
        nombre: "Coco",
        precio: 105,
        imagen: "frios_16",
        categoriaId: 10,
        id: 99
    },
    {
        nombre: "Junior",
        precio: 105,
        imagen: "frios_17",
        categoriaId: 10,
        id: 100
    },
    {
        nombre: "Platano Supreme",
        precio: 105,
        imagen: "frios_18",
        categoriaId: 10,
        id: 101
    },
    {
        nombre: "Yolotl",
        precio: 105,
        imagen: "frios_19",
        categoriaId: 10,
        id: 102
    },
    {
        nombre: "Ligth",
        precio: 110,
        imagen: "frios_20",
        categoriaId: 10,
        id: 103
    },
    {
        nombre: "Kani",
        precio: 140,
        imagen: "frios_21",
        categoriaId: 10,
        id: 104
    },
]

export {
    productos 
}