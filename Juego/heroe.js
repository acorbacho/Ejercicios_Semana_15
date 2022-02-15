class Heroe extends Personaje {

    constructor(nombre, vida, ataque, nivel, experiencia, defensa, isDefendiendo, img) {
        super(nombre, vida, ataque, nivel, defensa, isDefendiendo, img)
        this.experiencia = experiencia
    }

    get getExperiencia() {
        return this.experiencia;
    }

    set setExperiencia(_experiencia) {
        this.experiencia = _experiencia;
    }

    levelUp(exp) {
        this.experiencia += exp
        var contador = 0

        while (this.experiencia > 100) {
            this.experiencia -= 100
            contador++
        }

        for (let i = contador; i > 0; i--) {
            this.nivel++
            this.vida = Math.floor(this.vida * 1.5)
            this.ataque = Math.floor(this.ataque * 1.15)
            this.defensa = this.defensa + 1
        }

        this.experiencia = Math.floor(this.experiencia)
        $('.heroe #experiencia').html(this.experiencia)
        $('.heroe #nivel').html(this.nivel)
        $('.heroe #vida').html(this.vida + '/' + this.vida)
    }

    atackLevel() {
        let atackLevel = this.ataque * this.nivel
        return atackLevel
    }

}