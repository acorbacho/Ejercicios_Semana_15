class Personaje {

    constructor(nombre, vida, ataque, nivel, defensa, isDefendiendo, img) {
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque
        this.nivel = nivel
        this.defensa = defensa
        this.isDefendiendo = isDefendiendo
        this.img = img
    }

    get getNombre() {
        return this.nombre;
    }

    get getVida() {
        return this.vida;
    }

    get getAtaque() {
        return this.ataque;
    }

    get getNivel() {
        return this.nivel;
    }

    get getDefensa() {
        return this.defensa;
    }

    get getIsDefendiendo() {
        return this.isDefendiendo;
    }

    get getImg() {
        return this.img;
    }

    set setNombre(_nombre) {
        this.nombre = _nombre;
    }

    set setVida(_vida) {
        this.vida = _vida;
    }

    set setAtaque(_ataque) {
        this.ataque = _ataque;
    }

    set setNivel(_nivel) {
        this.nivel = _nivel;
    }

    set setDefensa(_defensa) {
        this.defensa = _defensa;
    }

    set setIsDefendiendo(_isDefendiendo) {
        this.isDefendiendo = _isDefendiendo;
    }

    set setImg(_img) {
        this.nivel = _img;
    }

    receiveDmg(dmg) {
        let dado = numero_random(0, 6)

        if (dado >= 3) {

            if (this.isDefendiendo && dmg > this.defensa) {
                if (this.vida >= (dmg - this.defensa)) {
                    this.vida = this.vida - (dmg - this.defensa)
                } else if (this.vida < (dmg - this.defensa)) {
                    this.vida = 0
                }
                return this.vida
            } else if (this.isDefendiendo && dmg <= this.defensa) {
                return this.vida
            } else {
                if (this.vida >= dmg) {
                    this.vida = this.vida - dmg
                } else if (this.vida < dmg) {
                    this.vida = 0
                }
                return this.vida
            }

        } else {
            $('.textdisplay').html('El ataque no ha sido efectivo contra ' + this.getNombre + '.')
            return this.vida
        }

    }

    stillAlive() {

        if (this.vida === 0) {
            return false
        } else {
            return true
        }

    }

}