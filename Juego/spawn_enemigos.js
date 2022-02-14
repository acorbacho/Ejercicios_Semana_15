function spawn_enemigos() {
    var enemigo = []
    var enemigo_spawneado
    var numero_enemigo = numero_random(0, 10)
    enemigo[0] = new Enemigo('Jabalí', 30, 1, 1, 1, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/108/4716.png')
    enemigo[1] = new Enemigo('Basilisco', 50, 5, 3, 2, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/205/67021.png')
    enemigo[2] = new Enemigo('Kodo', 100, 3, 5, 1, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/213/12245.png')
    enemigo[3] = new Enemigo('Avispa Silítida', 50, 10, 8, 4, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/92/92.png')
    enemigo[4] = new Enemigo('Dracoleón', 100, 10, 12, 6, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/119/73335.png')
    enemigo[5] = new Enemigo('Devastador', 120, 12, 15, 8, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/165/55973.png')
    enemigo[6] = new Enemigo('Hidra', 150, 15, 18, 10, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/81/6737.png')
    enemigo[7] = new Enemigo('Mole', 200, 15, 20, 12, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/116/59508.png')
    enemigo[8] = new Enemigo('Centauro Gigante', 200, 20, 21, 15, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/172/172.png')
    enemigo[9] = new Enemigo('Dragón Alaescarcha', 250, 25, 25, 18, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/178/31154.png')
    enemigo[10] = new Enemigo("Kil'Jaeden", 1000, 50, 50, 25, false,
        'https://wow.zamimg.com/modelviewer/live/webthumbs/npc/211/94675.png')
    enemigo_spawneado = enemigo[numero_enemigo]
    return enemigo_spawneado
} 