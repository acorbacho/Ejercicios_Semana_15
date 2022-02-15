class Enemigo extends Personaje {

    constructor(nombre, vida, ataque, nivel, defensa, isDefendiendo, img) {
        super(nombre, vida, ataque, nivel, defensa, isDefendiendo, img)
    }

    expDrop(herolv) {
        let experience = (this.nivel * 5) / herolv
        return experience
    }

}